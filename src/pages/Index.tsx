
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedStartups from "@/components/FeaturedStartups";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedStartups />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
