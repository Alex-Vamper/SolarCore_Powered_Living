import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "./productData";
import { RequestQuoteModal } from "@/components/modals/RequestQuoteModal";

interface ProductCTAProps {
  product: Product;
}

export const ProductCTA = ({ product }: ProductCTAProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={product.name}
      />
    <section className="text-center bg-white rounded-xl p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
      <p className="text-lg text-gray-600 mb-8">
        Transform your space with the {product.name}. Contact our experts for a personalized consultation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" onClick={() => setIsQuoteModalOpen(true)}>Request Quote</Button>
        <Button variant="outline" size="lg">Schedule Demo</Button>
      </div>
    </section>
    </>
  );
};