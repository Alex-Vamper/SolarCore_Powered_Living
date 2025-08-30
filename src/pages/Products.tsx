import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = {
    "Smart Control Hub": [
      { name: "CoreHub Mini", image: "/lovable-uploads/corehub-mini.png" },
      { name: "CoreHub M4", image: "/lovable-uploads/corehub-m4.png" },
      { name: "CoreHub S", image: "/lovable-uploads/corehub-s.png" },
      { name: "CoreHub Edge", image: "/lovable-uploads/corehub-edge.png" },
      { name: "CoreHub Ultra", image: "/lovable-uploads/corehub-ultra.png" },
      { name: "CoreHub X", image: "/lovable-uploads/corehub-x.png" },
      { name: "CoreHub Air", image: "/lovable-uploads/corehub-air.png" },
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
    "Smart Socket": [
      { name: "S-Plug", image: "/lovable-uploads/splug.png" },
      { name: "S-Plug Duo", image: "/lovable-uploads/splug-duo.png" },
    ],
    "HVAC": [
      { name: "ClimaCore Basic", image: "/lovable-uploads/climacore-basic.png" },
      { name: "ClimaCore Pro", image: "/lovable-uploads/climacore-pro.png" },
    ]
  };

  const renderProductGrid = (products: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square bg-gray-100 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
            <Link 
              to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-primary hover:text-primary/80 font-medium"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProductSection = (category: string, products: any) => {
    const categoryId = category.toLowerCase().replace(/\s+/g, '-');
    
    if (Array.isArray(products)) {
      return (
        <section id={categoryId} className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
          {renderProductGrid(products)}
        </section>
      );
    } else {
      return (
        <section id={categoryId} className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
          {Object.entries(products).map(([series, seriesProducts]) => (
            <div key={series} id={series.toLowerCase().replace(/\s+/g, '-')} className="mb-12 scroll-mt-20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{series}</h3>
              {renderProductGrid(seriesProducts as any[])}
            </div>
          ))}
        </section>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">Discover our comprehensive range of smart home solutions</p>
        </div>
        
        {Object.entries(productCategories).map(([category, products]) => 
          renderProductSection(category, products)
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;