import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { ScheduleConsultationModal } from "@/components/modals/ScheduleConsultationModal";
import { RequestQuoteModal } from "@/components/modals/RequestQuoteModal";

const ContactSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <ScheduleConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space with smart solar technology? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="h-96 relative">
                  <img 
                    src="/lovable-uploads/37f07199-1331-4dbd-beeb-dd2293e56440.png" 
                    alt="Nigeria Network Map" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Title overlay */}
                  <div className="absolute top-4 left-4">
                    <h3 className="text-xl font-semibold text-primary">Nigeria</h3>
                    <p className="text-sm text-muted-foreground">Headquartered in Jos</p>
                  </div>
                </div>
                
                <div className="p-6 bg-background">
                  <h4 className="text-lg font-semibold text-primary mb-2">Our Coverage</h4>
                  <p className="text-muted-foreground text-sm">
                    SolarCore serves all major cities across Nigeria with installation, 
                    support, and maintenance services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-display text-primary mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're planning a residential upgrade, commercial installation, 
                or institutional project, our team of experts is ready to help you 
                harness the power of smart solar technology.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="shadow-lg hover:shadow-royal transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Call Us</h4>
                    <p className="text-muted-foreground">+234 913 799 8820</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-royal transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email Us</h4>
                    <p className="text-muted-foreground">info@solarcore.ng</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-royal transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Live Chat</h4>
                    <p className="text-muted-foreground">Available 24/7 for support</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="hero" 
                size="xl" 
                className="flex-1"
                onClick={() => setIsConsultationModalOpen(true)}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="flex-1"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;