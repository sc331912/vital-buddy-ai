import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Shield className="w-8 h-8 text-secondary" />
        </div>
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 bg-health-success/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="w-7 h-7 text-health-success" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/20">
              <span className="text-secondary font-medium">🚀 AI-Powered Healthcare</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Smart Health Buddy
              <span className="block text-secondary animate-pulse-glow">Your AI Healthcare Assistant</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
              Preventive healthcare in your pocket, anytime, anywhere. Get instant medical guidance, 
              vaccination reminders, and health tips powered by AI.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="stats-card text-primary-foreground">
                <div className="text-2xl font-bold text-secondary">80%+</div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div className="stats-card text-primary-foreground">
                <div className="text-2xl font-bold text-secondary">20%+</div>
                <div className="text-sm opacity-90">Awareness Increase</div>
              </div>
              <div className="stats-card text-primary-foreground">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm opacity-90">Languages</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hero hover-glow animate-heartbeat">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with HealthBot
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-health text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
              >
                Explore Features
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-strong hover-lift">
              <img 
                src={heroImage} 
                alt="AI Healthcare Assistant with diverse family" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Chat Bubble */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium border border-border/50 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">HealthBot</div>
                  <div className="text-xs text-muted-foreground">How can I help you today?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;