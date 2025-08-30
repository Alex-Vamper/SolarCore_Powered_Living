import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/use-mobile-responsive";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { Button } from "@/components/ui/button";
import heroSecurity from "@/assets/hero-security-advanced.png";
import heroControlhub from "@/assets/hero-control-panel.png";
import heroLivingroom from "@/assets/hero-living-room.png";
import heroOffice from "@/assets/hero-office.png";
import herokitchen from "@/assets/hero-kitchen.png";
import heroAnder from "@/assets/solarcore-ander-2.png";

// Slide data
const slides = [
  {
    id: 1,
    image: heroControlhub,
    title: "Central Control Excellence",
    subtitle: "Everything at your fingertips",
    description: "Manage your entire smart ecosystem from one control panel."
  },
  {
    id: 2,
    image: heroLivingroom,
    title: "Smart Living Space",
    subtitle: "Transform your home with intelligent automation.",
    description: "Experience Luxury living with SolarCore's integrated smart home automation."
  },
  {
    id: 3,
    image: heroSecurity,
    title: "Advanced Security Systems",
    subtitle: "Protect what matters most",
    description: "State-of-the-art security technology powered by solar energy."
  },
  {
    id: 4,
    image: heroOffice,
    title: "Intelligent Office Solutions",
    subtitle: "Boost productivity with smart workplace technology",
    description: "Create the perfect work environment with automated climated, lighting and security."
  },
  {
    id: 5,
    image: herokitchen,
    title: "Smart Kitchen Innovation",
    subtitle: "Cook Smarter, Not Harder",
    description: "Revolutionary kitchen automation that makes cooking easier and enjoyable."
  },
  {
    id: 6,
    image: heroAnder,
    title: "Voice Integration",
    subtitle: "Ander Intelligent Assistance & Voice Control",
    description: "Control your entire smart home with natural voice commands. Our Intelligent Assistant, Ander, understands context and manages complex automation scenarios effortlessly."
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mobile version with swipe support
  if (isMobile) {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <MobileCarousel showArrows={false} className="h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-sm">
                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm mb-4 opacity-90">{slide.subtitle}</p>
                  <p className="text-xs opacity-75 leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </MobileCarousel>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute top-2/3 left-8 max-w-2xl">
              <div className="text-left text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-6 opacity-90">{slide.subtitle}</p>
                <p className="text-lg opacity-80 mb-8 leading-relaxed">{slide.description}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-black/30 hover:bg-black/50 text-white border-0"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-black/30 hover:bg-black/50 text-white border-0"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HeroCarousel;