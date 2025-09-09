import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "24/7 Helpline",
    details: ["+91-800-HEALTH", "+91-800-432-584"],
    description: "Emergency medical guidance and support"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["help@smarthealthbuddy.in", "medical@smarthealthbuddy.in"],
    description: "Non-urgent queries and feedback"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["Mumbai, Maharashtra", "Bangalore, Karnataka"],
    description: "Regional offices across India"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: ["< 5 minutes", "Emergency: Immediate"],
    description: "Average response time for queries"
  }
];

const supportChannels = [
  { name: "WhatsApp Chat", icon: MessageSquare, description: "Quick support via WhatsApp", status: "Online" },
  { name: "Video Call", icon: Phone, description: "Face-to-face consultation", status: "Available" },
  { name: "Email Support", icon: Mail, description: "Detailed query resolution", status: "24/7" }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-health-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-primary rounded-full">
            <span className="text-primary-foreground font-medium">📞 Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We're Here to Help
            <span className="block text-secondary">Anytime, Anywhere</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about your health? Need technical support? Our expert team is available 
            24/7 to assist you with compassionate, professional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <HeartHandshake className="w-6 h-6 text-secondary mr-3" />
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="feature-card hover-lift animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-secondary font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Channels */}
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Support Channels</h4>
            <div className="space-y-4">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-background rounded-xl shadow-soft hover-lift health-transition animate-fade-in-scale"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <channel.icon className="w-5 h-5 text-secondary" />
                    <div>
                      <p className="font-medium text-foreground">{channel.name}</p>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-health-success/20 text-health-success rounded-full text-xs font-medium">
                    {channel.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="feature-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Your full name" 
                      className="border-border/50 focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      placeholder="+91 98765 43210" 
                      className="border-border/50 focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-border/50 focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can we help you?" 
                    className="border-border/50 focus:border-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please describe your query or feedback in detail..."
                    rows={5}
                    className="border-border/50 focus:border-secondary resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy">
                    I agree to the <a href="#" className="text-secondary hover:underline">Privacy Policy</a> and 
                    <a href="#" className="text-secondary hover:underline ml-1">Terms of Service</a>
                  </label>
                </div>

                <Button className="btn-primary-health w-full hover-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 p-4 bg-health-success/10 rounded-xl border border-health-success/20">
                <p className="text-sm text-health-success font-medium mb-1">
                  🚀 Expected Response Time
                </p>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 2-4 hours during business hours, 
                  and within 24 hours for weekend queries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-strong animate-slide-up">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Medical Emergency?
          </h3>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            For immediate medical emergencies, please contact your local emergency services 
            or visit the nearest hospital. Our AI assistant can provide guidance but should not 
            replace emergency medical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero bg-health-warning text-primary hover:bg-health-warning/90 hover-scale">
              Emergency Helpline: 108
            </Button>
            <Button className="btn-outline-health border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Find Nearest Hospital
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;