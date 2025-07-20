import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechStackSection = () => {
  const techStacks = [
    {
      category: "Backend",
      technologies: ["Java", "Spring Boot", "Node.js", "Python", "Go", "Microservices", "REST APIs", "GraphQL"]
    },
    {
      category: "Frontend", 
      technologies: ["React", "Next.js", "TypeScript", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Material UI"]
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "MySQL", "Elasticsearch", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["GCP", "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI", "Monitoring"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Jira", "Confluence", "Apache Kafka", "RabbitMQ", "Nginx", "Linux", "Agile"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to build scalable, efficient, 
            and maintainable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techStacks.map((stack) => (
            <Card key={stack.category} className="card-gradient hover-lift border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-center">{stack.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;