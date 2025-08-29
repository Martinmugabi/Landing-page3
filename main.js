// DOM Elements
        const menuBtn = document.getElementById('menuBtn');
        const navMenu = document.getElementById('navMenu');
        const exploreBtn = document.getElementById('exploreBtn');
        const backToTopBtn = document.getElementById('backToTop');
        const loader = document.getElementById('loader');
        const toast = document.getElementById('toast');
        const featureCards = document.querySelectorAll('.best');

        // Mobile menu toggle
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                if (targetId !== '#') {
                    // For demo purposes, we'll just show a toast message
                    showToast('Navigation to ' + targetId);
                }
            });
        });

        // Explore button click handler
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showLoader();
            
            // Simulate loading delay
            setTimeout(() => {
                hideLoader();
                showToast('Exploring products...');
                // In a real scenario, this would navigate to products page
            }, 1500);
        });

        // Back to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
            
            // Animate feature cards when they come into view
            animateOnScroll();
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animate feature cards on scroll
        function animateOnScroll() {
            featureCards.forEach(card => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.classList.add('visible');
                }
            });
        }

        // Initial animation trigger
        setTimeout(animateOnScroll, 500);

        // Show/hide loader functions
        function showLoader() {
            loader.style.display = 'flex';
        }

        function hideLoader() {
            loader.style.display = 'none';
        }

        // Toast notification function
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('visible');
            
            setTimeout(() => {
                toast.classList.remove('visible');
            }, 3000);
        }

        // Product search simulation (for demonstration)
        function searchProducts(query) {
            showLoader();
            
            // Simulate API call delay
            setTimeout(() => {
                hideLoader();
                showToast('Search results for: ' + query);
            }, 1200);
        }

        // Form validation example (for contact form if added later)
        function validateForm(formData) {
            let isValid = true;
            const errors = [];
            
            if (!formData.name || formData.name.trim().length < 2) {
                isValid = false;
                errors.push('Name must be at least 2 characters long');
            }
            
            if (!formData.email || !formData.email.includes('@')) {
                isValid = false;
                errors.push('Please enter a valid email address');
            }
            
            return { isValid, errors };
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            // Show welcome message
            setTimeout(() => {
                showToast('Welcome to Smart Tech Electronics!');
            }, 1000);
            
            // Animate feature cards
            animateOnScroll();
        });

        // Demo function for adding to cart
        function addToCart(productId, productName) {
            showToast(`${productName} added to cart!`);
            // In a real application, this would update cart state and UI
        }

        // Demo function for product comparison
        function addToComparison(productId) {
            showToast('Product added to comparison');
            // In a real application, this would update comparison state and UI
        }


        