import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "OneCompiler",
      description:
        "Founded and architected an online IDE platform supporting 60+ programming languages with real-time code execution and sandboxing. Scaled to serve 2 million+ users globally with high availability and performance.",
      techStack: [
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "Docker",
        "AWS",
        "Linux",
      ],
      githubUrl: "https://github.com/onecompiler",
      demoUrl: "https://onecompiler.com",
    },
    {
      title: "SaasLabs Engineering Platform",
      description:
        "Led engineering teams owning Billing, Balance, and Subscriber services built with NestJS, Node.js, and MySQL. Managed 10+ engineers and oversaw full-stack delivery with React and Remix.",
      techStack: [
        "NestJS",
        "Node.js",
        "MySQL",
        "React",
        "Remix",
        "GCP",
        "Kubernetes",
        "Docker",
      ],
      githubUrl: "https://github.com/saaslabs",
      demoUrl: "https://saaslabs.co",
    },
    {
      title: "Reputation.com Microservices",
      description:
        "Developed scalable microservices using Java, Spring Boot, and MongoDB for third-party API integrations. Built admin tools using React and managed log aggregation with ELK Stack on AWS and GCP.",
      techStack: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "React",
        "ELK Stack",
        "AWS",
        "GCP",
      ],
      githubUrl: "https://github.com/reputation-com",
      demoUrl: "https://reputation.com/",
    },
    {
      title: "SplashBI Reporting Platform",
      description:
        "Built enterprise reporting UI using React and Kendo UI components. Developed and maintained backend services with Java, Spring Boot, Hibernate, and Oracle DB with OAF framework.",
      techStack: [
        "React",
        "Kendo UI",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Oracle DB",
        "OAF",
      ],
      demoUrl: "https://splashbi.com/",
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
