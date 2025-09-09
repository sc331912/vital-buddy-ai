import { Stethoscope, Calendar, AlertTriangle, BookOpen, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "AI Symptom Checker",
    description: "Get instant medical guidance for your symptoms with 80%+ accuracy using advanced AI algorithms.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Calendar,
    title: "Vaccination Reminders",
    description: "Never miss important vaccinations with personalized schedules for your entire family.",
    color: "text-health-info",
    bgColor: "bg-health-info/10"
  },
  {
    icon: AlertTriangle,
    title: "Health Outbreak Alerts",
    description: "Stay informed about disease outbreaks and health emergencies in your area with real-time updates.",
    color: "text-health-warning",
    bgColor: "bg-health-warning/10"
  },
  {
    icon: BookOpen,
    title: "Health Education",
    description: "Access evidence-based health tips, myth-busting content, and preventive care guidance.",
    color: "text-health-success",
    bgColor: "bg-health-success/10"
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Get healthcare assistance in your preferred language with support for 5+ regional languages.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Heart,
    title: "Family Health Tracking",
    description: "Monitor and manage health records for your entire family in one secure, easy-to-use platform.",
    color: "text-secondary-glow",
    bgColor: "bg-secondary-glow/10"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-health-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-primary rounded-full">
            <span className="text-primary-foreground font-medium">✨ Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Healthcare
            <span className="block text-secondary">At Your Fingertips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive healthcare assistance, 
            from symptom checking to preventive care guidance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card hover-lift animate-fade-in-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 health-transition`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-secondary health-transition">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 health-transition">
                <div className={`h-1 w-12 ${feature.color.replace('text-', 'bg-')} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-strong">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Health Journey?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of families who trust Smart Health Buddy for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero bg-background text-primary hover:bg-background/90 hover-scale">
                Start Free Consultation
              </button>
              <button className="btn-outline-health border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Health Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;