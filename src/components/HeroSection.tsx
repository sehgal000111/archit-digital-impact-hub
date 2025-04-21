
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Digital Marketing
        <span className="text-secondary"> Specialist</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        Driving impactful digital campaigns with proven results in political, real estate, and local business sectors.
      </p>
      <div className="flex gap-4 mb-12">
        <Button asChild>
          <a href="mailto:architsehgal19@gmail.com" className="flex items-center gap-2">
            <Mail size={20} />
            Contact Me
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.linkedin.com/in/archit-sehgal-78598025a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
};
