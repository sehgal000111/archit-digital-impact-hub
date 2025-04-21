
import { HeroSection } from "@/components/HeroSection";
import { CoreCompetencies } from "@/components/CoreCompetencies";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Experience } from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoreCompetencies />
      <ProjectShowcase />
      <Experience />
    </div>
  );
};

export default Index;
