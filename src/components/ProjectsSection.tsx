import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "OneCompiler",
      description: "Online compiler and IDE platform supporting 60+ programming languages. Built to help developers code, compile, and run programs directly in the browser.",
      techStack: ["React", "Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      githubUrl: "https://github.com/onecompiler",
      demoUrl: "https://onecompiler.com",
    },
    {
      title: "Microservices Architecture Platform",
      description: "Scalable microservices platform with auto-scaling, service discovery, and distributed tracing capabilities for enterprise applications.",
      techStack: ["Java", "Spring Boot", "Docker", "Kubernetes", "Apache Kafka", "MongoDB"],
      githubUrl: "https://github.com/example/microservices",
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "High-performance analytics dashboard processing millions of events per second with real-time visualizations and alerting system.",
      techStack: ["React", "Node.js", "ClickHouse", "Apache Kafka", "D3.js", "WebSocket"],
      githubUrl: "https://github.com/example/analytics",
      demoUrl: "https://analytics-demo.example.com",
    },
    {
      title: "Developer Tools Suite",
      description: "Collection of developer productivity tools including code formatters, linters, and automated testing frameworks used by 10K+ developers.",
      techStack: ["TypeScript", "Node.js", "CLI", "Jest", "ESLint", "Prettier"],
      githubUrl: "https://github.com/example/devtools",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've built and contributed to, focusing on 
            scalable systems, developer tools, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;