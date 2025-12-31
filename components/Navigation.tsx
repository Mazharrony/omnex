"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial state based on scroll position
    setIsScrolled(window.scrollY > 20);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // On homepage, use transparent when not scrolled; on other pages, always show background
  const shouldShowBackground = !isHomePage || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground ? "bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors relative group ${
              shouldShowBackground ? "text-foreground hover:text-[var(--accent)]" : "text-white hover:text-white/80"
            }`}
          >
            <span className="relative z-10">OMNEX</span>
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
              shouldShowBackground ? "bg-[var(--accent)]" : "bg-white"
            }`}></span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg group ${
                    shouldShowBackground 
                      ? `text-foreground/80 hover:text-foreground hover:bg-gray-50 ${isActive ? "text-[var(--accent)] font-semibold" : ""}` 
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${isActive ? "w-3/4" : "w-0"} h-0.5 group-hover:w-3/4 transition-all duration-300 ${
                    shouldShowBackground ? "bg-[var(--accent)]" : "bg-white"
                  }`}></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hover:from-[var(--accent-hover)] hover:to-[var(--accent)] transition-all rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 overflow-hidden group"
          >
            <span className="relative z-10">Request Quote</span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              shouldShowBackground ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${
            shouldShowBackground ? "border-gray-200 bg-white" : "border-white/20 bg-black/80 backdrop-blur-md"
          }`}>
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-base transition-colors ${
                      shouldShowBackground 
                        ? `text-foreground/80 hover:text-foreground ${isActive ? "text-[var(--accent)] font-semibold" : ""}` 
                        : "text-white/90 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="block px-6 py-2.5 text-sm font-medium text-white bg-[var(--accent)] hover:opacity-90 transition-opacity text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

