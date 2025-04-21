import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Usman Majid Political Campaign",
    year: "2024",
    description: "Led digital campaign for Former MoS across Bandipore, Kashmir",
    result: "Massive traction, praised for digital-first approach across the valley",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Pushti Turf and Farms",
    year: "2025",
    description: "Managed local launch campaign with WhatsApp-based Meta Ads",
    result: "1M+ reach, 1K+ leads, huge turnout on launch day, ROAS apx. 700%",
    image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Kashmir Ply Co",
    year: "2025",
    description: "Ran lead generation & awareness ads for a regional plywood brand",
    result: "20+ calls per day, increased brand recall",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1000",
  },
];

export const ProjectShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const cards = cardsRef.current;
    
    if (title && cards) {
      gsap.fromTo(title, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );
      
      if (cards.children.length > 0) {
        gsap.fromTo(Array.from(cards.children), 
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cards,
              start: "top 75%",
              toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 relative"
      id="projects"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 w-[32rem] h-[32rem] bg-secondary/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-40 w-[28rem] h-[28rem] bg-purple-400/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>
        
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <Card 
              key={project.title}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 h-full hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="border-t border-white/10 pt-4 mt-2">
                  <p className="font-medium text-lg mb-2">Result:</p>
                  <p className="text-secondary text-lg">{project.result}</p>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full justify-start pl-0 hover:bg-white/10 hover:pl-2 transition-all text-lg"
                >
                  View Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
