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

  // Get related products (excluding current product)
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover opacity-15"
            style={{ filter: "grayscale(100%) blur(2px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link
                href="/products"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm mb-3 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                <span className="ml-2">Back to Products</span>
              </Link>
              <div>
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Request Quote
              </Link>
              <Link
                href="#specifications"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-lg text-center"
              >
                View Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">1000+</div>
              <div className="text-sm text-foreground/60">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">50+</div>
              <div className="text-sm text-foreground/60">Manufacturer Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">ISO</div>
              <div className="text-sm text-foreground/60">Certified Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-base text-foreground/70 leading-relaxed mb-4">
                  {product.longDescription}
                </p>
                <div className="bg-gray-50 border-l-4 border-[var(--accent)] p-4 rounded-r-lg">
                  <p className="text-sm text-foreground/70 italic">
                    Our {product.title.toLowerCase()} solutions are engineered for reliability, 
                    performance, and long-term value. Backed by comprehensive technical support 
                    and global supply chain capabilities.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[var(--accent)]/40 hover:shadow-sm transition-all group"
                    >
                      <div className="w-8 h-8 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                        <span className="text-[var(--accent)] font-bold text-lg">✓</span>
                      </div>
                      <span className="text-sm text-foreground/70 pt-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[var(--accent)]/30 transition-colors"
                    >
                      <span className="text-[var(--accent)] mr-3 font-bold">•</span>
                      <span className="text-sm text-foreground/70">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Benefits</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--accent)] text-xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Energy Efficiency</h4>
                      <p className="text-sm text-foreground/60">
                        Optimized design reduces energy consumption and operational costs while maintaining peak performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--accent)] text-xl">🛡️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Reliability & Durability</h4>
                      <p className="text-sm text-foreground/60">
                        Built to withstand harsh industrial environments with extended service life and minimal maintenance requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
                    <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--accent)] text-xl">🔧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Easy Installation</h4>
                      <p className="text-sm text-foreground/60">
                        Designed for straightforward installation with comprehensive documentation and technical support available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div id="specifications">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <span className="text-[var(--accent)] mr-3 mt-1 font-bold">▸</span>
                        <div className="flex-1">
                          <div className="text-sm text-foreground/60 mb-1">Technical Parameter</div>
                          <div className="text-base text-foreground font-medium">{spec}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specifications Card */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Specs</h3>
                <div className="space-y-3">
                  {product.specifications.slice(0, 4).map((spec, index) => (
                    <div key={index} className="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="text-xs text-foreground/50 mb-1">Spec</div>
                      <div className="text-sm text-foreground font-medium">{spec}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Range */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Product Range</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-foreground/70">
                      <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need More Information?</h3>
                <p className="text-white/90 mb-4 text-sm leading-relaxed">
                  Contact our technical team for detailed specifications, pricing, and custom solutions.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white text-[var(--accent)] font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-3"
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  Request Quote
                </Link>
              </div>

              {/* Support */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Support Services</h3>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>24/7 Technical Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Installation Guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Warranty Coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Spare Parts Availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation & Maintenance */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Installation & Maintenance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Installation
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Comprehensive installation manuals provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Technical support during installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>On-site installation services available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Commissioning and testing included</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                Maintenance
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Preventive maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Spare parts inventory management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Remote monitoring and diagnostics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                  <span>Lifecycle support and upgrades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Resources & Downloads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-foreground mb-2">Technical Datasheets</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Detailed technical specifications and performance data
              </p>
              <button className="text-sm text-[var(--accent)] font-medium hover:underline">
                Download PDF →
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-foreground mb-2">Installation Guides</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Step-by-step installation and commissioning procedures
              </p>
              <button className="text-sm text-[var(--accent)] font-medium hover:underline">
                Download PDF →
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-foreground mb-2">Training Materials</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Operator training guides and maintenance procedures
              </p>
              <button className="text-sm text-[var(--accent)] font-medium hover:underline">
                Download PDF →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">What certifications do these products have?</h3>
              <p className="text-sm text-foreground/70">
                All products meet international standards including CE, UL, CSA, and regional certifications. 
                Comprehensive certification documentation is provided with every delivery.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">What is the typical delivery time?</h3>
              <p className="text-sm text-foreground/70">
                Standard delivery times range from 2-6 weeks depending on product type and quantity. 
                Expedited shipping options are available for urgent requirements.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">Do you provide technical support?</h3>
              <p className="text-sm text-foreground/70">
                Yes, we offer 24/7 technical support from certified engineers. Support includes product 
                selection, installation guidance, troubleshooting, and maintenance assistance.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">Are custom specifications available?</h3>
              <p className="text-sm text-foreground/70">
                Yes, we work with manufacturers to provide custom solutions tailored to specific project 
                requirements. Our engineering team can assist with design and specification development.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">What warranty coverage is provided?</h3>
              <p className="text-sm text-foreground/70">
                Warranty coverage varies by product type and manufacturer, typically ranging from 1-5 years. 
                Full warranty details are provided with product documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.slug}
                  href={`/products/${relatedProduct.slug}`}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[var(--accent)]/50 hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-2 mb-3">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center text-[var(--accent)] text-sm font-medium">
                      <span>Learn more</span>
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today for detailed specifications, competitive pricing, and expert guidance 
            on selecting the right solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold bg-white text-[var(--accent)] hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl"
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-lg"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

