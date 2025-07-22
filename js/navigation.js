/**
 * Navigation Management Module
 * Handles page navigation, footer link states, and menu sub-navigation
 */
class NavigationManager {
    constructor(pageManager) {
        this.pageManager = pageManager;
        this.currentPage = 'home';
        this.dropdown = null;
        this.menuButton = null;
        this.initializeElements();
        this.initializeEventListeners();
        this.setupCartSync();
    }
    
    /**
     * Initialize DOM elements with null checks
     */
    initializeElements() {
        // Get navigation links from both header dropdown and hidden footer (for backward compatibility)
        this.navLinks = Array.from(document.querySelectorAll('[data-page-link]'));
        this.dropdown = document.querySelector('.dropdown');
        this.menuButton = document.querySelector('.dropdown-toggle');
    }

    /**
     * Initialize navigation event listeners
     */
    initializeEventListeners() {
        // Add click event listeners to all navigation links
        this.navLinks.forEach(link => {
            // Remove any existing listeners to prevent duplicates
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            
            newLink.addEventListener('click', (e) => {
                e.preventDefault();
                const page = newLink.dataset.pageLink || 'home';
                this.navigateToPage(page);
                this.closeDropdown();
            });
        });
        
        // Handle dropdown menu toggle
        if (this.menuButton) {
            // Remove any existing listeners to prevent duplicates
            const newButton = this.menuButton.cloneNode(true);
            this.menuButton.parentNode.replaceChild(newButton, this.menuButton);
            this.menuButton = newButton;
            
            this.menuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
            
            // Add touch events for mobile
            this.menuButton.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.toggleDropdown();
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (this.dropdown && this.menuButton && 
                !this.dropdown.contains(e.target) && 
                !this.menuButton.contains(e.target)) {
                this.closeDropdown();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 640) { // Desktop
                this.closeDropdown();
            }
        });
    }
    
    /**
     * Toggle dropdown menu
     */
    toggleDropdown() {
        if (this.dropdown) {
            this.dropdown.classList.toggle('open');
            const isOpen = this.dropdown.classList.contains('open');
            this.menuButton.setAttribute('aria-expanded', isOpen);
            
            // Focus first menu item when opening
            if (isOpen && this.navLinks.length > 0) {
                setTimeout(() => {
                    this.navLinks[0].focus();
                }, 50);
            }
        }
    }
    
    /**
     * Close dropdown menu
     */
    closeDropdown() {
        if (this.dropdown) {
            this.dropdown.classList.remove('open');
            this.menuButton.setAttribute('aria-expanded', 'false');
        }
    }

    /**
     * Navigate to a specific page
     */
    navigateToPage(page) {
        this.currentPage = page;
        this.pageManager.loadPage(page);
        this.updateFooterActiveStates(page);
        
        // Close dropdown menu after navigation
        const dropdown = document.querySelector('.group');
        if (dropdown) {
            dropdown.classList.remove('open');
        }
        
        // Scroll to top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Handle page-specific navigation setup
        if (page === 'menu') {
            this.setupMenuNavigation();
        }
        
        // Update document title
        const pageTitles = {
            'home': 'Home',
            'menu': 'Our Menu',
            'order': 'My Order',
            'about': 'Our Story',
            'contact': 'Find Us'
        };
        document.title = `Tochi's Hot Chicken - ${pageTitles[page] || ''}`.trim();
    }

    /**
     * Update footer link active states
     */
    updateFooterActiveStates(activePage) {
        this.navLinks.forEach(link => {
            const linkPage = link.dataset.pageLink;
            const isActive = linkPage === activePage;
            
            this.resetLinkStyles(link, linkPage);
            
            if (isActive) {
                this.setActiveLinkStyles(link, linkPage);
            }
        });
    }

    /**
     * Reset link styles to default state
     */
    resetLinkStyles(link, linkPage) {
        // Remove active state classes
        link.classList.remove('bg-gray-100', 'text-[var(--primary-color)]');
        
        // For header links (which are in the dropdown)
        if (link.closest('header')) {
            // Remove active styles for header dropdown items
            link.classList.remove('bg-gray-100', 'text-[var(--primary-color)]');
        }
    }

    /**
     * Set active link styles
     */
    setActiveLinkStyles(link, linkPage) {
        // Add active state classes
        link.classList.add('bg-gray-100', 'text-[var(--primary-color)]');
        
        // For header links (which are in the dropdown)
        if (link.closest('header')) {
            // Add active styles for header dropdown items
            link.classList.add('bg-gray-100', 'text-[var(--primary-color)]');
        }
        
        // Check if this is a cart link and update its styles
        const cartCount = link.querySelector('#cart-item-count, #cart-item-count-header');
        if (cartCount) {
            cartCount.classList.add('bg-yellow-500', 'text-red-700');
        }
        
        // Remove any existing active background
        const existingActiveBg = link.querySelector('.active-bg');
        if (existingActiveBg) {
            existingActiveBg.remove();
        }
        
        // Add active background for visual feedback
        const activeBg = document.createElement('div');
        activeBg.className = 'active-bg absolute inset-0 bg-[var(--primary-color)]/10 rounded-md';
        link.style.position = 'relative';
        link.style.overflow = 'hidden';
        link.insertBefore(activeBg, link.firstChild);
    }

    /**
     * Setup menu page sub-navigation
     */
    setupMenuNavigation() {
        // Wait for menu content to be loaded
        setTimeout(() => {
            const menuSubNavLinks = document.querySelectorAll('nav a[href^="#"]');
            
            // Set 'Entrees' as active by default
            menuSubNavLinks.forEach(link => {
                if (link.textContent.trim() === 'Entrees') {
                    this.setActiveMenuLink(link);
                } else {
                    this.setInactiveMenuLink(link);
                }

                // Add click handler for smooth scrolling and active state
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleMenuLinkClick(link, menuSubNavLinks);
                });
            });
        }, 100);
    }

    /**
     * Handle menu sub-navigation link clicks
     */
    handleMenuLinkClick(clickedLink, allLinks) {
        const targetId = clickedLink.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            // Update active states
            allLinks.forEach(link => this.setInactiveMenuLink(link));
            this.setActiveMenuLink(clickedLink);
        }
    }

    /**
     * Set menu link as active
     */
    setActiveMenuLink(link) {
        link.classList.add('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
        link.classList.remove('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
    }

    /**
     * Set menu link as inactive
     */
    setInactiveMenuLink(link) {
        link.classList.remove('border-b-[var(--primary-color)]', 'text-[var(--text-dark)]', 'font-bold');
        link.classList.add('border-b-transparent', 'text-[var(--text-medium)]', 'font-medium', 'hover:text-[var(--text-dark)]');
    }

    /**
     * Get current page
     */
    getCurrentPage() {
        return this.currentPage;
    }

    /**
     * Setup cart synchronization between different cart indicators
     */
    setupCartSync() {
        // This will be called by the cart manager when the cart is updated
        window.updateCartCount = (count) => {
            const cartCountElements = document.querySelectorAll('.cart-count');
            cartCountElements.forEach(el => {
                el.textContent = count;
                if (count > 0) {
                    el.classList.remove('hidden');
                    // Add animation class
                    el.classList.add('animate');
                    // Remove animation class after animation completes
                    setTimeout(() => el.classList.remove('animate'), 500);
                } else {
                    el.classList.add('hidden');
                }
            });
        };
    }
}

// Export the NavigationManager class for use in other modules
export { NavigationManager };
