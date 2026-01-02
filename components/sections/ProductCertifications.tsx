export default function ProductCertifications() {
  const certifications = [
    {
      category: "International Standards",
      items: [
        "ISO 9001:2015 (Quality Management)",
        "ISO 14001 (Environmental Management)",
        "ISO 45001 (Occupational Health & Safety)",
        "IEC Standards (International Electrotechnical Commission)",
        "IEEE Standards (Institute of Electrical Engineers)",
        "ANSI Standards (American National Standards)",
      ],
    },
    {
      category: "Regional Certifications",
      items: [
        "CE Marking (European Conformity)",
        "UL Listed (Underwriters Laboratories)",
        "CSA Certified (Canadian Standards Association)",
        "CCC (China Compulsory Certificate)",
        "BS Standards (British Standards)",
        "DIN Standards (German Standards)",
      ],
    },
    {
      category: "Specialized Certifications",
      items: [
        "ATEX (Explosive Atmospheres)",
        "IECEx (International Electrotechnical Commission Ex)",
        "FM Approved (Factory Mutual)",
        "API Standards (American Petroleum Institute)",
        "NACE (Corrosion Prevention)",
        "NFPA (National Fire Protection Association)",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Certifications & Standards
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            All products comply with international standards and regional regulations. 
            Comprehensive certification documentation provided with every delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {cert.category}
              </h3>
              <ul className="space-y-2">
                {cert.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-foreground/60">
                    <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Documentation Provided
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Material certificates and test reports</span>
              </div>
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Compliance certificates and declarations</span>
              </div>
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Installation and operation manuals</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Warranty documentation</span>
              </div>
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Technical datasheets and specifications</span>
              </div>
              <div className="flex items-center text-sm text-foreground/70">
                <span className="text-[var(--accent)] mr-2">✓</span>
                <span>Traceability documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




