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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Products
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mb-6">
            Quality-certified products from leading manufacturers, backed by 
            technical expertise and comprehensive support services.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-gray-50 px-4 py-2 rounded border border-gray-200">
              <span className="font-semibold text-foreground">6</span>
              <span className="text-foreground/60 ml-2">Product Categories</span>
            </div>
            <div className="bg-gray-50 px-4 py-2 rounded border border-gray-200">
              <span className="font-semibold text-foreground">1000+</span>
              <span className="text-foreground/60 ml-2">Products Available</span>
            </div>
            <div className="bg-gray-50 px-4 py-2 rounded border border-gray-200">
              <span className="font-semibold text-foreground">50+</span>
              <span className="text-foreground/60 ml-2">Manufacturer Partners</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => {
            const slug = product.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
            return (
              <Link
                key={index}
                href={`/products/${slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[var(--accent)]/50 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3 leading-relaxed line-clamp-2 flex-1">
                      {product.description}
                    </p>
                    
                    {/* Quick Features */}
                    <div className="mb-3 space-y-1">
                      {product.details.slice(0, 2).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-xs text-foreground/50">
                          <span className="text-[var(--accent)] mr-1.5">•</span>
                          <span className="line-clamp-1">{detail}</span>
                        </div>
                      ))}
                      {product.details.length > 2 && (
                        <div className="text-xs text-[var(--accent)] font-medium">
                          +{product.details.length - 2} more items
                        </div>
                      )}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-[var(--accent)] text-sm font-medium mt-auto">
                      <span>Learn more</span>
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
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

