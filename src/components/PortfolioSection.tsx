import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Neon Runners",
    category: "Game Development",
    description: "Cyberpunk endless runner with procedural city generation",
    fullDescription: "A high-octane cyberpunk endless runner featuring dynamic procedural city generation, neon-lit environments, and fluid parkour mechanics. Built with Unity and featuring custom shaders for authentic cyberpunk aesthetics.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    githubUrl: "https://github.com/astroape/neon-runners",
    technologies: ["Unity", "C#", "HLSL", "Procedural Generation"]
  },
  {
    id: "2",
    title: "Cosmic Forge",
    category: "3D Art",
    description: "Sci-fi weapon and vehicle asset pack for AAA games",
    fullDescription: "A comprehensive collection of high-fidelity sci-fi weapons and vehicles designed for AAA game production. Features modular design system, PBR texturing, and optimized LOD models.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    technologies: ["Blender", "Substance Painter", "ZBrush", "PBR Workflow"]
  },
  {
    id: "3",
    title: "Quantum Drift",
    category: "VFX & Animation",
    description: "Cinematic trailer featuring cutting-edge particle effects",
    fullDescription: "A stunning cinematic trailer showcasing advanced particle systems, fluid simulations, and photorealistic rendering techniques. Created using industry-standard VFX pipeline.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    liveUrl: "https://vimeo.com/quantum-drift",
    technologies: ["Houdini", "Nuke", "Maya", "Redshift"]
  },
  {
    id: "4",
    title: "Neural Network",
    category: "Interactive Experience",
    description: "Real-time data visualization for AI research platform",
    fullDescription: "An interactive real-time visualization platform for neural network research, featuring dynamic node graphs, data flow visualization, and intuitive user interactions.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/astroape/neural-viz",
    liveUrl: "https://neural-network-demo.astroape.com",
    technologies: ["React", "Three.js", "WebGL", "D3.js"]
  },
  {
    id: "5",
    title: "Stellar Odyssey",
    category: "Game Development",
    description: "Space exploration RPG with procedural galaxies",
    fullDescription: "An epic space exploration RPG featuring vast procedural galaxies, deep crafting systems, and immersive storytelling. Built with Unreal Engine 5 and featuring cutting-edge graphics.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    technologies: ["Unreal Engine 5", "Blueprint", "C++", "Nanite"]
  },
  {
    id: "6",
    title: "Digital Humans",
    category: "3D Art",
    description: "Photorealistic character models for film production",
    fullDescription: "A collection of photorealistic digital humans created for film and high-end visualization. Features advanced subsurface scattering, detailed facial rigging, and motion capture compatibility.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    technologies: ["ZBrush", "Maya", "MetaHuman", "Substance Painter"]
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Game Development", "3D Art", "VFX & Animation", "Interactive Experience"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-cyber">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our latest projects spanning games, VFX, 3D art, and interactive experiences
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "cyber" : "neon"}
                size="sm"
                onClick={() => setFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group cyber-border hover-glow transition-all duration-500 bg-dark-surface/30 backdrop-blur-sm cursor-pointer animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-neon-orange text-black">
                    {project.category}
                  </Badge>
                </div>
                {project.video && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 rounded-full bg-neon-orange/20 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-neon-orange" />
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-neon-teal/30 text-neon-teal">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto cyber-border bg-dark-surface">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <Badge variant="secondary" className="bg-neon-orange text-black w-fit">
                    {selectedProject.category}
                  </Badge>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Video or Image */}
                  {selectedProject.video ? (
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full rounded-lg"
                      poster={selectedProject.image}
                    />
                  ) : (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full rounded-lg"
                    />
                  )}
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-neon-teal/30 text-neon-teal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.githubUrl && (
                      <Button variant="neon" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button variant="cyber" asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;