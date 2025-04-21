
const projects = [
  {
    title: "Usman Majid Political Campaign",
    year: "2024",
    description: "Led digital campaign for Former MoS across Bandipore, Kashmir",
    result: "Massive traction, praised for digital-first approach across the valley",
  },
  {
    title: "Pushti Turf and Farms",
    year: "2025",
    description: "Managed local launch campaign with WhatsApp-based Meta Ads",
    result: "1M+ reach, 1K+ leads, huge turnout on launch day, ROAS apx. 700%",
  },
  {
    title: "Kashmir Ply Co",
    year: "2025",
    description: "Ran lead generation & awareness ads for a regional plywood brand",
    result: "20+ calls per day, increased brand recall",
  },
];

export const ProjectShowcase = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-secondary font-semibold mb-2">{project.year}</div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="border-t pt-4">
                <p className="font-medium">Result:</p>
                <p className="text-secondary">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
