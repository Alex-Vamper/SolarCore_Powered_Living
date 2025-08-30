import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageCircle,
  Send
} from "lucide-react";

const Footer = () => {
  const footerSections = {
    products: [
      "Smart Central Control Panel",
      "Smart Switches", 
      "Smart Lighting",
      "Home Security and Sensors",
      "Smart Shading",
      "HVAC"
    ],
    solutions: [
      "Smart Home Solutions",
      "Smart Real Estate Solutions", 
      "Smart Office Solutions",
      "Smart Institution Solutions"
    ],
    support: [
      "FAQs",
      "User Guide",
      "App Download"
    ],
    about: [
      "About SolarCore",
      "Why Us",
      "Contact Us"
    ]
  };

  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-4">
                SolarCore
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionizing homes and businesses with intelligent solar-powered 
                automation technology. Experience the future of smart living today.
              </p>
              
              {/* Message Section */}
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Message</h4>
                <div className="flex space-x-3">
                  <Button 
                    variant="gold" 
                    size="sm" 
                    className="rounded-full"
                    onClick={() => window.open('https://wa.me/2349137998820?text=Welcome%20to%20SolarCore.%20How%20can%20we%20assist%20you%3F', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Send className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Products</h4>
              <ul className="space-y-3">
                {footerSections.products.map((item) => (
                  <li key={item}>
                    <a 
                      href={`/products#${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                       className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerSections.solutions.map((item) => (
                  <li key={item}>
                    <a 
                      href={`/solutions#${item.toLowerCase().replace(/\s+/g, '-')}`}
                       className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Support</h4>
              <ul className="space-y-3">
                {footerSections.support.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                       className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold text-primary mb-4">About</h4>
              <ul className="space-y-3">
                {footerSections.about.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-center md:text-right">
            <p>© 2025 SolarCore. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;