import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Your Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Turning ideas into interactive experiences through innovative design and development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href="#" 
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Your Name. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> using React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;