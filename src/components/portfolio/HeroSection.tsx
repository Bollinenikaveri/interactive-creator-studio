import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-white drop-shadow-lg">Your Name</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg md:text-xl">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                UI/UX Designer
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Front-End Developer
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Startup Co-Founder
              </span>
            </div>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              "Turning ideas into interactive experiences."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-smooth hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-white/80 transition-smooth"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;