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
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Global Reach
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed font-medium">
            Operating across six continents with a strategic network of partners, suppliers, 
            and service centers. Delivering solutions where they're needed most, when they're needed most.
          </p>
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
            Our presence spans major energy markets including North America, Middle East, 
            Asia-Pacific, Europe, Africa, and Latin America. Regional distribution centers 
            and local inventory ensure rapid response times. Local expertise backed by global 
            resources, with field service engineers and technical support available in key 
            operational regions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div>
              <div className="text-2xl font-semibold text-white mb-1">Americas</div>
              <div className="text-sm text-white/70">North & South America</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white mb-1">EMEA</div>
              <div className="text-sm text-white/70">Europe, Middle East, Africa</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white mb-1">Asia-Pacific</div>
              <div className="text-sm text-white/70">Asia & Pacific regions</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white mb-1">Global</div>
              <div className="text-sm text-white/70">Worldwide coverage</div>
            </div>
          </div>
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

