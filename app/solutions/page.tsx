import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — OMNEX",
  description: "Comprehensive solutions for oil & gas operations and electrical infrastructure.",
};

export default function Solutions() {
  const solutions = [
    {
      title: "Oil & Gas Solutions",
      category: "Energy Infrastructure",
      description: "Comprehensive equipment and services spanning the entire energy value chain from exploration to distribution.",
      icon: "🛢️",
      items: [
        "Drilling equipment and components",
        "Production systems and automation",
        "Pipeline infrastructure",
        "Refining and processing equipment",
        "Safety and compliance systems",
        "Maintenance and support services",
      ],
      details: [
        {
          title: "Upstream Operations",
          description: "Drilling rigs, wellhead equipment, production systems, and EOR technologies for exploration and production.",
        },
        {
          title: "Midstream Infrastructure",
          description: "Pipeline systems, compression stations, storage facilities, and LNG terminals for transportation and storage.",
        },
        {
          title: "Downstream Processing",
          description: "Refining equipment, petrochemical processing units, distribution systems, and terminal automation.",
        },
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    },
    {
      title: "Electrical Supplies",
      category: "Electrical Infrastructure",
      description: "High-grade electrical components and systems engineered for industrial and hazardous environments.",
      icon: "⚡",
      items: [
        "Industrial electrical components",
        "Power distribution systems",
        "Control panels and automation",
        "Cable and wiring solutions",
        "Lighting systems",
        "Emergency power systems",
      ],
      details: [
        {
          title: "Power Distribution",
          description: "HV/LV switchgear, transformers, panelboards, and busway systems for reliable power distribution.",
        },
        {
          title: "Motor Control",
          description: "VFDs, soft starters, protection relays, and PLC integration for motor control applications.",
        },
        {
          title: "Hazardous Areas",
          description: "Explosion-proof equipment certified for Class I/II Div 1 & 2, ATEX, and IECEx standards.",
        },
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    },
    {
      title: "Industrial Equipment",
      category: "Heavy Industry",
      description: "Specialized machinery and tools designed for heavy industrial environments where reliability is critical.",
      icon: "🏭",
      items: [
        "Rotating equipment and process systems",
        "Safety and automation controls",
        "Material handling solutions",
        "Heat exchangers and separators",
        "Emergency shutdown systems",
        "DCS and SCADA systems",
      ],
      details: [
        {
          title: "Rotating Equipment",
          description: "Centrifugal pumps, reciprocating compressors, turbines, and related systems for industrial processes.",
        },
        {
          title: "Process Equipment",
          description: "Heat exchangers, separators, filters, scrubbers, and other process equipment for industrial operations.",
        },
        {
          title: "Automation & Control",
          description: "DCS, SCADA, HMI systems, instrumentation, and control valves for process automation.",
        },
      ],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    },
    {
      title: "Technical Support & Services",
      category: "Professional Services",
      description: "Expert consultation, installation guidance, commissioning services, and ongoing maintenance support.",
      icon: "🔧",
      items: [
        "Field services and commissioning",
        "Training programs and spare parts",
        "Lifecycle support and upgrades",
        "Emergency response services",
        "Condition monitoring",
        "Equipment upgrades",
      ],
      details: [
        {
          title: "Field Services",
          description: "Installation, commissioning, troubleshooting, and emergency response from certified field engineers.",
        },
        {
          title: "Training & Support",
          description: "Operator training, maintenance procedures, safety protocols, and comprehensive documentation.",
        },
        {
          title: "Lifecycle Management",
          description: "Preventive maintenance, condition monitoring, spare parts management, and equipment upgrades.",
        },
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Assessment",
      description: "Initial consultation to understand your requirements, assess project needs, and identify optimal solutions.",
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom engineering and design services to develop tailored solutions meeting your specific requirements.",
    },
    {
      step: "03",
      title: "Procurement & Supply",
      description: "Efficient procurement from trusted manufacturers, quality assurance, and timely delivery coordination.",
    },
    {
      step: "04",
      title: "Installation & Commissioning",
      description: "Professional installation services, system commissioning, testing, and performance verification.",
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing technical support, preventive maintenance programs, and lifecycle management services.",
    },
  ];

  const benefits = [
    {
      title: "End-to-End Solutions",
      description: "Complete solutions from design to installation and ongoing support, ensuring seamless project execution.",
    },
    {
      title: "Technical Expertise",
      description: "Certified engineers and technical specialists with deep industry knowledge and hands-on experience.",
    },
    {
      title: "Global Supply Chain",
      description: "Strategic partnerships and global network ensuring access to quality products and rapid delivery.",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control, testing protocols, and compliance verification for all delivered solutions.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Industrial solutions"
            fill
            className="object-cover opacity-15"
            style={{ filter: "grayscale(100%) blur(2px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Comprehensive Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              End-to-end solutions for oil & gas operations and electrical infrastructure. 
              Engineered for reliability, built for scale, backed by expertise.
            </p>
            <p className="text-base text-white/80 mb-8 leading-relaxed">
              From initial consultation to ongoing support, we deliver integrated solutions 
              that meet your operational requirements and exceed performance expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Request Consultation
              </Link>
              <Link
                href="/products"
                className="inline-block px-6 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-lg text-center"
              >
                View Products
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
              <div className="text-sm text-foreground/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">50+</div>
              <div className="text-sm text-foreground/60">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">15+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Solutions
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Comprehensive solutions across multiple sectors, backed by technical expertise 
              and global supply chain capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{solution.icon}</span>
                      <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-foreground/60 rounded-full mb-2">
                          {solution.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base text-foreground/70 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {solution.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-sm text-foreground/70">
                          <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      style={{ filter: "grayscale(20%)" }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {solution.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-[var(--accent)]/40 transition-colors"
                    >
                      <h4 className="font-semibold text-foreground mb-2">{detail.title}</h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Process
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              A systematic approach ensuring successful project delivery from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all"
              >
                <div className="text-3xl font-bold text-[var(--accent)] mb-3">{step.step}</div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Why Choose Our Solutions
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Comprehensive benefits that ensure successful project outcomes and long-term operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[var(--accent)]/40 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our solutions team today for a consultation. We'll work with you to develop 
            the optimal solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold bg-white text-[var(--accent)] hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl"
            >
              Request Consultation
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

