import Image from "next/image";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Global Supply Chain Network",
      description: "Strategic partnerships with leading manufacturers across North America, Europe, and Asia. Regional distribution centers and local inventory ensuring rapid response times and reduced lead times for critical equipment.",
    },
    {
      title: "ISO-Certified Quality Standards",
      description: "ISO 9001:2015 certified quality management systems. All equipment undergoes rigorous testing and inspection protocols. Material traceability, certification documentation, and compliance verification for every delivery.",
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance from certified engineers. Emergency response teams available globally. Remote diagnostics, on-site troubleshooting, and rapid deployment of field service personnel when needed.",
    },
    {
      title: "Custom Engineering Solutions",
      description: "In-house engineering team capable of designing and modifying equipment to meet specific project requirements. Process design, equipment sizing, system integration, and detailed engineering documentation.",
    },
    {
      title: "International Compliance",
      description: "Full compliance with API, ASME, ANSI, IEC, IEEE, and regional standards. ATEX, IECEx, and regional explosion-proof certifications. Environmental compliance including REACH, RoHS, and emissions standards.",
    },
    {
      title: "Rapid Deployment Capabilities",
      description: "Expedited procurement and logistics for time-critical projects. Air freight capabilities, customs clearance support, and on-site delivery coordination. Project management services ensuring on-time delivery.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Capabilities
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Consistent delivery across global markets with precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white p-5 border border-gray-200 rounded-lg hover:border-[var(--accent)]/50 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                {capability.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

