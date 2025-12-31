export default function Services() {
  const services = [
    {
      title: "Oil & Gas Solutions",
      description:
        "Comprehensive equipment and services for upstream, midstream, and downstream operations. From drilling to distribution.",
    },
    {
      title: "Electrical Supplies",
      description:
        "High-grade electrical components, systems, and infrastructure solutions for industrial and commercial applications.",
    },
    {
      title: "Industrial Equipment",
      description:
        "Specialized machinery and tools designed for heavy industrial environments. Built for reliability and performance.",
    },
    {
      title: "Technical Support",
      description:
        "Expert consultation, installation guidance, and ongoing maintenance support for all delivered solutions.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Delivering comprehensive capabilities across oil & gas and electrical
            supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0 md:last:border-b md:border-b-0"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

