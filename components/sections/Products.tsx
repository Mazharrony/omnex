import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "PICV Valves and Accessories",
      description:
        "Pressure Independent Control Valves (PICV) and comprehensive accessories for HVAC and building automation systems. Precision-engineered valves ensuring optimal flow control, energy efficiency, and system performance.",
      details: [
        "PICV control valves for HVAC systems",
        "Valve actuators and controllers",
        "Pressure sensors and monitoring equipment",
        "Flow measurement devices",
        "Valve accessories and fittings",
        "Building automation integration",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    },
    {
      title: "Cable Suppliers",
      description:
        "Comprehensive range of electrical cables for industrial, commercial, and residential applications. High-quality cables meeting international standards for power distribution, data transmission, and specialized applications.",
      details: [
        "Power cables (LV, MV, HV)",
        "Control and instrumentation cables",
        "Data and communication cables",
        "Fire-resistant and armored cables",
        "Specialty cables for harsh environments",
        "Cable management systems",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      title: "General Electrical Products",
      description:
        "Extensive inventory of electrical components, devices, and equipment for industrial and commercial installations. From basic components to complex electrical systems, all meeting international quality standards.",
      details: [
        "Circuit breakers and protection devices",
        "Switches, sockets, and outlets",
        "Electrical panels and enclosures",
        "Connectors and terminal blocks",
        "Electrical accessories and hardware",
        "Wiring devices and components",
      ],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    },
    {
      title: "Lighting Suppliers",
      description:
        "Complete lighting solutions for industrial, commercial, and outdoor applications. Energy-efficient LED systems, emergency lighting, and specialized lighting for hazardous areas and critical infrastructure.",
      details: [
        "LED lighting systems and fixtures",
        "Industrial and commercial lighting",
        "Emergency and exit lighting",
        "Hazardous area lighting (ATEX certified)",
        "Outdoor and street lighting",
        "Lighting controls and dimming systems",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      title: "Earthing & Lightning Protection Supplies",
      description:
        "Comprehensive earthing and lightning protection systems for buildings, industrial facilities, and critical infrastructure. Ensuring safety, equipment protection, and compliance with international standards.",
      details: [
        "Earthing rods and conductors",
        "Lightning protection systems",
        "Surge protection devices (SPD)",
        "Earthing accessories and clamps",
        "Lightning arresters and down conductors",
        "Testing and measurement equipment",
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    },
    {
      title: "Security and Technology Systems",
      description:
        "Integrated security and technology solutions including access control, surveillance, fire safety, and building management systems. Advanced technology solutions for modern infrastructure requirements.",
      details: [
        "Access control systems",
        "CCTV and surveillance systems",
        "Fire detection and alarm systems",
        "Building management systems (BMS)",
        "Intrusion detection systems",
        "Network infrastructure and cabling",
      ],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Products
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">
            Comprehensive product portfolio covering electrical supplies, control systems, 
            and technology solutions. Quality-certified products from leading manufacturers, 
            backed by technical support and global supply chain capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[var(--accent)]/40 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {product.title}
                  </h3>
                  <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-[var(--accent)] mr-2 mt-1.5 text-xs">▸</span>
                        <span className="text-sm text-foreground/60 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

