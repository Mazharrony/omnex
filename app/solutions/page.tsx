import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions — OMNEX",
  description: "Comprehensive solutions for oil & gas operations and electrical infrastructure.",
};

export default function Solutions() {
  const solutions = [
    {
      category: "Oil & Gas",
      items: [
        "Drilling equipment and components",
        "Production systems and automation",
        "Pipeline infrastructure",
        "Refining and processing equipment",
        "Safety and compliance systems",
        "Maintenance and support services",
      ],
    },
    {
      category: "Electrical Supplies",
      items: [
        "Industrial electrical components",
        "Power distribution systems",
        "Control panels and automation",
        "Cable and wiring solutions",
        "Lighting systems",
        "Emergency power systems",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
            Solutions
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Comprehensive solutions for oil & gas operations and electrical
            infrastructure. Engineered for reliability, built for scale.
          </p>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {solutions.map((solution, index) => (
              <div key={index}>
                <h2 className="text-3xl font-semibold text-foreground mb-8">
                  {solution.category}
                </h2>
                <ul className="space-y-4">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[var(--accent)] mr-3 mt-1">—</span>
                      <span className="text-base text-foreground/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
              alt="Industrial solutions"
              fill
              className="object-cover"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

