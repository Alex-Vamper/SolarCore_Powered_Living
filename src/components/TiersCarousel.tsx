import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/use-mobile-responsive";
import { MobileCarousel } from "@/components/ui/mobile-carousel";
import { TouchFriendlyCard } from "@/components/ui/touch-friendly-card";
import { MobileSection } from "@/components/ui/mobile-section";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { useNavigate } from "react-router-dom";
import tierAImg from "@/assets/tiers/package-a.png";
import tierBImg from "@/assets/tiers/package-b.png";
import tierCImg from "@/assets/tiers/package-c.png";
import tierDImg from "@/assets/tiers/package-d.png";
import tierEImg from "@/assets/tiers/package-e.png";
import bronzeImg from "@/assets/tiers/bronze-tier.png";
import silverImg from "@/assets/tiers/silver-tier.png";
import goldImg from "@/assets/tiers/gold-tier.png";
import platinumImg from "@/assets/tiers/platinum-tier.png";
import diamondImg from "@/assets/tiers/diamond-tier.png";
import developerImg from "@/assets/tiers/developer-tier.png";
import customImg from "@/assets/tiers/custom-tier.png";



const tierSlides = [
  {
    id: "A",
    label: "Starter Pack A",
    title: "Home Entry Essentials",
    description: "First-time users or small apartments",
    image: tierAImg
  },
  {
    id: "B",
    label: "Starter Pack B",
    title: "Smart Comfort Pack",
    description: "Upgrading your core living space",
    image: tierBImg
  },
  {
    id: "C",
    label: "Starter Pack C",
    title: "Lifestyle & Security Pack",
    description: "Smart living + enhanced safety",
    image: tierCImg
  },
  {
    id: "D",
    label: "Starter Pack D",
    title: "Intelligent Home Assistant Pack",
    description: "Voice-enabled control & intelligence",
    image: tierDImg
  },
  {
    id: "E",
    label: "Starter Pack E",
    title: "Advanced Living Pack",
    description: "Remote control & smarter routines",
    image: tierEImg
  },
  {
    id: "Bronze",
    label: "Bronze Tier",
    title: "Smart Start (3 Zones)",
    description: "Entry-level setup for basic smart automation",
    image: bronzeImg
  },
  {
    id: "Silver",
    label: "Silver Tier",
    title: "Smart Expansion (4 Zones)",
    description: "Expanding your automation setup with voice",
    image: silverImg
  },
  {
    id: "Gold",
    label: "Gold Tier",
    title: "Full Home Base (6 Zones)",
    description: "Mid-size homes with balanced control",
    image: goldImg
  },
  {
    id: "Platinum",
    label: "Platinum Tier",
    title: "Elevated Smart Living",
    description: "Premium luxury-tier smart automation",
    image: platinumImg
  },
  {
    id: "Diamond",
    label: "Diamond Tier",
    title: "Full-Suite Intelligence",
    description: "Top-tier complete smart ecosystem",
    image: diamondImg
  },
  {
    id: "Developer",
    label: "Developer Tier",
    title: "Bulk Smart Build Solution",
    description: "Designed for estates, contractors, and institutions",
    image: developerImg
  },
  {
    id: "Custom",
    label: "Custom Tier",
    title: "Personalized Configurator",
    description: "Build your perfect automation mix",
    image: customImg
  }
];

const TiersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  const handleViewDetails = (tierId: string) => {
    navigate(`/tiers/${tierId}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tierSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tierSlides.length) % tierSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MobileSection 
      spacing="lg" 
      background="default" 
      className="bg-background"
    >
      <ResponsiveContainer>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className={cn(
            "font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-4",
            isMobile ? "text-2xl" : "text-3xl lg:text-4xl"
          )}>
            Choose Your Smart Home Tier
          </h2>
          <p className={cn(
            "text-gray-600 max-w-3xl mx-auto",
            isMobile ? "text-base px-2" : "text-lg"
          )}>
            From starter packages to complete smart ecosystems, find the perfect solution for your needs
          </p>
        </div>

        {isMobile ? (
          <MobileCarousel className="h-96">
            {tierSlides.map((slide) => (
              <div key={slide.id} className="h-full">
                <TouchFriendlyCard className="h-full">
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <img src={slide.image} alt={slide.title} className="w-full h-2/3 object-cover" />
                    <div className="p-4 h-1/3 flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-primary mb-1">{slide.label}</h4>
                      <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{slide.description}</p>
                      <Button size="sm" className="w-full" onClick={() => handleViewDetails(slide.id)}>View Details</Button>
                    </div>
                  </div>
                </TouchFriendlyCard>
              </div>
            ))}
          </MobileCarousel>
        ) : (
          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-[42rem] overflow-hidden rounded-2xl bg-white shadow-xl">
            {tierSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                )}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl max-w-md shadow-lg">
                  <h4 className="text-2xl sm:text-primary font-bold text-foreground mb-2">
                    {slide.label}
                  </h4>
                  <h3 className="text-sm sm:text-lg text-3xl font-semibold mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    {slide.description}
                  </p>
                  <Button size="lg" className="px-6 py-2" onClick={() => handleViewDetails(tierSlides[currentSlide].id)}>
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {tierSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentSlide ? "bg-primary" : "bg-primary/30"
                )}
              />
            ))}
          </div>
          </div>
        )}
      </ResponsiveContainer>
    </MobileSection>
  );
};

export default TiersCarousel;
