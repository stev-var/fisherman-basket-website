import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/fishData";
import { ArrowDown, Waves } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-ocean opacity-95" />
      
      {/* Ocean pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-seafoam/20 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-seafoam/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-primary-foreground/10 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Waves className="w-4 h-4 text-seafoam" />
            <span className="text-primary-foreground text-sm font-medium">
              Serving Kanjirappally & Mundakayam
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Fresh Fish Every Sunday
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-4 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Direct From Harbour to Your Home
          </p>
          
          {/* Description */}
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Order during the week, and we'll deliver the freshest catch from the harbour 
            straight to your doorstep every Sunday morning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                🐟 Order Now on WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full"
              onClick={() => document.querySelector('#fish-menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Fish Menu
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
