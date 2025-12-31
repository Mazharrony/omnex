export default function Services() {
  const services = [
    {
      title: "Oil & Gas Solutions",
      description:
        "Comprehensive equipment and services spanning the entire energy value chain. Upstream operations include drilling rigs, wellhead equipment, production systems, and EOR (Enhanced Oil Recovery) technologies. Midstream solutions cover pipeline infrastructure, compression stations, storage facilities, and LNG terminals. Downstream capabilities encompass refining equipment, petrochemical processing units, distribution systems, and terminal automation.",
      details: [
        "Drilling equipment: Rotary tables, mud pumps, BOP systems, drill pipes",
        "Production systems: Separators, heaters, dehydrators, flow meters",
        "Pipeline infrastructure: Valves, fittings, pigging systems, SCADA controls",
        "Refining equipment: Distillation columns, reactors, heat exchangers, pumps",
      ],
    },
    {
      title: "Electrical Supplies",
      description:
        "High-grade electrical components and systems engineered for industrial and hazardous environments. Complete solutions from low-voltage distribution to high-voltage transmission, including explosion-proof equipment certified for Class I Division 1 and 2 areas. Motor control centers, variable frequency drives, switchgear, transformers, and comprehensive power distribution systems.",
      details: [
        "HV/LV switchgear: Up to 36kV, certified IEC 61439, ANSI standards",
        "Motor control systems: VFDs, soft starters, protection relays, PLC integration",
        "Explosion-proof equipment: Class I/II Div 1 & 2, ATEX, IECEx certified",
        "Power distribution: Transformers, panelboards, busway systems, cable management",
      ],
    },
    {
      title: "Industrial Equipment",
      description:
        "Specialized machinery and tools designed for heavy industrial environments where reliability and performance are critical. Process equipment including pumps, compressors, heat exchangers, and separation systems. Material handling solutions, safety systems, and automation controls integrated for seamless operations.",
      details: [
        "Rotating equipment: Centrifugal pumps, reciprocating compressors, turbines",
        "Process equipment: Heat exchangers, separators, filters, scrubbers",
        "Safety systems: Emergency shutdown systems, fire and gas detection, relief valves",
        "Automation: DCS, SCADA, HMI systems, instrumentation and control valves",
      ],
    },
    {
      title: "Technical Support & Services",
      description:
        "Expert consultation, installation guidance, commissioning services, and ongoing maintenance support. Field service engineers available 24/7 for emergency response. Training programs, spare parts management, and lifecycle support ensuring optimal equipment performance and minimal downtime.",
      details: [
        "Field services: Installation, commissioning, troubleshooting, emergency response",
        "Training programs: Operator training, maintenance procedures, safety protocols",
        "Spare parts: Global inventory, rapid delivery, OEM and compatible alternatives",
        "Lifecycle support: Preventive maintenance, condition monitoring, equipment upgrades",
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Delivering comprehensive capabilities across oil & gas and electrical supply chains. 
            Engineered solutions backed by technical expertise, quality certifications, and global support infrastructure.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 hover:border-[var(--accent)]/40 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-[var(--accent)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed mb-6 max-w-4xl">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-[var(--accent)]/40 hover:shadow-md transition-all group/item">
                      <span className="text-[var(--accent)] mr-3 mt-1.5 font-bold text-lg group-hover/item:scale-125 transition-transform">•</span>
                      <span className="text-sm md:text-base text-foreground/70 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

