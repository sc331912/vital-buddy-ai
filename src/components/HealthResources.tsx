import { FileText, Download, ExternalLink, Users, Baby, User, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    category: "Vaccination Schedules",
    icon: Baby,
    items: [
      { name: "Infant Vaccination (0-2 years)", downloads: "2.1k", url: "#" },
      { name: "Child Immunization (2-18 years)", downloads: "1.8k", url: "#" },
      { name: "Adult Vaccines", downloads: "1.2k", url: "#" },
      { name: "Elderly Care Vaccines", downloads: "890", url: "#" }
    ]
  },
  {
    category: "Common Diseases",
    icon: FileText,
    items: [
      { name: "Diabetes Prevention Guide", downloads: "3.2k", url: "#" },
      { name: "Heart Health Essentials", downloads: "2.9k", url: "#" },
      { name: "Mental Health Awareness", downloads: "2.1k", url: "#" },
      { name: "Respiratory Care Tips", downloads: "1.7k", url: "#" }
    ]
  },
  {
    category: "Family Health",
    icon: Users,
    items: [
      { name: "Women's Health Guide", downloads: "2.4k", url: "#" },
      { name: "Men's Health Checklist", downloads: "1.9k", url: "#" },
      { name: "Pregnancy Care Manual", downloads: "3.1k", url: "#" },
      { name: "Senior Care Guide", downloads: "1.5k", url: "#" }
    ]
  },
  {
    category: "Emergency Care",
    icon: UserCheck,
    items: [
      { name: "First Aid Handbook", downloads: "4.2k", url: "#" },
      { name: "Emergency Numbers List", downloads: "2.8k", url: "#" },
      { name: "Home Remedies Guide", downloads: "3.5k", url: "#" },
      { name: "Medicine Safety Tips", downloads: "1.6k", url: "#" }
    ]
  }
];

const faqs = [
  {
    question: "How accurate is the AI symptom checker?",
    answer: "Our AI system has been trained on millions of medical cases and maintains 80%+ accuracy. However, it should complement, not replace, professional medical advice."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, we use bank-level encryption and comply with healthcare privacy standards. Your data is never shared without your explicit consent."
  },
  {
    question: "Can I use this for my entire family?",
    answer: "Absolutely! You can create profiles for family members and get personalized health guidance for each person."
  },
  {
    question: "What languages are supported?",
    answer: "We currently support English, Hindi, Bengali, Tamil, and Telugu, with more languages being added regularly."
  }
];

const HealthResources = () => {
  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-feature rounded-full">
            <span className="text-primary-foreground font-medium">📚 Health Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Health
            <span className="block text-secondary">Knowledge Base</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access evidence-based health guides, vaccination schedules, and preventive care resources 
            approved by healthcare professionals.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {resources.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="feature-card animate-fade-in-scale"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
              </div>

              {/* Resource Items */}
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-health-light hover:bg-accent health-transition group"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="w-4 h-4 text-muted-foreground group-hover:text-secondary health-transition" />
                      <div>
                        <p className="font-medium text-card-foreground group-hover:text-secondary health-transition">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.downloads} downloads</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="hover-scale">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover-scale">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-medium animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about our healthcare platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background/50 rounded-2xl p-6 hover-lift animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold text-card-foreground mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary-health hover-glow">
              View All Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthResources;