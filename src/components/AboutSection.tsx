import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Target, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-neon-purple">Journey</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-neon-orange to-neon-purple rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-neon-teal font-semibold">AstroApe Studios</span> was born from a simple vision: 
                to bridge the gap between cutting-edge technology and limitless creativity. Founded by a team of 
                industry veterans with decades of combined experience in AAA game development, film VFX, and 
                emerging technologies.
              </p>
              
              <p>
                Our founder's journey began in the early days of 3D graphics, working on groundbreaking projects 
                that defined the digital entertainment landscape. From indie passion projects to blockbuster 
                productions, we've learned that the most extraordinary experiences emerge when technical 
                excellence meets unbridled imagination.
              </p>
              
              <p>
                Today, we're not just creating content—we're <span className="text-neon-orange font-semibold">crafting futures</span>. 
                Every project is an opportunity to push boundaries, challenge conventions, and deliver experiences 
                that resonate on both emotional and technical levels.
              </p>
            </div>
            
            <Button variant="glitch" size="lg">
              Read Full Story
            </Button>
          </div>
          
          {/* Right Column - Values */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-6">
              {[
                {
                  icon: Rocket,
                  title: "Innovation First",
                  description: "We embrace emerging technologies and push creative boundaries to deliver groundbreaking solutions."
                },
                {
                  icon: Target,
                  title: "Precision & Quality",
                  description: "Every pixel, every frame, every interaction is crafted with meticulous attention to detail."
                },
                {
                  icon: Zap,
                  title: "Rapid Execution",
                  description: "Agile workflows and cutting-edge tools enable us to deliver exceptional results on time."
                }
              ].map((value, index) => (
                <Card 
                  key={value.title}
                  className="cyber-border bg-dark-surface/30 backdrop-blur-sm hover-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-orange to-neon-purple">
                      <value.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { number: "100+", label: "Projects Delivered" },
                { number: "50+", label: "Happy Clients" },
                { number: "5+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-neon-orange mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;