import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — OMNEX",
  description: "Learn about OMNEX - global provider of Oil & Gas Solutions and Electrical Supplies.",
};

export default function About() {
  const values = [
    {
      title: "Precision",
      icon: "🎯",
      description: "Every solution is engineered and delivered with exacting standards and attention to detail.",
      details: [
        "Rigorous quality control processes",
        "Precision engineering and design",
        "Detailed documentation and traceability",
        "Continuous improvement initiatives",
      ],
    },
    {
      title: "Reliability",
      icon: "🛡️",
      description: "Built for industrial environments where downtime is not an option. Performance you can depend on.",
      details: [
        "Proven track record of reliability",
        "Comprehensive testing and validation",
        "Long-term performance guarantees",
        "Robust design for harsh environments",
      ],
    },
    {
      title: "Global Scale",
      icon: "🌍",
      description: "Worldwide network with local presence. Delivering solutions across continents and time zones.",
      details: [
        "Operations in 50+ countries",
        "Regional distribution centers",
        "Local technical support teams",
        "24/7 global coverage",
      ],
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "Embracing new technologies and methodologies to deliver cutting-edge solutions.",
      details: [
        "Technology partnerships",
        "R&D investment",
        "Digital transformation initiatives",
        "Future-ready solutions",
      ],
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "OMNEX established with a vision to provide comprehensive industrial solutions.",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to 25 countries across six continents.",
    },
    {
      year: "2018",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched digital platform and enhanced supply chain capabilities.",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading provider with 1000+ successful projects delivered.",
    },
  ];

  const achievements = [
    {
      number: "1000+",
      label: "Projects Delivered",
      description: "Successfully completed installations worldwide",
    },
    {
      number: "50+",
      label: "Countries Served",
      description: "Global presence across six continents",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Serving the energy and industrial sectors",
    },
    {
      number: "500+",
      label: "Team Members",
      description: "Certified engineers and technical specialists",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
            alt="About OMNEX"
            fill
            className="object-cover opacity-15"
            style={{ filter: "grayscale(100%) blur(2px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              About OMNEX
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              A global provider of Oil & Gas Solutions and Electrical Supplies,
              delivering precision, reliability, and industrial intelligence.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              With over 15 years of experience, we've built a reputation for excellence 
              in delivering comprehensive solutions to the energy and industrial sectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)] mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-foreground/60">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-base text-foreground/70 leading-relaxed">
                To deliver comprehensive, reliable solutions that enable our clients to achieve 
                operational excellence. We combine technical expertise, quality products, and 
                exceptional service to meet the evolving needs of the energy and industrial sectors.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">🔮</div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-base text-foreground/70 leading-relaxed">
                To be the global leader in industrial solutions, recognized for innovation, 
                reliability, and customer excellence. We envision a future where our solutions 
                drive sustainable industrial growth and operational efficiency worldwide.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
                <p>
                  OMNEX operates with a focus on technical excellence and operational reliability. 
                  We understand the critical nature of industrial operations and the importance of 
                  precision in every delivery. Our team of certified engineers and technical specialists 
                  brings decades of combined experience to every project.
                </p>
                <p>
                  Our solutions are designed for heavy industrial environments, where performance and 
                  durability are non-negotiable. We work with leading manufacturers and maintain strict 
                  quality standards across our supply chain, ensuring every product meets or exceeds 
                  international standards.
                </p>
                <p>
                  Global reach, local expertise. Our network ensures rapid response times and technical 
                  support where it matters most. We combine the resources of a global organization with 
                  the responsiveness and understanding of local operations.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Industrial operations"
                fill
                className="object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Journey
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Key milestones in our growth and development as a global solutions provider.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--accent)] rounded-full -translate-x-1/2 z-10"></div>
                  <div className={`flex-1 bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/40 hover:shadow-sm transition-all ${
                    index % 2 === 0 ? "md:mr-auto md:max-w-[45%]" : "md:ml-auto md:max-w-[45%]"
                  }`}>
                    <div className="text-2xl font-bold text-[var(--accent)] mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Core Values
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              The principles that guide everything we do and shape how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[var(--accent)]/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      {value.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-xs text-foreground/60">
                      <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Certifications & Recognition
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Our commitment to quality and excellence is recognized through certifications and industry awards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quality Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  <span>ISO 9001:2015 - Quality Management Systems</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  <span>ISO 14001 - Environmental Management</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  <span>ISO 45001 - Occupational Health & Safety</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">✓</span>
                  <span>API Q1 - Quality Management for Petroleum Industry</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Industry Recognition</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">🏆</span>
                  <span>Top Supplier Award - Energy Sector (2023)</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">🏆</span>
                  <span>Excellence in Safety - Industrial Solutions</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">🏆</span>
                  <span>Best Customer Service - B2B Category</span>
                </li>
                <li className="flex items-center text-sm text-foreground/70">
                  <span className="text-[var(--accent)] mr-2">🏆</span>
                  <span>Innovation in Supply Chain Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Global Presence
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Operating across six continents with regional offices and distribution centers 
              ensuring local support and rapid response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Americas</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• United States</li>
                <li>• Canada</li>
                <li>• Mexico</li>
                <li>• Brazil</li>
                <li>• Argentina</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">EMEA</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• United Kingdom</li>
                <li>• Germany</li>
                <li>• UAE</li>
                <li>• Saudi Arabia</li>
                <li>• South Africa</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Asia-Pacific</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• China</li>
                <li>• India</li>
                <li>• Singapore</li>
                <li>• Australia</li>
                <li>• Japan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Commitment
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              What you can expect when working with OMNEX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Customer-Centric Approach</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Your success is our priority. We work closely with clients to understand their 
                unique requirements and deliver solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Sustainability Focus</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Committed to sustainable practices and environmental responsibility in all our 
                operations and solutions.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Continuous Learning</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Our team continuously updates knowledge and skills to stay at the forefront of 
                industry developments and technologies.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Innovation & Technology</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Embracing new technologies and innovative approaches to deliver cutting-edge 
                solutions that drive operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements and discover 
            how we can help achieve your operational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold bg-white text-[var(--accent)] hover:bg-gray-100 transition-all rounded-lg shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/solutions"
              className="inline-block px-8 py-4 text-base font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-lg"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

