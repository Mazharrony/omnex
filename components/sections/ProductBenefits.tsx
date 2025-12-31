export default function ProductBenefits() {
  const benefits = [
    {
      title: "Quality Assurance",
      description:
        "All products undergo rigorous quality control and testing. ISO 9001:2015 certified quality management systems ensure consistent quality across our entire product range.",
      details: [
        "ISO 9001:2015 certified",
        "Material traceability",
        "Comprehensive testing protocols",
        "Quality documentation provided",
      ],
    },
    {
      title: "Global Supply Chain",
      description:
        "Strategic partnerships with leading manufacturers worldwide. Regional distribution centers ensure rapid delivery and local inventory availability for critical projects.",
      details: [
        "50+ manufacturer partnerships",
        "Regional distribution centers",
        "Local inventory availability",
        "Expedited shipping options",
      ],
    },
    {
      title: "Technical Support",
      description:
        "Expert technical assistance from certified engineers. Product selection guidance, installation support, and troubleshooting available 24/7 for all products.",
      details: [
        "24/7 technical support",
        "Product selection assistance",
        "Installation guidance",
        "Troubleshooting services",
      ],
    },
    {
      title: "Compliance & Certification",
      description:
        "Full compliance with international standards including IEC, IEEE, ANSI, API, and regional regulations. Comprehensive certification documentation with every delivery.",
      details: [
        "International standard compliance",
        "CE, UL, CSA certifications",
        "ATEX and IECEx approvals",
        "Complete documentation package",
      ],
    },
    {
      title: "Competitive Pricing",
      description:
        "Competitive pricing through direct manufacturer relationships and volume purchasing. Flexible payment terms and financing options available for large projects.",
      details: [
        "Direct manufacturer pricing",
        "Volume discounts available",
        "Flexible payment terms",
        "Project financing options",
      ],
    },
    {
      title: "After-Sales Support",
      description:
        "Comprehensive after-sales support including warranty services, spare parts availability, maintenance support, and equipment upgrades throughout product lifecycle.",
      details: [
        "Warranty services",
        "Spare parts inventory",
        "Maintenance support",
        "Lifecycle management",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose Our Products
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Comprehensive benefits and support services that ensure successful project delivery 
            and long-term operational reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-xs text-foreground/70">
                    <span className="text-[var(--accent)] mr-2 mt-0.5">✓</span>
                    <span>{detail}</span>
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

