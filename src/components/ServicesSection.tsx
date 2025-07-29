import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Palette, Video, Users } from "lucide-react";

const services = [
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Full-cycle game development from concept to launch. Unity, Unreal Engine, and custom solutions for PC, mobile, and console platforms.",
    features: ["Unity & Unreal Engine", "Cross-platform deployment", "Game design & mechanics", "Performance optimization"]
  },
  {
    icon: Palette,
    title: "3D Modeling & Art Outsourcing",
    description: "High-quality 3D assets, character modeling, environment design, and texture work. From stylized to photorealistic art styles.",
    features: ["Character modeling", "Environment design", "Texture & material work", "Concept to 3D pipeline"]
  },
  {
    icon: Video,
    title: "Animation & VFX",
    description: "Breathtaking animations and visual effects for games, films, and interactive media. Motion capture integration and procedural systems.",
    features: ["Character animation", "VFX & particle systems", "Motion capture", "Cinematic sequences"]
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Scale your team with our expert developers, artists, and technical specialists. Seamless integration with your existing workflow.",
    features: ["Experienced specialists", "Flexible engagement", "Quick onboarding", "Quality assurance"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-neon">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge technology and creative excellence
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group cyber-border hover-glow transition-all duration-500 animate-fade-in-up bg-dark-surface/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-neon-orange to-neon-purple w-fit">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-neon-teal transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-neon-orange rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button variant="cyber" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;