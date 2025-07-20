import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Trinath Anantham
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Engineering Manager | System Architect | Founder - OneCompiler
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Versatile Engineering Leader with 11+ years of experience across backend, 
              frontend, and cloud-based SaaS platforms. Skilled in building scalable systems, 
              leading full-stack teams, and aligning technology with product strategy. 
              Passionate about mentoring, innovation, and driving end-to-end execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group"
              onClick={scrollToProjects}
            >
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/trinathanantham" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/trinath-anantham-045a19112/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:trinath.anantham@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;