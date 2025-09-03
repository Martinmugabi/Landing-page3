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


        // Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of anchorLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add animation to headings when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all headings in the main content
    const headings = document.querySelectorAll('.container886 h2');
    headings.forEach(function(heading) {
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
        heading.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(heading);
    });
    
    // Add class when animation should trigger
    document.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.container886 h2');
        elements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('animate-in');
            }
        });
    });
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Add animation class when element comes into view
    const animateInClass = 'animate-in';
    const animatedElements = document.querySelectorAll('.container886 h2');
    
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Handle scroll event for animations
    function checkScroll() {
        animatedElements.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check and add scroll listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Add hover effect to the product image
    const productImage = document.querySelector('.bk img');
    if (productImage) {
        productImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        productImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add click effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Update footer year automatically
    const footer = document.querySelector('.foots h3');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('2025', currentYear);
    }
    
    // Add a simple scroll-to-top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.width = '50px';
    scrollToTopButton.style.height = '50px';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.background = '#2c3e50';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.fontSize = '24px';
    scrollToTopButton.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    scrollToTopButton.style.opacity = '0';
    scrollToTopButton.style.transition = 'opacity 0.3s ease';
    scrollToTopButton.style.zIndex = '1000';
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add a simple animation to the header text
    const headerText = document.querySelector('.pp h2');
    if (headerText) {
        headerText.style.opacity = '0';
        headerText.style.transform = 'translateY(-20px)';
        headerText.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(function() {
            headerText.style.opacity = '1';
            headerText.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Add animation to the header paragraph
    const headerParagraph = document.querySelector('.pp p');
    if (headerParagraph) {
        headerParagraph.style.opacity = '0';
        headerParagraph.style.transition = 'opacity 1s ease 0.5s';
        
        setTimeout(function() {
            headerParagraph.style.opacity = '1';
        }, 800);
    }
});



// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".bb1");
  const detailButtons = document.querySelectorAll(".bb2");

  // Add to cart functionality
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      alert(`✅ Product ${index + 1} added to cart!`);
    });
  });

  // Show details functionality
  detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showDetails(index);
    });
  });
});

// Function to show product details
function showDetails(productIndex) {
  // You can customize each product’s details here
  const details = [
    "Music robot - Two speakers, comes with a charger.",
    "Another Music robot - Portable and high quality.",
    "Music robot with Bluetooth support.",
    "Music robot with rechargeable battery.",
    "Compact Music robot for travel.",
    "Deluxe Music robot with surround sound."
  ];

  const message = details[productIndex] || "No extra details available.";
  alert("ℹ️ " + message);
}
