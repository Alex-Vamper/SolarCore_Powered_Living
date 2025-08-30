export const ProductGallery = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Product Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">Product Image {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};