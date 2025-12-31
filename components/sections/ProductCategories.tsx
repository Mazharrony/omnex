import Link from "next/link";

export default function ProductCategories() {
  const categories = [
    {
      name: "HVAC & Building Automation",
      description: "Control valves, actuators, and building automation systems",
      count: "50+",
      icon: "🌡️",
      href: "/products/picv-valves-and-accessories",
    },
    {
      name: "Electrical Infrastructure",
      description: "Power cables, control cables, and cable management",
      count: "200+",
      icon: "⚡",
      href: "/products/cable-suppliers",
    },
    {
      name: "Electrical Components",
      description: "Circuit breakers, switches, panels, and accessories",
      count: "500+",
      icon: "🔌",
      href: "/products/general-electrical-products",
    },
    {
      name: "Lighting Solutions",
      description: "LED systems, emergency lighting, and controls",
      count: "150+",
      icon: "💡",
      href: "/products/lighting-suppliers",
    },
    {
      name: "Safety & Protection",
      description: "Earthing systems and lightning protection",
      count: "100+",
      icon: "🛡️",
      href: "/products/earthing-and-lightning-protection-supplies",
    },
    {
      name: "Security & Technology",
      description: "Access control, surveillance, and BMS systems",
      count: "80+",
      icon: "🔐",
      href: "/products/security-and-technology-systems",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Product Categories
          </h2>
          <p className="text-sm text-foreground/60">
            Browse our comprehensive product range by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all text-center"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="text-xs font-semibold text-foreground mb-1 group-hover:text-[var(--accent)] transition-colors">
                {category.name}
              </div>
              <div className="text-xs text-foreground/50 mb-1">
                {category.count} products
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

