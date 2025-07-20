import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2015-2017",
      description: "Specialized in Distributed Systems and Machine Learning. Thesis on scalable microservices architecture.",
      type: "degree"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      year: "2011-2015",
      description: "First Class with Distinction. Active in coding competitions and open source contributions.",
      type: "degree"
    }
  ];

  const certifications = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      type: "certification"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022", 
      type: "certification"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      type: "certification"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that form 
            the foundation of my technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
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