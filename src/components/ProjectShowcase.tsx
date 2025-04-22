import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Pushti Turf and Farms",
    year: "2025",
    description: "Managed local launch campaign with WhatsApp-based Meta Ads",
    result: "1M+ reach, 1K+ leads, huge turnout on launch day, ROAS apx. 700%",
    image:
      "./pushtiturf.png",
  },
  {
    title: "Kashmir Ply Co",
    year: "2025",
    description:
      "Ran lead generation & awareness ads for a regional plywood brand",
    result: "20+ calls per day, increased brand recall",
    image:
      "./kashmirply.jpg",
  },
  {
    title: "District Jammu Govt Campaigns",
    year: "2025",
    description:
      "Worked on Jal Shakti, JAKEDA & Tourism campaigns. Created Creatives and visuals to boost public awareness.",
    result: "Improved outreach and online interaction with locals.",
    image:
      "./districtjk.png",
  },
  {
    title: "NCP Maharashtra Election Campaign",
    year: "2024",
    description:
      "Assisted media planning team in strategy development and execution. Coordinated content and engagement across digital platforms.",
    result: "Improved campaign visibility and engagement in the region.",
    image:
      "https://static.theprint.in/wp-content/uploads/2024/08/AJIT-PAWAR-NCP.jpg",
  },
  {
    title: "Usman Majid Political Campaign",
    year: "2024",
    description:
      "Led digital campaign for Former MoS across Bandipore, Kashmir. Handled reels, live rally coverage, scheme promotions & engagement",
    result:
      "Massive traction, praised for digital-first approach across the valley",
    image:
      "./usmanmajid.png",
  },
  {
    title: "Kapahi Properties",
    year: "2023",
    description:
      " Built Landing Page, Property listing WebApp, ran Meta Ads with WhatsApp CTA and designed visuals and creatives for direct outreach on whatsapp and meta.",
    result: "3X Leads and lower cost than print media ads",
    image:
      "./kapahiproperties.png",
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
      gsap.fromTo(
        title,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      if (cards.children.length > 0) {
        gsap.fromTo(
          Array.from(cards.children),
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cards,
              start: "top 75%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative" id="projects">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-40 w-80 h-80 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="border-t border-white/10 pt-4 mt-2">
                  <p className="font-medium">Result:</p>
                  <p className="text-secondary">{project.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
