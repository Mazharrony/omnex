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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Decades of experience serving the global energy and industrial sectors. 
            Proven track record delivering complex projects on time and within specification.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[var(--accent)]/40 hover:shadow-lg transition-all">
              <div className="text-5xl md:text-6xl font-bold text-[var(--accent)] mb-3">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <div key={index} className="border-l-4 border-[var(--accent)] pl-6 bg-gray-50 p-6 rounded-r-lg hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

