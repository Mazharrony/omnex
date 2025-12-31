import Image from "next/image";
import Link from "next/link";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const slug = product.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
            return (
              <Link
                key={index}
                href={`/products/${slug}`}
                className="group block"
              >
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/0 group-hover:from-[var(--accent)]/5 group-hover:to-transparent transition-all duration-300 z-10"></div>
                  
                  {/* Image Section */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{ filter: "grayscale(30%) contrast(1.1)" }}
                    />
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {product.description}
                    </p>
                    
                    {/* Features Preview */}
                    <div className="space-y-2 mb-4">
                      {product.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-xs text-foreground/60">
                          <span className="text-[var(--accent)] mr-2">✓</span>
                          <span className="line-clamp-1">{detail}</span>
                        </div>
                      ))}
                      {product.details.length > 3 && (
                        <div className="text-xs text-[var(--accent)] font-medium">
                          +{product.details.length - 3} more items
                        </div>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-[var(--accent)] font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>View Details</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

