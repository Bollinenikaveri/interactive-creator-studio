import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why I Chose Tech + Design
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into tech and design began with a simple fascination: how can technology 
                solve real-world problems while creating beautiful, intuitive experiences? This passion 
                led me to explore the intersection of functionality and aesthetics.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my B.Tech in IT at Prathyusha Engineering College, I'm in my final 
                year with a CGPA of 8.89. Beyond academics, I'm actively learning UI/UX design and 
                co-founding GenLeads, where we're building innovative solutions for modern challenges.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of design thinking and user-centric development. Every project 
                I undertake is driven by the goal of creating meaningful impact through technology.
              </p>
            </div>

            <Card className="p-8 card-gradient shadow-medium hover:shadow-large transition-smooth">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Current Focus</h4>
                  <p className="text-muted-foreground">Learning UI/UX Design & Building GenLeads</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Education</h4>
                  <p className="text-muted-foreground">B.Tech IT @ Prathyusha Engineering College</p>
                  <p className="text-sm text-muted-foreground">Final Year (2022–2026) • CGPA: 8.89</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Passion</h4>
                  <p className="text-muted-foreground">
                    Solving real-world problems through innovative technology solutions
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Vision</h4>
                  <p className="text-muted-foreground">
                    Creating interactive experiences that make a difference
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;