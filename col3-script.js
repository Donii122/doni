// Col3 - Professional Equipment JavaScript

// Professional Equipment Products
const professionalProducts = [
    // Pressure Washer Trolleys & Spares
    {
        id: 59,
        name: "Pressure Washer Trolley",
        category: "Pressure Washer Trolleys & Spares",
        price: 95.00,
        description: "Heavy-duty trolley for pressure washers up to 50kg. Pneumatic wheels. Foldable handle design.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 60,
        name: "Trolley Wheel Set",
        category: "Pressure Washer Trolleys & Spares",
        price: 25.00,
        description: "Replacement wheel set for pressure washer trolleys. Pneumatic wheels. Heavy-duty construction.",
        image: "",
        rating: 4.3,
        popularity: 83
    },

    // Pump Spares
    {
        id: 61,
        name: "Pump Seal Kit",
        category: "Pump Spares",
        price: 45.00,
        description: "Complete pump seal kit for most pressure washer pumps. Includes all necessary seals and gaskets.",
        image: "",
        rating: 4.4,
        popularity: 84
    },
    {
        id: 62,
        name: "Pump Piston Kit",
        category: "Pump Spares",
        price: 65.00,
        description: "Replacement piston kit for pressure washer pumps. Ceramic pistons. Complete with seals.",
        image: "",
        rating: 4.5,
        popularity: 86
    },

    // Reduction Gearboxes
    {
        id: 63,
        name: "Reduction Gearbox 10:1",
        category: "Reduction Gearboxes",
        price: 185.00,
        description: "Heavy-duty reduction gearbox with 10:1 ratio. Cast iron housing. Suitable for industrial applications.",
        image: "",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 64,
        name: "Reduction Gearbox 5:1",
        category: "Reduction Gearboxes",
        price: 165.00,
        description: "Reduction gearbox 5:1 ratio. Industrial grade. Cast iron construction.",
        image: "",
        rating: 4.5,
        popularity: 87
    },

    // Staff Uniform
    {
        id: 65,
        name: "Staff Uniform Polo Shirt",
        category: "Staff Uniform",
        price: 18.50,
        description: "Professional polo shirt for staff uniforms. Moisture-wicking fabric. Available in multiple colors and sizes.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 66,
        name: "Staff Uniform T-Shirt",
        category: "Staff Uniform",
        price: 12.00,
        description: "Comfortable t-shirt for staff uniforms. Breathable fabric. Multiple sizes available.",
        image: "",
        rating: 4.1,
        popularity: 78
    },

    // Jetwash Pumps
    {
        id: 67,
        name: "Jetwash Pump 3000 PSI",
        category: "Jetwash Pumps",
        price: 320.00,
        description: "High-pressure jetwash pump with 3000 PSI output. 20L/min flow rate. Ceramic plungers for durability.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 68,
        name: "Jetwash Pump 2500 PSI",
        category: "Jetwash Pumps",
        price: 285.00,
        description: "Professional jetwash pump 2500 PSI. 18L/min flow rate. Reliable performance.",
        image: "",
        rating: 4.6,
        popularity: 90
    },

    // Tanks Frames & Holders
    {
        id: 69,
        name: "Chemical Tank 50L",
        category: "Tanks Frames & Holders",
        price: 75.00,
        description: "Chemical-resistant tank with 50L capacity. HDPE construction. Includes mounting frame and fittings.",
        image: "",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 70,
        name: "Chemical Tank 100L",
        category: "Tanks Frames & Holders",
        price: 125.00,
        description: "Large capacity chemical tank 100L. HDPE construction. Complete with frame and mounting hardware.",
        image: "",
        rating: 4.5,
        popularity: 87
    },

    // Hydraulic Adaptors
    {
        id: 71,
        name: "Hydraulic Adaptor Set",
        category: "Hydraulic Adaptors",
        price: 65.00,
        description: "Complete hydraulic adaptor set with various thread sizes. High-pressure rating. Chrome-plated finish.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 72,
        name: "Hydraulic Adaptor 1/2 to 3/4",
        category: "Hydraulic Adaptors",
        price: 18.00,
        description: "Hydraulic adaptor 1/2 inch to 3/4 inch. High pressure rating. Chrome finish.",
        image: "",
        rating: 4.4,
        popularity: 85
    },

    // Interpump Spares
    {
        id: 73,
        name: "Interpump Valve Kit",
        category: "Interpump Spares",
        price: 55.00,
        description: "Complete valve kit for Interpump pressure washers. Includes inlet and outlet valves with springs.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 74,
        name: "Interpump Seal Kit",
        category: "Interpump Spares",
        price: 42.00,
        description: "Complete seal kit for Interpump models. All necessary seals included. Easy installation.",
        image: "",
        rating: 4.3,
        popularity: 84
    },

    // Accessories
    {
        id: 75,
        name: "Pressure Gauge 0-100 Bar",
        category: "Accessories",
        price: 28.00,
        description: "High-precision pressure gauge with 0-100 bar range. 1/4 inch NPT connection. Stainless steel case.",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 76,
        name: "Quick Connect Coupler Set",
        category: "Accessories",
        price: 35.00,
        description: "Complete quick connect coupler set. Male and female connectors. High pressure rating.",
        image: "",
        rating: 4.5,
        popularity: 87
    },

    // Interpumps
    {
        id: 77,
        name: "Interpump 2500 PSI",
        category: "Interpumps",
        price: 450.00,
        description: "Professional Interpump with 2500 PSI output. 15L/min flow rate. Triplex plunger design for reliability.",
        image: "",
        rating: 4.8,
        popularity: 94
    },
    {
        id: 78,
        name: "Interpump 3000 PSI",
        category: "Interpumps",
        price: 520.00,
        description: "High-performance Interpump 3000 PSI. 20L/min flow rate. Industrial grade construction.",
        image: "",
        rating: 4.9,
        popularity: 96
    },

    // Polish and Mopping Machines
    {
        id: 79,
        name: "Floor Polishing Machine",
        category: "Polish and Mopping Machines",
        price: 285.00,
        description: "Professional floor polishing machine with 17 inch pad. Variable speed control. Suitable for marble and tile.",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 80,
        name: "Mopping Machine 20 inch",
        category: "Polish and Mopping Machines",
        price: 195.00,
        description: "Commercial mopping machine with 20 inch brush. Self-propelled operation. Large capacity solution tank.",
        image: "",
        rating: 4.4,
        popularity: 86
    }
];

// Override the main products array for this page
window.products = professionalProducts;
window.currentProducts = [...professionalProducts];

// Initialize Col3 page
document.addEventListener('DOMContentLoaded', function() {
    // Set page title
    document.title = "Professional Equipment - BeniChem";
    
    // Cart is managed by script.js and will be loaded automatically
    // No need to do anything here - script.js handles cart persistence
    
    // Ensure productsGrid exists
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        // Initialize products display - show all products immediately
        displayProducts(professionalProducts);
    } else {
        // Retry after a short delay if element not found
        setTimeout(function() {
            const retryGrid = document.getElementById('productsGrid');
            if (retryGrid) {
                displayProducts(professionalProducts);
            }
        }, 100);
    }
    
    updateCartDisplay();
    addCategoryFilters();
    
    // Add event listeners
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
        // Add Enter key listener for search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterProducts();
                // Scroll to products section
                const productsSection = document.getElementById('products');
                if (productsSection) {
                    setTimeout(() => {
                        productsSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }
        });
    }
    
    // Add professional equipment specific features
    addProfessionalFeatures();
    
    // Close cart when clicking outside (but not when clicking inside cart)
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) return;
        
        // Don't close if clicking inside the cart sidebar
        if (cartSidebar.contains(e.target)) {
            return;
        }
        // Don't close if clicking the cart icon
        if (e.target.closest('.cart-icon')) {
            return;
        }
        // Close cart if clicking outside
        if (cartSidebar.classList.contains('open')) {
            cartSidebar.classList.remove('open');
        }
    });
});

// Professional Equipment specific features
function addProfessionalFeatures() {
    // Add product counter to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryName = card.querySelector('h3').textContent;
        const productCount = professionalProducts.filter(p => p.category === categoryName).length;
        
        if (productCount > 0) {
            const counter = document.createElement('span');
            counter.className = 'product-counter';
            counter.textContent = productCount;
            card.appendChild(counter);
        }
    });
    
    // Add loading animation
    addLoadingAnimation();
    
    // Add search highlighting
    addSearchHighlighting();
    
    // Add bubbles effect
    addBubblesEffect();
    
    // Add professional effects
    addProfessionalEffects();
    
    // Add premium badges to high-value products
    addPremiumBadges();
}

// Add loading animation for professional equipment
function addLoadingAnimation() {
    const productsGrid = document.getElementById('productsGrid');
    
    // Show loading when filtering
    const originalFilterByCategory = window.filterByCategory;
    window.filterByCategory = function(category) {
        productsGrid.classList.add('loading');
        
        setTimeout(() => {
            originalFilterByCategory.call(this, category);
            productsGrid.classList.remove('loading');
        }, 500);
    };
}

// Add search highlighting
function addSearchHighlighting() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productTitles = document.querySelectorAll('.product-title');
        
        productTitles.forEach(title => {
            const text = title.textContent;
            if (searchTerm && text.toLowerCase().includes(searchTerm)) {
                const highlightedText = text.replace(
                    new RegExp(searchTerm, 'gi'),
                    `<span class="search-highlight">$&</span>`
                );
                title.innerHTML = highlightedText;
            } else {
                title.textContent = text;
            }
        });
    });
}

// Add bubbles effect to category cards
function addBubblesEffect() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const bubbles = document.createElement('div');
        bubbles.className = 'bubbles';
        
        // Create 6 bubbles
        for (let i = 0; i < 6; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubbles.appendChild(bubble);
        }
        
        card.appendChild(bubbles);
    });
}

// Add professional effects
function addProfessionalEffects() {
    // Add gear rotation to gearbox category
    const gearboxCard = document.querySelector('.category-card[onclick*="Reduction Gearboxes"]');
    if (gearboxCard) {
        const icon = gearboxCard.querySelector('i');
        icon.classList.add('gear-rotation');
    }
    
    // Add lightning effect to pump categories
    const pumpCards = document.querySelectorAll('.category-card[onclick*="Pump"]');
    pumpCards.forEach(card => {
        card.classList.add('lightning-effect');
    });
    
    // Add holographic effect to premium products
    const premiumProducts = professionalProducts.filter(p => p.price > 200);
    premiumProducts.forEach(product => {
        const productCard = document.querySelector(`[onclick*="${product.id}"]`);
        if (productCard) {
            productCard.classList.add('professional-glow');
        }
    });
}

// Add premium badges to high-value products
function addPremiumBadges() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productId = parseInt(card.querySelector('.add-to-cart-btn').getAttribute('onclick').match(/\d+/)[0]);
        const product = professionalProducts.find(p => p.id === productId);
        
        if (product && product.price > 200) {
            const badge = document.createElement('div');
            badge.className = 'premium-badge';
            badge.textContent = 'Premium';
            card.appendChild(badge);
        }
    });
}

// Professional Equipment specific filter function
function filterProfessionalProducts(category) {
    // Store current filter state
    if (!window.currentFilter) {
        window.currentFilter = null;
    }
    
    // If clicking the same category again, show all products
    if (window.currentFilter === category) {
        category = 'all';
        window.currentFilter = null;
    } else {
        window.currentFilter = category;
    }
    
    if (category === 'all' || !category) {
        window.currentProducts = [...professionalProducts];
    } else {
        window.currentProducts = professionalProducts.filter(product => product.category === category);
    }
    
    displayProducts(window.currentProducts);
    
    // Update active category card
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
        const cardCategory = card.querySelector('h3').textContent;
        if (cardCategory === category) {
            card.classList.add('active');
        }
    });
    
    // Update active category button (if exists)
    document.querySelectorAll('.category-filters button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category || (category === 'all' && btn.textContent === 'All Categories')) {
            btn.classList.add('active');
        }
    });
    
    // Scroll to products section
    const productsGrid = document.querySelector('.products-grid');
    if (productsGrid) {
        productsGrid.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Override the main filterByCategory function for this page
window.filterByCategory = filterProfessionalProducts;

// Professional Equipment specific search
function searchProfessionalProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    window.currentProducts = professionalProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(window.currentProducts);
}

// Override the main filterProducts function for this page
window.filterProducts = searchProfessionalProducts;

// Add professional equipment specific animations
function addProfessionalAnimations() {
    // Add hover effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add professional sound effect (visual feedback)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback with professional styling
            this.style.transform = 'scale(0.95)';
            this.style.background = '#7d3c98';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = '#8e44ad';
            }, 150);
        });
    });
    
    // Add professional equipment specific interactions
    addProfessionalInteractions();
}

// Add professional equipment specific interactions
function addProfessionalInteractions() {
    // Add click effects to premium products
    const premiumProducts = document.querySelectorAll('.premium-badge');
    premiumProducts.forEach(badge => {
        const productCard = badge.closest('.product-card');
        productCard.addEventListener('click', function() {
            // Add premium click effect
            this.style.boxShadow = '0 0 20px rgba(142, 68, 173, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 300);
        });
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addProfessionalAnimations, 100);
});

// Professional Equipment specific notifications
function showProfessionalNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8e44ad;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(142, 68, 173, 0.3);
        z-index: 1003;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Override the main showNotification function for this page
window.showNotification = showProfessionalNotification;
