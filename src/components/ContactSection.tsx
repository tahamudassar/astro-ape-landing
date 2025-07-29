import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      project: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's <span className="text-neon-purple">Create</span> Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and explore the possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@astroape.studios",
                  description: "Drop us a line anytime"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "San Francisco, CA",
                  description: "Remote-friendly worldwide"
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  content: "< 24 hours",
                  description: "We're fast responders"
                }
              ].map((item, index) => (
                <Card 
                  key={item.title}
                  className="cyber-border bg-dark-surface/30 backdrop-blur-sm hover-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-orange to-neon-purple">
                      <item.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-neon-teal font-medium">{item.content}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services Quick Links */}
            <Card className="cyber-border bg-dark-surface/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Popular Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Game Development",
                  "3D Art & Modeling",
                  "VFX & Animation",
                  "Staff Augmentation",
                  "Technical Consulting"
                ].map((service) => (
                  <Badge 
                    key={service} 
                    variant="outline" 
                    className="border-neon-teal/30 text-neon-teal cursor-pointer hover:bg-neon-teal hover:text-black transition-colors w-full justify-center"
                  >
                    {service}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="cyber-border bg-dark-surface/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Start Your Project</CardTitle>
                <p className="text-muted-foreground">Tell us about your vision and we'll help make it reality</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="cyber-border bg-dark-surface focus:ring-neon-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="cyber-border bg-dark-surface focus:ring-neon-orange"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Project Type and Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-3 py-2 cyber-border bg-dark-surface text-foreground rounded-md focus:ring-2 focus:ring-neon-orange focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="game">Game Development</option>
                        <option value="3d">3D Art & Modeling</option>
                        <option value="vfx">VFX & Animation</option>
                        <option value="staff">Staff Augmentation</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 cyber-border bg-dark-surface text-foreground rounded-md focus:ring-2 focus:ring-neon-orange focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-15k">$5K - $15K</option>
                        <option value="15k-50k">$15K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="cyber-border bg-dark-surface focus:ring-neon-orange resize-none"
                      placeholder="Tell us about your project, timeline, specific requirements, and any other details that would help us understand your vision..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;