import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
      institution: "Jawaharlal Nehru Technological University, Kakinada",
      year: "2009-2013",
      description: "Graduated with 76%. Strong foundation in engineering principles, mathematics, and computer science fundamentals.",
      type: "degree"
    }
  ];

  const certifications = [
    {
      title: "Oracle Certified Java Programmer (Java SE 7)",
      issuer: "Oracle",
      year: "2023",
      type: "certification"
    },
    {
      title: "MongoDB for Developers",
      issuer: "MongoDB University",
      year: "2022", 
      type: "certification"
    },
    {
      title: "Oracle Database SQL Certified Expert",
      issuer: "Oracle",
      year: "2021",
      type: "certification"
    }
  ];

  const workExperience = [
    {
      title: "Engineering Manager",
      company: "SaasLabs",
      period: "2022 - Present",
      description: "Managing engineering teams owning Billing, Balance, and Subscriber services. Leading 10+ engineers in full-stack delivery with React, Remix, and Node.js on GCP with Kubernetes.",
      achievements: ["Oversaw full-stack delivery across multiple services", "Deployed services on GCP with Kubernetes and Docker", "Implemented monitoring via New Relic, Grafana, and BigQuery"]
    },
    {
      title: "Founder & Architect",
      company: "OneCompiler",
      period: "2019 - 2022",
      description: "Architected and developed an end-to-end online IDE platform using React, Next.js, React Native, Node.js, MongoDB, and Docker on AWS and Linux.",
      achievements: ["Scaled platform to support 2 million+ users globally", "Implemented real-time code execution and sandboxing", "Designed core product functionality from concept to launch"]
    },
    {
      title: "Lead Engineer | Engineering Manager",
      company: "Reputation.com",
      period: "2017 - 2022",
      description: "Developed scalable microservices using Java, Spring Boot, and MongoDB for third-party API integrations. Built admin tools using React.",
      achievements: ["Managed log aggregation and monitoring with ELK Stack", "Deployed services on AWS and GCP", "Enhanced partner onboarding and monitoring workflows"]
    },
    {
      title: "Software Engineer",
      company: "SplashBI",
      period: "2014 - 2017",
      description: "Developed enterprise reporting UI using React and Kendo UI components. Built and maintained backend services with Java, Spring Boot, Hibernate, and Oracle DB.",
      achievements: ["Delivered enterprise reporting solutions", "Worked with Oracle Database and OAF framework"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            11+ years of versatile engineering leadership experience across backend, frontend, 
            and cloud-based SaaS platforms. Skilled in building scalable systems and leading teams.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {workExperience.map((work, index) => (
                <Card key={index} className="card-gradient hover-lift border-border/50">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{work.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{work.company}</p>
                      </div>
                      <span className="text-muted-foreground font-medium">{work.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {work.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-semibold">Education</h3>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient hover-lift border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground">
                      <span className="font-medium">{edu.institution}</span>
                      <span>{edu.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="mr-3 h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-gradient hover-lift border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;