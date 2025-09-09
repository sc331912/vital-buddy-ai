import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'EN' ? 'HI' : 'EN');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-scale">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-pulse-glow">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Smart Health Buddy</h1>
              <p className="text-xs text-muted-foreground">AI Healthcare Assistant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-secondary health-transition font-medium">
              Features
            </a>
            <a href="#resources" className="text-foreground hover:text-secondary health-transition font-medium">
              Resources
            </a>
            <a href="#alerts" className="text-foreground hover:text-secondary health-transition font-medium">
              Health Alerts
            </a>
            <a href="#about" className="text-foreground hover:text-secondary health-transition font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-secondary health-transition font-medium">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="btn-outline-health"
            >
              <Globe className="w-4 h-4 mr-2" />
              {currentLang}
            </Button>
            <Button className="btn-hero hover-glow">
              Chat with HealthBot
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-secondary health-transition font-medium py-2">
                Features
              </a>
              <a href="#resources" className="text-foreground hover:text-secondary health-transition font-medium py-2">
                Resources
              </a>
              <a href="#alerts" className="text-foreground hover:text-secondary health-transition font-medium py-2">
                Health Alerts
              </a>
              <a href="#about" className="text-foreground hover:text-secondary health-transition font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-secondary health-transition font-medium py-2">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="btn-outline-health w-full"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Switch to {currentLang === 'EN' ? 'Hindi' : 'English'}
                </Button>
                <Button className="btn-hero w-full hover-glow">
                  Chat with HealthBot
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;