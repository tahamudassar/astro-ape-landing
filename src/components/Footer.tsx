import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/astroape", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/astroape", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/astroape", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@astroape.studios", label: "Email" }
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 cyber-grid">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-black text-neon mb-2">
                ASTRO<span className="text-cyber">APE</span>
              </h3>
              <div className="text-lg font-light text-muted-foreground tracking-wider mb-4">
                STUDIOS
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Pushing the boundaries of digital creativity. We craft immersive experiences 
              that blend cutting-edge technology with limitless imagination.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-neon-orange hover:bg-neon-orange/10 transition-colors"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-neon-teal transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>hello@astroape.studios</p>
              <p>San Francisco, CA</p>
              <p>Remote Worldwide</p>
            </div>
            
            <Button 
              variant="cyber" 
              size="sm" 
              className="mt-6"
              onClick={() => scrollToSection('contact')}
            >
              Start Project
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neon-orange/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} AstroApe Studios. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-neon-orange transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-neon-orange transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-neon-orange transition-colors">
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-orange/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-teal/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;