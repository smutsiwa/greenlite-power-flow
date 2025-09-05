import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
