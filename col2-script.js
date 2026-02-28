// Col2 - Cleaning Supplies JavaScript

// Cleaning Supplies Products
const cleaningProducts = [
    // Chemicals
    {
        id: 3,
        name: "DIAMOND WASH",
        category: "Chemicals",
        price: 15.00,
        description: "Premium Cleaning Power: Diamond Wash cuts through tough dirt and road residue, ensuring a deep clean without scratching your vehicle's finish. Protective Formula: Infused with protective polymers, this wash creates a hydrophobic layer that repels water, dirt, and UV rays, helping to maintain your car's shine and prevent fading. Foaming Action: The rich, foamy lather clings to surfaces, lifting dirt and grime away while making rinsing a breeze. Safe for All Surfaces: Suitable for all paint types, including clear coats, as well as chrome and plastic trim, ensuring a versatile cleaning solution.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 4,
        name: "SNOW FOAM TFR",
        category: "Chemicals",
        price: 15.00,
        description: "Snow Foam TFR: Our advanced formula effectively eliminates stubborn residues, oils, and grime from vehicle exteriors. Developed through extensive research, Snow Foam TFR offers unparalleled cleaning power. Specifically designed for use with foaming lances, it streamlines the washing process, reducing the need for manual labor. Achieve professional-quality results effortlessly, leaving vehicles with a flawless finish. Instructions: Dilute at 5:100 for touchless car wash. Use at 1.5:100 for regular snow foam.",
        image: "",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 5,
        name: "BT BLUE TYRE DRESSING",
        category: "Chemicals",
        price: 10.00,
        description: "A superior versatile tyre dressing formulated to restore a smooth original appearance to tyres and exterior trim. Gives a long lasting shine. May also be used on hoses and other rubber and plastic components. DIRECTIONS: Apply using a clean lint free cloth or brush to leave a thin wet film. If required, apply a second coat for a deeper gloss finish. Wipe off any excess of product to avoid tyre dressing sling.",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 6,
        name: "CARPET DYE",
        category: "Chemicals",
        price: 24.00,
        description: "Carpet dye refers to a specialized coloring product used to alter or enhance the color of carpets and rugs. It is designed to penetrate the fibers of the carpet and create a lasting and vibrant color change. carpet dye provides a versatile and cost-effective option for transforming the look of carpets, breathing new life into worn-out floor coverings, and giving interiors a fresh and vibrant appearance.",
        image: "",
        rating: 4.2,
        popularity: 78
    },
    {
        id: 7,
        name: "INSECT REMOVER",
        category: "Chemicals",
        price: 35.00,
        description: "Concentrated solution designed to rapidly dissolve and loosen squashed insects from the vehicle bodywork, windscreen and headlights.",
        image: "",
        rating: 4.8,
        popularity: 96
    },
    {
        id: 8,
        name: "WINDOW CLEANER GREEN",
        category: "Chemicals",
        price: 6.78,
        description: "Extreme concentrate and is a high power wind screen washer additive. Use it quickly removes dirt grime and insect deposits from windscreens. It also helps prevent the water bottle contents from freezing. DIRECTIONS: In normal summer conditions use 10% screen wash to water. in winter increase the concentration to 25% or more.",
        image: "",
        rating: 4.1,
        popularity: 82
    },


    // Trigger Guns
    {
        id: 40,
        name: "Professional Trigger Gun",
        category: "Trigger Guns",
        price: 28.50,
        description: "Heavy-duty trigger gun with ergonomic grip. Adjustable spray pattern. Compatible with most pressure washer systems.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 41,
        name: "Heavy Duty Trigger Gun",
        category: "Trigger Guns",
        price: 35.00,
        description: "Industrial trigger gun with reinforced construction. High pressure rating. Ergonomic design.",
        image: "",
        rating: 4.6,
        popularity: 89
    },

    // Triggers and Lances
    {
        id: 42,
        name: "Extension Lance 24 inch",
        category: "Triggers and Lances",
        price: 35.00,
        description: "Professional extension lance for hard-to-reach areas. Quick-connect fitting. Aluminum construction for durability.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 43,
        name: "Extension Lance 36 inch",
        category: "Triggers and Lances",
        price: 42.00,
        description: "Long extension lance 36 inch. Stainless steel construction. Quick-connect system.",
        image: "",
        rating: 4.4,
        popularity: 86
    },

    // Unloader Valves
    {
        id: 44,
        name: "Unloader Valve 1/2 inch",
        category: "Unloader Valves",
        price: 42.00,
        description: "High-pressure unloader valve with 1/2 inch connections. Brass construction. 0-3000 PSI operating range.",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 45,
        name: "Unloader Valve 3/4 inch",
        category: "Unloader Valves",
        price: 55.00,
        description: "Large diameter unloader valve 3/4 inch. High flow capacity. Brass construction.",
        image: "",
        rating: 4.5,
        popularity: 88
    },

    // Vacuums & Spares
    {
        id: 46,
        name: "Industrial Vacuum 20L",
        category: "Vacuums & Spares",
        price: 125.00,
        description: "Heavy-duty industrial vacuum with 20L capacity. Wet/dry operation. HEPA filtration system included.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 47,
        name: "Industrial Vacuum 30L",
        category: "Vacuums & Spares",
        price: 165.00,
        description: "Large capacity industrial vacuum 30L. Wet/dry operation. Commercial grade filtration.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 48,
        name: "Vacuum Filter Replacement",
        category: "Vacuums & Spares",
        price: 18.00,
        description: "Replacement HEPA filter for industrial vacuums. High efficiency filtration. Easy installation.",
        image: "",
        rating: 4.3,
        popularity: 83
    },

    // Filters
    {
        id: 49,
        name: "Water Filter Cartridge",
        category: "Filters",
        price: 18.00,
        description: "Replacement water filter cartridge. Removes sediment and chlorine. 6-month lifespan with normal use.",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 50,
        name: "High Capacity Water Filter",
        category: "Filters",
        price: 28.00,
        description: "High capacity water filter cartridge. Extended lifespan. Removes all impurities.",
        image: "",
        rating: 4.4,
        popularity: 85
    },

    // Fuel Nozzles
    {
        id: 51,
        name: "Fuel Nozzle 1/4 inch",
        category: "Fuel Nozzles",
        price: 25.00,
        description: "Precision fuel nozzle with 1/4 inch connection. Anti-drip design. Compatible with most fuel systems.",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 52,
        name: "Fuel Nozzle 3/8 inch",
        category: "Fuel Nozzles",
        price: 32.00,
        description: "Large diameter fuel nozzle 3/8 inch. High flow rate. Anti-drip mechanism.",
        image: "",
        rating: 4.4,
        popularity: 85
    },

    // Jet Wash Hose Assemblies
    {
        id: 53,
        name: "Jet Wash Hose Assembly 10m",
        category: "Jet Wash Hose Assemblies",
        price: 85.00,
        description: "Complete jet wash hose assembly with quick-connect fittings. 10m length. 3000 PSI working pressure.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 54,
        name: "Jet Wash Hose Assembly 15m",
        category: "Jet Wash Hose Assemblies",
        price: 125.00,
        description: "Extended length hose assembly 15m. High pressure rating. Quick-connect system.",
        image: "",
        rating: 4.6,
        popularity: 89
    },

    // Jetwash Nozzles
    {
        id: 55,
        name: "Jetwash Nozzle Set",
        category: "Jetwash Nozzles",
        price: 22.00,
        description: "Complete nozzle set with 5 different spray patterns. 0°, 15°, 25°, 40°, and soap nozzle included.",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 56,
        name: "Turbo Nozzle 0 Degree",
        category: "Jetwash Nozzles",
        price: 18.00,
        description: "High-pressure turbo nozzle 0 degree. Rotating jet stream. Maximum cleaning power.",
        image: "",
        rating: 4.5,
        popularity: 87
    },

    // Lances
    {
        id: 57,
        name: "Professional Lance 18 inch",
        category: "Lances",
        price: 32.00,
        description: "Professional lance with 18 inch length. Quick-connect fitting. Stainless steel construction.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 58,
        name: "Heavy Duty Lance 24 inch",
        category: "Lances",
        price: 38.00,
        description: "Heavy-duty lance 24 inch. Reinforced construction. High pressure rating.",
        image: "",
        rating: 4.4,
        popularity: 86
    },

    // Additional products from benichem.co.uk
    // Chemicals
    {
        id: 88,
        name: "VINYL POLISH",
        category: "Chemicals",
        price: 25.00,
        description: "Professional vinyl polish for restoring and protecting vinyl surfaces. Leaves a long-lasting shine and protection.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 89,
        name: "SCREENWASH CONCENTRATED PINK",
        category: "Chemicals",
        price: 8.00,
        description: "Concentrated pink screenwash for windscreen cleaning. Effective against dirt, grime, and insect deposits.",
        image: "",
        rating: 4.3,
        popularity: 82
    },
    {
        id: 90,
        name: "SCREENWASH CONCENTRATED BLUE",
        category: "Chemicals",
        price: 6.95,
        description: "Concentrated blue screenwash for windscreen cleaning. Effective against dirt, grime, and insect deposits.",
        image: "",
        rating: 4.3,
        popularity: 82
    },
    {
        id: 91,
        name: "AD BLUE",
        category: "Chemicals",
        price: 5.99,
        description: "AdBlue diesel exhaust fluid for reducing NOx emissions in diesel vehicles.",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 92,
        name: "ANTIFREEZE READY TO USE BLUE",
        category: "Chemicals",
        price: 20.00,
        description: "Ready-to-use blue antifreeze coolant for vehicle cooling systems. Protects against freezing and overheating.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 93,
        name: "ANTIFREEZE CONCENTRATED BLUE",
        category: "Chemicals",
        price: 14.00,
        description: "Concentrated blue antifreeze coolant for vehicle cooling systems. Requires dilution before use.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 94,
        name: "ANTIFREEZE CONCENTRATED RED",
        category: "Chemicals",
        price: 20.00,
        description: "Concentrated red antifreeze coolant for vehicle cooling systems. Requires dilution before use.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 95,
        name: "ANTIFREEZE READY TO USE RED",
        category: "Chemicals",
        price: 20.00,
        description: "Ready-to-use red antifreeze coolant for vehicle cooling systems. Protects against freezing and overheating.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 96,
        name: "SCREENWASH READY TO USE BLUE",
        category: "Chemicals",
        price: 5.00,
        description: "Ready-to-use blue screenwash for windscreen cleaning. Effective against dirt, grime, and insect deposits.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 97,
        name: "SCREENWASH READY TO USE PINK",
        category: "Chemicals",
        price: 6.00,
        description: "Ready-to-use pink screenwash for windscreen cleaning. Effective against dirt, grime, and insect deposits.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 98,
        name: "FOAM CLEANER – 12pcs 500 ml",
        category: "Chemicals",
        price: 25.00,
        description: "Professional foam cleaner for car detailing. Pack of 12 x 500ml bottles.",
        image: "",
        rating: 4.6,
        popularity: 90
    },

    // Jet Wash Hose Assemblies
    {
        id: 99,
        name: "ST2615 WASH GUN 3/8″F X 1/4″F",
        category: "Jet Wash Hose Assemblies",
        price: 50.12,
        description: "Professional wash gun with 3/8″F x 1/4″F connections. High pressure cleaning tool.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 100,
        name: "ST2605 350 BAR WASH GUN 3/8″F X 1/4″F",
        category: "Jet Wash Hose Assemblies",
        price: 38.50,
        description: "350 bar wash gun with 3/8″F x 1/4″F connections. High pressure cleaning tool.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 101,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 2250mm L2 2500mm",
        category: "Jet Wash Hose Assemblies",
        price: 2108.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. L1: 2250mm, L2: 2500mm. Professional jet wash equipment.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 102,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 2050mm L2 2250mm",
        category: "Jet Wash Hose Assemblies",
        price: 2023.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. L1: 2050mm, L2: 2250mm. Professional jet wash equipment.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 103,
        name: "Mosmatic DDP Series Dual Ceiling Boom",
        category: "Jet Wash Hose Assemblies",
        price: 1970.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. Professional jet wash equipment.",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 104,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 1750mm L2 1900mm",
        category: "Jet Wash Hose Assemblies",
        price: 1922.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. L1: 1750mm, L2: 1900mm. Professional jet wash equipment.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 105,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 1600mm L2 1750mm",
        category: "Jet Wash Hose Assemblies",
        price: 1888.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. L1: 1600mm, L2: 1750mm. Professional jet wash equipment.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 106,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 1450mm L2 1600mm",
        category: "Jet Wash Hose Assemblies",
        price: 1865.00,
        description: "Mosmatic DDP Series Dual Ceiling Boom. L1: 1450mm, L2: 1600mm. Professional jet wash equipment.",
        image: "",
        rating: 4.7,
        popularity: 92
    },
    {
        id: 107,
        name: "Mosmatic Lance Holder",
        category: "Jet Wash Hose Assemblies",
        price: 137.00,
        description: "Mosmatic lance holder for secure storage of pressure washing equipment.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 108,
        name: "VP Brush Tank",
        category: "Jet Wash Hose Assemblies",
        price: 135.00,
        description: "VP brush tank for pressure washing systems. Professional cleaning equipment.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 109,
        name: "SLP Lance Holder",
        category: "Jet Wash Hose Assemblies",
        price: 111.00,
        description: "SLP lance holder for secure storage of pressure washing equipment.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 110,
        name: "Mosmatic WAE Series Wall Boom",
        category: "Jet Wash Hose Assemblies",
        price: 1025.00,
        description: "Mosmatic WAE Series Wall Boom. Professional jet wash wall mounting equipment.",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 111,
        name: "Mosmatic DKP Series Ceiling Boom",
        category: "Jet Wash Hose Assemblies",
        price: 921.58,
        description: "Mosmatic DKP Series Ceiling Boom. Professional jet wash ceiling mounting equipment.",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 112,
        name: "LXC2002 High Volume Spray Lance",
        category: "Jet Wash Hose Assemblies",
        price: 90.20,
        description: "LXC2002 high volume spray lance for pressure washing. Professional cleaning tool.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 113,
        name: "SLAM907 Spray Gun – St.Steel",
        category: "Jet Wash Hose Assemblies",
        price: 73.69,
        description: "SLAM907 spray gun made of stainless steel. Professional pressure washing equipment.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 114,
        name: "DFK Foam Injection Lance Kit",
        category: "Jet Wash Hose Assemblies",
        price: 213.81,
        description: "DFK foam injection lance kit for creating rich foam during pressure washing.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 115,
        name: "LS1 Low Pressure Foamer",
        category: "Jet Wash Hose Assemblies",
        price: 16.80,
        description: "LS1 low pressure foamer for creating foam during cleaning operations.",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 116,
        name: "LS3-1 Foam Injection Head with 1L Tank",
        category: "Jet Wash Hose Assemblies",
        price: 63.00,
        description: "LS3-1 foam injection head with 1L tank for pressure washing foam applications.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 117,
        name: "Interpump Foam Kit – 1.7 Jet",
        category: "Jet Wash Hose Assemblies",
        price: 44.40,
        description: "Interpump foam kit with 1.7 jet for creating foam during pressure washing.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 118,
        name: "Interpump Foam Kit – 1.6 Jet",
        category: "Jet Wash Hose Assemblies",
        price: 44.40,
        description: "Interpump foam kit with 1.6 jet for creating foam during pressure washing.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 119,
        name: "Interpump Foam Kit – 1.4 Jet",
        category: "Jet Wash Hose Assemblies",
        price: 44.40,
        description: "Interpump foam kit with 1.4 jet for creating foam during pressure washing.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 120,
        name: "LS10 Foam Injection Head with 2L Tank",
        category: "Jet Wash Hose Assemblies",
        price: 54.00,
        description: "LS10 foam injection head with 2L tank for pressure washing foam applications.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 121,
        name: "LS12 Foam Injection Head with 2L Tank",
        category: "Jet Wash Hose Assemblies",
        price: 67.00,
        description: "LS12 foam injection head with 2L tank for pressure washing foam applications.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 122,
        name: "LS12 Foam Injection Head with 1L Tank",
        category: "Jet Wash Hose Assemblies",
        price: 74.11,
        description: "LS12 foam injection head with 1L tank for pressure washing foam applications.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 123,
        name: "Extended Chemical Injector",
        category: "Jet Wash Hose Assemblies",
        price: 33.00,
        description: "Extended chemical injector for pressure washing systems.",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 124,
        name: "LS12 Foamer Head",
        category: "Jet Wash Hose Assemblies",
        price: 74.11,
        description: "LS12 foamer head for creating foam during pressure washing operations.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 125,
        name: "Interpump Sandblast Head",
        category: "Jet Wash Hose Assemblies",
        price: 98.00,
        description: "Interpump sandblast head for abrasive cleaning applications.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 126,
        name: "Interpump TX Sandblast Kit",
        category: "Jet Wash Hose Assemblies",
        price: 120.00,
        description: "Interpump TX sandblast kit for abrasive cleaning applications.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 127,
        name: "Interpump Sandblast Kit – 1.6 Jet",
        category: "Jet Wash Hose Assemblies",
        price: 118.00,
        description: "Interpump sandblast kit with 1.6 jet for abrasive cleaning applications.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 128,
        name: "Sand Probe for TPS560 Head",
        category: "Jet Wash Hose Assemblies",
        price: 90.00,
        description: "Sand probe accessory for TPS560 sandblasting head.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 129,
        name: "TPS560 Sand Blaster Head",
        category: "Jet Wash Hose Assemblies",
        price: 247.00,
        description: "TPS560 sand blaster head for professional abrasive cleaning.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 130,
        name: "Cable & Hose Protector",
        category: "Jet Wash Hose Assemblies",
        price: 92.82,
        description: "Cable and hose protector for pressure washing equipment.",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 131,
        name: "Spiral Wrap Hose Protector – sold per metre",
        category: "Jet Wash Hose Assemblies",
        price: 6.27,
        description: "Spiral wrap hose protector sold per metre for protecting hoses.",
        image: "",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 132,
        name: "Teflon® Sealing Tape",
        category: "Jet Wash Hose Assemblies",
        price: 2.49,
        description: "Teflon sealing tape for threaded connections in pressure washing equipment.",
        image: "",
        rating: 4.0,
        popularity: 75
    }
];

// Override the main products array for this page
window.products = cleaningProducts;
window.currentProducts = [...cleaningProducts];

// Initialize Col2 page
document.addEventListener('DOMContentLoaded', function() {
    // Set page title
    document.title = "Cleaning Supplies - BeniChem";
    
    // Cart is managed by script.js and will be loaded automatically
    // No need to do anything here - script.js handles cart persistence
    
    // Ensure productsGrid exists
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        // Initialize products display - show all products immediately
        displayProducts(cleaningProducts);
    } else {
        // Retry after a short delay if element not found
        setTimeout(function() {
            const retryGrid = document.getElementById('productsGrid');
            if (retryGrid) {
                displayProducts(cleaningProducts);
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
    
    // Add cleaning supplies specific features
    addCleaningFeatures();
    
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

// Cleaning Supplies specific features
function addCleaningFeatures() {
    // Add product counter to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryName = card.querySelector('h3').textContent;
        const productCount = cleaningProducts.filter(p => p.category === categoryName).length;
        
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
    
    // Add sparkle effects to popular products
    addSparkleEffects();
}

// Add loading animation for cleaning supplies
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

// Add sparkle effects to popular products
function addSparkleEffects() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productId = parseInt(card.querySelector('.add-to-cart-btn').getAttribute('onclick').match(/\d+/)[0]);
        const product = cleaningProducts.find(p => p.id === productId);
        
        if (product && product.popularity > 90) {
            card.classList.add('cleaning-sparkle');
        }
    });
}

// Cleaning Supplies specific filter function
function filterCleaningProducts(category) {
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
        window.currentProducts = [...cleaningProducts];
    } else {
        window.currentProducts = cleaningProducts.filter(product => product.category === category);
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
window.filterByCategory = filterCleaningProducts;

// Cleaning Supplies specific search
function searchCleaningProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    window.currentProducts = cleaningProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(window.currentProducts);
}

// Override the main filterProducts function for this page
window.filterProducts = searchCleaningProducts;

// Add cleaning supplies specific animations
function addCleaningAnimations() {
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
    
    // Add cleaning sound effect (visual feedback)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addCleaningAnimations, 100);
});

// Cleaning Supplies specific notifications
function showCleaningNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(39, 174, 96, 0.3);
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
window.showNotification = showCleaningNotification;
