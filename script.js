// Product Data - All products from BeniChem website
const products = [
    // Silicones
    {
        id: 1,
        name: "SILICONE BUBBLE GUM – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: BUBBLE GUM Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "",
        rating: 4.5,
        popularity: 95
    },
    {
        id: 2,
        name: "SILICONE WATERMELON – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: WATERMELON Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "",
        rating: 4.3,
        popularity: 88
    },

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

    // Low Pressure Hose
    {
        id: 9,
        name: "Reinforced PVC Hose 40 Bar 8mm id 20m coil",
        category: "Low Pressure Hose",
        price: 112.86,
        description: "40 Bar @ 20°C working pressure 8mm id - 14mm od 20m coil Polyester reinforced PVC -10°C to 50°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 87
    },
    {
        id: 10,
        name: "Reinforced PVC Hose 40 Bar 8mm id 10m coil",
        category: "Low Pressure Hose",
        price: 86.87,
        description: "40 Bar @ 20°C working pressure 8mm id - 14mm od 10m coil Polyester reinforced PVC -10°C to 50°C working temperature BULK PRICING FOR ORDERS OF 5+ PIECES",
        image: "",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 11,
        name: "Suction Hose Kit 7m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 117.00,
        description: "7m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 12,
        name: "Suction Hose Kit 4m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 90.37,
        description: "4m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 13,
        name: "Suction Hose Kit 3m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 75.72,
        description: "3m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 14,
        name: "Suction Hose Kit 7m 1″BSPM",
        category: "Low Pressure Hose",
        price: 70.82,
        description: "7m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 15,
        name: "Suction Hose Kit 4m",
        category: "Low Pressure Hose",
        price: 59.84,
        description: "4m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 16,
        name: "Suction Hose Kit 3m",
        category: "Low Pressure Hose",
        price: 51.28,
        description: "3m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "",
        rating: 4.1,
        popularity: 80
    },
    {
        id: 17,
        name: "Delivery Hose Kit 10m",
        category: "Low Pressure Hose",
        price: 124.00,
        description: "10m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 18,
        name: "Delivery Hose Kit 8m",
        category: "Low Pressure Hose",
        price: 97.00,
        description: "8m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 19,
        name: "Delivery Hose Kit 6m",
        category: "Low Pressure Hose",
        price: 70.33,
        description: "6m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "",
        rating: 4.2,
        popularity: 84
    },
    {
        id: 20,
        name: "Delivery Hose Kit 4m",
        category: "Low Pressure Hose",
        price: 56.42,
        description: "4m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "",
        rating: 4.1,
        popularity: 83
    },
    {
        id: 21,
        name: "1″ Diesel Suction Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 198.89,
        description: "9.3 Bar @ 23°C working pressure 1\" internal diameter COMPLETE 30m COIL Blue reinforced PVC/Nylon -10 to 55°C working temperature UV & ozone resistant",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 22,
        name: "1″ Diesel Suction Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 7.37,
        description: "9.3 Bar @ 23°C working pressure 1\" internal diameter SOLD BY THE METRE Blue reinforced PVC/Nylon -10 to 55°C working temperature UV & ozone resistant Max complete length = 30m",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 23,
        name: "1″ Diesel Delivery Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 279.70,
        description: "7 Bar @ 23°C working pressure 1\" internal diameter COMPLETE 50m COIL Black rubber PVC alloy -10 to 55°C working temperature UV & ozone resistant",
        image: "",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 24,
        name: "1″ Diesel Delivery Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 6.22,
        description: "7 Bar @ 23°C working pressure 1\" internal diameter SOLD BY THE METRE Black rubber PVC alloy -10 to 55°C working temperature UV & ozone resistant Max complete length = 50m",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 25,
        name: "4″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 581.00,
        description: "4 Bar @ 20°C working pressure 103mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.7,
        popularity: 91
    },

    // Air Fresheners
    {
        id: 26,
        name: "Air Freshener Ocean Breeze",
        category: "Air Fresheners",
        price: 8.50,
        description: "Long-lasting ocean breeze fragrance. Perfect for offices, cars, and homes. 30-day continuous fragrance release.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 27,
        name: "Air Freshener Vanilla",
        category: "Air Fresheners",
        price: 8.50,
        description: "Sweet vanilla fragrance. Long-lasting scent for vehicles and indoor spaces. 30-day continuous release.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 28,
        name: "Air Freshener Lavender",
        category: "Air Fresheners",
        price: 8.50,
        description: "Calming lavender fragrance. Perfect for creating a relaxing atmosphere. 30-day continuous fragrance release.",
        image: "",
        rating: 4.4,
        popularity: 86
    },

    // Couplings & Housings
    {
        id: 29,
        name: "Industrial Coupling Set 1/2 inch",
        category: "Couplings & Housings",
        price: 45.00,
        description: "Heavy-duty industrial coupling set. Corrosion resistant, high pressure rating. Includes mounting hardware.",
        image: "",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 30,
        name: "Coupling Set 3/4 inch",
        category: "Couplings & Housings",
        price: 52.00,
        description: "Professional coupling set with 3/4 inch connections. Brass construction. High pressure rating.",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 31,
        name: "Housing Assembly Complete",
        category: "Couplings & Housings",
        price: 68.00,
        description: "Complete housing assembly for pressure washer systems. Weatherproof design. Easy installation.",
        image: "",
        rating: 4.4,
        popularity: 85
    },

    // Electric Motors
    {
        id: 32,
        name: "Electric Motor 1.5HP 3 Phase",
        category: "Electric Motors",
        price: 285.00,
        description: "Industrial grade 1.5HP three-phase electric motor. IP55 protection rating. Suitable for continuous operation.",
        image: "",
        rating: 4.7,
        popularity: 91
    },
    {
        id: 33,
        name: "Electric Motor 2HP Single Phase",
        category: "Electric Motors",
        price: 320.00,
        description: "2HP single-phase electric motor. IP55 protection. Suitable for commercial applications.",
        image: "",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 34,
        name: "Electric Motor 3HP 3 Phase",
        category: "Electric Motors",
        price: 450.00,
        description: "Heavy-duty 3HP three-phase motor. IP65 protection. Industrial grade construction.",
        image: "",
        rating: 4.8,
        popularity: 93
    },

    // Electricals
    {
        id: 35,
        name: "Electrical Junction Box IP65",
        category: "Electricals",
        price: 18.50,
        description: "Weatherproof electrical junction box with IP65 rating. UV resistant plastic construction.",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 36,
        name: "Pressure Switch 0-10 Bar",
        category: "Pressure Switches",
        price: 35.00,
        description: "Adjustable pressure switch with 0-10 bar range. NPT threaded connections. LED indicator included.",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 37,
        name: "Pressure Switch 0-20 Bar",
        category: "Pressure Switches",
        price: 42.00,
        description: "High-range pressure switch 0-20 bar. Digital display. Weatherproof housing.",
        image: "",
        rating: 4.6,
        popularity: 90
    },

    // Petrol Engine Pressure Washers
    {
        id: 38,
        name: "Petrol Pressure Washer 2000 PSI",
        category: "Petrol Engine Pressure Washers",
        price: 450.00,
        description: "Heavy-duty petrol pressure washer with 2000 PSI output. Honda engine, 25L/min flow rate. Perfect for commercial use.",
        image: "",
        rating: 4.8,
        popularity: 94
    },
    {
        id: 39,
        name: "Petrol Pressure Washer 3000 PSI",
        category: "Petrol Engine Pressure Washers",
        price: 580.00,
        description: "Professional petrol pressure washer 3000 PSI. Honda GX engine. 30L/min flow rate. Commercial grade.",
        image: "",
        rating: 4.9,
        popularity: 96
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
    },

    // Additional products from benichem.co.uk
    // Silicones
    {
        id: 81,
        name: "SILICONE TUTTI FRUTTI – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: TUTTI FRUTTI. Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "",
        rating: 4.4,
        popularity: 87
    },
    {
        id: 82,
        name: "SILICONE LEMON – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: LEMON. Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "",
        rating: 4.3,
        popularity: 85
    },

    // Air Fresheners
    {
        id: 83,
        name: "BLAST AEROSOL AIR FRESHENER (PACK OF 12) – Lemon",
        category: "Air Fresheners",
        price: 30.00,
        description: "Pack of 12 aerosol air fresheners with Lemon fragrance. Perfect for car detailing and interior freshening.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 84,
        name: "BLAST AEROSOL AIR FRESHENER (PACK OF 12) – Savage",
        category: "Air Fresheners",
        price: 30.00,
        description: "Pack of 12 aerosol air fresheners with Savage fragrance. Perfect for car detailing and interior freshening.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 85,
        name: "BLAST AEROSOL AIR FRESHENER (PACK OF 12) – Cosmo",
        category: "Air Fresheners",
        price: 30.00,
        description: "Pack of 12 aerosol air fresheners with Cosmo fragrance. Perfect for car detailing and interior freshening.",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 86,
        name: "HANGING AIR FRESHENERS – 25pcs",
        category: "Air Fresheners",
        price: 3.00,
        description: "Pack of 25 hanging air fresheners. Various fragrances available. Perfect for car interiors and detailing.",
        image: "",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 87,
        name: "TROPICAL AIR FRESHENER – 24pcs",
        category: "Air Fresheners",
        price: 40.00,
        description: "Pack of 24 tropical air fresheners. Perfect for car detailing and interior freshening.",
        image: "",
        rating: 4.1,
        popularity: 78
    },

    // Additional Chemicals
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
    },

    // Additional Accessories
    {
        id: 133,
        name: "Vikan Wipe'n'Shine Water Remover",
        category: "Accessories",
        price: 7.22,
        description: "Vikan Wipe'n'Shine water remover for drying surfaces after cleaning.",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 134,
        name: "Vikan 240mm Wheel Rim Brush",
        category: "Accessories",
        price: 22.60,
        description: "Vikan 240mm wheel rim brush for cleaning car wheels and rims.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 135,
        name: "Vikan 370mm Body Work Brush",
        category: "Accessories",
        price: 29.30,
        description: "Vikan 370mm body work brush for car detailing and cleaning.",
        image: "",
        rating: 4.3,
        popularity: 84
    },

    // Additional Low Pressure Hose
    {
        id: 136,
        name: "Reinforced PVC Hose 40 Bar 10mm id 40m coil",
        category: "Low Pressure Hose",
        price: 143.00,
        description: "40 Bar @ 20°C working pressure 10mm id - 16mm od 40m coil Polyester reinforced PVC -10°C to 50°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 137,
        name: "Reinforced PVC Hose 40 Bar 8mm id 50m coil",
        category: "Low Pressure Hose",
        price: 194.65,
        description: "40 Bar @ 20°C working pressure 8mm id - 14mm od 50m coil Polyester reinforced PVC -10°C to 50°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 138,
        name: "1″ Diesel Suction Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 198.89,
        description: "1 inch diesel suction hose in 30m coil. Professional fuel transfer hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 139,
        name: "1″ Diesel Suction Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 7.37,
        description: "1 inch diesel suction hose sold per metre. Professional fuel transfer hose.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 140,
        name: "1″ Diesel Delivery Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 279.70,
        description: "1 inch diesel delivery hose in 50m coil. Professional fuel transfer hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 141,
        name: "1″ Diesel Delivery Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 6.22,
        description: "1 inch diesel delivery hose sold per metre. Professional fuel transfer hose.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 142,
        name: "4″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 581.00,
        description: "4 inch layflat hose in 100m coil. Professional water transfer hose.",
        image: "",
        rating: 4.5,
        popularity: 88
    },

    // Additional High Pressure Hose
    {
        id: 143,
        name: "3/8″ High Pressure Hose – 20m",
        category: "Jet Wash Hose Assemblies",
        price: 17.75,
        description: "3/8 inch high pressure hose, 20m length. Professional pressure washing hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 144,
        name: "3/8″ High Pressure Hose – 15m",
        category: "Jet Wash Hose Assemblies",
        price: 15.22,
        description: "3/8 inch high pressure hose, 15m length. Professional pressure washing hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 145,
        name: "3/8″ High Pressure Hose – 10m",
        category: "Jet Wash Hose Assemblies",
        price: 8.35,
        description: "3/8 inch high pressure hose, 10m length. Professional pressure washing hose.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 146,
        name: "3/8″ High Pressure Hose – 25m",
        category: "Jet Wash Hose Assemblies",
        price: 19.62,
        description: "3/8 inch high pressure hose, 25m length. Professional pressure washing hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 147,
        name: "3/8″ High Pressure Hose – 12m",
        category: "Jet Wash Hose Assemblies",
        price: 16.09,
        description: "3/8 inch high pressure hose, 12m length. Professional pressure washing hose.",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 148,
        name: "3/8″ High Pressure Hose – 8m",
        category: "Jet Wash Hose Assemblies",
        price: 14.43,
        description: "3/8 inch high pressure hose, 8m length. Professional pressure washing hose.",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 149,
        name: "3/8″ High Pressure Hose – 5m",
        category: "Jet Wash Hose Assemblies",
        price: 6.78,
        description: "3/8 inch high pressure hose, 5m length. Professional pressure washing hose.",
        image: "",
        rating: 4.1,
        popularity: 78
    },

    // Low Pressure Hose – full catalogue from BeniChem
    {
        id: 150,
        name: "Mosmatic DDP Series Dual Ceiling Boom L1 1750mm long L2 1900mm long",
        category: "Low Pressure Hose",
        price: 1922.00,
        description: "L1 1750mm long L2 1900mm long 360° rotation 275 Bar max pressure 40 Lpm max flow 120°C max temperature 304 stainless steel 2x 1/4\"BSPF inlets 2x 3/8\"BSPM swivel outlets 19.2Kg",
        image: "",
        rating: 4.5,
        popularity: 90
    },
    {
        id: 151,
        name: "Mosmatic WAE Series Wall Boom",
        category: "Low Pressure Hose",
        price: 1025.00,
        description: "1450mm long 180° rotation 275 Bar max pressure 40 Lpm max flow 120°C max temperature 304 stainless steel Variable park feature 1/4\"BSPF inlet 3/8\"BSPM swivel outlet 10.2Kg",
        image: "",
        rating: 4.5,
        popularity: 89
    },
    {
        id: 152,
        name: "DFK Foam Injection Lance Kit",
        category: "Low Pressure Hose",
        price: 213.81,
        description: "200 Bar max pressure 15 Lpm max flow 60°C max temperature Includes trigger extension, foam injection head, 0.5L tank, multireg extension, 1.4-1.7 nozzles",
        image: "",
        rating: 4.4,
        popularity: 88
    },
    {
        id: 153,
        name: "3/8″ High Pressure Hose 1730mm",
        category: "Low Pressure Hose",
        price: 17.75,
        description: "1730mm - 2 wire rubber hose 400 Bar rated pressure 2x 3/8\"BSPF thread 90° ports 150°C max temperature 795 Bar test pressure 1320 Bar burst pressure",
        image: "",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 154,
        name: "3/8″ High Pressure Hose 1180mm",
        category: "Low Pressure Hose",
        price: 15.22,
        description: "1180mm - 2 wire rubber hose 400 Bar rated pressure 2x 3/8\"BSPF thread 90° ports 150°C max temperature 795 Bar test pressure 1320 Bar burst pressure",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 155,
        name: "3/8″ High Pressure Hose 770mm",
        category: "Low Pressure Hose",
        price: 8.35,
        description: "770mm - 2 wire rubber hose 400 Bar rated pressure 1x 3/8\"BSPF thread 90° port 1x 3/8\"BSPF thread straight port 150°C max temperature 795 Bar test pressure 1320 Bar burst pressure",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 156,
        name: "3/8″ High Pressure Hose 590mm",
        category: "Low Pressure Hose",
        price: 19.62,
        description: "590mm - 2 wire rubber hose 400 Bar rated pressure 1x 3/8\"BSPF thread 45° port 1x 3/8\"BSPF thread straight port 150°C max temperature 795 Bar test pressure 1320 Bar burst pressure",
        image: "",
        rating: 4.2,
        popularity: 83
    },
    {
        id: 157,
        name: "3/8″ High Pressure Hose 870mm",
        category: "Low Pressure Hose",
        price: 16.09,
        description: "870mm - 2 wire rubber hose 400 Bar rated pressure 1x 3/8\"BSPF thread 45° port 1x 3/8\"BSPF thread 90° port 150°C max temperature 795 Bar test pressure 1320 Bar burst pressure",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 158,
        name: "3/8″ High Pressure Hose 355mm",
        category: "Low Pressure Hose",
        price: 14.43,
        description: "355mm - 1 wire rubber hose 250 Bar rated pressure 2x 3/8\"BSPF thread straight ports 150°C max temperature 435 Bar test pressure 720 Bar burst pressure",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 159,
        name: "3/8″ High Pressure Hose 330mm",
        category: "Low Pressure Hose",
        price: 6.78,
        description: "330mm - 1 wire rubber hose 210 Bar rated pressure 1x 3/8\"BSPF thread 90° port 1x 3/8\"BSPF thread straight port 150°C max temperature 435 Bar test pressure 720 Bar burst pressure",
        image: "",
        rating: 4.1,
        popularity: 79
    },
    {
        id: 160,
        name: "Reinforced PVC Hose 40 Bar 10mm id 20m coil",
        category: "Low Pressure Hose",
        price: 71.00,
        description: "40 Bar @ 20°C working pressure 10mm id - 16mm od 20m coil Polyester reinforced PVC -10°C to 50°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 161,
        name: "4″ Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 6.45,
        description: "4 Bar @ 20°C working pressure 103mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 162,
        name: "3″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 396.00,
        description: "4 Bar @ 20°C working pressure 77mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 163,
        name: "3″ Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 4.41,
        description: "4 Bar @ 20°C working pressure 77mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 164,
        name: "2″ Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 2.65,
        description: "4.5 Bar @ 20°C working pressure 52mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 165,
        name: "2″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 237.00,
        description: "4.5 Bar @ 20°C working pressure 52mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 166,
        name: "1″1/2 Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 215.00,
        description: "5 Bar @ 20°C working pressure 40mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 167,
        name: "1″1/2 Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 2.40,
        description: "5 Bar @ 20°C working pressure 40mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 168,
        name: "1″1/4 Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 1.89,
        description: "7 Bar @ 20°C working pressure 32mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 169,
        name: "1″1/4 Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.89,
        description: "7 Bar @ 20°C working pressure 32mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 170,
        name: "1″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 152.00,
        description: "7 Bar @ 20°C working pressure 25mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 171,
        name: "1″ Layflat Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.68,
        description: "7 Bar @ 20°C working pressure 25mm internal diameter SOLD BY THE METRE Blue industrial layflat hose -25°C to 60°C working temperature Max complete length = 100m",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 172,
        name: "4″ Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 710.00,
        description: "4 Bar @ 23°C working pressure 102mm id - 6.3mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.6,
        popularity: 90
    },
    {
        id: 173,
        name: "4″ Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 26.32,
        description: "4 Bar @ 23°C working pressure 102mm id - 6.3mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 174,
        name: "3″ Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 263.00,
        description: "4 Bar @ 23°C working pressure 76mm id - 5.2mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 175,
        name: "3″ Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 17.77,
        description: "4 Bar @ 23°C working pressure 76mm id - 5.2mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 176,
        name: "2″ Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 263.00,
        description: "6 Bar @ 23°C working pressure 51.6mm id - 4.1mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 177,
        name: "2″ Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 9.77,
        description: "6 Bar @ 23°C working pressure 51.6mm id - 4.1mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 178,
        name: "1″1/2 Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 176.45,
        description: "6.5 Bar @ 23°C working pressure 38mm id - 3.7mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 179,
        name: "1″1/2 Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 6.54,
        description: "6.5 Bar @ 23°C working pressure 38mm id - 3.7mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 180,
        name: "1″1/4 Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 148.14,
        description: "7 Bar @ 23°C working pressure 32mm id - 3.6mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 181,
        name: "1″1/4 Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 5.48,
        description: "7 Bar @ 23°C working pressure 32mm id - 3.6mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 182,
        name: "1″ Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 110.79,
        description: "8 Bar @ 23°C working pressure 25.4mm id - 3.3mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 183,
        name: "1″ Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 4.11,
        description: "8 Bar @ 23°C working pressure 25.4mm id - 3.3mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 184,
        name: "3/4″ Suction/Delivery Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 96.00,
        description: "9 Bar @ 23°C working pressure 19mm id - 2.8mm wall thickness COMPLETE 30m COIL Reinforced PVC delivery/suction hose -10°C to 55°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 185,
        name: "3/4″ Suction/Delivery Hose – per metre",
        category: "Low Pressure Hose",
        price: 3.54,
        description: "9 Bar @ 23°C working pressure 19mm id - 2.8mm wall thickness SOLD BY THE METRE Reinforced PVC delivery/suction hose -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 186,
        name: "1″ Wire Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 203.00,
        description: "10 Bar @ 23°C working pressure 25mm internal diameter COMPLETE 30m COIL Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 187,
        name: "1″ Wire Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 7.55,
        description: "10 Bar @ 23°C working pressure 25mm internal diameter SOLD BY THE METRE Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 188,
        name: "3/4″ Wire Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 143.76,
        description: "11 Bar @ 23°C working pressure 19mm internal diameter COMPLETE 30m COIL Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 189,
        name: "3/4″ Wire Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 5.33,
        description: "11 Bar @ 23°C working pressure 19mm internal diameter SOLD BY THE METRE Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 190,
        name: "5/8″ Wire Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 158.89,
        description: "10 Bar @ 23°C working pressure 16mm internal diameter COMPLETE 30m COIL Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 191,
        name: "5/8″ Wire Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 5.89,
        description: "10 Bar @ 23°C working pressure 16mm internal diameter SOLD BY THE METRE Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 192,
        name: "1/2″ Wire Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 117.35,
        description: "12 Bar @ 23°C working pressure 12mm internal diameter COMPLETE 30m COIL Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 193,
        name: "1/2″ Wire Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 4.34,
        description: "12 Bar @ 23°C working pressure 12mm internal diameter SOLD BY THE METER Steel wire reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 194,
        name: "1″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 132.00,
        description: "13 Bar @ 23°C working pressure 25mm id - 33mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 195,
        name: "1″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 4.90,
        description: "13 Bar @ 23°C working pressure 25mm id - 33mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 196,
        name: "3/4″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 89.64,
        description: "15 Bar @ 23°C working pressure 20mm id - 26mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 197,
        name: "3/4″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 3.32,
        description: "15 Bar @ 23°C working pressure 20mm id - 26mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 198,
        name: "5/8″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 84.41,
        description: "15 Bar @ 23°C working pressure 16mm id - 23mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 199,
        name: "5/8″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 3.14,
        description: "15 Bar @ 23°C working pressure 16mm id - 23mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 200,
        name: "1/2″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 52.55,
        description: "16 Bar @ 23°C working pressure 12.5mm id - 18.5mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 201,
        name: "1/2″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.94,
        description: "16 Bar @ 23°C working pressure 12.5mm id - 18.5mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 202,
        name: "3/8″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 31.29,
        description: "20 Bar @ 23°C working pressure 10mm id - 16mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 203,
        name: "3/8″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.81,
        description: "20 Bar @ 23°C working pressure 10mm id - 16mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.1,
        popularity: 79
    },
    {
        id: 204,
        name: "5/16″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 28.48,
        description: "21 Bar @ 23°C working pressure 8mm id - 13.5mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 205,
        name: "5/16″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.05,
        description: "21 Bar @ 23°C working pressure 8mm id - 13.5mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 206,
        name: "1/4″ Clear Reinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 31.29,
        description: "22 Bar @ 23°C working pressure 6.3mm id - 11.5mm od COMPLETE 30m COIL Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 207,
        name: "1/4″ Clear Reinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.15,
        description: "22 Bar @ 23°C working pressure 6.3mm id - 11.5mm od SOLD BY THE METRE Polyester reinforced clear PVC FDA approved Conforms to EC1935/2004 -10°C to 60°C working temperature Max complete length = 30m",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 208,
        name: "1″1/2 Clear Unreinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 150.00,
        description: "38mm id - 47mm od COMPLETE 30m COIL Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 209,
        name: "1″1/2 Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 5.58,
        description: "38mm id - 47mm od SOLD BY THE METRE Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 210,
        name: "1″1/4 Clear Unreinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 92.34,
        description: "32mm id - 38mm od COMPLETE 30m COIL Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 211,
        name: "1″1/4 Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 2.75,
        description: "32mm id - 38mm od SOLD BY THE METER Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.1,
        popularity: 80
    },
    {
        id: 212,
        name: "3/4″ Clear Unreinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 74.63,
        description: "19mm id - 25mm od COMPLETE 30m COIL Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 213,
        name: "3/4″ Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 2.75,
        description: "19mm id - 25mm od SOLD BY THE METRE Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.1,
        popularity: 79
    },
    {
        id: 214,
        name: "1/2″ Clear Unreinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 40.32,
        description: "12mm id - 15mm od COMPLETE 30m COIL Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 215,
        name: "1/2″ Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.50,
        description: "12mm id - 15mm od SOLD BY THE METRE Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 216,
        name: "8mm Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 0.84,
        description: "8mm id - 11mm od SOLD BY THE METRE Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.0,
        popularity: 76
    },
    {
        id: 217,
        name: "6mm Clear Unreinforced PVC Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 14.46,
        description: "6mm id - 9mm od COMPLETE 30m COIL Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 218,
        name: "6mm Clear Unreinforced PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 0.54,
        description: "6mm id - 9mm od SOLD BY THE METRE Clear unreinforced PVC hose FDA approved Conforms to EC1935/2004 -10°C to 55°C working temperature",
        image: "",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 219,
        name: "1″ Extra Flex PVC Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 179.00,
        description: "10 Bar @ 23°C working pressure 25mm id - 32.5mm od COMPLETE 50m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 220,
        name: "1″ Extra Flex PVC Hose – 25m Coil",
        category: "Low Pressure Hose",
        price: 89.92,
        description: "10 Bar @ 23°C working pressure 25mm id - 32.5mm od COMPLETE 25m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 221,
        name: "1″ Extra Flex PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 4.00,
        description: "10 Bar @ 23°C working pressure 25mm id - 32.5mm od SOLD BY THE METRE Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 222,
        name: "3/4″ Extra Flex PVC Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 110.00,
        description: "10 Bar @ 23°C working pressure 19mm id - 25.5mm od COMPLETE 50m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.4,
        popularity: 85
    },
    {
        id: 223,
        name: "3/4″ Extra Flex PVC Hose – 25m Coil",
        category: "Low Pressure Hose",
        price: 55.69,
        description: "10 Bar @ 23°C working pressure 19mm id - 25.5mm od COMPLETE 25m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 224,
        name: "3/4″ Extra Flex PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 2.45,
        description: "10 Bar @ 23°C working pressure 19mm id - 25.5mm od SOLD BY THE METRE Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 225,
        name: "5/8″ Extra Flex PVC Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 58.00,
        description: "10 Bar @ 23°C working pressure 16mm id - 20.3mm od COMPLETE 50m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 226,
        name: "5/8″ Extra Flex PVC Hose – 25m Coil",
        category: "Low Pressure Hose",
        price: 33.00,
        description: "10 Bar @ 23°C working pressure 16mm id - 20.3mm od COMPLETE 25m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 227,
        name: "5/8″ Extra Flex PVC Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 1.43,
        description: "10 Bar @ 23°C working pressure 16mm id - 20.3mm od SOLD BY THE METRE Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 228,
        name: "1/2″ Extra Flex PVC Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 58.03,
        description: "10 Bar @ 23°C working pressure 12.5mm id - 17.5mm od COMPLETE 50m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 229,
        name: "1/2″ Extra Flex PVC Hose – 25m Coil",
        category: "Low Pressure Hose",
        price: 29.00,
        description: "10 Bar @ 23°C working pressure 12.5mm id - 17.5mm od COMPLETE 25m COIL Premium yellow PVC braided hose Polyester fibre reinforcement -10°C to 60°C working temperature",
        image: "",
        rating: 4.2,
        popularity: 81
    }
];

// Cart functionality - make cart globally accessible
let cart = [];
let currentProducts = [...products];

// Cart persistence functions
function saveCartToStorage() {
    try {
        localStorage.setItem('benichem_cart', JSON.stringify(cart));
        // Also update global cart reference
        window.cart = cart;
    } catch (e) {
        console.error('Error saving cart to localStorage:', e);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('benichem_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            // Also update global cart reference
            window.cart = cart;
            return true;
        }
    } catch (e) {
        console.error('Error loading cart from localStorage:', e);
    }
    return false;
}

// Load cart when script loads (before DOMContentLoaded)
loadCartFromStorage();

// DOM Elements - will be initialized when DOM is ready
let productsGrid;
let cartSidebar;
let cartItems;
let cartCount;
let cartTotal;
let searchInput;
let navMenu;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage first
    loadCartFromStorage();
    
    // Initialize DOM elements
    productsGrid = document.getElementById('productsGrid');
    cartSidebar = document.getElementById('cartSidebar');
    cartItems = document.getElementById('cartItems');
    cartCount = document.getElementById('cartCount');
    cartTotal = document.getElementById('cartTotal');
    searchInput = document.getElementById('searchInput');
    navMenu = document.getElementById('navMenu');
    
    // Only initialize products display if on index page (not col pages)
    // Col pages will set window.products and call displayProducts themselves
    if (productsGrid && !window.products) {
        // Only display if we're on the index page (no col script has overridden products)
        displayProducts(currentProducts);
    }
    
    // Always update cart display
    updateCartDisplay();
    
    // Add event listeners
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

    // Add dropdown menu click functionality
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Toggle active state
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });
    
    // Close dropdown when clicking outside or on regular links
    document.addEventListener('click', function(e) {
        // Close dropdowns
        dropdownItems.forEach(item => {
            if (!item.contains(e.target)) {
                item.classList.remove('active');
            }
        });
        
        // Allow regular links to work
        if (e.target.tagName === 'A' && !e.target.closest('.dropdown-menu')) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Close cart when clicking outside (but not when clicking inside cart)
    if (cartSidebar) {
        document.addEventListener('click', function(e) {
            // Don't close if clicking inside the cart sidebar or any of its children
            if (cartSidebar.contains(e.target)) {
                return;
            }
            // Don't close if clicking the cart icon
            if (e.target.closest('.cart-icon')) {
                return;
            }
            // Don't close if clicking on buttons inside cart-item-controls
            if (e.target.closest('.cart-item-controls')) {
                return;
            }
            // Don't close if clicking on remove buttons
            if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
                return;
            }
            // Close cart if clicking outside
            if (cartSidebar.classList.contains('open')) {
                cartSidebar.classList.remove('open');
            }
        });
    }
});

// Placeholder image when product has no image URL (category-based)
// Dedicated image for Low Pressure Hose; placeholder for others when no image set
var LOW_PRESSURE_HOSE_IMAGE = 'https://placehold.co/400x300/0f172a/38bdf8?text=Low+Pressure+Hose';

function getProductImageUrl(product) {
    if (product && product.image) return product.image;
    if (product && product.category === 'Low Pressure Hose') return LOW_PRESSURE_HOSE_IMAGE;
    const category = (product && product.category) ? product.category : 'Product';
    const text = encodeURIComponent(category.length > 18 ? category.substring(0, 18) + '…' : category);
    return `https://placehold.co/400x300/0f172a/94a3b8?text=${text}`;
}

// Display products
function displayProducts(productsToShow) {
    if (!productsGrid) {
        productsGrid = document.getElementById('productsGrid');
    }
    
    if (!productsGrid) {
        console.error('productsGrid element not found');
        return;
    }
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="showProduct(${product.id})" style="cursor: pointer;">
                <img src="${getProductImageUrl(product)}" alt="${product.name}">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-details">
                <h3 class="product-title" onclick="showProduct(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)} exc. VAT</div>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

function formatPrice(value) {
    try {
        const num = Number(value) || 0;
        return num.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    } catch (e) {
        return '£' + (Number(value) || 0).toFixed(2);
    }
}

// Featured products helper - chooses top N by popularity then rating
function getFeaturedProducts(count = 4) {
    const productsArray = window.products || products;
    return [...productsArray].sort((a, b) => {
        if ((b.popularity || 0) !== (a.popularity || 0)) return (b.popularity || 0) - (a.popularity || 0);
        return (b.rating || 0) - (a.rating || 0);
    }).slice(0, count);
}

function renderFeaturedProducts(count = 4) {
    const featuredSection = document.getElementById('featuredProducts');
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredSection || !featuredGrid) return;
    const featured = getFeaturedProducts(count);
    featuredGrid.innerHTML = '';
    featured.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="showProduct(${product.id})" style="cursor: pointer;">
                <img src="${getProductImageUrl(product)}" alt="${product.name}">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-details">
                <h3 class="product-title" onclick="showProduct(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)} exc. VAT</div>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to cart</button>
            </div>
        `;
        featuredGrid.appendChild(productCard);
    });
    featuredSection.style.display = 'block';
    // Scroll featured into view smoothly
    featuredSection.scrollIntoView({ behavior: 'smooth' });
}

// Add to cart
function addToCart(productId) {
    // Use window.products if available (for col pages), otherwise use default products
    const productsArray = window.products || products;
    const product = productsArray.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update global cart reference
    window.cart = cart;
    
    // Save cart to localStorage
    saveCartToStorage();
    
    // Open cart and keep it open
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    if (cartSidebar) {
        cartSidebar.classList.add('open');
    }
    
    // Pulse cart icon to draw attention
    const cartIconEl = document.querySelector('.cart-icon');
    if (cartIconEl) {
        cartIconEl.classList.add('pulse');
        cartIconEl.addEventListener('animationend', function() {
            cartIconEl.classList.remove('pulse');
        }, { once: true });
    }
    
    updateCartDisplay();
    showNotification('Product added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    // Ensure cart sidebar stays open
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    const wasOpen = cartSidebar && cartSidebar.classList.contains('open');
    
    cart = cart.filter(item => item.id !== productId);
    // Update global cart reference
    window.cart = cart;
    
    // Save cart to localStorage
    saveCartToStorage();
    
    // Keep cart open - ensure it stays open
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    if (cartSidebar) {
        cartSidebar.classList.add('open');
    }
    
    updateCartDisplay();
    
    // Force cart to stay open after DOM update
    setTimeout(function() {
        if (cartSidebar) {
            cartSidebar.classList.add('open');
        }
    }, 0);
}

// Update cart quantity
function updateCartQuantity(productId, newQuantity) {
    // Ensure cart sidebar stays open
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    const wasOpen = cartSidebar && cartSidebar.classList.contains('open');
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            // Update global cart reference
            window.cart = cart;
            
            // Save cart to localStorage
            saveCartToStorage();
            
            // Keep cart open - ensure it stays open
            if (!cartSidebar) {
                cartSidebar = document.getElementById('cartSidebar');
            }
            if (cartSidebar) {
                cartSidebar.classList.add('open');
            }
            
            updateCartDisplay();
            
            // Force cart to stay open after DOM update
            setTimeout(function() {
                if (cartSidebar) {
                    cartSidebar.classList.add('open');
                }
            }, 0);
        }
    }
}

// Update cart display
function updateCartDisplay() {
    if (!cartItems) {
        cartItems = document.getElementById('cartItems');
    }
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${getProductImageUrl(item)}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price)} each</div>
                    <div class="cart-item-controls">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                    <div class="cart-item-subtotal">Subtotal: ${formatPrice(item.price * item.quantity)}</div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update cart count and total
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (!cartCount) {
        cartCount = document.getElementById('cartCount');
    }
    if (!cartTotal) {
        cartTotal = document.getElementById('cartTotal');
    }
    
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
    if (cartTotal) {
        cartTotal.textContent = formatPrice(totalPrice);
        cartTotal.classList.add('flash');
        cartTotal.addEventListener('animationend', function() { cartTotal.classList.remove('flash'); }, { once: true });
    }
    
    // Update header cart total
    const cartTotalHeader = document.getElementById('cartTotalHeader');
    if (cartTotalHeader) {
        cartTotalHeader.textContent = formatPrice(totalPrice);
        cartTotalHeader.classList.add('flash');
        cartTotalHeader.addEventListener('animationend', function() { cartTotalHeader.classList.remove('flash'); }, { once: true });
    }
}

// Toggle cart sidebar
function toggleCart() {
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

// Analytics helper (respect cookie preferences)
function getCookiePreferences() {
    try {
        const raw = localStorage.getItem('benichem_cookie_preferences');
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

// Update visible status labels inside the cookie modal (Allowed / Not allowed)
function updateCookieStatusLabels() {
    try {
        const a = document.getElementById('prefAnalytics');
        const m = document.getElementById('prefMarketing');
        const sA = document.getElementById('statusAnalytics');
        const sM = document.getElementById('statusMarketing');
        if (sA) {
            const ok = !!(a && a.checked);
            sA.textContent = ok ? 'Allowed' : 'Not allowed';
            sA.classList.toggle('allowed', ok);
        }
        if (sM) {
            const ok = !!(m && m.checked);
            sM.textContent = ok ? 'Allowed' : 'Not allowed';
            sM.classList.toggle('allowed', ok);
        }
    } catch (e) { /* ignore */ }
}

function saveCookiePreferences(prefs) {
    try {
        localStorage.setItem('benichem_cookie_preferences', JSON.stringify(prefs));
        updateGtagConsent(prefs);
        try { updateCookieStatusLabels(); } catch (e) {}
        try { window.dispatchEvent(new CustomEvent('cookieprefs:changed', { detail: prefs })); } catch (e) {}
    } catch (e) { console.error('Save cookie prefs error', e); }
} 

function updateGtagConsent(prefs) {
    try {
        if (window.gtag) {
            window.gtag('consent', 'update', { 'analytics_storage': prefs && prefs.analytics ? 'granted' : 'denied' });
        }
    } catch (e) { /* ignore */ }
}

function sendAnalyticsEvent(eventName, params = {}) {
    try {
        const prefs = getCookiePreferences();
        if (!prefs || prefs.analytics !== true) return;
        if (window.gtag) {
            window.gtag('event', eventName, params);
        }
    } catch (e) { console.error('Analytics error', e); }
}

// Helper to create the cookie preferences modal (idempotent)
function createCookieModal() {
    let modal = document.getElementById('cookieModal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'cookieModal';
    modal.className = 'cookie-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="cookie-modal-backdrop" tabindex="-1"></div>
        <div class="cookie-modal-content" role="dialog" aria-modal="true" aria-labelledby="cookieModalTitle">
            <button class="cookie-modal-close" aria-label="Close">&times;</button>
            <h2 id="cookieModalTitle">Cookie Preferences</h2>
            <p>Choose which cookies you allow. Necessary cookies are required for the site to work and cannot be disabled.</p>

            <div class="cookie-list">
                <div class="cookie-item">
                    <div class="cookie-item-left">
                        <h3>Necessary</h3>
                        <p>Essential for site function (e.g., cart, session).</p>
                    </div>
                    <div class="cookie-item-right">
                        <label class="switch"><input type="checkbox" disabled checked><span class="slider"></span></label>
                        <span class="cookie-status" id="statusNecessary">Allowed</span>
                    </div>
                </div>
                <div class="cookie-item">
                    <div class="cookie-item-left">
                        <h3>Analytics</h3>
                        <p>Helps us understand site usage to improve the experience.</p>
                    </div>
                    <div class="cookie-item-right">
                        <label class="switch"><input id="prefAnalytics" type="checkbox"><span class="slider"></span></label>
                        <span class="cookie-status" id="statusAnalytics" aria-live="polite">Not allowed</span>
                    </div>
                </div>
                <div class="cookie-item">
                    <div class="cookie-item-left">
                        <h3>Marketing</h3>
                        <p>Used for tailored promotions (optional).</p>
                    </div>
                    <div class="cookie-item-right">
                        <label class="switch"><input id="prefMarketing" type="checkbox"><span class="slider"></span></label>
                        <span class="cookie-status" id="statusMarketing" aria-live="polite">Not allowed</span>
                    </div>
                </div>
            </div>

            <div class="cookie-modal-actions">
                <button class="btn btn-outline cookie-save">Save preferences</button>
                <button class="btn cookie-accept-all">Accept all</button>
                <button class="btn btn-outline cookie-reject-all">Reject non-essential</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Live status updater
    function _localUpdate() { try{ updateCookieStatusLabels(); } catch(e){} }

    // Modal controls
    modal.querySelector('.cookie-modal-close').addEventListener('click', () => closeCookieSettings());
    modal.querySelector('.cookie-save').addEventListener('click', () => {
        const prefs = {
            necessary: true,
            analytics: !!document.getElementById('prefAnalytics').checked,
            marketing: !!document.getElementById('prefMarketing').checked
        };
        saveCookiePreferences(prefs);
        _localUpdate();
        closeCookieSettings();
        const bannerEl = document.querySelector('.cookie-consent'); if (bannerEl) bannerEl.remove();
    });
    modal.querySelector('.cookie-accept-all').addEventListener('click', () => {
        const prefs = { necessary: true, analytics: true, marketing: true };
        saveCookiePreferences(prefs);
        _localUpdate();
        closeCookieSettings();
        const bannerEl = document.querySelector('.cookie-consent'); if (bannerEl) bannerEl.remove();
    });

    // Backdrop click closes modal
    modal.querySelector('.cookie-modal-backdrop').addEventListener('click', () => closeCookieSettings());

    // Live updates when toggles change
    const aInput = modal.querySelector('#prefAnalytics');
    const mInput = modal.querySelector('#prefMarketing');
    if (aInput) aInput.addEventListener('change', () => updateCookieStatusLabels());
    if (mInput) mInput.addEventListener('change', () => updateCookieStatusLabels());

    // Make openCookieSettings available globally (for policy page button)
    window.openCookieSettings = () => {
        const prefs = getCookiePreferences();
        if (prefs) {
            const a = document.getElementById('prefAnalytics');
            const m = document.getElementById('prefMarketing');
            if (a) a.checked = !!prefs.analytics;
            if (m) m.checked = !!prefs.marketing;
        }
        updateCookieStatusLabels();
        openCookieSettings();
    };

    // ensure initial labels
    updateCookieStatusLabels();

    return modal;
} 

// Attach click handlers to any visible 'Manage' controls on the page so they always open the modal
function attachOpenSettingsHandlers() {
    const selectors = '#openCookieSettings, .open-cookie-settings, [data-open-cookie]';
    document.querySelectorAll(selectors).forEach(el => {
        // Avoid adding duplicate handlers
        if (el.dataset.openCookieHandlerAttached) return;
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const prefs = getCookiePreferences();
            if (prefs) {
                const a = document.getElementById('prefAnalytics');
                const m = document.getElementById('prefMarketing');
                if (a) a.checked = !!prefs.analytics;
                if (m) m.checked = !!prefs.marketing;
            }
            openCookieSettings();
        });
        el.dataset.openCookieHandlerAttached = '1';
    });
}

// Cookie consent banner + preferences modal
let lastFocusedElementBeforeModal = null;
let modalKeydownHandler = null;

function openCookieSettings() {
    // Ensure modal exists and prefill toggles
    const modal = createCookieModal();
    const prefs = getCookiePreferences();
    const a = document.getElementById('prefAnalytics');
    const m = document.getElementById('prefMarketing');
    if (a) a.checked = !!(prefs && prefs.analytics);
    if (m) m.checked = !!(prefs && prefs.marketing);

    // Open modal and manage accessibility
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    // Lock background scroll
    document.body.classList.add('cookie-modal-open');

    // Save current focus and move focus to close button
    try {
        lastFocusedElementBeforeModal = document.activeElement;
        const closeBtn = modal.querySelector('.cookie-modal-close');
        if (closeBtn) closeBtn.focus();
    } catch (e) { /* ignore focus errors */ }

    // Add key handlers: Escape to close, Tab to trap focus
    modalKeydownHandler = function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            closeCookieSettings();
            return;
        }
        if (e.key === 'Tab') {
            const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    };
    document.addEventListener('keydown', modalKeydownHandler);
}

function closeCookieSettings() {
    const modal = document.getElementById('cookieModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    // Remove scroll lock
    document.body.classList.remove('cookie-modal-open');

    // Remove key handler
    try {
        if (modalKeydownHandler) {
            document.removeEventListener('keydown', modalKeydownHandler);
            modalKeydownHandler = null;
        }
    } catch (e) { /* ignore */ }

    // Restore focus to previously focused element
    try {
        if (lastFocusedElementBeforeModal && typeof lastFocusedElementBeforeModal.focus === 'function') {
            lastFocusedElementBeforeModal.focus();
        }
    } catch (e) { /* ignore */ }
}

function initCookieConsent() {
    try {
        const existing = getCookiePreferences();

        // Ensure the modal exists so the "Manage" button works
        createCookieModal();

        // If the user already set preferences, apply them so analytics reflect consent
        if (existing) {
            const a = document.getElementById('prefAnalytics');
            const m = document.getElementById('prefMarketing');
            if (a) a.checked = !!existing.analytics;
            if (m) m.checked = !!existing.marketing;
            updateGtagConsent(existing);
            // Don't show banner if user already made a choice
            return;
        }

        // Create banner (only if user hasn't made a choice yet)
        const banner = document.createElement('div');
        banner.className = 'cookie-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.innerHTML = `
            <div class="cc-left">
                <strong>We use cookies</strong>
                <span class="cc-text">We use cookies to improve your experience and to analyse site usage. You can manage your preferences.</span>
            </div>
            <div class="cc-actions">
                <button class="btn cc-manage">Manage</button>
                <button class="btn btn-primary cc-accept">Accept all</button>
            </div>
        `;
        document.body.appendChild(banner);

        // Ensure modal exists and reuse its handlers
        createCookieModal();
        // Ensure modal exists and reuse its handlers
        createCookieModal();

        // Event handlers for the banner
        banner.querySelector('.cc-manage').addEventListener('click', () => {
            const prefs = getCookiePreferences();
            if (prefs) {
                const a = document.getElementById('prefAnalytics');
                const m = document.getElementById('prefMarketing');
                if (a) a.checked = !!prefs.analytics;
                if (m) m.checked = !!prefs.marketing;
            }
            openCookieSettings();
        });
        banner.querySelector('.cc-accept').addEventListener('click', () => {
            const prefs = { necessary: true, analytics: true, marketing: true };
            saveCookiePreferences(prefs);
            banner.remove();
            closeCookieSettings();
        });

    } catch (e) { console.error(e); }
}

// Go to checkout page - with analytics event
function goToCheckout() {
    // Ensure cart is loaded
    if (!cart || cart.length === 0) {
        // Try to load from localStorage
        loadCartFromStorage();
    }
    
    // Check if cart is empty
    if (!cart || cart.length === 0) {
        // Only show notification, don't prevent navigation
        if (typeof showNotification === 'function') {
            showNotification('Your cart is empty. Please add items before checkout.');
        }
        // Still allow navigation to checkout page (it will show empty cart message)
    }

    // Compute total for analytics
    const totalPrice = (cart || []).reduce((sum, item) => sum + (item.price * item.quantity), 0);
    sendAnalyticsEvent('begin_checkout', { value: Number(totalPrice.toFixed(2)), currency: 'GBP' });
    
    // Save cart to localStorage and navigate (short delay to allow analytics to send)
    saveCartToStorage();
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 150);
}

// Toggle mobile menu
function toggleMenu() {
    if (!navMenu) {
        navMenu = document.getElementById('navMenu');
    }
    const menuBtn = document.getElementById('menuToggle');
    if (navMenu) {
        const isOpen = navMenu.classList.toggle('open');
        if (menuBtn) {
            menuBtn.classList.toggle('open', isOpen);
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        }
    }
}

// Initialize cookie consent and header behaviors on load
document.addEventListener('DOMContentLoaded', function () {
    // Show cookie banner only on index page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        initCookieConsent();
    }
    // Attach handlers for any 'Manage cookie' controls present on pages (buttons, links)
    try { attachOpenSettingsHandlers(); } catch(e) { /* ignore */ }

    // header shrink on scroll
    const headerEl = document.querySelector('.header');
    const menuBtn = document.getElementById('menuToggle');
    const navMenuEl = document.getElementById('navMenu');

    function handleHeaderScroll() {
        if (!headerEl) return;
        if (window.scrollY > 30) headerEl.classList.add('header--scrolled');
        else headerEl.classList.remove('header--scrolled');
    }
    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Dropdowns on mobile: toggle on click
    document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth < 901) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenuEl || !menuBtn) return;
        if (!navMenuEl.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenuEl.classList.remove('open');
            menuBtn.classList.remove('open');
            menuBtn && menuBtn.setAttribute('aria-expanded','false');
        }
    });

    // Nav text entrance and hover animations
    const animatedNavLinks = document.querySelectorAll('.nav-link.anim-text');
    animatedNavLinks.forEach((link, i) => {
        setTimeout(() => link.classList.add('is-visible'), 120 * i);
    });

    // Only bind hover animations on devices that support hover (prevents touch devices from making text transparent/invisible)
    const supportsHover = (window.matchMedia && window.matchMedia('(hover: hover)').matches) || false;

    if (supportsHover) {
        animatedNavLinks.forEach(link => {
            link.addEventListener('mouseenter', () => link.classList.add('is-hover'));
            link.addEventListener('mouseleave', () => link.classList.remove('is-hover'));
        });
    } else {
        // Touch devices: provide a brief touch feedback that doesn't affect readability
        animatedNavLinks.forEach(link => {
            link.addEventListener('touchstart', () => {
                link.classList.add('touch-active');
                setTimeout(() => link.classList.remove('touch-active'), 260);
            }, { passive: true });
        });
    }
});

// Filter products
function filterProducts() {
    if (!searchInput) {
        searchInput = document.getElementById('searchInput');
    }
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    // Use window.products if available (for col pages), otherwise use default products
    const productsArray = window.products || products;
    
    if (searchTerm.trim() === '') {
        // If search is empty, show all products
        currentProducts = [...productsArray];
    } else {
        // Filter products based on search term
        currentProducts = productsArray.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Make sure we have productsGrid
    if (!productsGrid) {
        productsGrid = document.getElementById('productsGrid');
    }
    
    displayProducts(currentProducts);
    
    // Show search results indicator
    const searchResultsDiv = document.getElementById('searchResults');
    if (searchTerm.trim() !== '') {
        let resultDiv = document.getElementById('searchResults');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'searchResults';
            resultDiv.className = 'search-results-header';
            const productsSection = document.getElementById('products');
            if (productsSection && productsSection.parentNode) {
                productsSection.parentNode.insertBefore(resultDiv, productsSection);
            }
        }
        const resultCount = currentProducts.length;
        const resultText = resultCount === 1 ? 'product' : 'products';
        resultDiv.innerHTML = `<h2>Search Results: Found ${resultCount} ${resultText} for "${searchTerm}"</h2>`;
    } else if (searchResultsDiv) {
        searchResultsDiv.remove();
    }
}

// Filter products by category
function filterByCategory(categoryName) {
    if (!searchInput) {
        searchInput = document.getElementById('searchInput');
    }
    
    // Clear search input
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Use window.products if available (for col pages), otherwise use default products
    const productsArray = window.products || products;
    
    // Filter products based on category
    currentProducts = productsArray.filter(product =>
        product.category.toLowerCase() === categoryName.toLowerCase()
    );
    
    // Make sure we have productsGrid
    if (!productsGrid) {
        productsGrid = document.getElementById('productsGrid');
    }
    
    displayProducts(currentProducts);
    
    // Show category results indicator
    const searchResultsDiv = document.getElementById('searchResults');
    if (currentProducts.length > 0) {
        let resultDiv = document.getElementById('searchResults');
        if (!resultDiv) {
            resultDiv = document.createElement('div');
            resultDiv.id = 'searchResults';
            resultDiv.className = 'search-results-header';
            const productsSection = document.getElementById('products');
            if (productsSection && productsSection.parentNode) {
                productsSection.parentNode.insertBefore(resultDiv, productsSection);
            }
        }
        const resultCount = currentProducts.length;
        const resultText = resultCount === 1 ? 'product' : 'products';
        resultDiv.innerHTML = `<h2>${categoryName}: Found ${resultCount} ${resultText}</h2>`;
    } else if (searchResultsDiv) {
        searchResultsDiv.remove();
    }
    
    // Scroll to products section
    const productsSection = document.getElementById('products');
    if (productsSection) {
        setTimeout(() => {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    
    // Close dropdown menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('open');
    }
    
    // Close the dropdown by removing active state
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(item => {
        item.classList.remove('active');
    });
}


// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
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

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .cart-item-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }
    
    .cart-item-controls button:not(.remove-btn) {
        background: #3498db;
        color: white;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 3px;
        cursor: pointer;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .cart-item-controls button:not(.remove-btn):hover {
        background: #2980b9;
    }
    
    .cart-item-controls .remove-btn {
        background: transparent;
        color: #e74c3c;
        border: none;
        padding: 0;
        margin-left: 10px;
        cursor: pointer;
        font-size: 14px;
        font-weight: normal;
        text-decoration: underline;
        height: auto;
        width: auto;
    }
    
    .cart-item-controls .remove-btn:hover {
        color: #c0392b;
        text-decoration: none;
    }
    
    .cart-item-controls span {
        font-weight: bold;
        min-width: 20px;
        text-align: center;
        color: #333;
    }
`;
document.head.appendChild(style);



// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    if (!productsGrid) {
        productsGrid = document.getElementById('productsGrid');
    }
    if (productsGrid) {
        productsGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Loading products...</div>';
    }
}

// Add category filters function (for col pages)
function addCategoryFilters() {
    // This function can be overridden by col pages if needed
    // Default implementation does nothing
    return;
}

// Simulate loading (for demo purposes)
function simulateLoading() {
    showLoading();
    setTimeout(() => {
        displayProducts(currentProducts);
    }, 500);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cartSidebar.classList.remove('open');
        navMenu.classList.remove('open');
        closeProductModal();
    }
});

// Product Modal Functions
function showProduct(productId) {
    // Use window.products if available (for col pages), otherwise use default products
    const productsArray = window.products || products;
    const product = productsArray.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const productDetail = document.getElementById('productDetail');
    
    // Generate star rating
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    productDetail.innerHTML = `
        <div class="product-detail-image">
            <img src="${getProductImageUrl(product)}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <span class="product-detail-category">${product.category}</span>
            <h1 class="product-detail-title">${product.name}</h1>
            <div class="product-detail-price">${formatPrice(product.price)} exc. VAT</div>
            <div class="product-detail-rating">
                <span class="rating-stars">${stars}</span>
                <span class="rating-text">${product.rating}/5 (${product.popularity}% popularity)</span>
            </div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="quantity-input" id="modalQuantity" value="1" min="1">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <button class="add-to-cart-modal" onclick="addToCartFromModal(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('modalQuantity');
    let currentQuantity = parseInt(quantityInput.value);
    let newQuantity = currentQuantity + change;
    
    if (newQuantity < 1) newQuantity = 1;
    
    quantityInput.value = newQuantity;
}

function addToCartFromModal(productId) {
    const quantityInput = document.getElementById('modalQuantity');
    const quantity = parseInt(quantityInput.value) || 1;
    
    // Use window.products if available (for col pages), otherwise use default products
    const productsArray = window.products || products;
    const product = productsArray.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    saveCartToStorage();
    
    // Open cart and keep it open
    if (!cartSidebar) {
        cartSidebar = document.getElementById('cartSidebar');
    }
    if (cartSidebar) {
        cartSidebar.classList.add('open');
    }
    
    updateCartDisplay();
    showNotification(`${quantity} x ${product.name} added to cart!`);
    closeProductModal();
}

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && cartSidebar.classList.contains('open')) {
            // Swipe left - close cart
            cartSidebar.classList.remove('open');
        } else if (diff < 0 && !cartSidebar.classList.contains('open')) {
            // Swipe right - open cart
            cartSidebar.classList.add('open');
        }
    }
}

// Newsletter subscription function
function subscribeNewsletter() {
    const emailInput = document.querySelector('.newsletter-form input');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address');
        return;
    }
    
    // Simulate subscription
    showNotification('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Best Sellers Carousel
function renderBestSellers(count) {
    count = count || 8;
    var carousel = document.getElementById('bestsellersCarousel');
    if (!carousel) return;
    var productsArray = window.products || products;
    var sorted = productsArray.slice().sort(function(a, b) {
        if ((b.popularity || 0) !== (a.popularity || 0)) return (b.popularity || 0) - (a.popularity || 0);
        return (b.rating || 0) - (a.rating || 0);
    });
    var best = sorted.slice(0, count);
    carousel.innerHTML = '';
    best.forEach(function(product) {
        var card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = '<div class="product-image" onclick="showProduct(' + product.id + ')" style="cursor:pointer">' +
            '<img src="' + getProductImageUrl(product) + '" alt="' + product.name + '">' +
            '<span class="product-category">' + product.category + '</span>' +
            '</div>' +
            '<div class="product-details">' +
            '<h3 class="product-title" onclick="showProduct(' + product.id + ')" style="cursor:pointer">' + product.name + '</h3>' +
            '<div class="product-price">' + formatPrice(product.price) + ' exc. VAT</div>' +
            '<button class="add-to-cart-btn" onclick="addToCart(' + product.id + ')">Add to Basket</button>' +
            '</div>';
        carousel.appendChild(card);
    });
}

function scrollCarousel(direction) {
    var carousel = document.getElementById('bestsellersCarousel');
    if (!carousel) return;
    var scrollAmount = 310;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Render best sellers on page load
document.addEventListener('DOMContentLoaded', function() {
    renderBestSellers(8);
});
