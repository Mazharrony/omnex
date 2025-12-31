import Image from "next/image";

export default function Capabilities() {
  const capabilities = [
    "Global supply chain network",
    "ISO-certified quality standards",
    "24/7 technical support",
    "Custom engineering solutions",
    "Compliance with international regulations",
    "Rapid deployment capabilities",
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Capabilities
            </h2>
            <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
              Our operational framework ensures consistent delivery across global
              markets, with emphasis on precision, compliance, and reliability.
            </p>
            <ul className="space-y-4">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[var(--accent)] mr-3 mt-1">—</span>
                  <span className="text-base text-foreground/70">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
              alt="Industrial infrastructure"
              fill
              className="object-cover"
              style={{ filter: "grayscale(30%)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

