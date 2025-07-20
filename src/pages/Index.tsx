import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import TechStackSection from '@/components/TechStackSection';
import EducationSection from '@/components/EducationSection';
import PostsSection from '@/components/PostsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <EducationSection />
      <PostsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
