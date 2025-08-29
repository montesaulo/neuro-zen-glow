import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
