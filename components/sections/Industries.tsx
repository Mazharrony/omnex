export default function Industries() {
  const industries = [
    {
      name: "Upstream Operations",
      description: "Drilling, exploration, and production equipment.",
    },
    {
      name: "Midstream Infrastructure",
      description: "Transportation, storage, and processing systems.",
    },
    {
      name: "Downstream Processing",
      description: "Refining, distribution, and retail solutions.",
    },
    {
      name: "Power Generation",
      description: "Electrical systems for industrial power needs.",
    },
    {
      name: "Manufacturing",
      description: "Equipment and supplies for heavy manufacturing.",
    },
    {
      name: "Infrastructure",
      description: "Large-scale electrical and industrial projects.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Industries
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Serving critical sectors with specialized solutions and technical
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-foreground/60">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

