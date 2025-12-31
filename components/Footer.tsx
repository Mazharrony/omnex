import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-foreground">OMNEX</h3>
            <p className="text-sm text-foreground/70 max-w-md leading-relaxed mb-4">
              Global provider of Oil & Gas Solutions and Electrical Supplies.
              Precision, reliability, and industrial intelligence.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm">𝕏</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-foreground/70">
              <li>
                <Link href="/solutions" className="hover:text-[var(--accent)] transition-colors inline-block">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[var(--accent)] transition-colors inline-block">
                  Electrical Supplies
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[var(--accent)] transition-colors inline-block">
                  Industrial Equipment
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[var(--accent)] transition-colors inline-block">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-foreground/70">
              <li>
                <Link href="/about" className="hover:text-[var(--accent)] transition-colors inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--accent)] transition-colors inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:info@omnex.com" className="hover:text-[var(--accent)] transition-colors inline-block">
                  info@omnex.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-[var(--accent)] transition-colors inline-block">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} OMNEX. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-foreground/50">
              <Link href="/privacy" className="hover:text-foreground/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

