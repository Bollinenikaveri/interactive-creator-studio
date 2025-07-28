import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Digital Marketing Certification",
      issuer: "Google/HubSpot",
      date: "2024",
      description: "Comprehensive training in digital marketing strategies, SEO, social media marketing, and analytics.",
      skills: ["SEO", "Social Media", "Analytics", "Content Marketing"],
      verified: true
    },
    {
      title: "Graphic Design Professional",
      issuer: "Adobe/Coursera",
      date: "2024",
      description: "Advanced graphic design principles, typography, color theory, and design software proficiency.",
      skills: ["Adobe Creative Suite", "Typography", "Brand Design", "Visual Communication"],
      verified: true
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2023",
      description: "Fundamentals of cloud computing, AWS services, deployment strategies, and cloud security.",
      skills: ["AWS", "Cloud Architecture", "DevOps", "Security"],
      verified: true
    },
    {
      title: "PALS ACDC Certification",
      issuer: "PALS Program",
      date: "2023",
      description: "Advanced certification in Automated Control and Data Collection systems.",
      skills: ["Automation", "Data Collection", "Control Systems", "IoT"],
      verified: true
    },
    {
      title: "Innoviot Hackathon Winner",
      issuer: "Innoviot",
      date: "2024",
      description: "First place winner in IoT innovation hackathon, developing smart city solutions.",
      skills: ["IoT Development", "Innovation", "Problem Solving", "Team Leadership"],
      achievement: "₹15,000 Cash Prize",
      verified: true
    },
    {
      title: "PALS innoWAH! Pre-Finals",
      issuer: "PALS Innovation Challenge",
      date: "2025",
      description: "Pre-finalist in the prestigious innovation challenge, showcasing cutting-edge technology solutions.",
      skills: ["Innovation", "Presentation", "Technology Solutions", "Research"],
      achievement: "Pre-Finalist",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Certifications & Achievements
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Continuous learning and recognition in technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 card-gradient shadow-medium hover:shadow-large transition-smooth group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  {cert.verified && (
                    <Badge variant="default" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-primary font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </div>

                  {cert.achievement && (
                    <div className="mb-3">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        🏆 {cert.achievement}
                      </Badge>
                    </div>
                  )}

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth text-sm font-medium">
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Highlights */}
          <div className="mt-16">
            <Card className="p-8 card-gradient shadow-medium text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Achievement Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">₹15,000</div>
                  <p className="text-muted-foreground">Cash Prize Won</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <p className="text-muted-foreground">Certifications Earned</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <p className="text-muted-foreground">Internship Experiences</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;