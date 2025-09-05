import { Sun, Droplets, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sun className="h-6 w-6 text-accent" />
              <Droplets className="h-6 w-6 text-secondary" />
              <span className="text-lg font-bold">Greenlite Solar & Borehole</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Kenya's leading provider of sustainable energy and water solutions. 
              Powering homes and businesses for over 25 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-accent transition-colors">Solar Installation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Borehole Drilling</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">System Maintenance</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Site Assessment</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Get Quote</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>123 Energy Avenue</p>
              <p>Nairobi, Kenya</p>
              <p>+254 700 123 456</p>
              <p>info@greenlitesolar.co.ke</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Greenlite Solar & Borehole. All rights reserved. | 
            <span className="hover:text-accent cursor-pointer transition-colors"> Privacy Policy</span> | 
            <span className="hover:text-accent cursor-pointer transition-colors"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;