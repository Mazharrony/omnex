export default function TechnicalStandards() {
  const standards = [
    {
      category: "Oil & Gas Standards",
      items: [
        "API (American Petroleum Institute) standards",
        "ASME pressure vessel codes",
        "ANSI piping and valve standards",
        "NACE corrosion prevention standards",
        "ISO 13702 (offshore safety)",
        "IEC 61511 (functional safety)",
      ],
    },
    {
      category: "Electrical Standards",
      items: [
        "IEC 61439 (low-voltage switchgear)",
        "IEEE standards (power systems)",
        "NEMA (National Electrical Manufacturers Association)",
        "UL/CSA certifications",
        "ATEX and IECEx (explosion-proof)",
        "NFPA 70 (National Electrical Code)",
      ],
    },
    {
      category: "Quality & Safety",
      items: [
        "ISO 9001:2015 (quality management)",
        "ISO 14001 (environmental management)",
        "OHSAS 18001 / ISO 45001 (safety)",
        "API Q1 (quality management for petroleum)",
        "CE marking (European compliance)",
        "Material traceability and certification",
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Compliance & Standards
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            All equipment and solutions comply with international standards and regional regulations. 
            Comprehensive certification documentation provided with every delivery, ensuring regulatory 
            compliance and operational safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((standard, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 border-2 border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl transition-all hover:border-[var(--accent)]/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--accent)] transition-colors">
                    {standard.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {standard.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[var(--accent)] mr-3 mt-1.5 text-xs">▸</span>
                      <span className="text-sm text-foreground/60 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

