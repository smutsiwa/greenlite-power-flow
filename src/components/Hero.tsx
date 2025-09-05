import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on modern house with green landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Powering Your Future with
            <span className="block text-accent">Clean Energy & Water</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Professional solar installation and borehole drilling services. 
            We bring sustainable energy and reliable water access to your home and business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in">
            <Button variant="glass" size="lg" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              View Our Work
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-in">
            <div className="flex items-center text-white">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span>Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;