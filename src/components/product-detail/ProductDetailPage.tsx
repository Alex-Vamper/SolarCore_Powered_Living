import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ProductHero } from "./ProductHero";
import { ProductFeatures } from "./ProductFeatures";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductGallery } from "./ProductGallery";
import { ProductInstallation } from "./ProductInstallation";
import { ProductCompatibility } from "./ProductCompatibility";
import { ProductSetupGuide } from "./ProductSetupGuide";
import { ProductSupport } from "./ProductSupport";
import { ProductCTA } from "./ProductCTA";
import { productData } from "./productData";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(var(--product-detail-bg))' }}>
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white-900 mb-4">Product Not Available At The Moment. Come Back Soon.</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(var(--product-detail-bg))' }}>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductHero product={product} />
        <ProductFeatures product={product} />
        <ProductSpecifications product={product} />
        {/*<ProductGallery />*/}
        <ProductInstallation product={product} />
        <ProductCompatibility product={product} />
        <ProductSetupGuide product={product} />
        <ProductSupport />
        <ProductCTA product={product} />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;