import { Smartphone, Fish, Truck } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    step: "Step 1",
    title: "Place Your Order",
    description:
      "Order online via WhatsApp anytime during the week. Choose your favorite fish and quantity.",
    color: "gradient-ocean",
  },
  {
    icon: Fish,
    step: "Step 2",
    title: "We Source Fresh Fish",
    description:
      "Every Sunday morning, we visit the harbour and hand-pick the freshest catch just for you.",
    color: "gradient-seafoam",
  },
  {
    icon: Truck,
    step: "Step 3",
    title: "Doorstep Delivery",
    description:
      "Your fresh fish is cleaned, packed, and delivered to your home in Kanjirappally or Mundakayam.",
    color: "gradient-ocean",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Simple Process
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting fresh fish delivered to your home has never been easier.
              Just three simple steps to enjoy harbour-fresh seafood.
            </p>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full mt-4" />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Connector line (hidden on mobile, shown between cards on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              📅 Weekly Schedule
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <span className="font-semibold text-foreground">
                Sunday Morning:
              </span>
              &nbsp; Place your orders via WhatsApp.
              <br />
              Fresh fish purchased from harbour & delivered to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
