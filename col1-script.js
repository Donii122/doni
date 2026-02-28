// Col1 - Industrial Equipment JavaScript

// Industrial Equipment Products
const industrialProducts = [
    // Silicones
    {
        id: 1,
        name: "SILICONE BUBBLE GUM – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: BUBBLE GUM Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Silicone+Bubble+Gum",
        rating: 4.5,
        popularity: 95
    },
    {
        id: 2,
        name: "SILICONE WATERMELON – 12pcs 500ml",
        category: "Silicones",
        price: 25.00,
        description: "Fragrance: WATERMELON Hold can 15cm from the surface and spray in even strokes. Wipe over large surface areas with a lint-free cloth for a smooth, uniform finish.",
        image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Silicone+Watermelon",
        rating: 4.3,
        popularity: 88
    },

    // Air Fresheners
    {
        id: 26,
        name: "LIQUID AIR FRESHENER APPLE",
        category: "Air Fresheners",
        price: 10.00,
        description: "Professional liquid air freshener with fresh apple fragrance. Perfect for vehicles and commercial spaces.",
        image: "pic benichem/LIQUID AIR FRESHENER APPLE.png",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 27,
        name: "LIQUID AIR FRESHENER LEMON",
        category: "Air Fresheners",
        price: 10.00,
        description: "Professional liquid air freshener with vibrant lemon fragrance. Perfect for vehicles and commercial spaces.",
        image: "pic benichem/LIQUID AIR FRESHENER LEMON.png",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 28,
        name: "LIQUID AIR FRESHENER CHERRY",
        category: "Air Fresheners",
        price: 10.00,
        description: "Professional liquid air freshener with cherry fragrance. Perfect for vehicles and commercial spaces.",
        image: "pic benichem/LIQUID AIR FRESHENER CHERRY.png",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 29,
        name: "LIQUID AIR FRESHENER BUBBLE GUM",
        category: "Air Fresheners",
        price: 10.00,
        description: "Professional liquid air freshener with bubble gum fragrance. Available in 5L (£10.00) or 25L (£50.00).",
        image: "pic benichem/LIQUID AIR FRESHENER BUBBLE GUM.png",
        rating: 4.3,
        popularity: 83,
        options: [
            { name: "5 Liters", price: 10.00 },
            { name: "25 Liters", price: 50.00 }
        ]
    },

    // Couplings & Housings
    {
        id: 30,
        name: "COUPLINGS 22 mm Female Coupling x 3/8\" BSP Male",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Female Coupling x 3/8\" BSP Male. High quality coupling for industrial applications.",
        image: "pic benichem/COUPLINGS 22 mm Female Coupling x 38” BSP Male.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 31,
        name: "COUPLINGS 22 mm Female Coupling x 3/8\" BSP Female",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Female Coupling x 3/8\" BSP Female. High quality coupling for industrial applications.",
        image: "pic benichem/COUPLINGS 22 mm Female Coupling x 38” BSP Male.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 32,
        name: "COUPLINGS 22 mm Female Coupling x 1/4\" BSP Male",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Female Coupling x 1/4\" BSP Male. High quality coupling for industrial applications.",
        image: "pic benichem/COUPLINGS 22 mm Female Coupling x 38” BSP Male.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 33,
        name: "COUPLINGS 22 mm Female Coupling x 1/4\" BSP Female",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Female Coupling x 1/4\" BSP Female. High quality coupling for industrial applications.",
        image: "pic benichem/COUPLINGS 22 mm Female Coupling x 14” BSP Female.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 34,
        name: "COUPLINGS 22 mm Male x 22 mm Male",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Male x 22 mm Male coupling. Professional grade for high pressure applications.",
        image: "pic benichem/COUPLINGS 22 mm Male x 22 mm Male.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 35,
        name: "COUPLINGS 22 mm Male x 3/8\" BSP Female",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Male x 3/8\" BSP Female coupling. Industrial grade construction.",
        image: "pic benichem/COUPLINGS 22 mm Male x 38” BSP Female.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 36,
        name: "COUPLINGS 22 mm Male x 3/8\" BSP Male",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Male x 3/8\" BSP Male coupling. Industrial grade construction.",
        image: "pic benichem/COUPLINGS 22 mm Male x 38” BSP Male.png",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 37,
        name: "COUPLINGS 22 mm Male x 1/4\" BSP Female",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Male x 1/4\" BSP Female coupling. Industrial grade construction.",
        image: "pic benichem/COUPLINGS 22 mm Male x 14” BSP Female.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 38,
        name: "COUPLINGS 22 mm Male x 1/4\" BSP Male",
        category: "Couplings & Housings",
        price: 5.00,
        description: "22 mm Male x 1/4\" BSP Male coupling. Industrial grade construction.",
        image: "pic benichem/COUPLINGS 22 mm Male x 14” BSP Male.jpg",
        rating: 4.3,
        popularity: 80
    },
    {
        id: 39,
        name: "MOTOR TO PUMP HOUSING",
        category: "Couplings & Housings",
        price: 17.00,
        description: "Motor to Pump Housing. ZF151 – WS 151 For mounting 112 frame motors. Professional grade assembly.",
        image: "pic benichem/MOTOR TO PUMP HOUSING.jpg",
        rating: 4.4,
        popularity: 82
    },
    {
        id: 40,
        name: "MOTOR TO PUMP HOUSING",
        category: "Couplings & Housings",
        price: 17.00,
        description: "Motor to Pump Housing. ZF091 – W91, W98, W99 For mounting 100 frame motors. Professional grade assembly.",
        image: "pic benichem/MOTOR TO PUMP HOUSING1.jpg",
        rating: 4.4,
        popularity: 82
    },
    {
        id: 41,
        name: "FLEXIBLE MOTOR TO PUMP COUPLING",
        category: "Couplings & Housings",
        price: 50.00,
        description: "Flexible motor to pump coupling. High performance design for smooth power transmission.",
        image: "pic benichem/FLEXIBLE MOTOR TO PUMP COUPLING.jpg",
        rating: 4.5,
        popularity: 84
    },
    {
        id: 42,
        name: "FLEXIBLE MOTOR TO PUMP COUPLING",
        category: "Couplings & Housings",
        price: 40.00,
        description: "Flexible motor to pump coupling. ZG091 – W91, W98, W99. Compact design for space-constrained applications.",
        image: "pic benichem/FLEXIBLE MOTOR TO PUMP COUPLING1.jpg",
        rating: 4.5,
        popularity: 84
    },

    // Electric Motors
    {
        id: 43,
        name: "CAPACITOR",
        category: "Electric Motors",
        price: 40.00,
        description: "Capacitor 65uf to suit 240v motors.",
        image: "pic benichem/CAPACITOR.jpg",
        rating: 4.7,
        popularity: 91
    },
    {
        id: 44,
        name: "28MM SOLID SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 420.00,
        description: "Three phase 5.5 kw 7.5 hp 415v 50Hz.",
        image: "pic benichem/28MM SOLID SHAFT 1450 RPM 1.jpg",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 45,
        name: "28MM SOLID SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 345.00,
        description: "Three phase 4 kw 5.5hp 415v 50Hz.",
        image: "pic benichem/28MM SOLID SHAFT 1450 RPM 2.jpg",
        rating: 4.8,
        popularity: 93
    },
     {
        id: 110,
        name: "28MM SOLID SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 520.00,
        description: "Single Phase 2.2 kw 3 hp 240v 50 Hz.",
        image: "pic benichem/28MM SOLID SHAFT 1450 RPM 3.jpg",
        rating: 4.8,
        popularity: 95
    },
    {
        id: 111,
        name: "24MM HOLLOW SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 520.00,
        description: "Three Phase 7.5 kw 10.5hp 415v 50 Hz.",
        image: "pic benichem/24MM HOLLOW SHAFT 1450 RPM.jpg",
        rating: 4.8,
        popularity: 87
    },
    {
        id: 112,
        name: "24MM HOLLOW SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 420.00,
        description: "Three Phase 5.5 kw 7.5 hp 415v 50 Hz",
        image: "pic benichem/24MM HOLLOW SHAFT 1450 RPM 1.jpg",
        rating: 4.8,
        popularity: 98
    },
    {
        id: 113,
        name: "24MM HOLLOW SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 365.00,
        description: "Three Phase 4 kw 5.5hp 415v 50 Hz",
        image: "pic benichem/24MM HOLLOW SHAFT 1450 RPM 2.jpg",
        rating: 4.8,
        popularity: 91
    },
    {
        id: 113,
        name: "24MM HOLLOW SHAFT 1450 RPM",
        category: "Electric Motors",
        price: 370.00,
        description: "Single Phase 2.2 kw 3hp 240v 50 Hz.",
        image: "pic benichem/24MM HOLLOW SHAFT 1450 RPM 3.jpg",
        rating: 4.8,
        popularity: 94
    },

    // Electricals
     {
        id: 115,
        name: "4 WIRE ARMOR CABLE",
        category: "Electricals",
        price: 18.50,
        description: "1.5 mm, 2.5 mm, 4 mm 3 core, 3 core, 3 core.",
        image: "pic benichem/4 WIRE ARMOR CABLE.jpg",
        rating: 4.4,
        popularity: 95
    },
    
{
        id: 116,
        name: "3 WIRE FLEXIBLE CABLE",
        category: "Electricals",
        price: 18.50,
        description: "1.5 mm, 2.5 mm, 4 mm 4 core, 4 core, 4 core.",
        image: "pic benichem/3 WIRE FLEXIBLE CABLE.jpg",
        rating: 4.5,
        popularity: 90
    },
    {
        id: 117,
        name: "4 WIRE FLEXIBLE CABLE",
        category: "Electricals",
        price: 18.50,
        description: "1.5 mm, 2.5 mm, 4 mm 4 core, 4 core, 4 core.",
        image: "pic benichem/4 WIRE FLEXIBLE CABLE.jpg",
        rating: 4.3,
        popularity: 95
    },
    {
        id: 118,
        name: "POWER CONNECTOR",
        category: "Electricals",
        price: 18.50,
        description: "4pin, 4pin, 5pin, 5pin 16a, 32a, 16a, 32a.",
        image: "pic benichem/POWER CONNECTOR.jpg",
        rating: 4.2,
        popularity: 93
    },
    {
        id: 119,
        name: "SOCKET",
        category: "Electricals",
        price: 18.50,
        description: "4pin, 4pin, 5pin, 5pin 16a, 32a, 16a, 32a.",
        image: "pic benichem/SOCKET.jpg",
        rating: 4.1,
        popularity: 91
    },
    {
        id: 120,
        name: "ISOLATOR",
        category: "Electricals",
        price: 35.00,
        description: "16a, 20a, 25a, 32a Waterproof isolatorIP65 4 Pole switched neutral interlocking lid ensures removal in OFF position only.",
        image: "pic benichem/ISOLATOR.jpg",
        rating: 4.4,
        popularity: 91
    },
    {
        id: 121,
        name: "BOX CONTACTER",
        category: "Electricals",
        price: 70.00,
        description: "3 Phase Box with contactor 415 W.",
        image: "pic benichem/BOX CONTACTER.jpg",
        rating: 4.3,
        popularity: 94
    },
    {
        id: 122,
        name: "POWER CONNECTOR",
        category: "Electricals",
        price: 27.00,
        description: "Junction boxes are an easy solution for securely connecting wires in any small electrical or electronic application.",
        image: "pic benichem/POWER CONNECTOR.jpg",
        rating: 4.9,
        popularity: 96
    },
    {
        id: 123,
        name: "JUNCTION BOX WHITE",
        category: "Electricals",
        price: 17.00,
        description: "Junction boxes are an easy solution for securely connecting wires in any small electrical or electronic application.",
        image: "pic benichem/JUNCTION BOX WHITE.jpg",
        rating: 4.5,
        popularity: 92
    },
    {
        id: 124,
        name: "Plug Head 13 amp",
        category: "Electricals",
        price: 3.00,
        description: "Plug Head 13 amp.",
        image: "pic benichem/Plug Head 13 amp.jpg",
        rating: 4.8,
        popularity: 89
    },
    {
        id: 125,
        name: "MICRO SWITCH 15a 250Vac 1/2 HP 250Vac 1/2 HP 125Vac",
        category: "Electricals",
        price: 5.00,
        description: "MICRO SWITCH 15a 250Vac 1/2 HP 250Vac 1/2 HP 125Vac.",
        image: "pic benichem/MICRO SWITCH 15a 250Vac 12 HP 250Vac 12 HP 125Vac.jpg",
        rating: 4.2,
        popularity: 85
    },
    {
        id: 126,
        name: "OKE CONTACT SWITCH 20-25 AMP",
        category: "Electricals",
        price: 70.00,
        description: "OKE CONTACT SWITCH 20-25 AMP.",
        image: "pic benichem/OKE CONTACT SWITCH 20-25 AMP.jpg",
        rating: 4.5,
        popularity: 94
    },
    {
        id: 127,
        name: "OKE CONTACT SWITCH 16-20 AMP",
        category: "Electricals",
        price: 70.00,
        description: "OKE CONTACT SWITCH 16-20 AMP.",
        image: "pic benichem/OKE CONTACT SWITCH 16-20 AMP.jpg",
        rating: 4.7,
        popularity: 94
    },
    {
        id: 128,
        name: "A two pole circuit breaker",
        category: "Electricals",
        price: 37.00,
        description: "CIRCUIT BREAKER.",
        image: "pic benichem/A two pole circuit breaker.jpg",
        rating: 4.7,
        popularity: 94
    },
   
    {
        id: 130,
        name: "Double Outdoor Switch 2 Ways",
        category: "Electricals",
        price: 17.00,
        description: "Waterproof Switch.Double Outdoor Switch 2 Ways.",
        image: "pic benichem/Double Outdoor Switch 2 Ways.jpg",
        rating: 4.4,
        popularity: 93
    },
    {
        id: 131,
        name: "Waterproof Socket Double Switched 13A Outdoor Socket",
        category: "Electricals",
        price: 30.00,
        description: "SOCKET.",
        image: "pic benichem/Waterproof Socket Double Switched 13A Outdoor Socket.jpg",
        rating: 4.4,
        popularity: 94
    },
    {
        id: 132,
        name: "Single Switched 13a Outdoor Socket",
        category: "Electricals",
        price: 15.00,
        description: "Waterproof Switch.Single Switched 13a Outdoor Socket.",
        image: "pic benichem/Single Switched 13a Outdoor Socket.jpg",
        rating: 4.4,
        popularity: 94
    },
    {
        id: 133,
        name: "CONTACTOR 415v 50 HZ AC3",
        category: "Electricals",
        price: 45.00,
        description: "V 240 440 550 660.kw 4.5 7.5 7.5 7.5.",
        image: "pic benichem/CONTACTOR 415v 50 HZ AC3.jpg",
        rating: 4.6,
        popularity: 91
    },
    {
        id: 134,
        name: "CONTACTOR 415v 50 HZ AC3",
        category: "Electricals",
        price: 45.00,
        description: "V 240 440 550 660 Kw 3.5 5.5 5.5 5.5 Max continuous current: 24a 60/75’C Wire Cu only Main and aux terminal Awg 10–14 Coil terminal AWG 14–18 Torgue: 13 lb-in Aux cont A600.",
        image: "pic benichem/CONTACTOR 415v 50 HZ AC3.jpg",
        rating: 4.5,
        popularity: 93
    },



    // Low Pressure Hose
    {
        id: 9,
        name: "Reinforced PVC Hose 40 Bar 8mm id 20m coil",
        category: "Low Pressure Hose",
        price: 112.86,
        description: "40 Bar @ 20°C working pressure 8mm id - 14mm od 20m coil Polyester reinforced PVC -10°C to 50°C working temperature",
        image: "https://via.placeholder.com/300x200/95a5a6/ffffff?text=PVC+Hose+20m",
        rating: 4.3,
        popularity: 87
    },
    {
        id: 10,
        name: "Reinforced PVC Hose 40 Bar 8mm id 10m coil",
        category: "Low Pressure Hose",
        price: 86.87,
        description: "40 Bar @ 20°C working pressure 8mm id - 14mm od 10m coil Polyester reinforced PVC -10°C to 50°C working temperature BULK PRICING FOR ORDERS OF 5+ PIECES",
        image: "https://via.placeholder.com/300x200/95a5a6/ffffff?text=PVC+Hose+10m",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 11,
        name: "Suction Hose Kit 7m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 117.00,
        description: "7m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+7m",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 12,
        name: "Suction Hose Kit 4m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 90.37,
        description: "4m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+4m",
        rating: 4.3,
        popularity: 84
    },
    {
        id: 13,
        name: "Suction Hose Kit 3m 1 1/4″BSPM",
        category: "Low Pressure Hose",
        price: 75.72,
        description: "3m spiral wound hose 1\"1/4BSPM crimped brass ports 35mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+3m",
        rating: 4.2,
        popularity: 82
    },
    {
        id: 14,
        name: "Suction Hose Kit 7m 1″BSPM",
        category: "Low Pressure Hose",
        price: 70.82,
        description: "7m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+7m+1in",
        rating: 4.3,
        popularity: 83
    },
    {
        id: 15,
        name: "Suction Hose Kit 4m",
        category: "Low Pressure Hose",
        price: 59.84,
        description: "4m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+4m",
        rating: 4.2,
        popularity: 81
    },
    {
        id: 16,
        name: "Suction Hose Kit 3m",
        category: "Low Pressure Hose",
        price: 51.28,
        description: "3m spiral wound hose 1\"BSPM crimped brass ports 25mm foot valve",
        image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Suction+Hose+3m",
        rating: 4.1,
        popularity: 80
    },
    {
        id: 17,
        name: "Delivery Hose Kit 10m",
        category: "Low Pressure Hose",
        price: 124.00,
        description: "10m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "https://via.placeholder.com/300x200/16a085/ffffff?text=Delivery+Hose+10m",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 18,
        name: "Delivery Hose Kit 8m",
        category: "Low Pressure Hose",
        price: 97.00,
        description: "8m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "https://via.placeholder.com/300x200/16a085/ffffff?text=Delivery+Hose+8m",
        rating: 4.3,
        popularity: 85
    },
    {
        id: 19,
        name: "Delivery Hose Kit 6m",
        category: "Low Pressure Hose",
        price: 70.33,
        description: "6m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "https://via.placeholder.com/300x200/16a085/ffffff?text=Delivery+Hose+6m",
        rating: 4.2,
        popularity: 84
    },
    {
        id: 20,
        name: "Delivery Hose Kit 4m",
        category: "Low Pressure Hose",
        price: 56.42,
        description: "4m anti-static hose 1\"BSPM crimped brass ports 1\" (25mm) i.d.",
        image: "https://via.placeholder.com/300x200/16a085/ffffff?text=Delivery+Hose+4m",
        rating: 4.1,
        popularity: 83
    },
    {
        id: 21,
        name: "1″ Diesel Suction Hose – 30m Coil",
        category: "Low Pressure Hose",
        price: 198.89,
        description: "9.3 Bar @ 23°C working pressure 1\" internal diameter COMPLETE 30m COIL Blue reinforced PVC/Nylon -10 to 55°C working temperature UV & ozone resistant",
        image: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Diesel+Suction+30m",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 22,
        name: "1″ Diesel Suction Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 7.37,
        description: "9.3 Bar @ 23°C working pressure 1\" internal diameter SOLD BY THE METRE Blue reinforced PVC/Nylon -10 to 55°C working temperature UV & ozone resistant Max complete length = 30m",
        image: "https://via.placeholder.com/300x200/2c3e50/ffffff?text=Diesel+Suction+Per+m",
        rating: 4.4,
        popularity: 86
    },
    {
        id: 23,
        name: "1″ Diesel Delivery Hose – 50m Coil",
        category: "Low Pressure Hose",
        price: 279.70,
        description: "7 Bar @ 23°C working pressure 1\" internal diameter COMPLETE 50m COIL Black rubber PVC alloy -10 to 55°C working temperature UV & ozone resistant",
        image: "https://via.placeholder.com/300x200/34495e/ffffff?text=Diesel+Delivery+50m",
        rating: 4.6,
        popularity: 89
    },
    {
        id: 24,
        name: "1″ Diesel Delivery Hose – sold per metre",
        category: "Low Pressure Hose",
        price: 6.22,
        description: "7 Bar @ 23°C working pressure 1\" internal diameter SOLD BY THE METRE Black rubber PVC alloy -10 to 55°C working temperature UV & ozone resistant Max complete length = 50m",
        image: "https://via.placeholder.com/300x200/34495e/ffffff?text=Diesel+Delivery+Per+m",
        rating: 4.5,
        popularity: 87
    },
    {
        id: 25,
        name: "4″ Layflat Hose – 100m Coil",
        category: "Low Pressure Hose",
        price: 581.00,
        description: "4 Bar @ 20°C working pressure 103mm internal diameter COMPLETE 100m COIL Blue industrial layflat hose -25°C to 60°C working temperature",
        image: "https://via.placeholder.com/300x200/2980b9/ffffff?text=Layflat+Hose+100m",
        rating: 4.7,
        popularity: 91
    },

    // Pressure Switches
    {
        id: 36,
        name: "Electric Pressure Switch",
        category: "Pressure Switches",
        price: 28.00,
        description: "1-5 Bar pressure range, 1.4-2.8 Bar factory setting, 0.6 Bar min, 2.3 Bar max differential, 1/4″BSPF threaded port, 250 Volt, 13 Amp, Rated to IP44, NBR membrane, 63cm connection cable, 125cm power cable with UK 3 pin plug.",
        image: "pic benichem/Electric Pressure Switch.jpg",
        rating: 4.5,
        popularity: 88
    },
    {
        id: 37,
        name: "Pressure Switch 0-20 Bar",
        category: "Pressure Switches",
        price: 42.00,
        description: "High-range pressure switch 0-20 bar. Digital display. Weatherproof housing.",
        image: "https://via.placeholder.com/300x200/27ae60/ffffff?text=Pressure+Switch+20",
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
        image: "https://via.placeholder.com/300x200/f39c12/ffffff?text=Petrol+Washer",
        rating: 4.8,
        popularity: 94
    },
    {
        id: 39,
        name: "Petrol Pressure Washer 3000 PSI",
        category: "Petrol Engine Pressure Washers",
        price: 580.00,
        description: "Professional petrol pressure washer 3000 PSI. Honda GX engine. 30L/min flow rate. Commercial grade.",
        image: "https://via.placeholder.com/300x200/f39c12/ffffff?text=Petrol+Washer+3000",
        rating: 4.9,
        popularity: 96
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
        name: "BLAST AEROSOL AIR FRESHENER – Lemon",
        category: "Air Fresheners",
        price: 30.00,
        description: "Pack of 12 aerosol air fresheners with Lemon fragrance. Perfect for car detailing and interior freshening.",
        image: "pic benichem/BLAST-AEROSOL-AIR-FRESHENER.jpg",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 84,
        name: "TURBOJET AIR FRESHENER – Savage",
        category: "Air Fresheners",
        price: 30.00,
        description: "Premium turbojet air freshener with aggressive Savage fragrance. Professional detailing formula.",
        image: "pic benichem/turbojet-savage.png",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 85,
        name: "TURBOJET AIR FRESHENER – Lemon",
        category: "Air Fresheners",
        price: 30.00,
        description: "Premium turbojet air freshener with fresh Lemon fragrance. Professional detailing formula.",
        image: "pic benichem/turbojet-Lemon-768x768.png",
        rating: 4.2,
        popularity: 80
    },
    {
        id: 86,
        name: "HANGING AIR FRESHENERS – 25pcs",
        category: "Air Fresheners",
        price: 3.00,
        description: "Pack of 25 hanging air fresheners. Various fragrances available. Perfect for car interiors and detailing.",
        image: "pic benichem/hanging air freshners -25pcs.png",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 88,
        name: "HANGING AIR FRESHENERS – tree 25pcs",
        category: "Air Fresheners",
        price: 3.00,
        description: "Pack of 25 hanging air fresheners with tree designs. Various fragrances available. Perfect for car interiors and detailing.",
        image: "pic benichem/HANGING-AIR-FRESHENERS-tree.jpg",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 90,
        name: "HANGING AIR FRESHENERS – 25pcs",
        category: "Air Fresheners",
        price: 3.00,
        description: "Pack of 25 hanging air fresheners. Various fragrances available. Perfect for car interiors, home or office.",
        image: "pic benichem/HANGING AIR FRESHENERS – 25pcs.jpg",
        rating: 4.0,
        popularity: 75
    },
    {
        id: 87,
        name: "TROPICAL AIR FRESHENER – 24pcs",
        category: "Air Fresheners",
        price: 40.00,
        description: "Pack of 24 tropical air fresheners. Perfect for car detailing and interior freshening.",
        image: "pic benichem/TROPICAL AIR FRESHENER – 24pcs.jpg",
        rating: 4.1,
        popularity: 78
    },
    {
        id: 89,
        name: "ROUNDED AIR FRESHENER – 24pcs",
        category: "Air Fresheners",
        price: 40.00,
        description: "Pack of 24 rounded air fresheners. Concentrated formula with tropical fresh fragrance. Perfect for car detailing and interior freshening.",
        image: "pic benichem/ROUNDED AIR FRESHENER – 24pcs.jpg",
        rating: 4.2,
        popularity: 79
    },

    // Low Pressure Hose
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

    // High Pressure Hose
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
    }
];

// Override the main products array for this page
window.products = industrialProducts;
window.currentProducts = [...industrialProducts];

// Initialize Col1 page
document.addEventListener('DOMContentLoaded', function() {
    // Set page title
    document.title = "Industrial Equipment - BeniChem";
    
    // Cart is managed by script.js and will be loaded automatically
    // No need to do anything here - script.js handles cart persistence
    
    // Ensure productsGrid exists
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        // Initialize products display - show all products immediately
        displayProducts(industrialProducts);
    } else {
        // Retry after a short delay if element not found
        setTimeout(function() {
            const retryGrid = document.getElementById('productsGrid');
            if (retryGrid) {
                displayProducts(industrialProducts);
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
    
    // Add industrial equipment specific features
    addIndustrialFeatures();
    
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

// Industrial Equipment specific features
function addIndustrialFeatures() {
    // Add product counter to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryName = card.querySelector('h3').textContent;
        const productCount = industrialProducts.filter(p => p.category === categoryName).length;
        
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
}

// Add loading animation for industrial equipment
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

// Industrial Equipment specific filter function
function filterIndustrialProducts(category) {
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
        window.currentProducts = [...industrialProducts];
    } else {
        window.currentProducts = industrialProducts.filter(product => product.category === category);
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
window.filterByCategory = filterIndustrialProducts;

// Industrial Equipment specific search
function searchIndustrialProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    
    window.currentProducts = industrialProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(window.currentProducts);
}

// Override the main filterProducts function for this page
window.filterProducts = searchIndustrialProducts;

// Add industrial equipment specific animations
function addIndustrialAnimations() {
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
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addIndustrialAnimations, 100);
});

// Industrial Equipment specific notifications
function showIndustrialNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2196f3;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(33, 150, 243, 0.3);
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
window.showNotification = showIndustrialNotification;
