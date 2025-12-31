export default function Industries() {
  const industries = [
    {
      name: "Upstream Operations",
      description: "Comprehensive solutions for exploration, drilling, and production operations.",
      applications: [
        "Drilling rigs and wellhead equipment",
        "Production separators and treaters",
        "Artificial lift systems (ESP, gas lift)",
        "Well completion and intervention tools",
        "EOR (Enhanced Oil Recovery) systems",
        "Offshore platform equipment",
      ],
    },
    {
      name: "Midstream Infrastructure",
      description: "Transportation, storage, and processing systems for oil and gas movement.",
      applications: [
        "Pipeline systems and components",
        "Compression and pumping stations",
        "Storage tank facilities",
        "LNG terminals and regasification",
        "Measurement and metering systems",
        "Pipeline integrity and monitoring",
      ],
    },
    {
      name: "Downstream Processing",
      description: "Refining, petrochemical processing, and distribution solutions.",
      applications: [
        "Refinery process equipment",
        "Petrochemical plant systems",
        "Distillation and separation units",
        "Catalytic processing equipment",
        "Terminal automation systems",
        "Product distribution infrastructure",
      ],
    },
    {
      name: "Power Generation",
      description: "Electrical systems and equipment for industrial power generation and distribution.",
      applications: [
        "Generator sets and prime movers",
        "Switchgear and protection systems",
        "Power transformers and distribution",
        "Motor control centers",
        "Emergency power systems",
        "Renewable energy integration",
      ],
    },
    {
      name: "Heavy Manufacturing",
      description: "Equipment and supplies for industrial manufacturing operations.",
      applications: [
        "Process control systems",
        "Industrial automation",
        "Material handling equipment",
        "Quality control systems",
        "Safety and protection systems",
        "Maintenance and repair supplies",
      ],
    },
    {
      name: "Infrastructure Projects",
      description: "Large-scale electrical and industrial infrastructure development.",
      applications: [
        "Transmission and distribution",
        "Substation equipment",
        "Industrial facility electrification",
        "Control and monitoring systems",
        "Energy management solutions",
        "Smart grid technologies",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Industries
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Specialized solutions for critical sectors across the energy value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all h-full flex flex-col"
            >
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-foreground/60 mb-3 leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-1.5 mt-auto">
                {industry.applications.slice(0, 4).map((app, appIndex) => (
                  <li key={appIndex} className="flex items-start text-xs text-foreground/60">
                    <span className="text-[var(--accent)] mr-2 mt-0.5">•</span>
                    <span className="line-clamp-1">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

