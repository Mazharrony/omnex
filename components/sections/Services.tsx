export default function Services() {
  const services = [
    {
      title: "Oil & Gas Solutions",
      description: "Comprehensive equipment and services for the energy value chain.",
      items: [
        "Drilling equipment & production systems",
        "Pipeline infrastructure & compression",
        "Refining equipment & processing units",
      ],
    },
    {
      title: "Electrical Supplies",
      description: "High-grade electrical components for industrial environments.",
      items: [
        "HV/LV switchgear & motor control",
        "Explosion-proof equipment",
        "Power distribution systems",
      ],
    },
    {
      title: "Industrial Equipment",
      description: "Specialized machinery for heavy industrial operations.",
      items: [
        "Rotating equipment & process systems",
        "Safety & automation controls",
        "Material handling solutions",
      ],
    },
    {
      title: "Technical Support",
      description: "Expert consultation and 24/7 maintenance support.",
      items: [
        "Field services & commissioning",
        "Training programs & spare parts",
        "Lifecycle support & upgrades",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Solutions
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Comprehensive capabilities across oil & gas and electrical supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-foreground/70">
                    <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                    <span>{item}</span>
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

