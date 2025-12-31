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
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Operational Capabilities
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Our operational framework ensures consistent delivery across global markets, 
            with emphasis on precision, compliance, and reliability. Every project benefits 
            from our integrated approach to quality, logistics, and technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 border-2 border-gray-200 rounded-2xl hover:border-transparent transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-base text-foreground/60 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative aspect-[16/6] mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80"
            alt="Industrial infrastructure"
            fill
            className="object-cover"
            style={{ filter: "grayscale(30%)" }}
          />
        </div>
      </div>
    </section>
  );
}

