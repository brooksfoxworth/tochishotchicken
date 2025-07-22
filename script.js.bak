document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const dynamicHeaderContent = document.getElementById('dynamic-header-content');
    const footerLinks = document.querySelectorAll('footer a[data-page-link]');
    const cartItemCount = document.getElementById('cart-item-count'); // Get the cart count element

    let cart = []; // Array to store cart items { id, name, price, quantity }

    // Function to update the cart count in the footer
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartItemCount.textContent = totalItems;
        if (totalItems > 0) {
            cartItemCount.classList.remove('hidden');
        } else {
            cartItemCount.classList.add('hidden');
        }
    }

    // Function to add item to cart
    function addToCart(itemId, itemName, itemPrice) {
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
        }
        updateCartCount();
        console.log('Cart:', cart); // For debugging
    }

    // Function to remove item from cart
    function removeItemFromCart(itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity--;
            } else {
                cart.splice(itemIndex, 1); // Remove item if quantity is 1
            }
            updateCartCount();
            renderCart(); // Re-render cart after removal
        }
    }

    // Helper function to render cart items
    function renderCart() {
        const cartItemsList = document.getElementById('cart-items-list');
        const cartTotalElement = document.getElementById('cart-total');
        if (!cartItemsList || !cartTotalElement) return; // Exit if elements not found

        cartItemsList.innerHTML = ''; // Clear previous items
        let total = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="text-[var(--text-medium)] text-center py-8">
                    Your cart is empty. Add some delicious items!
                </div>
            `;
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                const cartItemHtml = `
                    <div class="flex items-center justify-between gap-4 py-3 border-b border-[var(--border-color)] last:border-b-0">
                        <div class="flex flex-col flex-1">
                            <h3 class="text-[var(--text-dark)] text-base font-bold leading-tight">${item.name}</h3>
                            <p class="text-[var(--text-medium)] text-sm">Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
                        </div>
                        <span class="text-[var(--text-dark)] text-base font-bold">$${itemTotal.toFixed(2)}</span>
                        <button class="remove-from-cart-btn text-[var(--primary-color)] text-sm font-semibold" data-item-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItemsList.insertAdjacentHTML('beforeend', cartItemHtml);
            });
        }
        cartTotalElement.textContent = `$${total.toFixed(2)}`;

        // Attach event listeners to newly rendered remove buttons
        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemIdToRemove = e.target.dataset.itemId;
                removeItemFromCart(itemIdToRemove);
            });
        });
    }

    const pageContent = {
        home: `
            <div id="home-content" class="text-center py-12">
                <h2 class="text-[var(--primary-color)] text-4xl font-extrabold leading-tight tracking-[-0.02em] mb-4">Pierogi House</h2>
                <p class="text-[var(--text-dark)] text-lg font-medium leading-relaxed max-w-sm mx-auto mb-8">
                    Authentic Polish flavors, crafted with love. Your taste of tradition in Myrtle Beach!
                </p>
                <img src="assets/images/pierogi-home.jpg" alt="Assortment of pierogi on a plate" class="w-full h-64 object-cover rounded-lg shadow-lg mx-auto mb-8">
                <button class="bg-[var(--primary-color)] text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out" onclick="loadPage('menu')">
                    Order Now!
                </button>
            </div>
        `,
        menu: `
            <div class="overflow-x-auto whitespace-nowrap border-b border-[var(--border-color)] px-4">
                <nav class="flex gap-6">
                    <a class="inline-block border-b-2 border-b-[var(--primary-color)] text-[var(--text-dark)] pb-3 pt-2 text-sm font-bold" href="#entrees-section" data-menu-category="entrees">Entrees</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#bakery-section" data-menu-category="bakery">Bakery</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#jars-section" data-menu-category="jars">Jars</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#seasoning-section" data-menu-category="seasoning">Seasoning</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#frozen-pierogi-section" data-menu-category="frozen-pierogi">Frozen Pierogi</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#candy-section" data-menu-category="candy">Candy</a>
                    <a class="inline-block border-b-2 border-b-transparent text-[var(--text-medium)] pb-3 pt-2 text-sm font-medium hover:text-[var(--text-dark)] transition-colors" href="#drinks-section" data-menu-category="drinks">Drinks</a>
                </nav>
            </div>

            <div class="px-4 pt-6 pb-24">
                <h2 id="entrees-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-6">Entrees</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Sample Flight of 4</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$9.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Sample+Flight");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="sample-flight" data-item-name="Sample Flight of 4" data-item-price="9.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Heritage Platter with stuffed CABBAGE</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$24.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Heritage+Platter");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="heritage-platter-cabbage" data-item-name="Heritage Platter with stuffed CABBAGE" data-item-price="24.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Stuffed Peppers</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$15.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Stuffed+Peppers");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="stuffed-peppers" data-item-name="Stuffed Peppers" data-item-price="15.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Classic Potato & Cheese</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$19.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Potato+Cheese");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="classic-potato-cheese" data-item-name="Classic Potato & Cheese" data-item-price="19.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Spinach & Feta</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$19.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Spinach+Feta");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="spinach-feta" data-item-name="Spinach & Feta" data-item-price="19.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Boston Butt</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$19.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Boston+Butt");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="boston-butt" data-item-name="Boston Butt" data-item-price="19.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Fried Chicken</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$19.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Fried+Chicken");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="fried-chicken" data-item-name="Fried Chicken" data-item-price="19.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="bakery-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Bakery</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Small Sourdough Bread</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$2.50</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Sourdough+Bread");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="small-sourdough-bread" data-item-name="Small Sourdough Bread" data-item-price="2.50">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Bread Sourdough</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$8.00</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Bread+Sourdough");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="bread-sourdough" data-item-name="Bread Sourdough" data-item-price="8.00">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pistachio Crossaint</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$7.00</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Pistachio+Croissant");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="pistachio-crossaint" data-item-name="Pistachio Crossaint" data-item-price="7.00">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Crossaint Chocolate</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$8.00</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Chocolate+Croissant");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="crossaint-chocolate" data-item-name="Crossaint Chocolate" data-item-price="8.00">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="jars-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Jars</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pickles Polish Dill Polonaise 887ml</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$7.39</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Polish+Pickles");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="pickles-polish-dill" data-item-name="Pickles Polish Dill Polonaise 887ml" data-item-price="7.39">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Mustard Coarse Grain Kosciusko 255g Black</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$4.39</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Mustard+Grain");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="mustard-coarse-grain" data-item-name="Mustard Coarse Grain Kosciusko 255g Black" data-item-price="4.39">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pudliszki Przecier Pomidorowy 500g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$6.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Tomato+Puree");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="pudliszki-tomato-puree" data-item-name="Pudliszki Przecier Pomidorowy 500g" data-item-price="6.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Mustard Spicy Brown Kosciuszko 255g Blue</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$4.39</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Mustard+Spicy");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="mustard-spicy-brown" data-item-name="Mustard Spicy Brown Kosciuszko 255g Blue" data-item-price="4.39">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Tamara Sour Cherry Preserve 400g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$7.39</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Cherry+Preserve");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="tamara-sour-cherry-preserve" data-item-name="Tamara Sour Cherry Preserve 400g" data-item-price="7.39">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="seasoning-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Seasoning</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Seasoning For Sour Soup And Borsch 70g Krakus</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.29</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Borsch+Seasoning");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="seasoning-sour-soup-borsch" data-item-name="Seasoning For Sour Soup And Borsch 70g Krakus" data-item-price="3.29">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Knor Kremowa Zupa Z Kurek Ze Szczypiorkiem 59g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.89</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Mushroom+Soup");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="knor-mushroom-soup" data-item-name="Knor Kremowa Zupa Z Kurek Ze Szczypiorkiem 59g" data-item-price="3.89">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Ketchup Lagodny Kotlin 450g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$4.59</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Ketchup");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="ketchup-lagodny" data-item-name="Ketchup Lagodny Kotlin 450g" data-item-price="4.59">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Ketchup Pikantny Pudliszki 480g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$5.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Spicy+Ketchup");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="ketchup-pikantny" data-item-name="Ketchup Pikantny Pudliszki 480g" data-item-price="5.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="frozen-pierogi-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Frozen Pierogi</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pierogi Potato & Cheese (15pc)</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$12.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frozen+Potato+Cheese");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frozen-pierogi-potato-cheese" data-item-name="Pierogi Potato & Cheese (15pc)" data-item-price="12.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pierogi Sauerkraut & Mushrooms (15pc)</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$12.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frozen+Sauerkraut");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frozen-pierogi-sauerkraut-mushroom" data-item-name="Pierogi Sauerkraut & Mushrooms (15pc)" data-item-price="12.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pierogi Boston Butt (15pc)</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$14.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frozen+Boston+Butt");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frozen-pierogi-boston-butt" data-item-name="Pierogi Boston Butt (15pc)" data-item-price="14.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pierogi Fried Chicken (15pc)</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$14.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frozen+Fried+Chicken");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frozen-pierogi-fried-chicken" data-item-name="Pierogi Fried Chicken (15pc)" data-item-price="14.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Pierogi Spinach & Feta (15pc)</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$14.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frozen+Spinach+Feta");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frozen-pierogi-spinach-feta" data-item-name="Pierogi Spinach & Feta (15pc)" data-item-price="14.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="candy-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Candy</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Golden Cherry 190g Solidarnosc</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$10.39</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Golden+Cherry");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="golden-cherry" data-item-name="Golden Cherry 190g Solidarnosc" data-item-price="10.39">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Nussbeisser Czekolada Mleczna Z Calymi Migdalami 100g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.59</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Nussbeisser");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="nussbeisser-czekolada" data-item-name="Nussbeisser Czekolada Mleczna Z Calymi Migdalami 100g" data-item-price="3.59">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Prince Polo Kokos Olza 50g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$2.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Prince+Polo");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="prince-polo-kokos" data-item-name="Prince Polo Kokos Olza 50g" data-item-price="2.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Milka Relleno Con Crema De Cacao 100g</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Milka+Cacao");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="milka-cacao-crema" data-item-name="Milka Relleno Con Crema De Cacao 100g" data-item-price="3.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <h2 id="drinks-section" class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4 mt-8">Drinks</h2>
                <div class="space-y-4">
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Soft Drink</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$2.99</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Soft+Drink");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="soft-drink" data-item-name="Soft Drink" data-item-price="2.99">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Frugo Ultragreen 500ml</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.49</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Frugo");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="frugo-ultragreen" data-item-name="Frugo Ultragreen 500ml" data-item-price="3.49">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4 border-b border-[var(--border-color)]">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Muszynianka Niskonasycona 1.5 L Postep</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$3.69</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Muszynianka");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="muszynianka-niskonasycona" data-item-name="Muszynianka Niskonasycona 1.5 L Postep" data-item-price="3.69">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start justify-between gap-4 py-4">
                        <div class="flex flex-col gap-1 flex-1">
                            <h3 class="text-[var(--text-dark)] text-lg font-bold leading-tight">Boylan Shirley Temple 12 Oz Harvest Pure</h3>
                            <p class="text-[var(--text-dark)] text-base font-bold mt-2">$2.79</p>
                        </div>
                        <div class="relative">
                            <div class="menu-item-image bg-cover bg-center" style='background-image: url("https://via.placeholder.com/112x112/FFDDC1/FF8219?text=Shirley+Temple");'></div>
                            <button class="add-to-cart-btn absolute -bottom-2 -right-2 flex items-center justify-center size-8 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:bg-opacity-90 transition-all"
                                data-item-id="boylan-shirley-temple" data-item-name="Boylan Shirley Temple 12 Oz Harvest Pure" data-item-price="2.79">
                                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        about: `
            <div class="w-full h-80 bg-center bg-no-repeat bg-cover" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEsn4Y3KODn42CV61pTHy-Gd98a0Ek75wK5a4hSrIZcCq9-_4A5Re1ZNwwac7QB4gxMdPsGsyIpfZX8qqN0qD4bOHUaJJ76h8zdKCG78AyCaQCVD0kqnZax8c1LzqzWgN_V0dguE0Qe32Ut-5Zj8zIK7yFgXuz32s2FL0C_3aw9grOW4sW7bw2PjrF5NXjaBAn1QC2riqi3HLAR3bmrIiCICp-dWQHqxA583Z2U3T1bt06oSPuNu6WjrG3PiIWbsjE0KTgzxrjhRk7");'></div>
            <div class="p-6 space-y-8">
                <section>
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-3">Our Story</h2>
                    <p class="text-[var(--text-medium)] text-base leading-relaxed">
                        Pierogi House was founded in 2018 by a family passionate about sharing authentic Polish cuisine with the Myrtle Beach community. Our journey began with a simple desire:
                        to create a warm, inviting space where people could savor the rich flavors and traditions of Poland.
                    </p>
                </section>
                <section>
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-3">Our Culinary Philosophy</h2>
                    <p class="text-[var(--text-medium)] text-base leading-relaxed">
                        At Pierogi House, we believe in using fresh, high-quality ingredients to craft dishes that are both comforting and exciting. Our pierogi are made from scratch daily,
                        filled with a variety of traditional and innovative fillings. We also offer a selection of other Polish favorites, all prepared with care and attention to detail.
                    </p>
                </section>
                <section>
                    <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-3">Our Commitment</h2>
                    <p class="text-[var(--text-medium)] text-base leading-relaxed">
                        We are committed to providing exceptional service and creating a memorable dining experience for every guest. Whether you're a long-time fan of Polish food or trying it
                        for the first time, we welcome you to join us at Pierogi House and discover the taste of Poland.
                    </p>
                </section>
            </div>
        `,
        contact: `
            <section class="mb-12 text-center">
                <h2 class="text-[var(--text-dark)] text-3xl font-bold leading-tight tracking-tighter mb-4">Get in Touch</h2>
                <p class="text-[var(--text-dark)]/80 text-base font-normal leading-relaxed max-w-md mx-auto">
                    We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or just want to say hello, please don't hesitate to reach out.
                </p>
            </section>
            <section class="mb-12 space-y-6">
                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 shadow-sm">
                    <div class="flex-shrink-0 text-[var(--primary-color)] mt-1">
                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,34.42,22.12,74.55,80.53,121.22a8,8,0,0,0,14.94,0C201.88,214.55,216,174.42,216,120A88.1,88.1,0,0,0,128,16Zm0,206.4C81.3,178,40,143.14,40,120a88,88,0,0,1,176,0C216,143.14,174.7,178,128,222.4Z"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-[var(--secondary-color)] text-sm font-semibold">Address</h3>
                        <p class="text-[var(--text-dark)] text-base font-medium">123 Main Street, Myrtle Beach, SC 29577</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 shadow-sm">
                    <div class="flex-shrink-0 text-[var(--primary-color)] mt-1">
                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M224,144v64a8,8,0,0,1-8,8c-57.38,0-111.8-46.3-111.8-112S98.62,32,156,32a8,8,0,0,1,8,8v64a8,8,0,0,1-5.1,7.48l-27,13.5a8,8,0,0,0-5.8,7.45v3.14c0,22.2,18,40,40.17,40h3.14a8,8,0,0,0,7.45-5.8l13.5-27A8,8,0,0,1,224,144ZM164,48c-44.53,0-87.64,37.38-87.79,88.13C76,142,76,147,80,150.94l23.1,11.55a16,16,0,0,1,11.6,14.89v1.62h-1.62a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8,8,8,0,0,0,8-8,40.09,40.09,0,0,0-40.18-40h-3.13a8,8,0,0,0-7.45,5.8L66,134.33C69.05,86.67,109.1,48,156,48Z" transform="rotate(90 128 128)"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-[var(--secondary-color)] text-sm font-semibold">Phone</h3>
                        <p class="text-[var(--text-dark)] text-base font-medium">(843) 555-1212</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 shadow-sm">
                    <div class="flex-shrink-0 text-[var(--primary-color)] mt-1">
                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M224,48H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48Zm-8,136H40V64H216ZM98.34,128,40,177.34V78.66ZM104,136h48l58.34,49.34H45.66Zm8.22-8L157.66,82.66,216,128v49.34Z"></path></svg>
                    </div>
                    <div>
                        <h3 class="text-[var(--secondary-color)] text-sm font-semibold">Email</h3>
                        <a href="mailto:Troy.dirtymyrtlewingcompany@gmail.com" class="text-[var(--text-dark)] hover:text-yellow-400 transition-colors text-base font-medium">Troy.dirtymyrtlewingcompany@gmail.com</a>
                    </div>
                </div>
            </section>
            <section>
                <h2 class="text-[var(--text-dark)] text-3xl font-bold leading-tight tracking-tighter mb-8 text-center">Send Us a Message</h2>
                <form class="space-y-6">
                    <div>
                        <label class="sr-only" for="name">Your Name</label>
                        <input class="form-input w-full rounded-full border-0 bg-[var(--form-background-color)] h-14 px-6 text-[var(--text-dark)] placeholder:text-[var(--text-medium)] focus:ring-2 focus:ring-[var(--primary-color)] transition duration-300 ease-in-out" id="name" name="name" placeholder="Your Name" type="text"/>
                    </div>
                    <div>
                        <label class="sr-only" for="email">Your Email</label>
                        <input class="form-input w-full rounded-full border-0 bg-[var(--form-background-color)] h-14 px-6 text-[var(--text-dark)] placeholder:text-[var(--text-medium)] focus:ring-2 focus:ring-[var(--primary-color)] transition duration-300 ease-in-out" id="email" name="email" placeholder="Your Email" type="email"/>
                    </div>
                    <div>
                        <label class="sr-only" for="message">Your Message</label>
                        <textarea class="form-textarea w-full rounded-3xl border-0 bg-[var(--form-background-color)] p-6 text-[var(--text-dark)] placeholder:text-[var(--text-medium)] focus:ring-2 focus:ring-[var(--primary-color)] transition duration-300 ease-in-out" id="message" name="message" placeholder="Your Message" rows="6"></textarea>
                    </div>
                    <div class="flex justify-end pt-2">
                        <button class="w-full sm:w-auto flex items-center justify-center rounded-full h-14 px-8 bg-[var(--primary-color)] text-white text-base font-bold tracking-wide shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        `,
        order: `
            <div class="flex flex-col h-full py-6 px-4">
                <h2 class="text-[var(--text-dark)] text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">My Order</h2>
                <div id="cart-items-list" class="flex-grow space-y-4 overflow-y-auto">
                    </div>
                <div id="cart-summary" class="mt-6 border-t border-[var(--border-color)] pt-4">
                    <div class="flex justify-between items-center text-[var(--text-dark)] text-lg font-bold mb-2">
                        <span>Total:</span>
                        <span id="cart-total">$0.00</span>
                    </div>
                    <button class="w-full flex items-center justify-center rounded-full h-14 px-8 bg-[var(--primary-color)] text-white text-base font-bold tracking-wide shadow-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out">
                        Checkout
                    </button>
                </div>
            </div>
        `
    };

    const pageHeaders = {
        home: `
            <div class="flex items-center p-4 justify-center">
                <h1 class="text-[var(--text-dark)] text-xl font-bold leading-tight tracking-[-0.015em]">Welcome</h1>
            </div>
        `,
        menu: `
            <div class="flex items-center p-4 pb-2 justify-between">
                <button class="text-[var(--text-dark)] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-[var(--text-light)] transition-colors" onclick="history.back()">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                </button>
                <h1 class="text-[var(--text-dark)] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Order Online</h1>
                <div class="w-10"></div>
            </div>
        `,
        about: `
            <div class="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                <button class="text-[var(--text-dark)]" onclick="history.back()">
                    <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                    </svg>
                </button>
                <h1 class="text-[var(--text-dark)] text-xl font-bold leading-tight tracking-[-0.015em]">About Pierogi House</h1>
                <div class="w-7"></div>
            </div>
        `,
        contact: `
            <div class="flex items-center p-4">
                <button class="text-[var(--text-primary-color)]" onclick="history.back()">
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                </button>
                <h1 class="text-[var(--text-primary-color)] text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-6">Contact Us</h1>
            </div>
        `,
        order: `
            <div class="flex items-center p-4">
                <button class="text-[var(--text-dark)] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-[var(--text-light)] transition-colors" onclick="history.back()">
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                    </svg>
                </button>
                <h1 class="text-[var(--text-dark)] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">My Order</h1>
                <div class="w-10"></div>
            </div>
        `
    };

    function loadPage(page) {
        mainContent.innerHTML = pageContent[page];
        dynamicHeaderContent.innerHTML = pageHeaders[page];

        // Special handling for the 'order' page to render cart items
        if (page === 'order') {
            renderCart();
        }

        // Update active state in footer
        footerLinks.forEach(link => {
            const linkPage = link.dataset.pageLink;
            if (linkPage === page) {
                link.classList.add('text-[var(--primary-color)]', 'font-semibold');
                link.classList.remove('text-[var(--text-medium)]');
                
                const divInLinkH7 = link.querySelector('div.flex.h-7.items-center.justify-center');
                const divInLinkH8W8 = link.querySelector('div.flex.h-8.w-8.items-center.justify-center');

                if (linkPage === 'order') {
                    if (divInLinkH7) divInLinkH7.classList.add('bg-[var(--text-light)]', 'rounded-lg', 'py-1');
                } else if (linkPage === 'contact') {
                    const relativeDiv = link.querySelector('div.relative');
                    if (relativeDiv && !relativeDiv.querySelector('.absolute.-inset-2')) {
                        const span = document.createElement('div');
                        span.className = 'absolute -inset-2 rounded-full bg-[var(--primary-color)]/20';
                        relativeDiv.prepend(span);
                    }
                    if (divInLinkH8W8) {
                        divInLinkH8W8.classList.add('text-[var(--primary-color)]');
                    }
                }
            } else {
                link.classList.remove('text-[var(--primary-color)]', 'font-semibold');
                link.classList.add('text-[var(--text-medium)]');
                
                const divInLinkH7 = link.querySelector('div.flex.h-7.items-center.justify-center');
                const divInLinkH8W8 = link.querySelector('div.flex.h-8.w-8.items-center.justify-center');

                if (linkPage === 'order') {
                    if (divInLinkH7) divInLinkH7.classList.remove('bg-[var(--text-light)]', 'rounded-lg', 'py-1');
                } else if (linkPage === 'contact') {
                    const activeBg = link.querySelector('.absolute.-inset-2');
                    if (activeBg) activeBg.remove();
                    if (divInLinkH8W8) {
                        divInLinkH8W8.classList.remove('text-[var(--primary-color)]');
                    }
                }
            }
        });

        // Specific logic for Menu sub-navigation (scroll and active states)
        if (page === 'menu') {
            const currentMenuSubNavLinks = mainContent.querySelectorAll('nav a[href^="#"]');
            currentMenuSubNavLinks.forEach(link => {
                // Set 'Entrees' as active by default when menu page loads
                if (link.textContent.trim() === 'Entrees') { 
                    link.classList.add('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
                    link.classList.remove('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
                } else {
                    link.classList.remove('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
                    link.classList.add('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
                }

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1); 
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });

                        currentMenuSubNavLinks.forEach(subLink => {
                            subLink.classList.remove('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
                            subLink.classList.add('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
                        });
                        link.classList.add('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
                        link.classList.remove('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
                    }
                });
            });

            // Attach add-to-cart listeners after menu content is loaded
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = e.currentTarget.dataset.itemId;
                    const itemName = e.currentTarget.dataset.itemName;
                    const itemPrice = parseFloat(e.currentTarget.dataset.itemPrice);
                    addToCart(itemId, itemName, itemPrice);
                });
            });
        }
    }

    // Event listeners for footer navigation
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.pageLink; // Use currentTarget
            loadPage(page);
        });
    });

    // Initial page load: Set to 'home'
    loadPage('home');
    updateCartCount(); // Initialize cart count on load
});