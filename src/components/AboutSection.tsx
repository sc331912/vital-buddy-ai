import { Target, Users, Award, Heart, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const missionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize healthcare access through AI-powered assistance, making quality medical guidance available to everyone, everywhere."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Serving over 100,000+ families across rural and urban India with personalized healthcare assistance and preventive care."
  },
  {
    icon: Award,
    title: "Medical Excellence",
    description: "Backed by certified doctors and medical professionals, ensuring accuracy and reliability in every health recommendation."
  }
];

const stats = [
  { number: "100K+", label: "Families Served", icon: Users },
  { number: "80%+", label: "Accuracy Rate", icon: Target },
  { number: "24/7", label: "Availability", icon: Globe },
  { number: "5+", label: "Languages", icon: Heart }
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Chief Medical Officer",
    description: "15+ years in public health, specializing in preventive care and rural healthcare delivery.",
    avatar: "👩‍⚕️"
  },
  {
    name: "Rajesh Kumar",
    role: "AI Technology Lead",
    description: "Expert in healthcare AI and machine learning, former Google Health researcher.",
    avatar: "👨‍💻"
  },
  {
    name: "Anita Patel",
    role: "Community Outreach",
    description: "Connecting healthcare technology with rural communities across India.",
    avatar: "👩‍🏫"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-feature rounded-full">
            <span className="text-primary-foreground font-medium">💡 About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Healthcare
            <span className="block text-secondary">Through Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Smart Health Buddy was born from a simple belief: quality healthcare guidance 
            should be accessible to everyone, regardless of location or economic background.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {missionPoints.map((point, index) => (
            <div
              key={index}
              className="feature-card text-center hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 mb-20 shadow-medium animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              Making a Real Difference
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our impact speaks for itself - see how we're changing healthcare accessibility across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Healthcare professionals and technology experts working together to improve lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="feature-card text-center hover-lift animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h4 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h4>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-strong animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/90">
              <div className="flex flex-col items-center">
                <Heart className="w-12 h-12 mb-4 animate-heartbeat" />
                <h4 className="font-semibold mb-2">Compassionate Care</h4>
                <p className="text-sm">Every interaction is guided by empathy and understanding</p>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-12 h-12 mb-4 animate-pulse" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm">Leveraging cutting-edge AI for better health outcomes</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 mb-4 animate-float" />
                <h4 className="font-semibold mb-2">Accessibility</h4>
                <p className="text-sm">Making healthcare guidance available to all communities</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="btn-hero bg-background text-primary hover:bg-background/90 hover-scale">
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;