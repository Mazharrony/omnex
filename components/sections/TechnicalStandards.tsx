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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Standards
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            Compliance with international standards and regional regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {standards.map((standard, index) => (
            <div
              key={index}
              className="bg-white p-5 border border-gray-200 rounded-lg hover:border-[var(--accent)]/50 hover:shadow-sm transition-all"
            >
              <h3 className="text-base font-semibold text-foreground mb-3">
                {standard.category}
              </h3>
              <ul className="space-y-2">
                {standard.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-sm text-foreground/60">
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

