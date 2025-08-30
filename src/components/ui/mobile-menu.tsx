import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuItems = [
    {
      title: 'Products',
      href: '/products',
      hasSubmenu: true,
      submenu: [
        { name: 'Smart Control Hub', href: '/products#smart-control-hub' },
        { name: 'Smart Switches', href: '/products#smart-switches' },
        { name: 'Smart Lighting', href: '/products#smart-lighting' },
        { name: 'Home Security & Sensors', href: '/products#home-security-sensors' },
        { name: 'Smart Shading', href: '/products#smart-shading' },
        { name: 'HVAC', href: '/products#hvac' }
      ]
    },
    {
      title: 'Solutions',
      href: '/solutions',
      hasSubmenu: true,
      submenu: [
        { name: 'Smart Home Solutions', href: '/solutions#smart-home' },
        { name: 'Smart Real Estate Solutions', href: '/solutions#smart-real-estate' },
        { name: 'Smart Office Solutions', href: '/solutions#smart-office' },
        { name: 'Smart Institution Solutions', href: '/solutions#smart-institution' }
      ]
    },
    { title: 'Cooperations', href: '/cooperations' },
    { title: 'Videos', href: '/videos' },
    { title: 'Support', href: '/support' },
    { title: 'About', href: '/about' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedSection(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-background border-l border-border z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-10 w-10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-4 space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.title} className="space-y-1">
                      {item.hasSubmenu ? (
                        <>
                          <button
                            onClick={() => toggleSection(item.title)}
                            className="flex items-center justify-between w-full px-3 py-3 text-left rounded-lg hover:bg-muted transition-colors"
                          >
                            <span className="text-foreground font-medium">{item.title}</span>
                            {expandedSection === item.title ? (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            )}
                          </button>
                          <AnimatePresence>
                            {expandedSection === item.title && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1">
                                  <Link
                                    to={item.href}
                                    onClick={handleLinkClick}
                                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                                  >
                                    View All {item.title}
                                  </Link>
                                  {item.submenu?.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      onClick={handleLinkClick}
                                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleLinkClick}
                          className="block px-3 py-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <span className="text-foreground font-medium">{item.title}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-border">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={handleLinkClick}
                  >
                    <span>Change Language</span>
                  </Button>
                  <div className="flex space-x-2">
                    <Button className="flex-1" onClick={handleLinkClick}>
                      Get Quote
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};