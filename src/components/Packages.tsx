import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Packages = () => {
  const solarPackages = [
    {
      name: "Starter Solar",
      price: "$8,500",
      description: "Perfect for small homes and apartments",
      features: [
        "3kW Solar System",
        "12 High-efficiency panels",
        "Grid-tie inverter",
        "Basic monitoring",
        "5-year warranty",
        "Professional installation"
      ],
      popular: false
    },
    {
      name: "Family Solar",
      price: "$15,000",
      description: "Ideal for medium-sized family homes",
      features: [
        "6kW Solar System",
        "24 Premium panels",
        "Smart inverter system",
        "Advanced monitoring app",
        "10-year warranty",
        "Battery backup ready",
        "Professional installation",
        "First year maintenance"
      ],
      popular: true
    },
    {
      name: "Commercial Solar",
      price: "Custom Quote",
      description: "Large-scale solutions for businesses",
      features: [
        "10kW+ Solar Systems",
        "Commercial-grade panels",
        "Three-phase inverters",
        "Real-time monitoring",
        "15-year warranty",
        "Grid export optimization",
        "Professional installation",
        "Ongoing maintenance plan"
      ],
      popular: false
    }
  ];

  const boreholePackages = [
    {
      name: "Basic Borehole",
      price: "$3,500",
      description: "Standard water well for residential use",
      features: [
        "Up to 60m drilling",
        "6-inch diameter",
        "Basic submersible pump",
        "Standard installation",
        "Water quality test",
        "1-year pump warranty"
      ],
      popular: false
    },
    {
      name: "Premium Borehole",
      price: "$5,500",
      description: "Enhanced system with better flow rates",
      features: [
        "Up to 100m drilling",
        "6-inch diameter",
        "High-capacity pump",
        "Pressure tank system",
        "Water treatment system",
        "Comprehensive testing",
        "3-year warranty",
        "Annual maintenance"
      ],
      popular: true
    },
    {
      name: "Commercial Borehole",
      price: "Custom Quote",
      description: "High-capacity systems for commercial use",
      features: [
        "Deep drilling (100m+)",
        "Large diameter options",
        "Industrial-grade pumps",
        "Advanced filtration",
        "Multi-zone systems",
        "Continuous monitoring",
        "5-year warranty",
        "Professional maintenance"
      ],
      popular: false
    }
  ];

  const PackageCard = ({ pkg, category }: { pkg: any; category: string }) => (
    <Card className={`relative ${pkg.popular ? 'ring-2 ring-accent shadow-glow' : 'shadow-card'} hover:shadow-glow transition-all duration-300`}>
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
        <div className="text-3xl font-bold text-primary">{pkg.price}</div>
        <CardDescription>{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={pkg.popular ? "hero" : "default"} 
          className="w-full"
        >
          {pkg.price === "Custom Quote" ? "Get Quote" : "Choose Package"}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed to meet your specific energy and water needs
          </p>
        </div>

        {/* Solar Packages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            Solar Installation Packages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} category="solar" />
            ))}
          </div>
        </div>

        {/* Borehole Packages */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Borehole Drilling Packages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boreholePackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} category="borehole" />
            ))}
          </div>
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Every property is unique. We offer tailored solutions that combine solar and borehole systems 
              for maximum efficiency and cost savings.
            </p>
            <Button variant="accent" size="lg">
              Get Custom Quote
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Packages;