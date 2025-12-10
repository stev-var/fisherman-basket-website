import { Anchor, Heart, Leaf } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              About Fisherman Basket
            </h2>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1545816250-e12bedba42ba?w=800&h=600&fit=crop"
                  alt="Fresh fish at Kerala harbour"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
                <p className="text-2xl font-serif font-bold text-primary mb-1">Since 2020</p>
                <p className="text-muted-foreground text-sm">Serving fresh fish to happy families</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-serif text-3xl text-primary font-bold">F</span>isherman Basket 
                was born from a simple idea: bring the freshest fish from Kerala's harbours directly 
                to families in Kanjirappally and Mundakayam, without the hassle of early morning 
                market trips.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Every week, our customers place their orders online. Come Sunday morning, we're at 
                the harbour before sunrise, hand-selecting the finest catch. By mid-morning, the 
                fish is cleaned, packed, and on its way to your home – fresher than any supermarket 
                could ever offer.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We believe in quality over quantity. That's why we only deliver on Sundays – to 
                ensure every piece of fish we sell is purchased and delivered on the same day, 
                maintaining the highest standards of freshness.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0">
                    <Anchor className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Harbour Fresh</h4>
                    <p className="text-sm text-muted-foreground">Direct from the boat</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full gradient-seafoam flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Family Run</h4>
                    <p className="text-sm text-muted-foreground">Personal touch</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable</h4>
                    <p className="text-sm text-muted-foreground">Eco-friendly practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
