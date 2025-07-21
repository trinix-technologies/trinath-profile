import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Billing Service (SaasLabs)",
      description:
        "Built and led the development of a comprehensive billing service from scratch for automated bill payments. Implemented Stripe integration for payment processing, developed with NestJS backend, React/Remix frontend, MySQL database, BigQuery for analytics, and Grafana for monitoring. Managed full-stack delivery with high-performance architecture.",
      techStack: [
        "NestJS",
        "Node.js",
        "MySQL",
        "React",
        "Remix",
        "Stripe",
        "BigQuery",
        "Grafana",
        "GCP",
        "Kubernetes",
        "Docker",
      ],
    },
    {
      title: "Balance Service (SaasLabs)",
      description:
        "Architected and developed a balance service from scratch for deducting balances for calls, SMS, transactions, and other services. Built with NestJS, React/Remix, MySQL, integrated with Stripe for payment processing, BigQuery for data analytics, and Grafana for real-time monitoring and visualization.",
      techStack: [
        "NestJS",
        "Node.js",
        "MySQL",
        "React",
        "Remix",
        "Stripe",
        "BigQuery",
        "Grafana",
        "GCP",
        "Kubernetes",
        "Docker",
      ],
    },
    {
      title: "One Compiler",
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
      title: "One Compiler Mobile App",
      description:
        "Developed and launched the OneCompiler mobile application using Flutter and Dart, providing a seamless mobile coding experience. The app offers the same powerful IDE features as the web platform, optimized for mobile devices with touch-friendly interface and offline capabilities.",
      techStack: [
        "Flutter",
        "Dart",
        "Mobile Development",
        "Cross-platform",
        "Android",
        "iOS",
      ],
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.onecompiler&hl=en_IN&pli=1",
    },
    {
      title: "Integration Service (Reputation.com)",
      description:
        "Built customer integration services using scalable microservices with Java, Spring Boot, and MongoDB for third-party API integrations. Developed comprehensive integration solutions to connect customers with various platforms and services, built admin tools using React and managed log aggregation with ELK Stack on AWS and GCP.",
      techStack: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "React",
        "ELK Stack",
        "AWS",
        "GCP",
      ],
    },
    {
      title: "BusinessListing Project (Reputation.com)",
      description:
        "Developed an automated business listing scraper to fetch all customer business listings at scale. Built a system capable of handling millions of scraping jobs efficiently, using Java, Spring Boot, MongoDB for data storage, and deployed on AWS and GCP with comprehensive monitoring and logging.",
      techStack: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "React",
        "ELK Stack",
        "AWS",
        "GCP",
        "Web Scraping",
      ],
    },
    {
      title: "Dashboards for Reporting (SplashBI)",
      description:
        "Built enterprise reporting dashboards using React and Kendo UI components. Developed interactive data visualization dashboards with real-time reporting capabilities, custom charts, and responsive design for enterprise users.",
      techStack: [
        "React",
        "Kendo UI",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Oracle DB",
      ],
    },
    {
      title: "Reporting Engine (SplashBI)",
      description:
        "Developed a comprehensive reporting engine to build any reporting query easily. Built backend services with Java, Spring Boot, Hibernate, and Oracle DB with OAF framework, enabling users to create custom reports and queries through an intuitive interface.",
      techStack: [
        "React",
        "Kendo UI",
        "Java",
        "Spring Boot",
        "Hibernate",
        "Oracle DB",
      ],
    },
    {
      title: "Enterprise Analytics & BI Solutions (EIS Technologies)",
      description:
        "Worked on implementing and supporting enterprise analytics and reporting solutions using Oracle BI stack and data integration tools. Built and optimized data pipelines, created custom dashboards and reports, and supported Oracle EBS clients with reporting and analytics needs. Involved in Oracle BI Publisher and OBIEE report development, data modeling, and performance tuning.",
      techStack: [
        "Oracle EBS",
        "Oracle BI Publisher",
        "OBIEE",
        "Oracle DB",
        "PL/SQL",
        "ODI",
        "Java",
      ],
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
