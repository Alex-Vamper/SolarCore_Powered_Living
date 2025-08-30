import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Product } from "./productData";
import { RequestQuoteModal } from "@/components/modals/RequestQuoteModal";
import { useToast } from "@/hooks/use-toast";

interface ProductHeroProps {
  product: Product;
}

export const ProductHero = ({ product }: ProductHeroProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDownloadSpecs = () => {
    // For now, show notification. Backend integration needed for actual file download.
    toast({
      title: "Downloading Specifications",
      description: "Your product specification file will be downloaded shortly.",
    });
  };

  return (
    <>
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={product.name}
      />
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link to="/products" className="hover:text-primary">Products</Link>
        <span>/</span>
        <span className="text-white-900">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link to="/products" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Products</span>
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-4">{product.category}</Badge>
            <h1 className="text-4xl font-bold text-whtie-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-400">{product.description}</p>
          </div>
          
          <div className="flex space-x-4">
            <Button size="lg" className="flex-1" onClick={() => setIsQuoteModalOpen(true)}>Request Quote</Button>
            <Button variant="outline" size="lg" className="flex-1" onClick={handleDownloadSpecs}>Download Specs</Button>
          </div>
        </div>
      </div>
    </>
  );
};