import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Monitor, Bot, Lightbulb, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import productMixpadM5 from "@/assets/corehub-air.png";
import productMixpadX from "@/assets/product-mixpad-x.jpg";
import productSwitches from "@/assets/solarcore-ander.png";
import productLighting from "@/assets/product-smart-lighting.jpg";

const staticProducts = [
  {
    id: 1,
    title: "Smart Central Control Panels",
    description: "Unified control system for your entire smart home ecosystem",
    icon: Monitor,
    gradient: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Intelligent Assistant - Ander",
    description: "Your AI-powered companion for seamless home automation",
    icon: Bot,
    gradient: "from-accent to-accent-glow"
  }
];

const carouselProducts = [
  {
    id: 1,
    title: "Advanced Security Systems",
    description: "Comprehensive protection with smart sensors",
    image: "/lovable-uploads/92ad4f4b-cb04-4a1d-8d2d-14d99f3a5ae4.png"
  },
  {
    id: 2,
    title: "Climate Control",
    description: "Perfect temperature, every room, every time",
    image: "/lovable-uploads/90ab00dc-c7e4-4e8f-9e10-aaf5a11f9110.png"
  },
  {
    id: 3,
    title: "Smart Energy Management",
    description: "Optimize your solar energy consumption",
    image: "/lovable-uploads/ccf28f94-4dd1-41de-b109-8de14e6cbcb6.png"
  },
  {
    id: 4,
    title: "Smart Lighting Solutions",
    description: "Automated lighting that adapts to your lifestyle",
    image: "/lovable-uploads/259390bb-5e8e-4da1-9aa7-27dc129b20b6.png"
  }
];

const ProductAdvertisement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % carouselProducts.length;
      products.push({
        ...carouselProducts[index],
        position: i
      });
    }
    return products;
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our innovative range of smart home automation solutions powered by solar energy
          </p>
        </div>

        {/* Static Products Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group">
            <div className="relative h-80">
              <img 
                src={productMixpadM5}
                alt="Smart Central Control Panels"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-1xl font-bold text-foreground mb-3">Smart Central Control Panels</h3>
                <Button variant="secondary" size="sm" className="text-sm">
                  Learn more
                  <ArrowRight className="ml-2 h-7 w-7" />
                </Button>
              </div>
            </div>
          </div>

          <div className="relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300 group">
            <div className="relative h-80">
              <img 
                src={productSwitches}
                alt="Smart Switches"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-1xl font-bold text-foreground mb-3">Intelligent Assistant Ander</h3>
                <Button variant="secondary" size="sm" className="text-sm">
                  Learn more
                  <ArrowRight className="ml-2 h-7 w-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <h3 className="text-3xl font-bold font-display text-center text-primary mb-12">
            Complete Smart Home Solutions
          </h3>
          
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-6">
              {getVisibleProducts().map((product, index) => {
                return (
                  <div
                    key={`${product.id}-${currentIndex}`}
                    className={cn(
                      "transition-all duration-500 relative group",
                      index === 1
                        ? "w-80 opacity-100 scale-100 z-10" // Center card
                        : "w-64 opacity-70 scale-90 z-0" // Side cards
                    )}
                  >
                    <div className="relative bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-300">
                      <div className="relative h-80">
                        <img 
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                          <Button variant="secondary" size="sm" className="text-sm">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 shadow-md"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 shadow-md"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {carouselProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-border hover:bg-muted-foreground"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdvertisement;