import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@/assets/Jourlev-Logo-768x193.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Meet Zane", path: "/zane" },
    { name: "Insights", path: "/insights" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border/30 z-50 transition-all duration-300">
      <div className="content-container">
        <div className="flex justify-between items-center h-40 md:h-48 lg:h-56 xl:h-64">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <img 
                src={logoPath} 
                alt="JOURLEV" 
                className="h-12 md:h-14 lg:h-16 xl:h-20 w-auto"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`font-body font-medium transition-all duration-300 hover:text-accent relative uppercase tracking-wide text-sm ${
                    isActive(item.path)
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-6 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
                  )}
                </Link>
              ))}
              <Link href="/contact" className="button-jourlev accent-gradient text-black font-semibold uppercase tracking-wide text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-accent"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/80 backdrop-blur-md border-t border-border/30">
          <div className="content-container py-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`block py-3 font-body font-medium transition-colors duration-300 uppercase tracking-wide ${
                    isActive(item.path) ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="block py-3 text-accent font-semibold uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
