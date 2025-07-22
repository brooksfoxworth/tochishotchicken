// Import required modules
import { PageManager } from './pageManager.js';
import { CartManager } from './cart.js';
import { NavigationManager } from './navigation.js';
import { MenuData } from './menuData.js';
import { PageContent } from './pageContent.js';

/**
 * Main Application Module
 * Initializes and coordinates all application modules
 */
class PierogiApp {
    constructor() {
        this.cartManager = null;
        this.pageManager = null;
        this.navigationManager = null;
    }

    /**
     * Initialize the application
     */
    init() {
        try {
            // Initialize managers in correct order with error handling
            this.cartManager = new CartManager();
            this.pageManager = new PageManager(this.cartManager);
            this.navigationManager = new NavigationManager(this.pageManager);
            
            // Make MenuData and PageContent available globally for legacy code
            window.MenuData = MenuData;
            window.PageContent = PageContent;

            // Load initial page
            const initialPage = window.location.hash ? 
                window.location.hash.substring(1) || 'home' : 'home';
                
            this.navigationManager.navigateToPage(initialPage);
            
            // Initialize cart count display after a short delay to ensure DOM is ready
            setTimeout(() => {
                try {
                    this.cartManager.updateCartCount();
                } catch (cartError) {
                    console.error('Error initializing cart:', cartError);
                }
            }, 100);

            console.log('Tochi\'s Hot Chicken App initialized successfully!');
            
            // Add error event listener for unhandled errors
            window.addEventListener('error', (event) => {
                console.error('Unhandled error:', event.error);
                // Optionally show a user-friendly error message
                if (this.mainContent) {
                    this.mainContent.innerHTML = `
                        <div class="p-4 bg-red-100 text-red-700 rounded-lg max-w-2xl mx-auto my-8">
                            <h2 class="text-xl font-bold mb-2">Something went wrong</h2>
                            <p>We're having trouble loading the page. Please try refreshing or come back later.</p>
                            <button onclick="window.location.reload()" class="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                                Reload Page
                            </button>
                        </div>
                    `;
                }
            });
            
        } catch (error) {
            console.error('Failed to initialize app:', error);
            // Show error to user if possible
            const errorDiv = document.createElement('div');
            errorDiv.className = 'p-4 bg-red-100 text-red-700 fixed top-0 left-0 right-0 z-50';
            errorDiv.innerHTML = `
                <div class="container mx-auto">
                    <strong>Error:</strong> Failed to initialize the application. 
                    <button onclick="window.location.reload()" class="ml-4 px-3 py-1 bg-red-600 text-white rounded text-sm">
                        Reload
                    </button>
                </div>
            `;
            document.body.prepend(errorDiv);
        }
    }

    /**
     * Get cart manager instance
     */
    getCartManager() {
        return this.cartManager;
    }

    /**
     * Get page manager instance
     */
    getPageManager() {
        return this.pageManager;
    }

    /**
     * Get navigation manager instance
     */
    getNavigationManager() {
        return this.navigationManager;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new PierogiApp();
    app.init();
    
    // Make app globally accessible for debugging
    window.PierogiApp = app;
});
