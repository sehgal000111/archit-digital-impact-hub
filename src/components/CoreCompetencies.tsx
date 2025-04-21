
import { Badge } from "@/components/ui/badge";

const skills = [
  "Meta Ads",
  "Facebook Ads Manager",
  "Meta Business Suite",
  "Google Ads",
  "Google Analytics",
  "Tag Manager",
  "Media Planning",
  "Ad Creative Development",
  "Web Development",
  "Google Sheets",
  "MS Excel",
  "Reporting & Presenting",
];

export const CoreCompetencies = () => {
  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-lg py-2 px-4 hover:bg-secondary hover:text-white transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
