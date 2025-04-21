
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart, BookOpen, Code2, Rocket, Globe, PenTool, Database, Terminal, Laptop, Briefcase, Terminal as TerminalIcon, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Meta Ads", icon: BarChart },
  { name: "Facebook Ads Manager", icon: Globe },
  { name: "Meta Business Suite", icon: Database },
  { name: "Google Ads", icon: Rocket },
  { name: "Google Analytics", icon: Terminal },
  { name: "Tag Manager", icon: Code2 },
  { name: "Media Planning", icon: PenTool },
  { name: "Ad Creative Development", icon: BookOpen },
  { name: "Web Development", icon: Laptop },
  { name: "Google Sheets", icon: TerminalIcon },
  { name: "MS Excel", icon: Database },
  { name: "Reporting & Presenting", icon: Briefcase },
];

export const CoreCompetencies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const skills = skillsRef.current;
    const graph = graphRef.current;
    
    if (title && skills && graph) {
      // Animate graph lines
      gsap.to(".graph-line", {
        y: "random(-2, 2)",
        x: "random(-2, 2)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          each: 0.1,
          grid: [20, 20],
          from: "random",
        }
      });

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
      
      if (skills.childNodes.length > 0) {
        gsap.fromTo(Array.from(skills.childNodes),
          { x: -30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: skills,
              start: "top 75%",
              toggleActions: "play none none none"
            },
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
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
      className="py-20 px-4 relative overflow-hidden"
      id="skills"
    >
      {/* Graph paper background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
          {/* Horizontal lines */}
          {[...Array(41)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="graph-line col-span-full h-px bg-secondary/5"
              style={{ gridRow: i + 1 }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(41)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="graph-line row-span-full w-px bg-secondary/5"
              style={{ gridColumn: i + 1 }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 
          ref={titleRef}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
        >
          Core Competencies
        </h2>

        {/* Glass container */}
        <div className="relative glass rounded-2xl p-8 border border-white/20 backdrop-blur-lg bg-white/10">
          {/* Skills grid */}
          <div 
            ref={skillsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-4 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

