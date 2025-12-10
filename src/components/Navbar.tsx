import { useState } from "react";
import { Menu, X, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/fishData";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Fish Menu", href: "#fish-menu" },
  { name: "Delivery", href: "#delivery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center group-hover:scale-110 transition-transform">
              <Fish className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold text-primary">
              Fisherman Basket
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button 
              asChild
              className="gradient-ocean hover:opacity-90 transition-opacity"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                asChild
                className="gradient-ocean hover:opacity-90 transition-opacity w-full"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
