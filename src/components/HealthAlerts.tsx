import { AlertTriangle, MapPin, Clock, TrendingUp, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const alerts = [
  {
    id: 1,
    type: "outbreak",
    severity: "high",
    title: "Dengue Outbreak Alert",
    location: "Mumbai, Maharashtra",
    description: "Increased dengue cases reported in multiple areas. Take preventive measures and seek medical attention for fever symptoms.",
    timestamp: "2 hours ago",
    affected: "15,000+ cases",
    icon: AlertTriangle,
    color: "text-health-warning",
    bgColor: "bg-health-warning/10",
    borderColor: "border-health-warning/30"
  },
  {
    id: 2,
    type: "vaccination",
    severity: "medium",
    title: "Flu Vaccination Drive",
    location: "Delhi NCR",
    description: "Free flu vaccination available at government health centers. Recommended for elderly and children.",
    timestamp: "6 hours ago",
    affected: "All ages",
    icon: Shield,
    color: "text-health-info",
    bgColor: "bg-health-info/10",
    borderColor: "border-health-info/30"
  },
  {
    id: 3,
    type: "awareness",
    severity: "low",
    title: "Air Quality Advisory",
    location: "Bangalore, Karnataka",
    description: "Poor air quality levels detected. Limit outdoor activities and use masks when going outside.",
    timestamp: "1 day ago",
    affected: "8M residents",
    icon: Activity,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30"
  }
];

const stats = [
  { label: "Active Monitoring", value: "24/7", icon: Clock },
  { label: "Cities Covered", value: "500+", icon: MapPin },
  { label: "Alerts Sent", value: "2M+", icon: TrendingUp },
  { label: "Response Time", value: "<5min", icon: AlertTriangle }
];

const SeverityBadge = ({ severity }: { severity: string }) => {
  const severityConfig = {
    high: "bg-health-warning/20 text-health-warning border-health-warning/30",
    medium: "bg-health-info/20 text-health-info border-health-info/30",
    low: "bg-secondary/20 text-secondary border-secondary/30"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${severityConfig[severity as keyof typeof severityConfig]}`}>
      {severity.toUpperCase()}
    </span>
  );
};

const HealthAlerts = () => {
  return (
    <section id="alerts" className="py-20 bg-health-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-6 py-2 bg-health-warning/20 rounded-full border border-health-warning/30">
            <span className="text-health-warning font-medium">🚨 Health Alerts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time Health
            <span className="block text-secondary">Monitoring & Alerts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed about disease outbreaks, vaccination drives, and health advisories 
            in your area with our 24/7 monitoring system.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-card hover-lift animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Active Alerts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <AlertTriangle className="w-6 h-6 text-health-warning mr-3 animate-pulse" />
            Active Health Alerts
          </h3>

          <div className="space-y-6">
            {alerts.map((alert, index) => (
              <div
                key={alert.id}
                className={`feature-card hover-lift animate-slide-up border-l-4 ${alert.borderColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${alert.bgColor} rounded-xl flex items-center justify-center`}>
                      <alert.icon className={`w-6 h-6 ${alert.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-card-foreground">{alert.title}</h4>
                        <SeverityBadge severity={alert.severity} />
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {alert.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {alert.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-card-foreground">{alert.affected}</div>
                    <div className="text-xs text-muted-foreground">affected</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {alert.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="hover-scale">
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary-glow">
                    Share Alert
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Subscription */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-strong animate-slide-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Never Miss Important Health Updates
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Subscribe to get instant notifications about health alerts, outbreak warnings, 
              and vaccination drives in your area.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-background/90 border-background/20 text-foreground placeholder:text-muted-foreground"
              />
              <Button className="btn-hero bg-background text-primary hover:bg-background/90 hover-scale">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-primary-foreground/70 mt-4">
              📱 Also available via SMS and WhatsApp notifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAlerts;