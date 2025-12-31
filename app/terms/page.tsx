import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — OMNEX",
  description: "OMNEX Terms of Service - Terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Please read these terms carefully before using our website or services. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-white/80 mt-2">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-base text-foreground/70 leading-relaxed">
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the OMNEX website and services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p className="mb-3">
                  Permission is granted to temporarily access the materials on OMNEX's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                <p className="mt-3">
                  This license shall automatically terminate if you violate any of these restrictions and may be 
                  terminated by OMNEX at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Services and Products</h2>
                <p className="mb-3">
                  OMNEX provides industrial solutions, equipment, and services related to oil & gas operations and 
                  electrical supplies. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, suspend, or discontinue any service or product at any time</li>
                  <li>Refuse any order or service request at our sole discretion</li>
                  <li>Limit quantities of products or services available</li>
                  <li>Change product specifications, pricing, and availability without notice</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Orders and Quotations</h2>
                <p className="mb-3">
                  All orders and quotations are subject to acceptance by OMNEX. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accept or reject any order in our sole discretion</li>
                  <li>Request additional information before processing an order</li>
                  <li>Modify pricing and terms based on current market conditions</li>
                  <li>Cancel orders if products are unavailable or pricing errors occur</li>
                </ul>
                <p className="mt-3">
                  Quotations are valid for the period specified or 30 days, whichever is shorter, unless otherwise stated. 
                  All prices are subject to change without notice until an order is confirmed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="mb-3">Payment terms are as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment terms will be specified in the order confirmation or invoice</li>
                  <li>Standard payment terms are net 30 days unless otherwise agreed</li>
                  <li>Late payments may incur interest charges as permitted by law</li>
                  <li>We reserve the right to require advance payment or security deposits</li>
                  <li>All prices are exclusive of taxes, duties, and shipping unless otherwise stated</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Shipping and Delivery</h2>
                <p className="mb-3">
                  Shipping terms and delivery schedules are estimates and not guarantees. OMNEX is not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delays in delivery due to circumstances beyond our control</li>
                  <li>Loss or damage during transit (unless we arrange shipping and insurance)</li>
                  <li>Customs delays or import/export restrictions</li>
                </ul>
                <p className="mt-3">
                  Risk of loss and title pass to the buyer upon delivery to the carrier or upon physical delivery 
                  to the buyer, as applicable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Warranties and Disclaimers</h2>
                <p className="mb-3">
                  Products and services are provided "as is" and "as available." OMNEX makes no warranties, 
                  express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties regarding accuracy, reliability, or completeness of information</li>
                  <li>Warranties that services will be uninterrupted, secure, or error-free</li>
                </ul>
                <p className="mt-3">
                  Manufacturer warranties, if any, are provided by the manufacturer and not by OMNEX. We will 
                  facilitate warranty claims but are not responsible for manufacturer warranty terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, OMNEX shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Your use or inability to use our services or products</li>
                  <li>Any unauthorized access to or use of our servers or data</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectual Property</h2>
                <p>
                  All content on the OMNEX website, including but not limited to text, graphics, logos, images, 
                  audio clips, digital downloads, and software, is the property of OMNEX or its content suppliers 
                  and is protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. User Conduct</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website or services for any unlawful purpose</li>
                  <li>Transmit any harmful code, viruses, or malicious software</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the website or services</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Collect or harvest information about other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless OMNEX, its officers, directors, employees, 
                  agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including 
                  legal fees) arising from your use of our services, violation of these terms, or infringement 
                  of any rights of another party.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or 
                  liability, for any reason, including if you breach these Terms of Service. Upon termination, 
                  your right to use the services will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the 
                  State of Texas, United States, without regard to its conflict of law provisions. Any disputes 
                  arising from these terms shall be subject to the exclusive jurisdiction of the courts in Houston, Texas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
                <p>
                  OMNEX reserves the right to modify these Terms of Service at any time. We will notify users of 
                  any material changes by posting the new Terms of Service on this page and updating the "Last updated" 
                  date. Your continued use of our services after such changes constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Severability</h2>
                <p>
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision 
                  shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall 
                  remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">16. Contact Information</h2>
                <p className="mb-3">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">OMNEX</p>
                  <p className="text-sm mb-1">Email: <a href="mailto:legal@omnex.com" className="text-[var(--accent)] hover:underline">legal@omnex.com</a></p>
                  <p className="text-sm mb-1">Phone: <a href="tel:+15551234567" className="text-[var(--accent)] hover:underline">+1 (555) 123-4567</a></p>
                  <p className="text-sm">Address: 1234 Energy Boulevard, Suite 500, Houston, TX 77002, USA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-base text-foreground/60 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hover:from-[var(--accent-hover)] hover:to-[var(--accent)] transition-all rounded-lg shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="inline-block px-8 py-4 text-base font-semibold bg-white border-2 border-gray-200 text-foreground hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all rounded-lg"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

