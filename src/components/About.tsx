import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "500+",
      label: "Happy Customers"
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      number: "25+",
      label: "Years Experience"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      number: "100%",
      label: "Licensed & Insured"
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      number: "98%",
      label: "Satisfaction Rate"
    }
  ];

  const team = [
    {
      name: "John Mganga",
      role: "Founder & CEO",
      experience: "25+ years in renewable energy",
      specialization: "Solar system design & installation"
    },
    {
      name: "Sarah Kiprotich",
      role: "Lead Drilling Engineer",
      experience: "15+ years in water systems",
      specialization: "Borehole drilling & pump systems"
    },
    {
      name: "Michael Ochieng",
      role: "Project Manager",
      experience: "12+ years in project management",
      specialization: "Installation coordination & quality control"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Greenlite Solar & Borehole
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, we've been Kenya's trusted partner in sustainable energy and water solutions, 
            helping families and businesses achieve energy independence and reliable water access.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1998, Greenlite Solar & Borehole began as a small family business with a 
                simple mission: to bring clean, sustainable energy and reliable water access to every 
                Kenyan home and business.
              </p>
              <p>
                What started as a two-person operation has grown into Kenya's leading provider of 
                integrated solar and water solutions, serving over 500 satisfied customers across 
                the country.
              </p>
              <p>
                Our commitment to quality, reliability, and customer satisfaction has earned us 
                recognition as industry leaders and the trust of communities throughout Kenya.
              </p>
            </div>
            <Button variant="hero" size="lg" className="mt-6">
              Learn More About Us
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-gradient-primary text-white">
              <h4 className="text-2xl font-bold mb-2">Quality First</h4>
              <p className="text-white/90">
                We use only the highest quality components and employ certified installation techniques.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-secondary text-white">
              <h4 className="text-2xl font-bold mb-2">Local Expertise</h4>
              <p className="text-white/90">
                Deep understanding of Kenyan climate, regulations, and customer needs.
              </p>
            </Card>
            <Card className="p-6 bg-accent text-accent-foreground">
              <h4 className="text-2xl font-bold mb-2">Full Service</h4>
              <p>
                From initial consultation to ongoing maintenance, we handle everything.
              </p>
            </Card>
            <Card className="p-6 bg-muted">
              <h4 className="text-2xl font-bold mb-2">Affordable</h4>
              <p className="text-muted-foreground">
                Competitive pricing with flexible payment options for every budget.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Meet Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-2">{member.experience}</p>
                <p className="text-muted-foreground text-sm">{member.specialization}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;