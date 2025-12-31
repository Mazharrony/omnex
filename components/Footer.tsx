import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">OMNEX</h3>
            <p className="text-sm text-foreground/60 max-w-md">
              Global provider of Oil & Gas Solutions and Electrical Supplies.
              Precision, reliability, and industrial intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/solutions" className="hover:text-foreground transition-colors">
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground transition-colors">
                  Electrical Supplies
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-foreground transition-colors">
                  Industrial Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} OMNEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

