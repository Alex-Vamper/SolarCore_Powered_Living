export interface Product {
  name: string;
  image: string;
  category: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  compatibility: string[];
}

export const productData: Record<string, Product> = {
  // Smart Control Hubs
  "corehub-mini": {
    name: "CoreHub Mini",
    image: "/lovable-uploads/corehub-mini.png",
    category: "Smart Control Hub",
    description: "Sleek button-based, compact hub with LCD Monitor display screen. Perfect for small spaces.",
    features: [
      "Basic automation control (on and off)",
      "Alert output system",
      "LCD Monitor display",
      "Compact design for small spaces",
      "Energy efficient operation"
    ],
    specifications: {
      "Display": "2.4-inch LCD Monitor",
      "Connectivity": "Wi-Fi, Bluetooth 5.0",
      "Power": "12V DC, 2A",
      "Dimensions": "120mm x 80mm x 25mm",
      "Operating Temperature": "-10°C to 50°C",
      "Mounting": "Wall-mounted or desktop"
    },
    compatibility: [
      "iOS and Android apps",
      "Voice assistants",
      "Smart lighting systems",
      "Security sensors",
      "HVAC controls"
    ]
  },
  "corehub-m4": {
    name: "CoreHub M4",
    image: "/lovable-uploads/corehub-m4.png", 
    category: "Smart Control Hub",
    description: "2-way interaction hub with button and touch panel functionality. Features all Mini operations with simple scene setting and app sync.",
    features: [
      "Dual interaction modes (button + touch)",
      "Scene setting capabilities",
      "App synchronization",
      "Enhanced control interface",
      "Real-time status updates"
    ],
    specifications: {
      "Display": "3.5-inch touchscreen + physical buttons",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.2, Zigbee",
      "Power": "15V DC, 3A",
      "Dimensions": "150mm x 100mm x 30mm",
      "Operating Temperature": "-15°C to 55°C",
      "Storage": "8GB internal memory"
    },
    compatibility: [
      "All CoreHub Mini features",
      "Advanced scene management",
      "Multi-room control",
      "Third-party integrations"
    ]
  },
  "corehub-s": {
    name: "CoreHub S",
    image: "/lovable-uploads/corehub-s.png",
    category: "Smart Control Hub", 
    description: "Mini-tablet style hub with voice control and Intelligent Assistant - Ander integration, plus full-panel control and room intercom.",
    features: [
      "Voice-based control with Ander AI",
      "Full-panel touch interface",
      "Room intercom system",
      "Advanced scene management",
      "Multi-room audio support"
    ],
    specifications: {
      "Display": "7-inch HD touchscreen",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3, Zigbee 3.0",
      "Audio": "Built-in speakers and microphone array",
      "Power": "24V DC, 4A",
      "Dimensions": "200mm x 130mm x 35mm",
      "Operating Temperature": "-20°C to 60°C"
    },
    compatibility: [
      "Ander AI voice assistant",
      "Intercom systems",
      "Smart audio systems",
      "Advanced automation scenarios"
    ]
  },
  "corehub-edge": {
    name: "CoreHub Edge",
    image: "/lovable-uploads/corehub-edge.png",
    category: "Smart Control Hub",
    description: "Larger touch panel designed for safety and accessibility. Supports 4-loop light control and built-in infrared remote control for all home appliances.",
    features: [
      "4-loop light control system",
      "Built-in infrared remote control",
      "Safety and accessibility focused",
      "Large touch interface",
      "Universal appliance control"
    ],
    specifications: {
      "Display": "10-inch HD+ touchscreen",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3, Zigbee 3.0, IR",
      "Light Control": "4 independent lighting loops",
      "Power": "30V DC, 5A",
      "Dimensions": "250mm x 180mm x 40mm",
      "IR Range": "Up to 10 meters"
    },
    compatibility: [
      "All major IR appliances",
      "Advanced lighting systems", 
      "Accessibility devices",
      "Safety monitoring systems"
    ]
  },
  "corehub-ultra": {
    name: "CoreHub Ultra",
    image: "/lovable-uploads/corehub-ultra.png",
    category: "Smart Control Hub",
    description: "Large tablet screen ideal for living rooms and offices. Features expanded UI and higher voice pickup range for comprehensive control.",
    features: [
      "Large tablet-style interface",
      "Expanded UI capabilities",
      "Enhanced voice pickup range",
      "Premium design aesthetics",
      "Multi-zone control"
    ],
    specifications: {
      "Display": "12-inch 4K touchscreen",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3, Zigbee 3.0, Thread",
      "Audio": "360-degree microphone array, premium speakers",
      "Power": "36V DC, 6A",
      "Dimensions": "300mm x 200mm x 45mm",
      "Voice Range": "Up to 8 meters"
    },
    compatibility: [
      "Enterprise automation systems",
      "Multi-zone audio/video",
      "Advanced security integration",
      "Professional installations"
    ]
  },
  "corehub-x": {
    name: "CoreHub X",
    image: "/lovable-uploads/corehub-x.png",
    category: "Smart Control Hub",
    description: "Flagship panel with music playback, surround audio, zone-based control, and smart photo album capabilities.",
    features: [
      "High-quality music playbook",
      "Surround audio system",
      "Zone-based control",
      "Smart photo album",
      "Premium aesthetics"
    ],
    specifications: {
      "Display": "15-inch 4K OLED touchscreen",
      "Audio": "Hi-Fi surround sound, audiophile-grade DAC",
      "Connectivity": "Wi-Fi 6E, Bluetooth 5.3, all protocols",
      "Storage": "128GB for media and photos",
      "Power": "48V DC, 8A",
      "Dimensions": "380mm x 250mm x 50mm"
    },
    compatibility: [
      "High-end audio systems",
      "Professional automation",
      "Smart home theaters",
      "Luxury installations"
    ]
  },
  "corehub-air": {
    name: "CoreHub Air",
    image: "/lovable-uploads/corehub-air.png",
    category: "Smart Control Hub",
    description: "High-fidelity panoramic ambient music system with 16:6 full screen. Features 15 scenes on one screen, 10m far-field wake-up, and Hi-Fi stereo wall speakers.",
    features: [
      "16:6 panoramic full screen",
      "15 scenes on same screen",
      "10m far-field wake-up",
      "Hi-Fi stereo wall speakers",
      "Omnidirectional microphone array"
    ],
    specifications: {
      "Display": "21-inch 16:6 panoramic 4K screen",
      "Audio": "Hi-Fi stereo wall speakers, omnidirectional 4-mic array",
      "Wake-up Range": "10 meters far-field",
      "Scenes": "15 simultaneous scene display",
      "Power": "60V DC, 10A",
      "Dimensions": "520mm x 200mm x 55mm"
    },
    compatibility: [
      "Whole-home automation",
      "Professional audio systems",
      "Multi-room orchestration",
      "Luxury smart homes"
    ]
  },

  // Smart Switches - TouchCore Series
  "touchcore-slide": {
    name: "TouchCore Slide",
    image: "/lovable-uploads/touchcore-slide.png",
    category: "Smart Switches",
    description: "Sliding dimmer smart switch for lights and fans. Touch-sensitive strip allows seamless brightness and speed adjustment with elegant visual feedback.",
    features: [
      "Slide-based dimmer control (lights/fans)",
      "Capacitive touch interface",
      "LED backlight feedback",
      "Elegant, low-profile design",
      "Multi-device compatibility",
      "Energy-saving control precision"
    ],
    specifications: {
      "Input Voltage": "110–240V AC, 50/60Hz",
      "Control Type": "Capacitive Sliding Touch",
      "Supported Loads": "LEDs, CFLs, Fans, Incandescents",
      "Connectivity": "Zigbee / Wi-Fi (depending on variant)",
      "Material": "Tempered Glass + Fire-resistant Polycarbonate",
      "Mounting": "Flush Wall Mount",
      "Operating Temp": "-5°C to 60°C",
      "Colors Available": "Midnight Black / Snow White / Champagne Gold",
      "Dimensions": "86mm x 86mm x 15mm"
    },
    compatibility: [
      "CoreHub Mini / Edge / Ultra",
      "Smart Lights & Ceiling Fans",
      "iOS & Android App Control",
      "Ander Voice Assistant",
      "Scene-based automation"
    ]
  },
  "touchcore-plus": {
    name: "TouchCore Plus",
    image: "/lovable-uploads/touchcore-plus.png",
    category: "Smart Switches",
    description: "Multi-gang smart switch panel for managing multiple lights, fans, or devices. Sleek interface with customizable icons and soft LED feedback.",
    features: [
      "Multi-gang control (up to 4 devices)",
      "Touch-sensitive interface",
      "Customizable labels/icons (optional)",
      "Backlit LED indicators",
      "Fan/Light/Socket control supported",
      "Compatible with CoreHub + App scenes"
    ],
    specifications: {
      "Input Voltage": "110–240V AC, 50/60Hz",
      "Control Type": "Capacitive Touch",
      "Max Gang Count": "4-Gang",
      "Connectivity": "Wi-Fi, Zigbee (variant-dependent)",
      "Material": "Tempered Glass + PC",
      "Mounting": "Flush Wall Mount",
      "Operating Temp": "-5°C to 55°C",
      "Colors Available": "Midnight Black / Frosted White",
      "Dimensions": "86mm x 86mm x 15mm"
    },
    compatibility: [
      "Works with CoreHub Series",
      "Smart Lights, Sockets, Fans",
      "Compatible with iOS / Android App",
      "Scene Automation & Scheduling",
      "Voice Assistant: Ander AI Integration"
    ]
  },

  // Smart Lighting - LumaCore Series
  "lumacore-halo": {
    name: "LumaCore Halo",
    image: "/lovable-uploads/lumacore-halo.png",
    category: "Smart Lighting",
    description: "A stunning ambient light with built-in fan blades, the Halo combines cooling and lighting in one beautiful ceiling fixture. Ideal for living rooms, bedrooms, lounges, and smart halls.",
    features: [
      "Ambient LED ceiling lighting",
      "Integrated silent fan blades",
      "Multi-speed airflow control",
      "Dimmable brightness with scene presets",
      "Ultra-modern, sleek circular design",
      "Smart app + voice control enabled"
    ],
    specifications: {
      "Light Output": "Warm/Cool White + Dim modes",
      "Fan": "3-speed silent motor",
      "Connectivity": "Wi-Fi / Zigbee",
      "Power Supply": "AC 220V",
      "Control": "App, Remote, Touch Panel, Voice",
      "Material": "Acrylic + Aluminum",
      "Dimensions": "500mm x 500mm x 150mm",
      "Mounting": "Ceiling mount",
      "Color Variants": "Matte Black / Frosted White"
    },
    compatibility: [
      "CoreHub Series (All)",
      "SolarCore App",
      "TouchCore Switches",
      "Voice Assistants (Ander, Alexa)",
      "Smart Scenes & Timers"
    ]
  },
  "lumacore-pulse": {
    name: "LumaCore Pulse",
    image: "/lovable-uploads/lumacore-pulse.png",
    category: "Smart Lighting",
    description: "Bring your space to life with dynamic RGB lighting modes. The Pulse offers multiple color options, smooth transitions, and vibrant scenes.",
    features: [
      "RGB Color-Changing LED light",
      "Preset scenes: Focus, Relax, Party, Night",
      "Dimmable brightness levels",
      "Remote, App & Voice Control",
      "Modern round-edge housing",
      "Can be wall- or ceiling-mounted"
    ],
    specifications: {
      "Light Output": "RGB + White Modes",
      "Control Options": "App, Remote, Voice",
      "Connectivity": "Wi-Fi (default), Zigbee optional",
      "Power": "AC 110–240V",
      "Color Range": "16+ million colors",
      "Dimensions": "250mm diameter, 60mm height",
      "Material": "Acrylic + Polycarbonate"
    },
    compatibility: [
      "All CoreHub models",
      "SolarCore App",
      "Voice control via Ander",
      "Scene automation",
      "Sync with music (optional feature)"
    ]
  },
  "lumacore-lux": {
    name: "LumaCore Lux",
    image: "/lovable-uploads/lumacore-lux.png",
    category: "Smart Lighting",
    description: "A powerful fixed white light perfect for focused environments like study rooms, bedside areas, staircases, and utility lighting.",
    features: [
      "High-lumen fixed white light",
      "Clean minimal design",
      "Ideal for reading, study, stairways",
      "Compatible with smart switches",
      "Can integrate into automation scenes",
      "Affordable smart lighting option"
    ],
    specifications: {
      "Light Output": "4000K Natural White (Fixed)",
      "Wattage": "12W / 18W variants",
      "Material": "Aluminum housing, frosted acrylic cover",
      "Connectivity": "None (default); Smart control via connected switch",
      "Mounting": "Ceiling or Wall Mount",
      "Dimensions": "Depending on variant – 180mm / 220mm",
      "Lifespan": "50,000 hours"
    },
    compatibility: [
      "CoreHub (via TouchCore Switches)",
      "SolarCore App (if connected via switch)",
      "Supports grouping and scene triggering",
      "Ideal for mixed-use automation setups"
    ]
  },

  // SolarDome Series
  "solardome-one": {
    name: "SolarDome One",
    image: "/lovable-uploads/solardome-one.png",
    category: "Smart Lighting",
    description: "SolarDome One is designed to simulate consistent daylight indoors. Its fixed white spectrum brightens up any space—ideal for corridors, kitchens, laundry areas, and secondary rooms.",
    features: [
      "Fixed daylight-mimicking light output",
      "Clean dome-shaped design",
      "No color tuning or dimming—just consistent brightness",
      "Efficient lighting solution for daytime visibility",
      "Works seamlessly with SolarCore smart switches"
    ],
    specifications: {
      "Light Output": "Fixed 5000K daylight spectrum",
      "Power Rating": "18W / 24W options",
      "Material": "Frosted acrylic dome + ABS frame",
      "Mounting": "Ceiling surface-mount",
      "Dimensions": "Ø300mm / Ø400mm",
      "Control Method": "Manual / Smart switch (TouchCore)",
      "Lifespan": "30,000 hours",
      "Connectivity": "None (switch-dependent)"
    },
    compatibility: [
      "All TouchCore Switches",
      "CoreHub (via smart switch)",
      "Scene automation through switch control"
    ]
  },
  "solardome-neo": {
    name: "SolarDome Neo",
    image: "/lovable-uploads/solardome-neo.png",
    category: "Smart Lighting",
    description: "SolarDome Neo brings precision to indoor daylighting. With full control over brightness and color temperature, it adapts to your mood and schedule—great for living areas, workspaces, bedrooms.",
    features: [
      "Tunable white spectrum (2700K – 6000K)",
      "Smooth dimming from 10% to 100%",
      "Scene-based presets (Morning, Focus, Evening)",
      "App, voice, and switch control",
      "Modern soft-dome diffuser for even glow",
      "Ideal for dynamic living environments"
    ],
    specifications: {
      "Light Output": "Tunable white (Warm to Cool)",
      "Brightness": "Up to 1800 lumens",
      "Connectivity": "Wi-Fi / Zigbee",
      "Power Rating": "18W",
      "Control": "App, TouchCore, Voice (Ander)",
      "Material": "Acrylic diffuser + aluminum base",
      "Mounting": "Flush ceiling mount",
      "Color Modes": "3 Scene presets + custom range"
    },
    compatibility: [
      "All CoreHub Models",
      "SolarCore Mobile App",
      "Ander Voice Assistant",
      "Scene-based automations",
      "TouchCore Switches with dimming"
    ]
  },

  // OptiCore Series
  "opticore-glow": {
    name: "OptiCore Glow",
    image: "/lovable-uploads/opticore-glow.png",
    category: "Smart Lighting",
    description: "Create a mesmerizing starry-sky experience in offices, lobbies, or expansive ceilings. OptiCore Glow is a fiber optic ceiling kit that provides soft pin-light effects without emitting heat or electrical risk at the light point.",
    features: [
      "Fiber optic star-ceiling effect",
      "Ideal for large area installations",
      "No electrical components at end-point",
      "Color-changing modes available (optional add-on)",
      "Acoustic panel integration compatible",
      "Low-maintenance, high-durability light engine"
    ],
    specifications: {
      "Light Source": "LED-powered illuminator (RGB/W variants)",
      "Fibers Included": "150–300 strands (customizable lengths)",
      "Brightness Control": "Via remote / app (based on controller)",
      "Mounting": "Ceiling (False ceiling recommended)",
      "Power Input": "12V–24V DC (based on illuminator)",
      "Controller Type": "Remote / App / DMX (advanced)",
      "Use-case Coverage": "Up to 25m² / kit"
    },
    compatibility: [
      "CoreHub series (via controller)",
      "DMX-enabled lighting systems",
      "Scene-based automations",
      "SolarCore App (for smart variant)"
    ]
  },
  "opticore-edge": {
    name: "OptiCore Edge",
    image: "/lovable-uploads/opticore-edge.png",
    category: "Smart Lighting",
    description: "Highlight your interior architecture with clean, glowing outlines. OptiCore Edge is designed for linear perimeter lighting—perfect for hallways, galleries, staircases, and custom ceilings.",
    features: [
      "Continuous linear light via fiber optics",
      "Highlights architectural edges and corners",
      "Low power and heat-free end-points",
      "Supports RGB or fixed white variants",
      "Creates futuristic ambient environments",
      "Optional motion-based glow triggering"
    ],
    specifications: {
      "Light Source": "Single or dual LED illuminator",
      "Fiber Configuration": "Linear ribbon or bundled loop",
      "Color Options": "Fixed White / RGB / Tunable White",
      "Mounting": "Surface-mount along walls, ceilings, stairs",
      "Dimensions": "Custom lengths up to 15m per run",
      "Control": "TouchCore Switch / SolarCore App / Motion Sensor",
      "Power Input": "12V–24V DC"
    },
    compatibility: [
      "MotionSense Trigger",
      "TouchCore Dimmers",
      "CoreHub via App / Scene Modes",
      "Ander AI Voice Activation"
    ]
  },
  "opticore-aura": {
    name: "OptiCore Aura",
    image: "/lovable-uploads/opticore-aura.png",
    category: "Smart Lighting",
    description: "Designed for sophistication and elegance, OptiCore Aura blends artistic lighting with quiet brilliance. It's the go-to choice for lounges, showrooms, fine dining, hotel lobbies, and luxury homes.",
    features: [
      "Premium finish for high-end interiors",
      "Adjustable scene lighting via controller",
      "Tuned to match mood, color, or event",
      "Compatible with automation rules and voice control",
      "Ideal for recessed ceilings, false beams, and chandeliers",
      "Supports silent operations (no fans or flicker)"
    ],
    specifications: {
      "Light Source": "RGBW LED engine",
      "Fiber Count": "Custom layout per project",
      "Color Modes": "Dynamic Scenes + Static Colors",
      "Mounting": "Recessed / flush-mount + false ceilings",
      "Power Input": "24V DC",
      "Smart Control": "CoreHub / App / Voice (Ander)",
      "Lux Rating": "Soft ambient (non-glare) output"
    },
    compatibility: [
      "CoreHub S and above",
      "SolarCore App & Scene Manager",
      "Ander AI Command Integration",
      "Luxury Touch Panels (TouchCore Series)"
    ]
  },

  // S-Core Series (Smart Locks)
  "score-lite": {
    name: "S-Core Lite",
    image: "/lovable-uploads/score-lite.png",
    category: "Smart Security",
    description: "Perfect for homes, offices, and shared spaces, S-Core Lite combines multiple secure access methods in one compact design. With keypad input, RFID tag access, and mechanical override.",
    features: [
      "Keypad passcode entry",
      "RFID tag support (multiple users)",
      "Mechanical key override",
      "Easy installation on standard doors",
      "Entry-level pricing with high reliability",
      "Indoor chime and LED status indicator"
    ],
    specifications: {
      "Access Modes": "Keypad, RFID, Mechanical Key",
      "User Capacity": "Up to 20 RFID tags, 10 Keypad codes",
      "Power": "4x AA batteries (6 months usage)",
      "Material": "Zinc Alloy + ABS casing",
      "Lock Type": "Deadbolt (Auto/Manual mode)",
      "Dimensions": "Front Panel – 160mm x 65mm",
      "Battery Indicator": "Low battery voice + light alert",
      "Color Options": "Matte Black, Brushed Silver"
    },
    compatibility: [
      "CoreHub S and above",
      "SolarCore App (Pairing for logs only)",
      "Secure Entry Logging (Optional Add-on)"
    ]
  },
  "score-bio": {
    name: "S-Core Bio",
    image: "/lovable-uploads/score-bio.png",
    category: "Smart Security",
    description: "Designed for homes, shared spaces, and small businesses, S-Core Bio integrates advanced facial and fingerprint recognition along with keypad and RFID access.",
    features: [
      "Facial Recognition Camera",
      "Fingerprint Scanner",
      "Keypad & RFID Access",
      "Mechanical Key Override",
      "Multi-user management",
      "Voice + Light Status Feedback"
    ],
    specifications: {
      "Access Modes": "Face, Fingerprint, RFID, Keypad, Key",
      "User Profiles": "100 Fingerprints, 20 Faces, 50 RFIDs",
      "Camera Type": "IR facial recognition (night-safe)",
      "Power Supply": "Rechargeable Battery Pack (USB-C)",
      "Standby Time": "Up to 3 months",
      "Body Material": "Zinc Alloy + Tempered Glass",
      "Color Options": "Graphite Black, Steel Grey",
      "Screen Size": "1.3\" OLED (Indoor Unit)"
    },
    compatibility: [
      "CoreHub M4 and above",
      "SolarCore App (for logs + user management)",
      "Smart Scene Automation (unlock to trigger actions)"
    ]
  },
  "score-ultra": {
    name: "SecureCore Ultra",
    image: "/lovable-uploads/score-ultra.png",
    category: "Smart Security",
    description: "Combining the power of facial recognition, biometric access, keypad, RFID, and app unlock — with IA-assisted entry, SecureCore Ultra is the ultimate smart lock.",
    features: [
      "Facial Recognition + Fingerprint Unlock",
      "RFID + Keypad + Mechanical Key",
      "App Unlock / Remote Access",
      "Unlock via Ander IA Voice Command",
      "Full Entry Log + Notifications",
      "Indoor Display Screen + Control",
      "Auto-Lock with Geo-fencing"
    ],
    specifications: {
      "Access Modes": "Face, Fingerprint, Keypad, RFID, App, Key, Voice",
      "User Profiles": "200+ Profiles",
      "Indoor Display": "4-inch HD Screen",
      "Camera": "Wide-angle NightVision Facial Cam",
      "Connectivity": "Wi-Fi, Bluetooth 5.1, Secure Zigbee Link",
      "Power": "Rechargeable lithium battery (lasts 4-6 months)",
      "Log Storage": "Up to 300 entries offline",
      "Build": "Full metal, anti-tamper casing"
    },
    compatibility: [
      "All CoreHub Variants",
      "Ander AI Integration",
      "SolarCore App Full Suite",
      "Multi-lock sync across property"
    ]
  },


  // Sense Series
  "sensesmoke": {
    name: "SenseSmoke",
    image: "/lovable-uploads/sensesmoke.png",
    category: "Smart Safety",
    description: "Essential for kitchens, living rooms, and sensitive areas, SenseSmoke combines real-time smoke detection with app-based alerts and automation triggers.",
    features: [
      "Real-time Smoke Detection",
      "Alarm + App Notification",
      "SolarCore Scene Integration",
      "Compatible with window servos",
      "Compact ceiling-mounted design",
      "Battery or AC power"
    ],
    specifications: {
      "Sensor Type": "Photoelectric Smoke Sensor",
      "Response Time": "<5 seconds (dense smoke)",
      "Power Source": "Battery or 220V AC",
      "App Alerts": "Enabled via CoreHub",
      "Mounting": "Ceiling / Wall mount",
      "Sound Level": "85dB Local Alarm"
    },
    compatibility: [
      "CoreHub Mini and above",
      "Window Servos (via trigger)",
      "Fire Safety Automation Scenes"
    ]
  },
  "sensegas": {
    name: "SenseGas",
    image: "/lovable-uploads/sensegas.png",
    category: "Smart Safety",
    description: "Advanced safety solution designed to detect flammable gases in enclosed spaces such as kitchens, generator areas, and storage rooms.",
    features: [
      "Real-time flammable gas monitoring",
      "App-based leak alerts",
      "Local buzzer alarm",
      "Automation triggers (e.g. auto-window open)",
      "Small form factor",
      "Energy-efficient operation"
    ],
    specifications: {
      "Sensor Type": "Semiconductor gas sensor",
      "Detection Range": "300–10,000 ppm",
      "Response Time": "<10 seconds",
      "Power Source": "12V DC / AC adapter",
      "Mounting": "Wall-mounted (near gas source)",
      "Sound Level": "85dB Alarm"
    },
    compatibility: [
      "SolarCore App (scene triggers)",
      "CoreHub Mini and above",
      "Smart window modules"
    ]
  },
  "motionsense": {
    name: "MotionSense",
    image: "/lovable-uploads/motionsense.png",
    category: "Smart Safety",
    description: "Optimized for smart automation. Detects presence or motion in spaces to trigger lighting, HVAC, security, or scene rules. Perfect for rooms, corridors, entrances.",
    features: [
      "Instant motion detection",
      "Scene-based automation triggers",
      "Power-saving automation",
      "Adjustable sensitivity",
      "Small footprint"
    ],
    specifications: {
      "Sensor Type": "PIR (Passive Infrared)",
      "Detection Range": "6m radius, 120° field",
      "Power Source": "Battery or 12V DC",
      "Mounting": "Corner or ceiling mount",
      "Latency": "<1 second response time"
    },
    compatibility: [
      "Lighting, HVAC & Alarm triggers",
      "CoreHub Mini and above",
      "SolarCore Scene Designer"
    ]
  },
  "dw-sense": {
    name: "D-W Sense",
    image: "/lovable-uploads/dw-sense.png",
    category: "Smart Safety",
    description: "Monitor open/close states of doors and windows. Automatically trigger lock or safety actions like shutting windows during rain or locking doors when user leaves.",
    features: [
      "Auto-lock door triggers",
      "Window closure automation",
      "Rain detection integration",
      "Entry alerts & logs",
      "Slim sensor design"
    ],
    specifications: {
      "Detection Type": "Magnetic contact + condition logic",
      "Power": "CR2032 Battery",
      "Mounting": "Adhesive or screw",
      "Trigger Actions": "Via app or CoreHub scenes",
      "Alert": "App + Push Notification"
    },
    compatibility: [
      "Rain Sensors",
      "S-Core Smart Locks",
      "SolarCore App (Scenes)",
      "All CoreHub Models"
    ]
  },

  // FlameGuard Series
  "flameguard-aqua": {
    name: "FlameGuard Aqua",
    image: "/lovable-uploads/flameguard-aqua.png",
    category: "Fire Safety",
    description: "Automatically activated water spray system triggered by smoke or fire detection. Suitable for kitchens and flammable material storage areas.",
    features: [
      "Linked with smoke/fire sensors",
      "Automatic water release on trigger",
      "Manual override control",
      "Controlled zone coverage",
      "Pipe and nozzle kit included"
    ],
    specifications: {
      "Trigger Source": "Smoke or heat sensors (linked)",
      "Water Pressure": "Controlled, low-pressure output",
      "Coverage Area": "10–12 m² per unit",
      "Power Source": "12V Servo Control Valve",
      "Mounting": "Ceiling-mount sprinkler heads"
    },
    compatibility: [
      "CoreHub M4 and above",
      "SenseSmoke",
      "Scene-based triggers"
    ]
  },
  "flameguard-dry": {
    name: "FlameGuard Dry",
    image: "/lovable-uploads/flameguard-dry.png",
    category: "Fire Safety",
    description: "Dry powder deployment ideal for electrical panels, server rooms, and sensitive zones where water would cause damage.",
    features: [
      "Non-conductive powder suppression",
      "Instant release via sensors or button",
      "Safe for electronics and appliances",
      "Compact cannister setup",
      "Manual override supported"
    ],
    specifications: {
      "Suppression Type": "ABC Dry Chemical Powder",
      "Deployment Method": "Servo-controlled release valve",
      "Power Source": "12V/24V DC",
      "Mounting": "Wall or equipment rack",
      "Coverage": "6–10 m²"
    },
    compatibility: [
      "SenseSmoke, Flame Detectors",
      "SolarCore App",
      "CoreHub Edge and above"
    ]
  },
  "flameguard-trix": {
    name: "FlameGuard Tri-X",
    image: "/lovable-uploads/flameguard-trix.png",
    category: "Fire Safety",
    description: "Advanced laser triangulation technology locates fire source, then activates targeted suppression via servo-aimed nozzle. For luxury and industrial spaces.",
    features: [
      "3-point infrared triangulation",
      "Servo-controlled laser aiming",
      "Directional powder or gas suppressant",
      "Real-time thermal monitoring",
      "Visual indicator for targeting"
    ],
    specifications: {
      "Detection Range": "Up to 7m radius",
      "Targeting": "Multi-axis servo laser mount",
      "Suppression Modes": "Dry Powder or CO₂",
      "Activation": "CoreHub Scene, Manual or Auto",
      "Power": "24V High-Power Adapter"
    },
    compatibility: [
      "CoreHub Ultra and X",
      "All SenseFire/Smoke Systems",
      "Ander AI fire scene override"
    ]
  },



  // Home Security & Sensors - S-Core Series
  "s-core-lite": {
    name: "S-Core Lite",
    image: "/lovable-uploads/score-lite.png",
    category: "Smart Security",
    description: "Perfect for homes, offices, and shared spaces, S-Core Lite combines multiple secure access methods in one compact design. With keypad input, RFID tag access, and mechanical override, it provides flexibility and safety for everyday use.",
    features: [
      "Keypad passcode entry",
      "RFID tag support (multiple users)",
      "Mechanical key override", 
      "Easy installation on standard doors",
      "Entry-level pricing with high reliability",
      "Indoor chime and LED status indicator"
    ],
    specifications: {
      "Access Modes": "Keypad, RFID, Mechanical Key",
      "User Capacity": "Up to 20 RFID tags, 10 Keypad codes",
      "Power": "4x AA batteries (6 months usage)",
      "Material": "Zinc Alloy + ABS casing",
      "Lock Type": "Deadbolt (Auto/Manual mode)",
      "Dimensions": "Front Panel – 160mm x 65mm",
      "Battery Indicator": "Low battery voice + light alert",
      "Color Options": "Matte Black, Brushed Silver"
    },
    compatibility: [
      "CoreHub S and above",
      "SolarCore App (Pairing for logs only)",
      "Secure Entry Logging (Optional Add-on)"
    ]
  },

  "s-core-bio": {
    name: "S-Core Bio",
    image: "/lovable-uploads/score-bio.png",
    category: "Smart Security",
    description: "Designed for homes, shared spaces, and small businesses, S-Core Bio integrates advanced facial and fingerprint recognition along with keypad and RFID access. Perfect for personalized, secure access with multi-user support.",
    features: [
      "Facial Recognition Camera",
      "Fingerprint Scanner",
      "Keypad & RFID Access",
      "Mechanical Key Override",
      "Multi-user management",
      "Voice + Light Status Feedback"
    ],
    specifications: {
      "Access Modes": "Face, Fingerprint, RFID, Keypad, Key",
      "User Profiles": "100 Fingerprints, 20 Faces, 50 RFIDs",
      "Camera Type": "IR facial recognition (night-safe)",
      "Power Supply": "Rechargeable Battery Pack (USB-C)",
      "Standby Time": "Up to 3 months",
      "Body Material": "Zinc Alloy + Tempered Glass",
      "Color Options": "Graphite Black, Steel Grey",
      "Screen Size": "1.3\" OLED (Indoor Unit)"
    },
    compatibility: [
      "CoreHub M4 and above",
      "SolarCore App (for logs + user management)",
      "Smart Scene Automation (unlock to trigger actions)"
    ]
  },

  "s-core-ultra": {
    name: "S-Core Ultra",
    image: "/lovable-uploads/score-ultra.png",
    category: "Smart Security",
    description: "Combining the power of facial recognition, biometric access, keypad, RFID, and app unlock — with IA-assisted entry, S-Core Ultra is the ultimate smart lock. Its screen-enabled indoor unit logs all activity and provides real-time alerts. Ideal for high-security homes, tech apartments, and VIP areas.",
    features: [
      "Facial Recognition + Fingerprint Unlock",
      "RFID + Keypad + Mechanical Key",
      "App Unlock / Remote Access",
      "Unlock via Ander IA Voice Command",
      "Full Entry Log + Notifications",
      "Indoor Display Screen + Control",
      "Auto-Lock with Geo-fencing"
    ],
    specifications: {
      "Access Modes": "Face, Fingerprint, Keypad, RFID, App, Key, Voice",
      "User Profiles": "200+ Profiles",
      "Indoor Display": "4-inch HD Screen",
      "Camera": "Wide-angle NightVision Facial Cam",
      "Connectivity": "Wi-Fi, Bluetooth 5.1, Secure Zigbee Link",
      "Power": "Rechargeable lithium battery (lasts 4-6 months)",
      "Log Storage": "Up to 300 entries offline",
      "Build": "Full metal, anti-tamper casing"
    },
    compatibility: [
      "All CoreHub Variants",
      "Ander AI Integration",
      "SolarCore App Full Suite",
      "Multi-lock sync across property"
    ]
  },

  // Cam Series
  "cam-mini": {
    name: "Cam Mini",
    image: "/lovable-uploads/cam-mini.png",
    category: "Smart Security",
    description: "Designed for discreet security in bedrooms, nurseries, or private spaces. Offers high-definition video streaming, instant motion alerts, and easy app integration.",
    features: [
      "1080p HD live video feed",
      "Night vision infrared camera",
      "Real-time motion alerts",
      "2.4GHz Wi-Fi connectivity",
      "In-app snapshot and recording",
      "Compact and low-profile design"
    ],
    specifications: {
      "Resolution": "1080p Full HD (1920x1080)",
      "Lens Angle": "110° Wide View",
      "Night Vision": "Infrared up to 8m",
      "Connectivity": "Wi-Fi (2.4GHz), Bluetooth Sync",
      "Storage": "Cloud or SD Card (up to 128GB)",
      "Power": "USB-C, 5V/1A",
      "Mounting": "Wall, Ceiling, or Shelf placement"
    },
    compatibility: [
      "CoreHub Mini & above",
      "SolarCore App (Live Feed + Logs)",
      "Scene Triggers & Home Mode"
    ]
  },

  "cam-360": {
    name: "Cam 360",
    image: "/lovable-uploads/cam-360.png",
    category: "Smart Security",
    description: "Ideal for large rooms, entrances, or commercial spaces. It auto-follows motion across 360° to give uninterrupted visual security coverage.",
    features: [
      "360° PTZ (Pan, Tilt, Zoom)",
      "Auto Motion Tracking",
      "Full HD Streaming + Night Vision",
      "Two-way audio communication",
      "Privacy Mode toggle",
      "Smart Detection Zones"
    ],
    specifications: {
      "Camera Angle": "Pan: 355°, Tilt: 120°",
      "Video Resolution": "1080p HD",
      "Audio": "2-Way (Mic + Speaker)",
      "Storage": "SD Card (up to 128GB) + Cloud",
      "Mounting": "Ceiling/Wall or Desk Base",
      "Power": "12V DC, Adapter Included",
      "Connection": "Wi-Fi + Secure Zigbee"
    },
    compatibility: [
      "CoreHub M4 and above",
      "Ander IA Alert Integration",
      "SolarCore Scene Linking"
    ]
  },

  "cam-door": {
    name: "Cam Door",
    image: "/lovable-uploads/cam-door.png",
    category: "Smart Security",
    description: "Built-in motion detection, 2-way audio, and high-definition video feed give you visibility and control over your main entrance — from anywhere in the world.",
    features: [
      "2-Way Audio Communication",
      "1080p HD Live Feed",
      "Motion-Based Alerts",
      "Snapshot Notifications on Activity",
      "Night Vision Camera",
      "App-Controlled Door Access"
    ],
    specifications: {
      "Resolution": "1080p HD",
      "Audio": "Full Duplex 2-Way",
      "Camera Angle": "160° Field of View",
      "Power": "Hardwired or Battery (USB-C Rechargeable)",
      "Storage": "Cloud or SD",
      "Weather Rating": "IP66 Waterproof",
      "Chime Module": "Optional Indoor Add-on"
    },
    compatibility: [
      "All CoreHub Devices",
      "SolarCore App (Door Access Logs)",
      "Pair with S-Core Smart Locks"
    ]
  },

  "shadecore-glide": {
    name: "ShadeCore Glide",
    image: "/lovable-uploads/shadecore-glide.png",
    category: "Smart Curtain",
    description: "Seamlessly open and close your curtains with a touch or via scheduled automations. Perfect for large windows, living rooms, and bedrooms.",
    features: [
      "Motorized curtain rail system",
      "Smooth glide operation",
      "Remote & App-based control",
      "Scene-based automation support",
      "Quiet and energy-efficient motor"
    ],
    specifications: {
      "Track Length": "Customizable up to 6m",
      "Control Options": "CoreHub, Mobile App, Remote",
      "Power Source": "AC motor, 100–240V",
      "Motor Noise": "<35dB operation",
      "Mounting": "Ceiling or wall-mount track"
    },
    compatibility: [
      "CoreHub Mini and above",
      "SolarCore App",
      "Scene Scheduler"
    ]
  },

  "shadecore-touch": {
    name: "ShadeCore Touch",
    image: "/lovable-uploads/shadecore-touch.png",
    category: "Smart Curtain",
    description: "Elegant soft-fold curtain and blind system that integrates physical touch controls with full app and automation support.",
    features: [
      "Integrated wall touchpad for manual control",
      "App & scene-based automation",
      "Ideal for bedrooms, offices, lounges",
      "Soft-close mechanism",
      "Remote optional"
    ],
    specifications: {
      "Control Options": "Wall touchpad, App, Remote",
      "Material": "Custom fabric options",
      "Power Source": "12V/24V DC Motor",
      "Mounting": "Wall track or ceiling track",
      "Max Width": "Up to 4m per set"
    },
    compatibility: [
      "All CoreHub Models",
      "SolarCore App",
      "Voice & Scene Triggers"
    ]
  },
  "splug": {
    name: "S-Plug",
    image: "/lovable-uploads/splug.png",
    category: "Smart Socket",
    description: "Plug and play socket modules that allow you control supplied power to appliances through manual switching, app based control, timers, and modes through a smart panel or remote control, all without the need for rewiring.",
    features: [
      "Basic socket control (on/off, timers, mode)",
      "Plug-in easy installation",
      "App Syncing",
      "Direct USB power port"
    ],
    specifications: {
      "Control Modes": "On/Off, Timer, Conditional Mode Settings",
      "Power Source": "220V AC",
      "Range": "Wifi through app",
      "Mounting": "Existing Socket Plug-in"
    },
    compatibility: [
      "Preexisting wall sockets",
      "SolarCore App",
    ]
  },
  "splug-duo": {
    name: "S-Plug Duo",
    image: "/lovable-uploads/splug-duo.png",
    category: "Smart Socket",
    description: "Plug and play socket modules that allow you simultaneously control supplied power to multiple appliances through manual switching, app based control, timers, and modes through a smart panel or remote control, all without the need for rewiring.",
    features: [
      "Basic socket control (on/off, timers, mode)",
      "Plug-in easy installation",
      "App Syncing",
      "Duoble-Plug in channels and ports",
      "Direct USB power port"
    ],
    specifications: {
      "Control Modes": "On/Off, Timer, Conditional Mode Settings",
      "Power Source": "220V AC",
      "Range": "Wifi through app",
      "Mounting": "Existing Socket Plug-in"
    },
    compatibility: [
      "Preexisting wall sockets",
      "SolarCore App",
    ]
  },
  "climacore-basic": {
    name: "ClimaCore Basic",
    image: "/lovable-uploads/climacore-basic.png",
    category: "Smart HVAC",
    description: "Affordable smart HVAC control solution that allows you to control AC power, timers, and modes through a smart panel or remote control.",
    features: [
      "Basic AC control (on/off, timers, mode)",
      "IR remote control compatibility",
      "Wall panel with LED indicators",
      "Supports inverter & split ACs",
      "Low-cost automation entry"
    ],
    specifications: {
      "Control Modes": "On/Off, Fan Speed, Timer, Mode",
      "Panel Interface": "Touch buttons + LED",
      "Power Source": "12V DC",
      "Range": "IR: up to 8m",
      "Mounting": "Wall-mounted"
    },
    compatibility: [
      "Most AC Units (IR controlled)",
      "SolarCore App",
      "CoreHub M4 and above"
    ]
  },

  "climacore-pro": {
    name: "ClimaCore Pro",
    image: "/lovable-uploads/climacore-pro.png",
    category: "Smart HVAC",
    description: " Advanced HVAC automation system that learns from user patterns to provide optimal comfort. App and voice-controlled, powered by AI logic and Ander integration.",
    features: [
      "App and voice control",
      "AI pattern-based comfort optimization",
      "Supports schedules, geofencing, occupancy detection",
      "Adaptive temperature tuning",
      "Scene integration with entire SolarCore system"
    ],
    specifications: {
      "Control Options": "App, Voice (Ander), CoreHub Scenes",
      "AI Logic": "Usage-based auto-regulation",
      "Power Source": "12V DC, 2A",
      "Mounting": "Wall-mounted",
      "Compatibility": "Inverter, Split & Multi-Split ACs"
    },
    compatibility: [
      "All CoreHub Models",
      "SolarCore App",
      "Ander Voice AI",
      "SolarCore Scene Logic",
      "Most AC brands"
    ]
  }
};