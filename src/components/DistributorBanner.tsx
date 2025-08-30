import { Button } from "@/components/ui/button";
import { Play, Handshake, MessageCircle } from "lucide-react";

const DistributorBanner = () => {
  return (
    <section className="relative h-96 overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-accent">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-primary/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                <Play className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
              Join the SolarCore Network
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Partner with us to bring revolutionary smart home technology to your region. 
              Exclusive distributor opportunities available nationwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" className="shadow-gold">
                <Handshake className="h-5 w-5 mr-2" />
                Become Our Partner
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Inquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorBanner;