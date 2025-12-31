import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — OMNEX",
  description: "Learn about OMNEX - global provider of Oil & Gas Solutions and Electrical Supplies.",
};

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
            About OMNEX
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed">
            A global provider of Oil & Gas Solutions and Electrical Supplies,
            delivering precision, reliability, and industrial intelligence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Our Approach
              </h2>
              <div className="space-y-6 text-base text-foreground/70 leading-relaxed">
                <p>
                  OMNEX operates with a focus on technical excellence and
                  operational reliability. We understand the critical nature of
                  industrial operations and the importance of precision in every
                  delivery.
                </p>
                <p>
                  Our solutions are designed for heavy industrial environments,
                  where performance and durability are non-negotiable. We work
                  with leading manufacturers and maintain strict quality
                  standards across our supply chain.
                </p>
                <p>
                  Global reach, local expertise. Our network ensures rapid
                  response times and technical support where it matters most.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Industrial operations"
                fill
                className="object-cover"
                style={{ filter: "grayscale(30%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-semibold text-foreground mb-12">
            Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Precision
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                Every solution is engineered and delivered with exacting
                standards and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Reliability
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                Built for industrial environments where downtime is not an
                option. Performance you can depend on.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Global Scale
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                Worldwide network with local presence. Delivering solutions
                across continents and time zones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

