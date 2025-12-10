import { fishList, getWhatsAppLink } from "@/data/fishData";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const FishMenu = () => {
  return (
    <section id="fish-menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Fresh Catch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Available Fish
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of fresh, quality seafood. Prices may vary 
              based on seasonal availability.
            </p>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full mt-4" />
          </div>

          {/* Fish grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fishList.map((fish) => (
              <div 
                key={fish.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={fish.image}
                    alt={fish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {fish.available ? (
                    <span className="absolute top-3 right-3 bg-seafoam text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Sold Out
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {fish.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {fish.malayalamName}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {fish.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">₹{fish.price}</span>
                      <span className="text-muted-foreground text-sm">/{fish.unit}</span>
                    </div>
                    <Button 
                      asChild
                      size="sm"
                      className="gradient-ocean hover:opacity-90 transition-opacity"
                      disabled={!fish.available}
                    >
                      <a 
                        href={getWhatsAppLink(fish.name)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Order
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            * Prices are approximate and may vary based on market rates and availability.
            <br />
            * Cleaning and cutting services available on request.
          </p>
        </div>
      </div>
    </section>
  );
};
