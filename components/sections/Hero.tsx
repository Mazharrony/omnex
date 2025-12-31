"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.35) contrast(1.15)" }}
          onError={(e) => {
            // Fallback if video fails to load
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
          }}
        >
          <source src="https://benex.ae/wp-content/uploads/2024/05/BEN-VID.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
        <div className="absolute inset-0 bg-[var(--foreground)]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-32">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-6">
              Global Energy Solutions Provider
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Oil & Gas Solutions
            <br />
            <span className="text-white/90">Electrical Supplies</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-6 max-w-3xl leading-relaxed font-medium">
            Global provider delivering precision-engineered equipment, certified electrical systems, and industrial intelligence to energy infrastructure worldwide.
          </p>
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-3xl leading-relaxed">
            Serving upstream, midstream, and downstream operations with comprehensive solutions spanning drilling equipment, pipeline infrastructure, refining systems, and high-voltage electrical distribution. ISO-certified quality standards, 24/7 technical support, and rapid deployment capabilities across six continents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all inline-block text-center rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all inline-block text-center rounded-lg"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

