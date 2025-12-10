import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { FishMenu } from "@/components/FishMenu";
import { DeliveryLocations } from "@/components/DeliveryLocations";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <FishMenu />
      <DeliveryLocations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
