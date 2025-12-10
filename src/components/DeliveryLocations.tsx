import { MapPin, Clock, Check } from "lucide-react";

const areas = [
  {
    name: "Kanjirappally",
    description: "Main town and surrounding areas",
    features: ["Town center", "Chirakkadavu", "Erumely Road", "Surrounding villages"],
  },
  {
    name: "Mundakayam",
    description: "Town and nearby localities",
    features: ["Town center", "Peruvanthanam", "Kuttikad", "Surrounding areas"],
  },
];

export const DeliveryLocations = () => {
  return (
    <section id="delivery" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Service Areas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Delivery Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We currently deliver fresh fish to the following areas in Kottayam District, Kerala.
            </p>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full mt-4" />
          </div>

          {/* Map placeholder and areas */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Map visual */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                alt="Kerala map illustration"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 gradient-ocean opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                  <h3 className="font-serif text-2xl font-bold">Kottayam District</h3>
                  <p className="text-primary-foreground/80">Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Areas list */}
            <div className="space-y-6">
              {areas.map((area) => (
                <div 
                  key={area.name}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                        {area.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {area.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {area.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-seafoam" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Delivery timing */}
              <div className="bg-seafoam-light rounded-2xl p-6 border border-seafoam/30">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-foreground">Delivery Timing</h4>
                </div>
                <p className="text-muted-foreground">
                  Every Sunday, 7:00 AM - 12:00 PM
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Orders placed by Saturday 8:00 PM will be delivered on Sunday.
                </p>
              </div>
            </div>
          </div>

          {/* Expansion note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Don't see your area? Contact us – we may be able to arrange delivery!
          </p>
        </div>
      </div>
    </section>
  );
};
