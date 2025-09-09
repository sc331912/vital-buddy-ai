import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "AI Symptom Checker", href: "#" },
      { name: "Vaccination Tracker", href: "#" },
      { name: "Health Alerts", href: "#alerts" },
      { name: "Mobile App", href: "#" }
    ],
    resources: [
      { name: "Health Guides", href: "#resources" },
      { name: "Medical FAQ", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Research", href: "#" },
      { name: "API Documentation", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "HIPAA Compliance", href: "#" },
      { name: "Data Security", href: "#" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Smart Health Buddy</h3>
                  <p className="text-sm text-primary-foreground/70">AI Healthcare Assistant</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering communities with AI-powered healthcare guidance. 
                Making quality medical assistance accessible to everyone, anytime, anywhere.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-sm">+91-800-HEALTH (432584)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="text-sm">help@smarthealthbuddy.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Mumbai & Bangalore, India</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary health-transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary health-transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary health-transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary health-transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h4 className="font-semibold mb-6 text-secondary">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary health-transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-secondary">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary health-transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-secondary">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary health-transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold mb-4 mt-8 text-secondary">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-primary-foreground/70 hover:text-secondary health-transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <span>© {currentYear} Smart Health Buddy. All rights reserved.</span>
              <Heart className="w-4 h-4 text-secondary animate-heartbeat" />
            </div>
            
            {/* Certifications */}
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/70">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-health-success rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-health-info rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">🔒</span>
                </div>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
            
            {/* Medical Disclaimer */}
            <div className="text-xs text-primary-foreground/60 max-w-md text-center md:text-right">
              Medical disclaimer: Information provided is for educational purposes only. 
              Always consult healthcare professionals for medical advice.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;