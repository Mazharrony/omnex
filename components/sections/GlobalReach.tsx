import Image from "next/image";
import Link from "next/link";

export default function GlobalReach() {
  return (
    <section className="relative py-16 md:py-20 bg-foreground text-white overflow-hidden">
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Reach
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
            Operating across six continents with strategic partners and service centers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-lg font-semibold text-white mb-1">Americas</div>
              <div className="text-xs text-white/70">North & South America</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white mb-1">EMEA</div>
              <div className="text-xs text-white/70">Europe, Middle East, Africa</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white mb-1">Asia-Pacific</div>
              <div className="text-xs text-white/70">Asia & Pacific regions</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white mb-1">Global</div>
              <div className="text-xs text-white/70">Worldwide coverage</div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block px-6 py-3.5 text-base font-semibold bg-white text-foreground hover:bg-gray-100 transition-all rounded-lg shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

