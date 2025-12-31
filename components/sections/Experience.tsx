export default function Experience() {
  const stats = [
    {
      number: "50+",
      label: "Countries Served",
      description: "Global presence across six continents",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Serving the energy and industrial sectors",
    },
    {
      number: "1000+",
      label: "Projects Delivered",
      description: "Successfully completed installations",
    },
    {
      number: "24/7",
      label: "Technical Support",
      description: "Round-the-clock engineering assistance",
    },
  ];

  const expertise = [
    {
      title: "Upstream Expertise",
      description: "Deep knowledge of drilling operations, production systems, and well completion technologies. Experience with onshore and offshore applications, including deepwater and unconventional resources.",
    },
    {
      title: "Midstream Capabilities",
      description: "Comprehensive pipeline infrastructure solutions, compression systems, and storage facilities. LNG terminal equipment and regasification systems. Measurement and control systems for pipeline operations.",
    },
    {
      title: "Downstream Solutions",
      description: "Refining equipment, petrochemical processing units, and terminal automation. Process optimization, safety systems, and environmental compliance solutions for downstream operations.",
    },
    {
      title: "Electrical Systems",
      description: "Complete electrical infrastructure from generation to distribution. High-voltage transmission, industrial power distribution, motor control, and automation systems. Hazardous area equipment and explosion-proof solutions.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Experience
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Decades of experience serving the global energy and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-5 border border-gray-200 rounded-lg hover:border-[var(--accent)]/50 hover:shadow-md transition-all duration-300 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 border-l-2 border-[var(--accent)] rounded-lg hover:shadow-md transition-all duration-300 transition-all"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

