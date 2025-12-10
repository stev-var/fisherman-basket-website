import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, whatsappNumber } from "@/data/fishData";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: whatsappNumber,
    link: getWhatsAppLink(),
    color: "gradient-ocean",
  },
  {
    icon: Phone,
    label: "Phone",
    value: whatsappNumber,
    link: `tel:${whatsappNumber}`,
    color: "gradient-seafoam",
  },
  {
    icon: Mail,
    label: "Email",
    value: "orders@fishermanbasket.com",
    link: "mailto:orders@fishermanbasket.com",
    color: "gradient-ocean",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to order? Have questions? We're here to help!
            </p>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  target={info.label === "WhatsApp" ? "_blank" : undefined}
                  rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-md border border-border hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Business hours */}
              <div className="bg-card rounded-xl p-6 shadow-md border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-serif text-lg font-bold text-foreground">Business Hours</h4>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Order Booking:</span>
                    <span className="font-medium text-foreground">Mon - Sat, 9 AM - 8 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="font-medium text-foreground">Sunday, 7 AM - 12 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="gradient-ocean rounded-2xl p-8 md:p-10 text-primary-foreground relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Ready to Order Fresh Fish?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Click the button below to place your order on WhatsApp. 
                  Just tell us what fish you want and your address – we'll handle the rest!
                </p>
                
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full md:w-auto text-lg px-8 py-6 rounded-full shadow-lg"
                >
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </a>
                </Button>

                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Service Areas</p>
                      <p className="text-sm text-primary-foreground/80">
                        Kanjirappally & Mundakayam, Kottayam District, Kerala
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
