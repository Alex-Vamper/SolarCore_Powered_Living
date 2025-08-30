import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Product } from "./productData";

interface ProductFeaturesProps {
  product: Product;
}

export const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.features.map((feature: string, index: number) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white-700">{feature}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};