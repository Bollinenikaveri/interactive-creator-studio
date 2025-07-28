import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import sosSmartwatch from "@/assets/sos-smartwatch.jpg";
import waterCleaningVehicle from "@/assets/water-cleaning-vehicle.jpg";
import freelancingPlatform from "@/assets/freelancing-platform.jpg";
import imageGallery from "@/assets/image-gallery.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SOS Smartwatch",
      subtitle: "Women Safety Solution",
      description: "An innovative smartwatch designed specifically for women's safety, featuring real-time location tracking, emergency SOS alerts, and instant communication with trusted contacts.",
      image: sosSmartwatch,
      role: "Lead Developer & Designer",
      contribution: "Designed the complete user interface, developed emergency response algorithms, and integrated GPS tracking with mobile application.",
      tools: ["Arduino", "GPS Module", "Mobile App", "Real-time Tracking", "Emergency System"],
      category: "Hardware + Software"
    },
    {
      title: "Autonomous Water Cleaning Vehicle",
      subtitle: "Environmental Sustainability",
      description: "A self-operating aquatic vehicle designed to clean water bodies autonomously, featuring debris collection, water quality monitoring, and solar-powered operation.",
      image: waterCleaningVehicle,
      role: "System Designer & Developer",
      contribution: "Developed the autonomous navigation system, designed the cleaning mechanism, and implemented environmental sensors for water quality assessment.",
      tools: ["IoT Sensors", "Autonomous Navigation", "Solar Power", "Water Quality Monitoring", "Environmental Tech"],
      category: "Environmental Tech"
    },
    {
      title: "Freelancing Platform",
      subtitle: "Smart Education Solution",
      description: "A comprehensive platform connecting educators and learners, featuring project-based learning, skill assessment, and collaborative workspace for educational freelancing.",
      image: freelancingPlatform,
      role: "Full-Stack Developer",
      contribution: "Built the complete web application, designed user authentication system, implemented project management features, and created responsive UI/UX.",
      tools: ["React", "Node.js", "Database Design", "Payment Integration", "Real-time Chat"],
      category: "Web Application"
    },
    {
      title: "Interactive Image Gallery",
      subtitle: "JavaScript Filter Effects",
      description: "A dynamic image gallery featuring advanced filter effects, smooth animations, and interactive sorting capabilities built with vanilla JavaScript.",
      image: imageGallery,
      role: "Front-End Developer",
      contribution: "Implemented complex filter algorithms, created smooth CSS animations, optimized performance for large image sets, and designed intuitive user interactions.",
      tools: ["JavaScript", "CSS Animations", "Filter Effects", "Performance Optimization", "Responsive Design"],
      category: "Frontend Showcase"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing innovative solutions that blend technology with real-world impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden card-gradient shadow-medium hover:shadow-large transition-smooth group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-lg">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">My Role & Contribution:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-medium text-primary">{project.role}</span> - {project.contribution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex}
                          variant="outline"
                          className="text-xs border-primary/20 hover:border-primary/40 transition-smooth"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;