import { Card, CardContent } from "@/components/ui/card";
import { Product } from "./productData";

interface ProductSetupGuideProps {
  product: Product;
}

export const ProductSetupGuide = ({ product }: ProductSetupGuideProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-text-900 mb-8">Quick Setup Guide</h2>
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">1</div>
              <h3 className="font-semibold mb-2">Download App</h3>
              <p className="text-gray-600 text-sm">Install the SolarCore app on your smartphone</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">2</div>
              <h3 className="font-semibold mb-2">Connect Device</h3>
              <p className="text-gray-600 text-sm">Follow in-app instructions to connect your {product.name}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">3</div>
              <h3 className="font-semibold mb-2">Configure Settings</h3>
              <p className="text-gray-600 text-sm">Customize your automation scenes and preferences</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};