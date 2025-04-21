
const experiences = [
  {
    role: "Digital Media Specialist",
    company: "Skymetric Consulting LLP",
    period: "Feb 2024 – Present",
    description: "Experienced in running and optimizing ad campaigns on Facebook Ads Manager and Google Ads.",
  },
  {
    role: "National IT Coordinator",
    company: "Vishwa Guru Bharat Trust",
    period: "Nov 2024 – Present",
    description: "Oversee IT operations and team coordination for smooth execution. Led digital outreach to boost donation drives.",
  },
  {
    role: "Digital Media Manager & Web Developer",
    company: "DigitalEditz LLP",
    period: "Jan 2023- Present",
    description: "Managed ad campaigns across sectors. Built websites aligned with digital marketing goals.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
                  <p className="text-lg font-medium">{exp.company}</p>
                </div>
                <span className="text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-4 text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
