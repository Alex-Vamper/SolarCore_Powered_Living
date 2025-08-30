import { Card, CardContent } from "@/components/ui/card";
import { Product } from "./productData";

interface ProductSpecificationsProps {
  product: Product;
}

export const ProductSpecifications = ({ product }: ProductSpecificationsProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Technical Specifications</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-350">{key}:</span>
                <span className="text-gray-400">{String(value)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};