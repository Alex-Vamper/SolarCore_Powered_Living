import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Cooperations = () => {
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

  const renderCooperationGrid = (cooperations: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {cooperations.map((cooperation, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square bg-gray-100 p-4">
            <img
              src={cooperation.image}
              alt={cooperation.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{cooperation.name}</h3>
            <button className="text-sm text-primary hover:text-primary/80 font-medium">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Cooperations</h1>
          <p className="text-lg text-gray-600">Strategic partnerships for innovative solutions</p>
        </div>
        
        {Object.entries(cooperationsCategories).map(([category, cooperations]) => {
          const categoryId = category.toLowerCase().replace(/\s+/g, '-');
          return (
            <section key={category} id={categoryId} className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
              {renderCooperationGrid(cooperations)}
            </section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Cooperations;