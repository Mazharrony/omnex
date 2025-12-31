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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Industries Served
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Serving critical sectors with specialized solutions and technical expertise. 
            Our industry knowledge spans the complete energy value chain and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 hover:border-foreground/20 transition-colors bg-white"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-2">
                {industry.applications.map((app, appIndex) => (
                  <li key={appIndex} className="flex items-start">
                    <span className="text-[var(--accent)] mr-2 mt-1 text-xs">▸</span>
                    <span className="text-xs text-foreground/50 leading-relaxed">
                      {app}
                    </span>
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

