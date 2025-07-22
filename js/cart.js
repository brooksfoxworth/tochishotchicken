/**
 * Cart Management Module
 * Handles all cart-related functionality including adding/removing items and updating UI
 */
class CartManager {
    constructor() {
        this.cart = [];
        this.cartItemCounts = [];
        this.initializeCartElements();
        this.loadCart(); // Load saved cart from localStorage
    }
    
    /**
     * Initialize cart elements from the DOM
     */
    initializeCartElements() {
        // Get all cart count elements (could be in multiple places in the UI)
        this.cartItemCounts = [];
        
        // Add header cart badge by ID if it exists
        const headerCartBadge = document.getElementById('cart-item-count-header');
        if (headerCartBadge) {
            headerCartBadge.classList.add('cart-count');
            this.cartItemCounts.push(headerCartBadge);
        }
        
        // Add any other elements with .cart-count class
        const cartCountElements = document.querySelectorAll('.cart-count:not(#cart-item-count-header)');
        this.cartItemCounts.push(...Array.from(cartCountElements));
        
        // If no cart count elements found, create a default one
        if (this.cartItemCounts.length === 0) {
            const defaultCartCount = document.createElement('span');
            defaultCartCount.id = 'cart-item-count';
            defaultCartCount.className = 'cart-count hidden';
            document.body.appendChild(defaultCartCount);
            this.cartItemCounts = [defaultCartCount];
        }
    }

    /**
     * Add item to cart with options
     */
    addItem(itemId, itemName, itemPrice, options = {}) {
        const { heatLevel = null, addons = [] } = options;
        
        // Create a unique ID that includes the item ID and selected options
        const cartItemId = this.generateCartItemId(itemId, { heatLevel, addons });
        
        const existingItem = this.cart.find(item => item.id === cartItemId);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ 
                id: cartItemId,
                baseId: itemId,
                name: itemName, 
                basePrice: itemPrice,
                heatLevel,
                addons: addons.map(a => ({
                    name: a.name,
                    price: a.price
                })),
                quantity: 1,
                get totalPrice() {
                    const addonsTotal = this.addons.reduce((sum, addon) => sum + addon.price, 0);
                    return (this.basePrice + addonsTotal) * this.quantity;
                }
            });
        }
        
        this.updateCartCount();
        this.saveCart();
        console.log('Cart updated:', this.cart);
    }
    
    /**
     * Generate a unique ID for cart items based on their options
     */
    generateCartItemId(baseId, options) {
        const { heatLevel = null, addons = [] } = options;
        
        // Create a unique ID that includes the item ID, heat level, and addons
        const parts = [baseId];
        
        // Include heat level in the ID if specified
        if (heatLevel) {
            parts.push(`heat_${String(heatLevel).toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}`);
        }
        
        // Include addons in the ID if any
        if (addons && addons.length > 0) {
            const sortedAddons = [...addons].sort((a, b) => 
                (a.name || '').localeCompare(b.name || '')
            );
            
            const addonParts = sortedAddons.map(a => 
                `addon_${(a.id || a.name || '').toString().toLowerCase().replace(/\s+/g, '_')}`
            );
            
            if (addonParts.length > 0) {
                parts.push(addonParts.join('_'));
            }
        }
        
        // Combine all parts with a unique separator
        return parts.join('::');
    }

    /**
     * Remove item from cart or decrease quantity
     */
    removeItem(itemId) {
        const itemIndex = this.cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            if (this.cart[itemIndex].quantity > 1) {
                this.cart[itemIndex].quantity--;
            } else {
                this.cart.splice(itemIndex, 1);
            }
            this.updateCartCount();
            this.renderCart();
        }
    }

    /**
     * Update the cart count badge in the footer
     */
    /**
     * Save cart to localStorage
     */
    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart to localStorage:', error);
        }
    }
    
    /**
     * Load cart from localStorage
     */
    loadCart() {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                const parsedCart = JSON.parse(savedCart);
                
                // Migrate old cart items to new format if needed
                this.cart = parsedCart.map(item => {
                    // Ensure item has all required properties
                    const migratedItem = {
                        id: item.id || this.generateCartItemId(item.baseId || item.id, {
                            heatLevel: item.heatLevel,
                            addons: item.addons || []
                        }),
                        baseId: item.baseId || item.id,
                        name: item.name,
                        basePrice: typeof item.basePrice !== 'undefined' ? item.basePrice : (item.price || 0),
                        heatLevel: item.heatLevel || null,
                        addons: Array.isArray(item.addons) 
                            ? item.addons.map(a => ({
                                name: a.name || 'Add-on',
                                price: parseFloat(a.price) || 0
                            }))
                            : [],
                        quantity: parseInt(item.quantity) || 1
                    };
                    
                    // Add totalPrice getter
                    Object.defineProperty(migratedItem, 'totalPrice', {
                        get: function() {
                            const addonsTotal = (this.addons || []).reduce((sum, addon) => sum + (addon.price || 0), 0);
                            return (this.basePrice + addonsTotal) * this.quantity;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    
                    return migratedItem;
                });
                
                this.updateCartCount();
                this.saveCart(); // Save migrated cart
            }
        } catch (error) {
            console.error('Error loading cart from localStorage:', error);
            this.cart = [];
            this.saveCart(); // Save empty cart to fix any corruption
        }
    }

    /**
     * Update the cart count badge in the footer
     */
    updateCartCount() {
        // Count unique items instead of total quantity
        const uniqueItemCount = this.cart.length;
        
        // Update all cart count elements
        this.cartItemCounts.forEach(element => {
            if (element) {
                element.textContent = uniqueItemCount;
                if (uniqueItemCount > 0) {
                    element.classList.remove('hidden');
                    // Add animation class
                    element.classList.add('animate');
                    // Remove animation class after animation completes
                    setTimeout(() => element.classList.remove('animate'), 500);
                } else {
                    element.classList.add('hidden');
                }
            }
        });
        
        // Call the global update function if it exists (for other components)
        if (typeof window.updateCartCount === 'function') {
            window.updateCartCount(uniqueItemCount);
        }
        
        return uniqueItemCount;
    }

    /**
     * Render cart items in the cart page with enhanced details
     */
    renderCart() {
        const cartItemsList = document.getElementById('cart-items-list');
        const cartSubtotalElement = document.getElementById('cart-subtotal');
        const cartTaxElement = document.getElementById('cart-tax');
        const cartTotalElement = document.getElementById('cart-total');
        
        if (!cartItemsList || !cartSubtotalElement || !cartTaxElement || !cartTotalElement) return;
        
        // Clear existing items
        cartItemsList.innerHTML = '';
        
        if (this.cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="py-12 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m-10 0h10m0 0a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    <h3 class="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                    <p class="mt-1 text-gray-500">Start adding some delicious items to your order!</p>
                    <div class="mt-6">
                        <a href="#menu" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--primary-color)] hover:bg-[var(--primary-dark)]">
                            View Menu
                        </a>
                    </div>
                </div>
            `;
            cartSubtotalElement.textContent = '$0.00';
            cartTaxElement.textContent = '$0.00';
            cartTotalElement.textContent = '$0.00';
            return;
        }
        
        // Calculate totals
        const subtotal = this.cart.reduce((sum, item) => sum + (item.basePrice * item.quantity), 0);
        const tax = subtotal * 0.07; // 7% tax
        const total = subtotal + tax;
        
        // Update total displays
        cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        cartTaxElement.textContent = `$${tax.toFixed(2)}`;
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        
        // Render each item in the cart
        this.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'py-4 border-b border-gray-200';
            itemElement.dataset.itemId = item.id;
            
            // Calculate item total including addons
            const addonsTotal = (item.addons || []).reduce((sum, addon) => sum + (addon.price || 0), 0);
            const itemTotal = (item.basePrice + addonsTotal) * item.quantity;
            
            // Show heat level as a modifier under the item name if it exists
            const heatLevelDisplay = item.heatLevel ? 
                `<div class="text-sm text-gray-600 mt-1">Spice Level: <span class="font-medium">${this.formatHeatLevel(item.heatLevel)}</span></div>` : '';
                
            // Format addons list
            const addonsList = (item.addons && item.addons.length > 0) ? 
                `<div class="mt-1">
                    <div class="text-sm text-gray-600">Add-ons:</div>
                    <ul class="text-sm text-gray-600 ml-2">
                        ${item.addons.map(addon => 
                            `<li>• ${addon.name} (+$${parseFloat(addon.price).toFixed(2)})</li>`
                        ).join('')}
                    </ul>
                </div>` : '';

            itemElement.innerHTML = `
                <div class="flex items-start">
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-start">
                            <h4 class="text-base font-medium text-gray-900 break-words pr-2">${item.name}</h4>
                            <div class="ml-4 text-right flex-shrink-0">
                                <div class="text-base font-medium text-gray-900">$${itemTotal.toFixed(2)}</div>
                                <div class="text-sm text-gray-500">$${(item.basePrice + addonsTotal).toFixed(2)} × ${item.quantity}</div>
                            </div>
                        </div>
                        ${heatLevelDisplay}
                        ${addonsList}
                    </div>
                    <div class="ml-4 flex-shrink-0 pt-1">
                        <div class="flex items-center border rounded-md bg-white">
                            <button type="button" class="decrease-quantity px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors" 
                                    data-item-id="${item.id}" 
                                    aria-label="Decrease quantity">
                                <span class="text-lg">−</span>
                            </button>
                            <span class="w-8 text-center text-gray-800">${item.quantity}</span>
                            <button type="button" class="increase-quantity px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors" 
                                    data-item-id="${item.id}"
                                    aria-label="Increase quantity">
                                <span class="text-lg">+</span>
                            </button>
                        </div>
                        <button type="button" class="remove-item mt-1 text-sm text-red-600 hover:text-red-800 w-full text-right transition-colors" 
                                data-item-id="${item.id}">
                            Remove
                        </button>
                    </div>
                </div>
            `;
            cartItemsList.appendChild(itemElement);
        });
        
        // Add event listeners
        this.setupCartEventListeners();
    }

    /**
     * Format heat level for display
     * Handles both heat level IDs (e.g., 'mild') and display names (e.g., 'Mild')
     */
    formatHeatLevel(heatLevel) {
        if (!heatLevel) return '';
        
        // Normalize the input heat level to lowercase for case-insensitive comparison
        const normalizedHeatLevel = heatLevel.toString().toLowerCase().trim();
        
        // First try to find by ID (case insensitive)
        const levelById = MenuData.heatLevels.find(l => 
            l.id.toLowerCase() === normalizedHeatLevel
        );
        
        if (levelById) {
            return levelById.name;
        }
        
        // If not found by ID, try to find by name (case insensitive)
        const levelByName = MenuData.heatLevels.find(l => 
            l.name.toLowerCase() === normalizedHeatLevel
        );
        
        // If still not found, return the original value with dashes replaced by spaces
        return levelByName ? levelByName.name : heatLevel.replace(/-/g, ' ');
    }
    
    /**
     * Set up event listeners for cart interactions
     */
    setupCartEventListeners() {
        // Remove item
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.getAttribute('data-item-id');
                this.removeItem(itemId);
                this.saveCart();
            });
        });
        
        // Decrease quantity
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.getAttribute('data-item-id');
                const item = this.cart.find(item => item.id === itemId);
                if (item && item.quantity > 1) {
                    item.quantity--;
                    this.updateCartCount();
                    this.renderCart();
                    this.saveCart();
                }
            });
        });
        
        // Increase quantity
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.getAttribute('data-item-id');
                const item = this.cart.find(item => item.id === itemId);
                if (item) {
                    item.quantity++;
                    this.updateCartCount();
                    this.renderCart();
                    this.saveCart();
                }
            });
        });
    }

    /**
     * Get cart items for external use
     */
    getCartItems() {
        return [...this.cart];
    }

    /**
     * Get total cart value
     */
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Clear all items from cart
     */
    clearCart() {
        this.cart = [];
        this.updateCartCount();
        this.renderCart();
    }
}

// Export the CartManager class for use in other modules
export { CartManager };
