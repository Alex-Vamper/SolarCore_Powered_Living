import { Card, CardContent } from "@/components/ui/card";
import { Product } from "./productData";

interface ProductInstallationProps {
  product: Product;
}

export const ProductInstallation = ({ product }: ProductInstallationProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Installation Guide</h2>
      <Card>
        <CardContent className="p-6">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-400">Installation Video</span>
          </div>
          <p className="text-white-600">
            Step-by-step installation guide for {product.name}. Our comprehensive video tutorial 
            covers everything from unboxing to final configuration.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};