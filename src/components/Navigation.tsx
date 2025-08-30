import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/use-mobile-responsive";
import { MobileMenu } from "@/components/ui/mobile-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();

const products = [
  "Smart Control Hub",
  "Smart Switches",
  "Smart Lighting",
  "Home Security & Sensors",
  "Smart Shading",
  "HVAC"
];

const productCategories = {
  "Smart Control Hub": [
    { name: "CoreHub Mini", image: "/lovable-uploads/corehub-mini.png" },
    { name: "CoreHub M4", image: "/lovable-uploads/corehub-m4.png" },
    { name: "CoreHub S", image: "/lovable-uploads/corehub-s.png" },
    { name: "CoreHub Edge", image: "/lovable-uploads/corehub-edge.png" },
    { name: "CoreHub Ultra", image: "/lovable-uploads/corehub-ultra.png" },
    { name: "CoreHub X", image: "/lovable-uploads/corehub-x.png" },
    { name: "CoreHub Air", image: "/lovable-uploads/corehub-air.png" },
    //{ name: "Control Panel Display", image: "/lovable-uploads/4d39e465-fa63-4b88-b3ff-4b67b745d21d.png" },
    //{ name: "Smart Home Interface", image: "/lovable-uploads/fdeee03c-866a-4fb4-a105-0e8d2418ddcb.png" },
    //{ name: "Comprehensive Control System", image: "/lovable-uploads/5b4058c0-5db4-422c-b9f9-b5acefaf62af.png" },
    //{ name: "Smart Thermostat Panel", image: "/lovable-uploads/91967804-5ea8-4dc2-b5ca-70564fa895a9.png" },
    //{ name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    //{ name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    //{ name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Smart Switches": [
    { name: "TouchCore Slide", image: "/lovable-uploads/touchcore-slide.png" },
    { name: "TouchCore Plus", image: "/lovable-uploads/touchcore-plus.png" },
  ],
  "Smart Lighting": {
    "LumaCore Series": [
      { name: "LumaCore Halo", image: "/lovable-uploads/lumacore-halo.png" },
      { name: "LumaCore Pulse", image: "/lovable-uploads/lumacore-pulse.png" },
      { name: "LumaCore Lux", image: "/lovable-uploads/lumacore-lux.png" },
    ],
    "SolarDome Series": [
      { name: "SolarDome One", image: "/lovable-uploads/solardome-one.png" },
      { name: "SolarDome Neo", image: "/lovable-uploads/solardome-neo.png" },
       ],
    "OptiCore Series": [
      { name: "OptiCore Glow", image: "/lovable-uploads/opticore-glow.png" },
      { name: "OptiCore Edge", image: "/lovable-uploads/opticore-edge.png" },
      { name: "OptiCore Aura", image: "/lovable-uploads/opticore-aura.png" },
    ]
  },
  "Home Security & Sensors": {
    "S-Core Series": [
      { name: "S-Core Lite", image: "/lovable-uploads/score-lite.png" },
      { name: "S-Core Bio", image: "/lovable-uploads/score-bio.png" },
      { name: "S-Core Ultra", image: "/lovable-uploads/score-ultra.png" },
    ],
    "Cam Series": [
      { name: "Cam Mini", image: "/lovable-uploads/cam-mini.png" },
      { name: "Cam 360", image: "/lovable-uploads/cam-360.png" },
      { name: "Cam Door", image: "/lovable-uploads/cam-door.png" },
    ],
    "Sense Series": [
      { name: "SenseSmoke", image: "/lovable-uploads/sensesmoke.png" },
      { name: "SenseGas", image: "/lovable-uploads/sensegas.png" },
      { name: "MotionSense", image: "/lovable-uploads/motionsense.png" },
      { name: "D-W Sense", image: "/lovable-uploads/dw-sense.png" },
    ],
    "FlameGuard Series": [
      { name: "FlameGuard Aqua", image: "/lovable-uploads/flameguard-aqua.png" },
      { name: "FlameGuard Dry", image: "/lovable-uploads/flameguard-dry.png" },
      { name: "FlameGuard Tri-X", image: "/lovable-uploads/flameguard-trix.png" },
    ]
  },
  "Smart Shading": [
    { name: "ShadeCore Glide", image: "/lovable-uploads/shadecore-glide.png" },
    { name: "ShadeCore Touch", image: "/lovable-uploads/shadecore-touch.png" },
  ],
  "Smart Sockets": [
    { name: "S-Plug", image: "/lovable-uploads/splug.png" },
    { name: "S-Plug Duo", image: "/lovable-uploads/splug-duo.png" },
  ],
  "HVAC": [
    { name: "ClimaCore Basic", image: "/lovable-uploads/climacore-basic.png" },
    { name: "ClimaCore Pro", image: "/lovable-uploads/climacore-pro.png" },
  ]
};

type SolutionItem = {
  name: string;
  image: string;
};

const solutions = [
  "Smart Home Solutions",
  "Smart Real Estate Solutions",
  "Smart Office Solutions",
  "Smart Institution Solutions"
];

const solutionsCategories = {
  "Smart Home Solutions": [
    { name: "Placeholder 1", image: "/images/solutions/home-1.avif" },
    { name: "Placeholder 2", image: "/images/solutions/home-2.png" },
    { name: "Placeholder 3", image: "/images/solutions/home-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Smart Real Estate Solutions": [
    { name: "Placeholder 1", image: "/images/solutions/real-estate-1.png" },
    { name: "Placeholder 2", image: "/images/solutions/real-estate-2.png" },
    { name: "Placeholder 3", image: "/images/solutions/real-estate-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Smart Office Solutions": [
    { name: "Placeholder 1", image: "/images/solutions/office-1.png" },
    { name: "Placeholder 2", image: "/images/solutions/office-2.png" },
    { name: "Placeholder 3", image: "/images/solutions/office-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Smart Institution Solutions": {
    "Education": [
      { name: "Smart Primary Schools", image: "/images/solutions/institution/primary.png" },
      { name: "Smart Secondary Schools", image: "/images/solutions/institution/secondary.png" },
      { name: "Smart Universities", image: "/images/solutions/institution/university.png" },
      { name: "Smart Campuses", image: "/images/solutions/institution/campus.png" },
      { name: "Smart Hostels", image: "/images/solutions/institution/hostel.png" },
      { name: "Smart Libraries", image: "/images/solutions/institution/library.png" },
      { name: "Smart Classrooms", image: "/images/solutions/institution/classroom.png" },
      { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
      { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
      { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
    ],
    "Healthcare": [
      { name: "Smart Clinics", image: "/images/solutions/institution/clinic.png" },
      { name: "Smart Hospitals", image: "/images/solutions/institution/hospital.png" },
      { name: "Smart Emergency Wards", image: "/images/solutions/institution/ward.png" },
      { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
      { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
      { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
    ],
    "Others": [
      { name: "Smart Courts", image: "/images/solutions/institution/court.png" },
      { name: "Smart Religious Centers", image: "/images/solutions/institution/religion.png" },
      { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
      { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
      { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
    ]
  }
};

const cooperations = [
  "SolarTubes",
  "Solros",
  "Architectural Firms",
  "Construction Companies"
];

const cooperationsCategories = {
  "SolarTubes": [
    { name: "Placeholder 1", image: "/images/cooperations/solartubes-1.png" },
    { name: "Placeholder 2", image: "/images/cooperations/solartubes-2.png" },
    { name: "Placeholder 3", image: "/images/cooperations/solartubes-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Solros": [
    { name: "Placeholder 1", image: "/images/cooperations/solros-1.png" },
    { name: "Placeholder 2", image: "/images/cooperations/solros-2.png" },
    { name: "Placeholder 3", image: "/images/cooperations/solros-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Architectural Firms": [
    { name: "Placeholder 1", image: "/images/cooperations/firms-1.png" },
    { name: "Placeholder 2", image: "/images/cooperations/firms-2.png" },
    { name: "Placeholder 3", image: "/images/cooperations/firms-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Construction Companies": [
    { name: "Placeholder 1", image: "/images/cooperations/construction-1.png" },
    { name: "Placeholder 2", image: "/images/cooperations/construction-2.png" },
    { name: "Placeholder 3", image: "/images/cooperations/construction-3.png" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ]
};

type VideoItem = {
  name: string;
  image: string;
};

const videos: string[] = [
  "Installation Videos",
  "Setup Tutorials",
  "Product Use Videos"
];

const videosCategories: Record<string, VideoItem[]> = {
  "Installation Videos": [
    { name: "Placeholder 1", image: "/images/videos/install-1.jpg" },
    { name: "Placeholder 2", image: "/images/videos/install-2.jpg" },
    { name: "Placeholder 3", image: "/images/videos/install-3.jpg" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Setup Tutorials": [
    { name: "Placeholder 1", image: "/images/videos/setup-1.jpg" },
    { name: "Placeholder 2", image: "/images/videos/setup-2.jpg" },
    { name: "Placeholder 3", image: "/images/videos/setup-3.jpg" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ],
  "Product Use Videos": [
    { name: "Placeholder 1", image: "/images/videos/use-1.jpg" },
    { name: "Placeholder 2", image: "/images/videos/use-2.jpg" },
    { name: "Placeholder 3", image: "/images/videos/use-3.jpg" },
    { name: "Wall Control Units", image: "/lovable-uploads/11843515-ee74-454f-a402-8e20b49e7235.png" },
    { name: "Touch Control Grid", image: "/lovable-uploads/bbc9b0b0-a4c3-41b9-9e68-13002cd21872.png" },
    { name: "Weather Control Hub", image: "/lovable-uploads/0b471e76-bfa8-4e28-a43a-440cae76cdd3.png" }
  ]
};

  const support = [
    "FAQs",
    "User Guide"
  ];

  const supportCategories = {
    "FAQs": ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    "User Guide": ["Placeholder 1", "Placeholder 2", "Placeholder 3"]
  };

  const about = [
    "About SolarCore",
    "Why Us",
    "Contact Us"
  ];

  const aboutCategories = {
    "About SolarCore": ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    "Why Us": ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
    "Contact Us": ["Placeholder 1", "Placeholder 2", "Placeholder 3"]
  };

  const languages = [
    "English",
    "French", 
    "Yoruba",
    "Hausa"
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className={cn(
                  "font-bold font-display bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity",
                  isMobile ? "text-xl" : "text-2xl"
                )}>
                  SolarCore
                </h1>
              </Link>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {/* Products - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/products">
                    <NavigationMenuTrigger className="h-10 px-4 py-2 group">
                      Products
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-center max-w-none">
                        {products.map((product) => (
                          <div key={product} className="relative group/product mx-4">
                             <Link
                               to={`/products#${product.toLowerCase().replace(/\s+/g, '-')}`}
                               className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                             >
                              {product}
                            </Link>

                            {/* LEVEL 2 */}
                            {productCategories[product] && (
                              <div className="fixed top-[120px] left-0 w-full bg-white shadow-lg py-4 px-8 z-[60] opacity-0 invisible group-hover/product:opacity-100 group-hover/product:visible transition-all duration-200">
                                <div className="flex justify-evenly items-center max-w-none">
                                  {typeof productCategories[product] === 'object' &&
                                  !Array.isArray(productCategories[product]) ? (
                                    // LEVEL 2 - With series
                                    Object.keys(productCategories[product]).map((series) => (
                                      <div key={series} className="relative group/series mx-0">
                                         <Link 
                                           to={`/products#${series.toLowerCase().replace(/\s+/g, '-')}`}
                                           className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block cursor-pointer"
                                         >
                                           {series}
                                         </Link>

                                         {/* LEVEL 3 */}
                                         <div className="fixed top-[185px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[70] opacity-0 invisible group-hover/series:opacity-100 group-hover/series:visible transition-all duration-200">
                                           <div className={`${productCategories[product][series].length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                              {productCategories[product][series].map((item, index) =>
                                                item?.name ? (
                                                    <Link
                                                      key={item.name || index}
                                                      to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                                                      className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${productCategories[product][series].length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                                    >
                                                    <img
                                                      src={item.image}
                                                      alt={item.name}
                                                      className="w-25 h-25 object-contain mb-2"
                                                    />
                                                     <span className="text-sm text-gray-800">{item.name}</span>
                                                   </Link>
                                                ) : null
                                              )}
                                           </div>
                                         </div>
                                      </div>
                                    ))
                                  ) : (
                                    <>
                                       {/* LEVEL 2 - Direct items with image */}
                                        <div className={`${productCategories[product]?.length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                          {productCategories[product]?.map((item: any, index: number) =>
                                            item?.name ? (
                                               <Link
                                                 key={item.name || index}
                                                 to={`/products/${item.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                                                 className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${productCategories[product]?.length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                               >
                                                <img
                                                  src={item.image}
                                                  alt={item.name}
                                                  className="w-25 h-25 object-contain mb-2"
                                                />
                                                 <span className="text-sm text-gray-800">{item.name}</span>
                                               </Link>
                                            ) : null
                                          )}
                                        </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                {/* Solutions - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/solutions">
                    <NavigationMenuTrigger className="h-10 px-4 py-2 group">
                      Solutions
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-start max-w-none">
                        {solutions.map((solution) => (
                          <div key={solution} className="relative group/solution mx-4">
                             <Link
                               to={`/solutions#${solution.toLowerCase().replace(/\s+/g, '-')}`}
                               className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                             >
                               {solution}
                             </Link>

                            {/* Custom Logic: Smart Institution Solutions */}
                            {solution === "Smart Institution Solutions" &&
                              typeof solutionsCategories[solution] === "object" && (
                                <div className="fixed top-[120px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[60] opacity-0 invisible group-hover/solution:opacity-100 group-hover/solution:visible transition-all duration-200">
                                  <div className="flex justify-evenly items-start">
                                    {Object.keys(solutionsCategories[solution]).map((category) => (
                                      <div key={category} className="relative group/institution mx-4">
                                          <Link 
                                            to={`/solutions#${category.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block cursor-pointer"
                                          >
                                            {category}
                                          </Link>

                                         {/* LEVEL 3 - Appear on hover of each category */}
                                         <div className="fixed top--[190px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[70] opacity-0 invisible group-hover/institution:opacity-100 group-hover/institution:visible transition-all duration-200">
                                           <div className={`${solutionsCategories[solution][category].length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                             {solutionsCategories[solution][category].map((item, index) =>
                                               item?.name ? (
                                                  <Link
                                                    key={item.name || index}
                                                    to="/solutions"
                                                    className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${solutionsCategories[solution][category].length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                                  >
                                                   <img
                                                     src={item.image}
                                                     alt={item.name}
                                                     className="w-25 h-25 object-contain mb-2"
                                                   />
                                                    <span className="text-sm text-gray-800">{item.name}</span>
                                                  </Link>
                                               ) : null
                                             )}
                                           </div>
                                         </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                            {/* Standard Logic for other Solutions (with image grid) */}
                            {solution !== "Smart Institution Solutions" &&
                              Array.isArray(solutionsCategories[solution]) &&
                              solutionsCategories[solution].length > 0 && (
                                 <div className="fixed top-[120px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[60] opacity-0 invisible group-hover/solution:opacity-100 group-hover/solution:visible transition-all duration-200">
                                   <div className={`${solutionsCategories[solution].length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                     {solutionsCategories[solution].map((item, index) =>
                                       item?.name ? (
                                          <Link
                                            key={item.name || index}
                                            to="/solutions"
                                            className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${solutionsCategories[solution].length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                          >
                                           <img
                                             src={item.image}
                                             alt={item.name}
                                             className="w-25 h-25 object-contain mb-2"
                                           />
                                            <span className="text-sm text-gray-800">{item.name}</span>
                                          </Link>
                                       ) : null
                                     )}
                                   </div>
                                 </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                {/* Cooperations - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/cooperations">
                    <NavigationMenuTrigger className="h-10 px-4 py-2 group">
                      Cooperations
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    {/* LEVEL 1 DROPDOWN - Cooperations */}
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-center max-w-none">
                        {cooperations.map((cooperation) => (
                          <div key={cooperation} className="relative group/cooperation mx-4">
                             <Link
                               to={`/cooperations#${cooperation.toLowerCase().replace(/\s+/g, '-')}`}
                               className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                             >
                               {cooperation}
                             </Link>

                            {/* LEVEL 2 DROPDOWN - Cooperation Categories with Images */}
                            {Array.isArray(cooperationsCategories[cooperation]) &&
                              cooperationsCategories[cooperation].length > 0 && (
                                 <div className="fixed top-[120px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[60] opacity-0 invisible group-hover/cooperation:opacity-100 group-hover/cooperation:visible transition-all duration-200">
                                   <div className={`${cooperationsCategories[cooperation].length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                     {cooperationsCategories[cooperation].map((item, index) =>
                                       item?.name ? (
                                          <Link
                                            key={item.name || index}
                                            to="/cooperations"
                                            className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${cooperationsCategories[cooperation].length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                          >
                                           <img
                                             src={item.image}
                                             alt={item.name}
                                             className="w-25 h-25 object-contain mb-2"
                                           />
                                            <span className="text-sm text-gray-800">{item.name}</span>
                                          </Link>
                                       ) : null
                                     )}
                                   </div>
                                 </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                {/* Videos - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/videos">
                    <NavigationMenuTrigger className="h-10 px-4 py-2 group">
                      Videos
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    {/* LEVEL 1 DROPDOWN - Videos */}
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-center max-w-none">
                        {videos.map((video) => (
                          <div key={video} className="relative group/video mx-4">
                            <Link
                              to="/videos"
                              className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                            >
                              {video}
                            </Link>

                            {/* LEVEL 2 DROPDOWN - Video Categories with Images */}
                            {Array.isArray(videosCategories[video]) &&
                              videosCategories[video].length > 0 && (
                                 <div className="fixed top-[120px] left-0 w-[100%] bg-white shadow-lg py-4 px-8 z-[60] opacity-0 invisible group-hover/video:opacity-100 group-hover/video:visible transition-all duration-200">
                                   <div className={`${videosCategories[video].length > 4 ? 'flex overflow-x-auto space-x-6 scrollbar-hide' : 'grid grid-cols-4 gap-6'}`}>
                                     {videosCategories[video].map((item, index) =>
                                       item?.name ? (
                                          <Link
                                            key={item.name || index}
                                            to="/videos"
                                            className={`flex flex-col items-center text-center hover:opacity-90 transition-opacity ${videosCategories[video].length > 4 ? 'flex-shrink-0 w-32' : ''}`}
                                          >
                                           <img
                                             src={item.image}
                                             alt={item.name}
                                             className="w-25 h-25 object-cover mb-2 rounded"
                                           />
                                            <span className="text-sm text-gray-800">{item.name}</span>
                                          </Link>
                                       ) : null
                                     )}
                                   </div>
                                 </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                {/* Support - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/support">
                    <NavigationMenuTrigger className="h-10 px-4 py-2">
                      Support
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    {/* LEVEL 1 DROPDOWN - Support */}
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-center max-w-none">
                        {support.map((item) => (
                          <Link
                            key={item}
                            to="/support"
                            className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About Us - LEVEL 1 */}
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuTrigger className="h-10 px-4 py-2">
                      About Us
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    {/* LEVEL 1 DROPDOWN - About */}
                    <div className="fixed left-0 top-full w-screen bg-white shadow-lg py-4 px-8 z-50">
                      <div className="flex justify-evenly items-center max-w-none">
                        {about.map((item) => (
                          <Link
                            key={item}
                            to="/about"
                            className="text-sm font-medium text-gray-900 hover:text-primary transition-colors px-4 py-2 block"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>


          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                {languages.map((language) => (
                  <DropdownMenuItem key={language}>
                    {language}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost" 
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

        </nav>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </>
    );
  };

  export default Navigation;
