import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Droplets, Zap, Shield, Wrench, Users } from "lucide-react";
import solarImage from "@/assets/solar-installation.jpg";
import boreholeImage from "@/assets/borehole-service.jpg";

const Services = () => {
  const services = [
    {
      icon: <Sun className="h-12 w-12 text-primary" />,
      title: "Solar Installation",
      description: "Complete solar panel systems for residential and commercial properties",
      image: solarImage,
      features: ["Grid-tied & Off-grid systems", "High-efficiency panels", "Professional installation", "Monitoring systems"]
    },
    {
      icon: <Droplets className="h-12 w-12 text-secondary" />,
      title: "Borehole Drilling",
      description: "Professional water well drilling and pump installation services",
      image: boreholeImage,
      features: ["Site assessment", "Modern drilling equipment", "Pump installation", "Water quality testing"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Energy Independence",
      description: "Reduce your reliance on the grid and control your energy costs"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Reliable Solutions",
      description: "Quality installations backed by comprehensive warranties"
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Expert Installation",
      description: "Certified technicians with decades of combined experience"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Ongoing Support",
      description: "Maintenance and support services to keep systems running optimally"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your energy and water needs, delivered by experienced professionals
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="hero" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center p-6 border-none shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;