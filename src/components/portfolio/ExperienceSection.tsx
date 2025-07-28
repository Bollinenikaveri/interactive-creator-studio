import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Code, Palette } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Co-Founder",
      company: "GenLeads",
      icon: <Building2 className="w-6 h-6" />,
      description: "Leading the development of innovative lead generation solutions. Building the product from ground up with focus on user experience and scalability.",
      skills: ["Leadership", "Product Development", "Strategy"],
      current: true
    },
    {
      role: "Business Administration Intern",
      company: "Thozhil Intern",
      icon: <Users className="w-6 h-6" />,
      description: "Gained experience in business operations, project management, and team coordination. Developed analytical and problem-solving skills.",
      skills: ["Project Management", "Business Analysis", "Team Coordination"]
    },
    {
      role: "Front-End Developer",
      company: "CodeAlpha",
      icon: <Code className="w-6 h-6" />,
      description: "Developed responsive web applications using modern technologies. Focused on creating intuitive user interfaces and optimizing performance.",
      skills: ["React", "JavaScript", "Responsive Design", "UI Development"]
    },
    {
      role: "Digital Marketing & Graphic Design",
      company: "GAO Tek",
      icon: <Palette className="w-6 h-6" />,
      description: "Created compelling visual content and managed digital marketing campaigns. Combined design skills with marketing strategy.",
      skills: ["Graphic Design", "Digital Marketing", "Content Creation", "Brand Strategy"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              A journey through diverse roles that shaped my skills and perspective
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 card-gradient shadow-medium hover:shadow-large transition-smooth hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <div className="text-primary">
                      {exp.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="default" className="ml-2">
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-medium text-primary mb-3">
                      {exp.company}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default ExperienceSection;