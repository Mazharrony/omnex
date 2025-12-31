"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industrial facility"
          fill
          className="object-cover"
          priority
          style={{ filter: "grayscale(20%) brightness(0.95)" }}
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
            Oil & Gas Solutions
            <br />
            <span className="text-foreground/80">Electrical Supplies</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed">
            Global provider delivering precision, reliability, and industrial intelligence
            to energy infrastructure worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-medium text-white bg-[var(--accent)] hover:opacity-90 transition-opacity inline-block text-center"
            >
              Request Quote
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 text-base font-medium text-foreground border border-foreground/20 hover:border-foreground/40 transition-colors inline-block text-center"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

