import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const PromoVideo = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
            <Play className="h-16 w-16 text-primary" />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h2 className="text-5xl md:text-7xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-6">
            Luxury Living
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of smart living with SolarCore's revolutionary automation technology
          </p>
          <Button variant="hero" size="xl" className="shadow-elegant">
            <Play className="h-5 w-5 mr-2" />
            Watch Full Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoVideo;