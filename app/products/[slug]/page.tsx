import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const products = [
  {
    slug: "picv-valves-and-accessories",
    title: "PICV Valves and Accessories",
    category: "HVAC & Building Automation",
    description:
      "Pressure Independent Control Valves (PICV) and comprehensive accessories for HVAC and building automation systems. Precision-engineered valves ensuring optimal flow control, energy efficiency, and system performance.",
    longDescription:
      "Our PICV (Pressure Independent Control Valves) solutions represent the pinnacle of HVAC control technology. These advanced valves maintain constant flow rates regardless of pressure variations in the system, ensuring optimal performance, energy efficiency, and comfort control. Our comprehensive range includes valves for various applications, from small commercial buildings to large industrial facilities.",
    features: [
      "Pressure-independent flow control",
      "Energy-efficient operation",
      "Precise temperature control",
      "Reduced system noise",
      "Extended equipment lifespan",
      "Building automation integration",
    ],
    applications: [
      "Commercial HVAC systems",
      "Industrial climate control",
      "Hospital and healthcare facilities",
      "Data centers and server rooms",
      "Educational institutions",
      "Residential high-rise buildings",
    ],
    specifications: [
      "Flow range: 0.1 to 200 m³/h",
      "Pressure range: Up to 16 bar",
      "Temperature range: -10°C to 120°C",
      "Connection sizes: DN15 to DN150",
      "Control signals: 0-10V, 4-20mA, Modbus",
      "Certifications: CE, UL, FM approved",
    ],
    details: [
      "PICV control valves for HVAC systems",
      "Valve actuators and controllers",
      "Pressure sensors and monitoring equipment",
      "Flow measurement devices",
      "Valve accessories and fittings",
      "Building automation integration",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
  {
    slug: "cable-suppliers",
    title: "Cable Suppliers",
    category: "Electrical Infrastructure",
    description:
      "Comprehensive range of electrical cables for industrial, commercial, and residential applications. High-quality cables meeting international standards for power distribution, data transmission, and specialized applications.",
    longDescription:
      "As a leading cable supplier, we provide comprehensive solutions for all electrical infrastructure needs. Our extensive inventory includes power cables, control cables, data cables, and specialized cables for harsh environments. All products meet or exceed international standards including IEC, BS, DIN, and UL certifications.",
    features: [
      "International standard compliance",
      "Fire-resistant and low-smoke options",
      "Armored and unarmored variants",
      "UV and weather resistant",
      "Chemical and oil resistant",
      "Custom length and specification options",
    ],
    applications: [
      "Power distribution networks",
      "Industrial automation systems",
      "Data centers and IT infrastructure",
      "Oil and gas facilities",
      "Marine and offshore installations",
      "Renewable energy projects",
    ],
    specifications: [
      "Voltage ratings: 300V to 33kV",
      "Conductor materials: Copper, Aluminum",
      "Insulation: XLPE, PVC, EPR, Rubber",
      "Temperature range: -40°C to 90°C",
      "Standards: IEC, BS, DIN, UL, CSA",
      "Certifications: CE, RoHS compliant",
    ],
    details: [
      "Power cables (LV, MV, HV)",
      "Control and instrumentation cables",
      "Data and communication cables",
      "Fire-resistant and armored cables",
      "Specialty cables for harsh environments",
      "Cable management systems",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    slug: "general-electrical-products",
    title: "General Electrical Products",
    category: "Electrical Components",
    description:
      "Extensive inventory of electrical components, devices, and equipment for industrial and commercial installations. From basic components to complex electrical systems, all meeting international quality standards.",
    longDescription:
      "Our general electrical products portfolio encompasses everything needed for modern electrical installations. From circuit protection devices to wiring accessories, we provide comprehensive solutions for industrial, commercial, and residential applications. All products are sourced from reputable manufacturers and meet international quality and safety standards.",
    features: [
      "Wide product range",
      "International standard compliance",
      "High-quality materials",
      "Long service life",
      "Easy installation",
      "Comprehensive documentation",
    ],
    applications: [
      "Industrial electrical installations",
      "Commercial building systems",
      "Residential electrical work",
      "Infrastructure projects",
      "Maintenance and repairs",
      "System upgrades and retrofits",
    ],
    specifications: [
      "Voltage ratings: 230V to 690V AC",
      "Current ratings: Up to 6300A",
      "Protection class: IP20 to IP68",
      "Temperature range: -25°C to 70°C",
      "Standards: IEC, EN, BS, UL",
      "Certifications: CE, UL, CSA, CCC",
    ],
    details: [
      "Circuit breakers and protection devices",
      "Switches, sockets, and outlets",
      "Electrical panels and enclosures",
      "Connectors and terminal blocks",
      "Electrical accessories and hardware",
      "Wiring devices and components",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
  },
  {
    slug: "lighting-suppliers",
    title: "Lighting Suppliers",
    category: "Lighting Solutions",
    description:
      "Complete lighting solutions for industrial, commercial, and outdoor applications. Energy-efficient LED systems, emergency lighting, and specialized lighting for hazardous areas and critical infrastructure.",
    longDescription:
      "We provide comprehensive lighting solutions designed for efficiency, durability, and performance. Our LED lighting systems offer significant energy savings while providing superior illumination quality. From industrial facilities to commercial spaces, we offer solutions for every application, including specialized lighting for hazardous areas and emergency situations.",
    features: [
      "High energy efficiency (up to 200 lm/W)",
      "Long lifespan (50,000+ hours)",
      "Dimmable and controllable options",
      "Hazardous area certified",
      "Emergency lighting systems",
      "Smart lighting controls",
    ],
    applications: [
      "Industrial facilities and warehouses",
      "Commercial offices and retail",
      "Outdoor and street lighting",
      "Hazardous area installations",
      "Emergency and exit lighting",
      "Architectural and decorative lighting",
    ],
    specifications: [
      "Power range: 5W to 500W",
      "Luminous flux: 500 to 50,000 lm",
      "Color temperature: 2700K to 6500K",
      "IP rating: IP20 to IP68",
      "Certifications: ATEX, IECEx, UL",
      "Warranty: 3 to 5 years",
    ],
    details: [
      "LED lighting systems and fixtures",
      "Industrial and commercial lighting",
      "Emergency and exit lighting",
      "Hazardous area lighting (ATEX certified)",
      "Outdoor and street lighting",
      "Lighting controls and dimming systems",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  },
  {
    slug: "earthing-and-lightning-protection-supplies",
    title: "Earthing & Lightning Protection Supplies",
    category: "Safety & Protection",
    description:
      "Comprehensive earthing and lightning protection systems for buildings, industrial facilities, and critical infrastructure. Ensuring safety, equipment protection, and compliance with international standards.",
    longDescription:
      "Protecting lives and equipment from electrical hazards and lightning strikes is critical. Our comprehensive earthing and lightning protection systems are designed to meet international standards and provide reliable protection for all types of facilities. From basic earthing systems to complex lightning protection networks, we offer complete solutions.",
    features: [
      "Full compliance with IEC 62305",
      "Low resistance earthing systems",
      "Comprehensive surge protection",
      "Lightning risk assessment",
      "System design and engineering",
      "Installation and testing services",
    ],
    applications: [
      "Commercial and residential buildings",
      "Industrial facilities",
      "Telecommunications infrastructure",
      "Power generation and distribution",
      "Data centers",
      "Oil and gas facilities",
    ],
    specifications: [
      "Earthing resistance: < 1 ohm",
      "Lightning protection level: I to IV",
      "Surge protection: Up to 100kA",
      "Material: Copper, Galvanized steel",
      "Standards: IEC 62305, BS EN 62305",
      "Certifications: CE, UL listed",
    ],
    details: [
      "Earthing rods and conductors",
      "Lightning protection systems",
      "Surge protection devices (SPD)",
      "Earthing accessories and clamps",
      "Lightning arresters and down conductors",
      "Testing and measurement equipment",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
  },
  {
    slug: "security-and-technology-systems",
    title: "Security and Technology Systems",
    category: "Security & Automation",
    description:
      "Integrated security and technology solutions including access control, surveillance, fire safety, and building management systems. Advanced technology solutions for modern infrastructure requirements.",
    longDescription:
      "Modern facilities require integrated security and technology systems that work seamlessly together. Our solutions combine access control, video surveillance, fire detection, and building management into unified systems. We provide end-to-end solutions from design and installation to maintenance and support.",
    features: [
      "Integrated system architecture",
      "Scalable and modular design",
      "Remote monitoring and control",
      "Mobile app integration",
      "Cloud-based management",
      "24/7 technical support",
    ],
    applications: [
      "Commercial buildings",
      "Industrial facilities",
      "Healthcare institutions",
      "Educational campuses",
      "Government facilities",
      "Residential complexes",
    ],
    specifications: [
      "Network protocols: TCP/IP, Modbus, BACnet",
      "Video resolution: Up to 4K",
      "Access control: Card, biometric, mobile",
      "Integration: Open API, SDK available",
      "Standards: ONVIF, PSIA compliant",
      "Certifications: UL, CE, FCC",
    ],
    details: [
      "Access control systems",
      "CCTV and surveillance systems",
      "Fire detection and alarm systems",
      "Building management systems (BMS)",
      "Intrusion detection systems",
      "Network infrastructure and cabling",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found — OMNEX",
    };
  }

  return {
    title: `${product.title} — OMNEX`,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover opacity-20"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link
                href="/products"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm mb-4"
              >
                <span>←</span>
                <span className="ml-2">Back to Products</span>
              </Link>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
                {product.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {product.description}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:border-[var(--accent)]/40 transition-colors"
                    >
                      <span className="text-[var(--accent)] mr-3 mt-1 text-xl">✓</span>
                      <span className="text-base text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <span className="text-[var(--accent)] mr-3">•</span>
                      <span className="text-sm text-foreground/70">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Specifications */}
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Specifications</h3>
                <div className="space-y-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="text-sm text-foreground/60 mb-1">Specification</div>
                      <div className="text-base text-foreground font-medium">{spec}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product List */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Product Range</h3>
                <ul className="space-y-3">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                      <span className="text-sm text-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Need More Information?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Contact our technical team for detailed specifications, pricing, and custom solutions.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white text-[var(--accent)] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

