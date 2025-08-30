import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Solutions = () => {
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

  const renderSolutionGrid = (solutions: any[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {solutions.map((solution, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-square bg-gray-100 p-4">
            <img
              src={solution.image}
              alt={solution.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{solution.name}</h3>
            <button className="text-sm text-primary hover:text-primary/80 font-medium">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSolutionSection = (category: string, solutions: any) => {
    const categoryId = category.toLowerCase().replace(/\s+/g, '-');
    
    if (Array.isArray(solutions)) {
      return (
        <section id={categoryId} className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
          {renderSolutionGrid(solutions)}
        </section>
      );
    } else {
      return (
        <section id={categoryId} className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
          {Object.entries(solutions).map(([series, seriesSolutions]) => (
            <div key={series} id={series.toLowerCase().replace(/\s+/g, '-')} className="mb-12 scroll-mt-20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{series}</h3>
              {renderSolutionGrid(seriesSolutions as any[])}
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-lg text-gray-600">Comprehensive smart solutions for every environment</p>
        </div>
        
        {Object.entries(solutionsCategories).map(([category, solutions]) => 
          renderSolutionSection(category, solutions)
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;