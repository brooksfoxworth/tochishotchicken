/**
 * Page Management Module
 * Handles page loading, content rendering, and page-specific functionality
 */
class PageManager {
    constructor(cartManager) {
        this.cartManager = cartManager;
        this.initializePageElements();
    }
    
    /**
     * Initialize page elements with null checks
     */
    initializePageElements() {
        this.mainContent = document.getElementById('main-content');
        this.dynamicHeaderContent = document.getElementById('dynamic-header-content');
        
        // Create main content element if it doesn't exist
        if (!this.mainContent) {
            this.mainContent = document.createElement('main');
            this.mainContent.id = 'main-content';
            this.mainContent.className = 'px-4 pt-6 pb-24 flex-grow';
            const appContainer = document.querySelector('body > div');
            if (appContainer) {
                // Insert before the footer if it exists, otherwise append to the end
                const footer = document.querySelector('footer');
                if (footer) {
                    appContainer.insertBefore(this.mainContent, footer);
                } else {
                    appContainer.appendChild(this.mainContent);
                }
            } else {
                document.body.appendChild(this.mainContent);
            }
        }
        
        // Create dynamic header content if it doesn't exist
        if (!this.dynamicHeaderContent) {
            this.dynamicHeaderContent = document.createElement('div');
            this.dynamicHeaderContent.id = 'dynamic-header-content';
            const header = document.querySelector('header');
            if (header) {
                header.appendChild(this.dynamicHeaderContent);
            } else {
                document.body.insertBefore(this.dynamicHeaderContent, document.body.firstChild);
            }
        }
    }

    /**
     * Load and render a specific page
     */
    async loadPage(page) {
        // Ensure elements exist
        this.initializePageElements();
        
        // Clear previous content safely
        if (this.mainContent) this.mainContent.innerHTML = '';
        if (this.dynamicHeaderContent) this.dynamicHeaderContent.innerHTML = '';

        // Render header with logos
        this.renderHeader(page);

        // Get page content
        const content = this.getPageContent(page);
        
        // Render content
        this.mainContent.innerHTML = content;

        // Setup page-specific functionality
        this.setupPageFunctionality(page);
        
        // Initialize Swiper after content is loaded
        setTimeout(() => {
            this.initializeSwipers();
            
            // Force scroll to top after all content is rendered
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Additional scroll reset for mobile browsers
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }, 100);
    }

    /**
     * Render the header (empty as we don't want the logo/phone number bar)
     */
    renderHeader() {
        // Clear any existing header content
        this.dynamicHeaderContent.innerHTML = '';
    }

    /**
     * Get content for a specific page
     */
    getPageContent(page) {
        // Check if we have content for this page in PageContent
        if (window.PageContent && window.PageContent[page]) {
            return window.PageContent[page];
        }
        
        // Special handling for menu page
        if (page === 'menu') {
            return this.renderMenuPage();
        }
        
        // Default content if page not found
        return `
            <div class="text-center py-16">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
                <p class="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                <button onclick="window.PierogiApp.getNavigationManager().navigateToPage('home')" 
                        class="bg-[#ff6b00] text-white px-6 py-2 rounded-lg hover:bg-[#e65100] transition-colors">
                    Return Home
                </button>
            </div>
        `;
        
        return PageContent[page] || PageContent.home;
    }

    /**
     * Render the menu page with dynamic content
     */
    renderMenuPage() {
        const menuSections = [
            { id: 'combos', name: 'Combos' },
            { id: 'sides', name: 'Sides' },
            { id: 'drinks', name: 'Drinks' }
        ];
        
        let menuHTML = `
            <div id="menu-content" class="max-w-4xl mx-auto px-4 py-8">
                <h1 class="text-3xl font-bold text-center text-[var(--primary-color)] mb-8">Our Menu</h1>
        `;

        // Add each menu section
        menuSections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.name;
            const items = MenuData[sectionId] || [];
            
            if (items.length > 0) {
                menuHTML += `
                    <div id="${sectionId}" class="mb-12">
                        <h2 class="text-2xl font-bold text-[var(--primary-color)] border-b border-gray-200 pb-2 mb-6">${sectionTitle}</h2>
                        <div class="grid md:grid-cols-2 gap-6">
                            ${items.map(item => this.createMenuItemHTML(item, sectionId === 'combos')).join('')}
                        </div>
                    </div>
                `;
            }
        });

        menuHTML += '</div>';
        return menuHTML;
    }
    
    /**
     * Initialize Swiper instances after content is loaded
     */
    initializeSwipers() {
        console.log('Initializing Swipers...');
        console.log('Swiper available:', typeof Swiper !== 'undefined');
        
        if (typeof Swiper !== 'undefined') {
            // Game Day Favorites Swiper
            const gameDayElement = document.querySelector('.game-day-swiper');
            console.log('Game Day Swiper element found:', !!gameDayElement);
            
            if (gameDayElement) {
                const slides = gameDayElement.querySelectorAll('.swiper-slide');
                console.log('Game Day slides found:', slides.length);
                
                try {
                    const gameSwiper = new Swiper('.game-day-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.game-day-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Game Day Swiper initialized successfully!');
                            },
                            slideChange: function() {
                                console.log('Game Day slide changed to:', this.activeIndex);
                            }
                        }
                    });
                    console.log('Game Day Swiper instance:', gameSwiper);
                } catch (error) {
                    console.error('Error initializing Game Day Swiper:', error);
                }
            }

            // Fans Say Swiper
            const fansElement = document.querySelector('.fans-say-swiper');
            console.log('Fans Say Swiper element found:', !!fansElement);
            
            if (fansElement) {
                const slides = fansElement.querySelectorAll('.swiper-slide');
                console.log('Fans Say slides found:', slides.length);
                
                try {
                    const fansSwiper = new Swiper('.fans-say-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        allowTouchMove: true, // Enable touch/swipe
                        grabCursor: true, // Show grab cursor
                        pagination: {
                            el: '.fans-say-swiper-pagination',
                            clickable: true,
                            dynamicBullets: true
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        },
                        on: {
                            init: function() {
                                console.log('Fans Say Swiper initialized successfully!');
                            }
                        }
                    });
                    console.log('Fans Say Swiper instance:', fansSwiper);
                } catch (error) {
                    console.error('Error initializing Fans Say Swiper:', error);
                }
            }
        } else {
            console.error('Swiper library not loaded!');
        }
    }

    /**
     * Create HTML for a menu item
     */
    createMenuItemHTML(item, isCombo = false) {
        // Format description with line breaks
        const formattedDescription = item.description ? 
            item.description.replace(/\n/g, '<br>') : '';
        
        // Add-ons section
        let addonsHTML = '';
        if (item.addons && item.addons.length > 0) {
            addonsHTML = `
                <div class="mt-3">
                    <p class="text-sm font-medium text-gray-700 mb-1">Add-ons:</p>
                    <div class="space-y-1">
                        ${item.addons.map(addon => `
                            <label class="flex items-center">
                                <input type="checkbox" 
                                       name="addon-${item.id}" 
                                       value="${addon.name}" 
                                       data-price="${addon.price}"
                                       class="rounded border-gray-300 text-[var(--primary-color)] focus:ring-[var(--primary-color)]">
                                <span class="ml-2 text-sm text-gray-700">${addon.name} ($${addon.price.toFixed(2)})</span>
                            </label>
                        `).join('')}
                    </div>
                </div>`;
        }

        // Format price
        const price = typeof item.price === 'number' ? item.price.toFixed(2) : item.price;
        
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 menu-item" data-id="${item.id}">
                <div class="p-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900">${item.name}</h3>
                            ${item.popular ? '<span class="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full ml-2">Popular</span>' : ''}
                        </div>
                        <span class="text-lg font-bold text-[var(--primary-color)]">$${price}</span>
                    </div>
                    
                    <p class="mt-2 text-gray-600 text-sm">${formattedDescription}</p>
                    
                    ${addonsHTML}
                    
                    <div class="mt-4 flex items-center justify-between">
                        ${isCombo ? `
                            <div class="flex-1 mr-2">
                                <select name="heat-level" class="w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50 text-sm">
                                    ${MenuData.heatLevels.map(level => `
                                        <option value="${level.id}" class="heat-level-option">
                                            ${level.name} - ${level.description}
                                        </option>
                                    `).join('')}
                                </select>
                            </div>
                        ` : ''}
                        
                        <button class="bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
                                data-item-id="${item.id}"
                                data-item-name="${item.name}"
                                data-item-price="${price}">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    /**
     * Show a notification message
     * @param {string} message - The message to display
     * @param {string} type - The type of notification (success, error, info)
     */
    showNotification(message, type = 'info') {
        // Create notification element if it doesn't exist
        let notification = document.getElementById('notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'notification';
            notification.className = 'fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white max-w-sm z-50 transition-all duration-300 transform translate-y-4 opacity-0';
            document.body.appendChild(notification);
        }

        // Set notification content and style based on type
        notification.textContent = message;
        notification.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white max-w-sm z-50 transition-all duration-300 transform ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        }`;

        // Show notification
        setTimeout(() => {
            notification.classList.remove('translate-y-4', 'opacity-0');
            notification.classList.add('translate-y-0', 'opacity-100');
        }, 10);

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('translate-y-0', 'opacity-100');
            notification.classList.add('translate-y-4', 'opacity-0');
        }, 3000);
    }

    /**
     * Setup page-specific functionality after content is loaded
     */
    setupPageFunctionality(page) {
        switch (page) {
            case 'menu':
                this.setupMenuPageFunctionality();
                break;
            case 'order':
                this.setupOrderPageFunctionality();
                break;
            default:
                // No specific setup needed for other pages
                break;
        }
    }

    /**
     * Setup menu page functionality
     */
    setupMenuPageFunctionality() {
        // Initialize event listeners for menu items
        this.initMenuEventListeners();

        // Initialize any additional menu functionality
        setTimeout(() => {
            // Additional initialization if needed
        }, 100);
    }

    /**
     * Initialize event listeners for menu items
     */
    initMenuEventListeners() {
        // Remove any existing event listeners to prevent duplicates
        document.body.removeEventListener('click', this.handleAddToCartClick);
        document.removeEventListener('change', this.handleHeatLevelChange);
        
        // Bind the methods to the current instance
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
        this.handleHeatLevelChange = this.handleHeatLevelChange.bind(this);
        
        // Add new event listeners
        document.body.addEventListener('click', this.handleAddToCartClick, true);
        document.addEventListener('change', this.handleHeatLevelChange);
    }

    /**
     * Handle add to cart button clicks
     */
    handleAddToCartClick(e) {
        console.log('Add to cart clicked', e.target);
        
        const addToCartBtn = e.target.closest('button[data-item-id]');
        console.log('Add to cart button:', addToCartBtn);
        
        if (!addToCartBtn) {
            console.log('Not an add to cart button');
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        const menuItem = addToCartBtn.closest('.menu-item');
        console.log('Menu item container:', menuItem);
        
        if (!menuItem) {
            console.log('No menu item container found');
            return;
        }

        const itemId = addToCartBtn.getAttribute('data-item-id');
        const itemName = addToCartBtn.getAttribute('data-item-name');
        const itemPrice = parseFloat(addToCartBtn.getAttribute('data-item-price'));
        
        console.log('Item details:', { itemId, itemName, itemPrice });
        
        if (!itemId || !itemName || isNaN(itemPrice)) return;

        // Get selected heat level for combo items
        let heatLevel = null;
        const heatSelect = menuItem.querySelector('select[name="heat-level"]');
        if (heatSelect) {
            heatLevel = heatSelect.value;
            if (!heatLevel) {
                this.showNotification('Please select a heat level', 'error');
                return;
            }
            
            // Get the selected option text for display
            const selectedOption = heatSelect.options[heatSelect.selectedIndex];
            const heatLevelText = selectedOption?.textContent.split(' - ')[0] || heatLevel;
            heatLevel = heatLevelText.trim();
        }
        
        // Get selected add-ons
        const addons = [];
        const addonCheckboxes = menuItem.querySelectorAll('input[type="checkbox"]:checked');
        addonCheckboxes.forEach(checkbox => {
            const name = (checkbox.getAttribute('name') || '').trim() || 'Add-on';
            const price = parseFloat(checkbox.value) || 0;
            addons.push({ 
                name: checkbox.nextElementSibling?.textContent.trim() || name,
                price: price
            });
        });
        
        // Add to cart with options
        this.cartManager.addItem(itemId, itemName, itemPrice, { 
            heatLevel: heatLevel,
            addons: addons
        });
        
        // Show success message
        this.showNotification(`${itemName} added to cart!`, 'success');
        
        // Update cart count and render cart if on cart page
        this.cartManager.updateCartCount();
        if (window.location.hash === '#order') {
            this.cartManager.renderCart();
        }
    }

    /**
     * Handle heat level selection changes
     */
    handleHeatLevelChange(e) {
        if (e.target.name === 'heat-level') {
            const menuItem = e.target.closest('.menu-item');
            if (!menuItem) return;
            
            // Update visual indicators for heat level selection
            menuItem.querySelectorAll('.heat-level-option').forEach(opt => {
                opt.classList.remove('border-[var(--primary-color)]', 'ring-2', 'ring-[var(--primary-color)]');
            });
            
            const selectedOption = e.target.options[e.target.selectedIndex];
            if (selectedOption) {
                selectedOption.classList.add('border-[var(--primary-color)]', 'ring-2', 'ring-[var(--primary-color)]');
            }
        }
    }

    /**
     * Setup order page functionality
     */
    setupOrderPageFunctionality() {
        // Render cart items when order page loads
        setTimeout(() => {
            this.cartManager.renderCart();
        }, 100);
    }
}

// Export the PageManager class for use in other modules
export { PageManager };
