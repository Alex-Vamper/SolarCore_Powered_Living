import { Card, CardContent } from "@/components/ui/card";
import { Wifi } from "lucide-react";
import { Product } from "./productData";

interface ProductCompatibilityProps {
  product: Product;
}

export const ProductCompatibility = ({ product }: ProductCompatibilityProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white-900 mb-8">Compatibility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {product.compatibility.map((item: string, index: number) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Wifi className="w-5 h-5 text-green-500" />
                <span className="text-white-700">{item}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};