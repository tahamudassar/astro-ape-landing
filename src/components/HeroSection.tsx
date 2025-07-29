import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic-ape.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-neon mb-4 animate-cyber-float">
              ASTRO<span className="text-cyber">APE</span>
            </h1>
            <div className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wider">
              STUDIOS
            </div>
          </div>
          
          {/* Tagline */}
          <div className="mb-8 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              We craft <span className="text-neon-teal">immersive</span>
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              digital <span className="text-neon-purple">experiences</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            From cutting-edge game development to stunning 3D art and immersive VFX, 
            we push the boundaries of what's possible in the digital frontier. 
            Your vision, amplified by our expertise.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="min-w-48"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Portfolio
            </Button>
            <Button 
              variant="neon" 
              size="xl"
              className="min-w-48"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Project
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;