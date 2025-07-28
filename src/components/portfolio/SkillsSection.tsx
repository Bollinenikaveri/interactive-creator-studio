import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 70 }
      ],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Design & Creative",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Canva", level: 90 },
        { name: "UI/UX Design", level: 75 },
        { name: "Graphic Design", level: 80 },
        { name: "Prototyping", level: 75 }
      ],
      gradient: "from-pink-500/20 to-orange-500/20"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "GitHub", level: 85 },
        { name: "ChatGPT", level: 90 },
        { name: "Trello", level: 80 },
        { name: "Notion", level: 85 },
        { name: "PowerPoint", level: 90 },
        { name: "VS Code", level: 85 }
      ],
      gradient: "from-green-500/20 to-teal-500/20"
    }
  ];

  const otherSkills = [
    "Digital Marketing",
    "Project Management", 
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Agile Methodology",
    "User Research",
    "Responsive Design",
    "Version Control",
    "Database Design"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 card-gradient shadow-medium hover:shadow-large transition-smooth group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="p-8 card-gradient shadow-medium">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;