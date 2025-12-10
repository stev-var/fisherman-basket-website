import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anitha Thomas",
    location: "Kanjirappally",
    rating: 5,
    comment: "The fish is always so fresh! My family waits for Sunday just for the Fisherman Basket delivery. The Karimeen was exceptional!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Jose Mathew",
    location: "Mundakayam",
    rating: 5,
    comment: "Finally, no more early morning market trips! The quality is better than what I used to get, and it comes to my doorstep.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Sreelakshmi Nair",
    location: "Kanjirappally",
    rating: 5,
    comment: "Very reliable service. They always call before delivery and the fish is packed so well. Prices are also very fair.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Happy Customers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from families who enjoy our fresh fish every week.
            </p>
            <div className="w-20 h-1 gradient-ocean mx-auto rounded-full mt-4" />
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-seafoam-light" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-seafoam"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
