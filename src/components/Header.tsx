import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Droplets } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Sun className="h-6 w-6 text-primary" />
              <Droplets className="h-6 w-6 text-secondary" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Greenlite Solar & Borehole
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors">
              Packages
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#packages"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Packages
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button variant="hero" size="lg" className="w-full">
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;