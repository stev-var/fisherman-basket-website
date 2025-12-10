import { Fish, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Fish Menu", href: "#fish-menu" },
  { name: "Delivery Areas", href: "#delivery" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="flex items-center gap-2 mb-4"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
              >
                <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center">
                  <Fish className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-serif text-2xl font-bold text-background">
                  Fisherman Basket
                </span>
              </a>
              <p className="text-background/70 leading-relaxed">
                Fresh fish delivered to your doorstep every Sunday. Serving
                Kanjirappally and Mundakayam with the finest catch from Kerala's
                harbours.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-background/70 hover:text-seafoam transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">
                Contact Info
              </h4>
              <div className="space-y-3 text-background/70">
                <p>
                  <span className="text-background">Address:</span>
                  <br />
                  Kanjirappally, Kottayam District
                  <br />
                  Kerala, India
                </p>
                <p>
                  <span className="text-background">Phone:</span>
                  <br />
                  +91 9048667052
                </p>
                <p>
                  <span className="text-background">Email:</span>
                  <br />
                  orders@fishermanbasket.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Fisherman Basket. All rights
              reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral" /> in
              Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
