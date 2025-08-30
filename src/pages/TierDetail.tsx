import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ResponsiveContainer } from "@/components/ui/responsive-container";
import { RequestQuoteModal } from "@/components/modals/RequestQuoteModal";
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

const TierDetail = () => {
  const { tierId } = useParams<{ tierId: string }>();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const tierImages: Record<string, string> = {
    "A": tierAImg,
    "B": tierBImg, 
    "C": tierCImg,
    "D": tierDImg,
    "E": tierEImg,
    "Bronze": bronzeImg,
    "Silver": silverImg,
    "Gold": goldImg,
    "Platinum": platinumImg,
    "Diamond": diamondImg,
    "Developer": developerImg,
    "Custom": customImg,
  };

  const tierTitles: Record<string, string> = {
    "A": "Home Entry Essentials",
    "B": "Smart Comfort Pack",
    "C": "Lifestyle & Security Pack", 
    "D": "Intelligent Home Assistant Pack",
    "E": "Advanced Living Pack",
    "Bronze": "Smart Start (3 Zones)",
    "Silver": "Smart Expansion (4 Zones)",
    "Gold": "Full Home Base (6 Zones)",
    "Platinum": "Elevated Smart Living",
    "Diamond": "Full-Suite Intelligence",
    "Developer": "Bulk Smart Build Solution",
    "Custom": "Personalized Configurator",
  };

  const tierContent: Record<string, any> = {
    "A": {
      price: "₦899,000",
      bestFor: "First-time users or small apartments",
      includes: [
        "1x S-Core Lite (Smart Door Lock)",
        "1x Cam Door (Smart Doorbell Camera)",
        "1x Smart Socket",
        "1x MotionSense (Basic PIR Motion Sensor)"
      ]
    },
    "B": {
      price: "₦1,199,000",
      bestFor: "Users upgrading core living space",
      includes: [
        "1x S-Core Lite (Smart Door Lock)",
        "1x Cam Door (Smart Doorbell Camera)",
        "2x Smart Socket",
        "1x LumaCore Lux (Premium Smart Bulb)",
        "1x TouchCore Slide (Smart Switch)",
        "1x MotionSense (Basic PIR Motion Sensor)",
        "1x Cam Mini (Indoor Camera)"
      ]
    },
    "C": {
      price: "₦1,499,000",
      bestFor: "Users wanting smart living + enhanced safety",
      includes: [
        "1x S-Core Lite (Smart Door Lock)",
        "1x Cam Door (Smart Doorbell Camera)",
        "2x Smart Socket",
        "1x LumaCore Lux (Premium Smart Bulb)",
        "1x LumaCore Halo (Smart Bulb)",
        "1x TouchCore Plus (Smart Switch – Upgrade)",
        "1x CoreHub Mini (Local Control Panel)",
        "2x MotionSense (Basic PIR Motion Sensor)",
        "1x Cam Mini (Indoor Camera)"
      ]
    },
    "D": {
      price: "₦1,899,000",
      bestFor: "Homes that want automation + voice interaction",
      includes: [
        "1x S-Core Bio (Fingerprint + Camera Door Lock – upgrade)",
        "2x Smart Socket",
        "2x LumaCore Lux (Premium Smart Bulb)",
        "1x LumaCore Halo (Smart Bulb)",
        "1x TouchCore Plus (Smart Switch)",
        "1x CoreHub M4 (Local Control Panel, Touchpad + Button interface)",
        "2x MotionSense (Basic PIR Motion Sensor)",
        "2x Cam Mini (Indoor Camera)"
      ]
    },
    "E": {
      price: "₦2,400,000",
      bestFor: "Medium-size homes, remote control & smarter routines",
      includes: [
        "1x S-Core Bio (Fingerprint + Camera Door Lock – upgrade)",
        "4x Smart Socket",
        "2x LumaCore Lux (Premium Smart Bulb)",
        "1x LumaCore Pulse (Smart Bulb)",
        "1x TouchCore Plus (Smart Switch)",
        "1x CoreHub S (Control Panel, Touchpad interface)",
        "3x MotionSense (Basic PIR Motion Sensor)",
        "2x Cam Mini (Indoor Camera)",
        "1x Cam 360 (Panoramic Home Cameras)",
        "1x ClimaCore Basic (HVAC Controller)"
      ]
    },
    "Bronze": {
      bestFor: "Entry-level users and apartments",
      roomsCovered: ["Living Room", "Kitchen", "Master Bedroom"],
      features: [
        "2x S-Core Lite (Door Smart Lock)",
        "5x LumaCore Series Bulbs (3 LumaCore Lux, 2 Luma Core Halo)",
        "4x Smart Sockets",
        "1x TouchCore Plus (Smart Switch)",
        "1x SolarDome One (Basic Dome Light – Living Room)",
        "1x SenseSmoke + SenseGas + FlameGuard Aqua (Kitchen Detection)",
        "1x CoreHub S (Control Panel, Touchpad interface)",
        "3x MotionSense (Basic PIR Motion Sensor)",
        "2x Cam Mini (Indoor Camera)",
        "1x Cam 360 (Panoramic Home Cameras)",
        "1x ClimaCore Basic (HVAC Controller)"
      ]
    },
    "Silver": {
      bestFor: "Users growing their smart home",
      roomsCovered: ["Living Room", "Kitchen", "Master Bedroom", "One Additional Room"],
      features: [
        "2x S-Core Lite (Door Smart Lock)",
        "5x LumaCore Series Bulbs (2x LumaCore Lux, 2x LumaCore Halo, 1x LumaCore Pulse)",
        "5x Smart Sockets",
        "2x TouchCore Series (1x TouchCore Slide, 1x TouchCore Plus)",
        "1x SolarDome One (Basic Dome Light – Living Room)",
        "1x SenseSmoke + SenseGas + FlameGuard Aqua (Kitchen Detection)",
        "1x CoreHub Edge (Control Panel, Touchpad interface)",
        "4x MotionSense (Basic PIR Motion Sensor)",
        "2x Cam Mini (Indoor Camera)",
        "1x Cam 360 (Panoramic Home Cameras)",
        "1x ClimaCore Basic (HVAC Controller)",
        "1x Ander AI Base Version (Voice Control + Smart Feedback)"
      ]
    },
    "Gold": {
      bestFor: "Mid-size homes seeking full automation basics",
      roomsCovered: ["Kitchen, Living Room", "4 Bedrooms"],
      features: [
        "1x S-Core Lite + 1x S-Core Bio (Fingerprint + Camera Door Lock – upgrade)",
        "6x LumaCore Series Bulbs (2x LumaCore Lux, 2x LumaCore Halo, 2x LumaCore Pulse)",
        "7x Smart Sockets",
        "2x TouchCore Series (1x TouchCore Slide, 1x TouchCore Plus)",
        "2x SolarDome Neo (Basic Dome Light)",
        "1x SenseSmoke + SenseGas + FlameGuard Dry (Kitchen Detection)",
        "1x CoreHub Ultra (Control Panel, Touchpad interface)",
        "5x MotionSense (Basic PIR Motion Sensor)",
        "4x Cam Mini (Indoor Camera)",
        "2x Cam 360 (Panoramic Home Cameras)",
        "2x ClimaCore Pro (HVAC Controller)",
        "3x D-W Sense (Rain Sensor + Auto Servo Window)",
        "1x Ander AI Base Version (Voice Control + Smart Feedback)"
      ]
    },
    "Platinum": {
      bestFor: "Homes desiring luxury-tier automation",
      features: [
        "1x S-Core Bio + 1x S-Core Ultra (Fingerprint + Camera Door Lock – upgrade)",
        "9x LumaCore Series Bulbs (4x LumaCore Lux, 2x LumaCore Halo, 3x LumaCore Pulse)",
        "9x Smart Sockets",
        "4x TouchCore Series (2x TouchCore Slide, 2x TouchCore Plus)",
        "3x SolarDome Series (SolarDome One, SolarDome Neo)",
        "2x OptiCore Edge (Fibre Optic Cable Solar Technology)",
        "3x SenseSmoke + 2x SenseGas + 2x FlameGuard Tri-x (Kitchen Detection)",
        "1x CoreHub X (Control Panel, Touchpad interface)",
        "7x MotionSense (Basic PIR Motion Sensor)",
        "5x Cam Mini (Indoor Camera)",
        "3x Cam 360 (Advanced Surveillance)",
        "3x ClimaCore Pro (HVAC Controller)",
        "5x D-W Sense (Rain Sensor + Auto Servo Window)",
        "1x Ander AI Base Version (Voice Control + Smart Feedback)"
      ]
    },
    "Diamond": {
      bestFor: "Top-tier complete home automation system",
      features: [
        "2x S-Core Ultra (Fingerprint + Camera Door Lock – upgrade)",
        "12x LumaCore Series Bulbs (4x LumaCore Lux, 2x LumaCore Halo, 3x LumaCore Pulse)",
        "9x Smart Sockets",
        "4x TouchCore Series (2x TouchCore Slide, 2x TouchCore Plus)",
        "3x SolarDome Series (SolarDome One, SolarDome Neo)",
        "4x OptiCore Series (2x OptiCore Edge, 2x Opticore Aura)",
        "3x SenseSmoke + 3x SenseGas + 3x FlameGuard Tri-x (Kitchen Detection)",
        "1x CoreHub Air (Control Panel, Touchpad interface)",
        "9x MotionSense (Basic PIR Motion Sensor)",
        "7x Cam Mini (Indoor Camera)",
        "5x Cam 360 (Advanced Surveillance)",
        "3x ClimaCore Pro (HVAC Controller)",
        "7x D-W Sense (Rain Sensor + Auto Servo Window)",
        "1x Ander AI Enhanced Version (Voice Control + Smart Feedback)"
      ]
    },
    "Developer": {
      bestFor: "New construction or institutional deployment",
      perfectFor: ["Architects", "Estate Developers", "Construction Companies", "Government Facilities"],
      includes: [
        "Architectural Automation Mapping",
        "Modular delivery of: CoreHub Edge/Ultra Panels, SolarDomes, Sensors, Cameras, Fire Systems",
        "Custom Panel Configuration Per Building Type",
        "Multi-building Monitoring Support",
        "Backend API Access",
        "Project-based Custom Pricing + Dedicated Support"
      ]
    },
    "Custom": {
      bestFor: "Personalized bundles for unique homes or offices",
      canDefine: [
        "Number of rooms",
        "Desired product types (lighting, sensors, locks, etc.)",
        "Voice control needs",
        "AI/Scene/Automation preferences"
      ]
    }
  };

  const currentImage = tierId ? tierImages[tierId] : null;
  const currentTitle = tierId ? tierTitles[tierId] : "Tier Details";
  const currentContent = tierId ? tierContent[tierId] : null;

  // All tiers for navigation
  const allTiers = [
    { id: "A", title: "Package A", image: tierAImg },
    { id: "B", title: "Package B", image: tierBImg },
    { id: "C", title: "Package C", image: tierCImg },
    { id: "D", title: "Package D", image: tierDImg },
    { id: "E", title: "Package E", image: tierEImg },
    { id: "Bronze", title: "Bronze", image: bronzeImg },
    { id: "Silver", title: "Silver", image: silverImg },
    { id: "Gold", title: "Gold", image: goldImg },
    { id: "Platinum", title: "Platinum", image: platinumImg },
    { id: "Diamond", title: "Diamond", image: diamondImg },
    { id: "Developer", title: "Developer", image: developerImg },
    { id: "Custom", title: "Custom", image: customImg },
  ];

  return (
    <>
      <RequestQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        tierName={currentTitle}
      />
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ResponsiveContainer>
          <div className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-8">
                {currentTitle}
              </h1>
              
              {/* Full-width Image Section */}
              {currentImage && (
                <div className="w-full mb-8">
                  <img 
                    src={currentImage} 
                    alt={currentTitle}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>

            {currentContent && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-lg shadow-lg p-8">
                  {/* Price Section */}
                  {currentContent.price && (
                    <div className="text-center mb-8">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {currentContent.price}
                      </div>
                    </div>
                  )}

                  {/* Best For Section */}
                  {currentContent.bestFor && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">Best For</h2>
                      <p className="text-muted-foreground text-lg">{currentContent.bestFor}</p>
                    </div>
                  )}

                  {/* Perfect For Section (Developer tier) */}
                  {currentContent.perfectFor && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">Perfect For</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentContent.perfectFor.map((item: string, index: number) => (
                          <div key={index} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rooms Covered Section */}
                  {currentContent.roomsCovered && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">Rooms Covered</h2>
                      <div className="flex flex-wrap gap-3">
                        {currentContent.roomsCovered.map((room: string, index: number) => (
                          <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                            {room}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Includes Section */}
                  {currentContent.includes && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">Includes</h2>
                      <div className="grid gap-3">
                        {currentContent.includes.map((item: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features Section */}
                  {currentContent.features && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">Features</h2>
                      <div className="grid gap-3">
                        {currentContent.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Can Define Section (Custom tier) */}
                  {currentContent.canDefine && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-foreground mb-4">You Can Define</h2>
                      <div className="grid gap-3">
                        {currentContent.canDefine.map((item: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact CTA */}
                  <div className="text-center pt-8 border-t border-border">
                    <p className="text-muted-foreground mb-4">
                      Ready to get started with this tier?
                    </p>
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Contact Us for Quote
                    </button>
                  </div>
                </div>
              </div>
            )}

            {!currentContent && (
              <div className="bg-muted/50 rounded-lg p-8 max-w-md mx-auto text-center">
                <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
                  Tier Not Found
                </h2>
                <p className="text-muted-foreground">
                  The requested tier information could not be found.
                </p>
              </div>
            )}

            {/* Tier Navigation */}
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-semibold text-center mb-8">Explore All Tiers</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {allTiers.map((tier) => (
                  <Link
                    key={tier.id}
                    to={`/tiers/${tier.id}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                      tierId === tier.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card text-foreground hover:bg-primary/10 border border-border'
                    }`}
                  >
                    {tier.id === "A" ? "Package A" :
                     tier.id === "B" ? "Package B" :
                     tier.id === "C" ? "Package C" :
                     tier.id === "D" ? "Package D" :
                     tier.id === "E" ? "Package E" :
                     tier.id === "Bronze" ? "Bronze Tier" :
                     tier.id === "Silver" ? "Silver Tier" :
                     tier.id === "Gold" ? "Gold Tier" :
                     tier.id === "Platinum" ? "Platinum Tier" :
                     tier.id === "Diamond" ? "Diamond Tier" :
                     tier.id === "Developer" ? "Developer Tier" :
                     tier.id === "Custom" ? "Custom Tier" : tier.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default TierDetail;