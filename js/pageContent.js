/**
 * Page Content Configuration
 * Contains all page templates and content data
 */
const PageContent = {
    home: `
        <div id="home-content">
            <!-- Hero Section -->
            <div class="relative h-96 md:h-[600px] mb-8 rounded-xl mx-4 overflow-hidden shadow-2xl" style="animation: fadeInUp 0.8s ease-out;">
                <!-- Background with overlay -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('../assets/images/herosection.jpg');">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-yellow-500/30 animate-pulse"></div>
                </div>
                
                <!-- Hero Content -->
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                    <img src="./assets/images/tochislogo.png" alt="Tochi's Hot Chicken" class="h-32 md:h-48 mb-6 drop-shadow-lg">
                    <p class="text-2xl md:text-3xl mb-8 max-w-2xl text-white/90 drop-shadow font-bold">Nashville-Style Hot Chicken in Myrtle Beach</p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="bg-white text-[#ff6b00] px-8 py-4 rounded-xl font-bold btn-animated card-hover shadow-xl text-lg border-2 border-transparent hover:border-yellow-400 hover:shadow-2xl" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                            View Our Menu
                        </button>
                    </div>
                </div>
            </div>

            <!-- Signature Wings & Sauces -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-8 mx-4 border border-gray-200 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s both;">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0" style="animation: fadeInLeft 0.8s ease-out;">
                            <h2 class="text-4xl font-bold text-gray-900 mb-6">Nashville-Style Hot Chicken<br><span class="text-[#ff6b00]">Made Fresh to Order</span></h2>
                            <p class="text-xl text-gray-700 mb-6">At Tochi's Hot Chicken, we bring authentic Nashville-style hot chicken to Myrtle Beach. Each piece is brined, breaded, and fried to perfection, then tossed in your choice of heat level from mild to extra hot.</p>
                            <button class="bg-[#ff6b00] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e65100] transition-colors mt-4" 
                                    onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                View Our Menu
                            </button>
                        </div>
                        <div class="md:w-1/2 relative flex items-center justify-center" style="animation: fadeInRight 0.8s ease-out;">
                            <div class="bg-white rounded-xl p-1 border border-gray-200 shadow-2xl w-full">
                                <div class="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg">
                                    <img src="https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                                         alt="Delicious Hot Chicken at Tochi's Hot Chicken" 
                                         class="max-w-full max-h-full object-cover">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Featured Menu Items -->
            <div class="bg-orange-50 backdrop-blur-sm rounded-xl p-8 mx-4 mb-12 border border-orange-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.4s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">Fan Favorite Chicken</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Our most popular chicken dishes that keep our customers coming back for more</p>
                </div>
                <div class="swiper game-day-swiper max-w-6xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1624726175516-1433f389af8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Tochi's Hot Chicken" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Tochi's Hot Chicken</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Our signature sauce - the perfect blend of heat and flavor that made us famous. Not for the faint of heart!</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1563371339-5c61f8bc6026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Hot Honey Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Hot Honey</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">The perfect balance of sweet honey and spicy heat that will have you reaching for more. Irresistibly delicious!</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="relative">
                              <img src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Garlic Parm Wings" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <div class="absolute bottom-0 left-0 right-0 p-4">
                                  <h3 class="text-xl font-bold text-white">Garlic Parm</h3>
                              </div>
                          </div>
                          <div class="p-4">
                              <p class="text-gray-700 text-sm mb-4">Creamy, garlicky, and loaded with parmesan flavor. These wings are a garlic lover's dream come true.</p>
                              <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')">
                                  View Menu
                              </button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination game-day-swiper-pagination"></div>
                </div>

                <!-- View Full Menu CTA -->
                <div class="text-center mt-12">
                    <a href="#" onclick="window.PierogiApp.getNavigationManager().navigateToPage('menu')" class="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                        View All Chicken Dishes
                    </a>
                </div>
            </div>

            <!-- Wing Lovers Testimonials -->
            <div class="bg-yellow-50 backdrop-blur-sm rounded-xl p-8 mx-4 border border-yellow-100 shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.6s both;">
                <div class="text-center w-full mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 section-header">What Wing Lovers Say</h2>
                    <p class="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Don't just take our word for it - hear from our wing-obsessed customers</p>
                </div>
                <div class="swiper fans-say-swiper max-w-4xl mx-auto swiper-container-fix">
                  <div class="swiper-wrapper items-stretch">
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.6s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">MW</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Mike W.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Nashville Hot Chicken at Tochi's is INCREDIBLE! Perfectly crispy with just the right amount of heat. I've tried hot chicken all over the country, and this is hands down the best."</p>
                              <div class="text-xs text-gray-500">Wing Connoisseur</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 0.8s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">JL</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Jen L.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Honey Gold BBQ wings are addictive! Sweet, smoky, and perfectly sauced. I drive 30 minutes just to get my fix. The family pack is always our go-to for game nights!"</p>
                              <div class="text-xs text-gray-500">Regular Since 2022</div>
                          </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200 group swiper-card h-full" style="animation: slideInLeft 0.6s ease-out 1.0s both;">
                          <div class="p-6 flex flex-col h-full">
                              <div class="flex items-center mb-4">
                                  <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-600 mr-4">DR</div>
                                  <div>
                                      <h4 class="font-bold text-gray-900">Dana R.</h4>
                                      <div class="flex text-yellow-400">
                                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                      </div>
                                  </div>
                              </div>
                              <p class="text-gray-700 text-sm mb-4 flex-grow">"The Caribbean Jerk wings are a flavor explosion! The perfect balance of sweet and spicy. I love that they're always crispy and never greasy. The best wings in Myrtle Beach, hands down!"</p>
                              <div class="text-xs text-gray-500">Self-Proclaimed Wing Expert</div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <!-- Swiper navigation -->
                  <div class="swiper-pagination fans-say-swiper-pagination"></div>
                </div>
            </div>
        </div>
    `,

    // Menu page content is handled dynamically by PageManager

    order: `
        <div id="order-content" class="max-w-4xl mx-auto px-4 py-8">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-2">My Order</h1>
                <p class="text-lg text-[var(--text-medium)]">Review your items before checkout</p>
            </div>
            
            <div class="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
                <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-6 pb-2 border-b border-gray-100">Your Cart</h2>
                <div id="cart-items-list" class="divide-y divide-gray-100">
                    <!-- Cart items will be dynamically inserted here -->
                </div>
                
                <div class="mt-8 pt-6 border-t border-gray-100">
                    <div class="flex justify-between py-2">
                        <span class="text-gray-600">Subtotal</span>
                        <span id="cart-subtotal" class="font-medium">$0.00</span>
                    </div>
                    <div class="flex justify-between py-2">
                        <span class="text-gray-600">Tax (7%)</span>
                        <span id="cart-tax" class="font-medium">$0.00</span>
                    </div>
                    <div class="flex justify-between py-4 mt-2 text-lg font-bold border-t border-gray-100">
                        <span>Total</span>
                        <span id="cart-total" class="text-[var(--primary-color)]">$0.00</span>
                    </div>
                </div>
                
                <div class="mt-6 pt-6 border-t border-gray-100">
                    <button class="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        Proceed to Checkout
                    </button>
                    <div class="text-center mt-4">
                        <a href="#menu" class="text-[var(--primary-color)] hover:underline text-sm font-medium">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `,

    about: `
                <div class="mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[var(--primary-color)]">
                        <div class="flex items-center mb-6">
                            <div class="w-1 h-8 bg-[var(--primary-color)] mr-4"></div>
                            <h2 class="text-2xl font-bold text-[var(--text-dark)]">Our Story</h2>
                        </div>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg mb-4">
                            Tochi's Hot Chicken opened its doors in 2025 with a simple vision: to bring authentic Nashville-style hot chicken to Myrtle Beach. We combine great food, bold flavors, and warm Southern hospitality to create a unique dining experience. Our founders, passionate about perfecting the art of hot chicken, wanted to create a place where every bite is packed with flavor.
                        </p>
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg">
                            Located in the heart of Myrtle Beach, we've become the go-to spot for sports fans, families, and anyone looking for great food and a fun atmosphere. Our state-of-the-art screens and sound system ensure you won't miss a moment of the action, no matter where you're seated.
                        </p>
                    </div>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Mission</h2>
                        <p class="text-[var(--text-medium)] leading-relaxed">
                            To serve authentic Nashville-style hot chicken with bold flavors and warm Southern hospitality, creating a memorable dining experience for every guest.
                        </p>
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div class="w-12 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4 text-center">Our Promise</h2>
                        <p class="text-[var(--text-medium)] leading-relaxed">
                            We promise to use only the highest quality ingredients, prepare each dish with care, and serve it with the perfect balance of heat and flavor.
                        </p>
                    </div>
                </div>

                <!-- Our Commitment -->
                <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-12">
                    <div class="text-center mb-6">
                        <div class="w-16 h-1 bg-[var(--primary-color)] mb-6 mx-auto"></div>
                        <h2 class="text-2xl font-bold text-[var(--text-dark)] mb-2">Our Commitment</h2>
                        <p class="text-[var(--primary-color)] font-semibold">"Where Every Game Feels Like Home"</p>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-sm">
                        <p class="text-[var(--text-medium)] leading-relaxed text-lg text-center">
                            Whether you're here for a quick lunch, a family dinner, or to enjoy our weekly specials, we're committed to making every visit memorable. Our team works tirelessly to ensure you have the best hot chicken, the coldest drinks, and the most delicious sides in Myrtle Beach. At Tochi's Hot Chicken, you're not just a customer - you're part of our family.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    `,

    contact: `
        <div id="contact-content" class="max-w-2xl mx-auto">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-[var(--text-dark)] mb-4">Contact Us</h1>
                <p class="text-lg text-[var(--text-medium)]">We'd love to hear from you!</p>
            </div>
            
            <div class="space-y-6">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Get in Touch</h2>
                    <div class="space-y-4">
                        <div class="flex justify-center space-x-6">
                            <a href="https://www.instagram.com/tochis_hot_chicken" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center text-[#ff6b00] hover:opacity-80 transition-opacity" title="Follow us on Instagram">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/p/Tochis-Hot-Chicken-61575069452542/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center text-[#ff6b00] hover:opacity-80 transition-opacity" title="Visit us on Facebook">
                                <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-col items-center gap-x-3 pt-4">
                            <span class="text-[var(--text-medium)] text-center">214 9th Ave N,<br>Myrtle Beach, SC 29577</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-bold text-[var(--text-dark)] mb-4">Hours</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-[var(--text-medium)]">Monday - Sunday:</span>
                            <span class="text-[var(--text-dark)] font-medium">10:00 AM - 2:00 AM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

};

// Export the PageContent object for use in other modules
export { PageContent };
