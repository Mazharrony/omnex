import Image from "next/image";
import Link from "next/link";

export default function GlobalReach() {
  return (
    <section className="relative py-24 md:py-32 bg-foreground text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Global infrastructure"
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%) brightness(0.3)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Global Reach
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            Operating across continents with a network of partners, suppliers,
            and service centers. Delivering solutions where they're needed most.
          </p>
          <p className="text-base text-white/70 mb-10 leading-relaxed">
            Our presence spans major energy markets, ensuring rapid response
            times and local expertise backed by global resources.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-base font-medium bg-white text-foreground hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

