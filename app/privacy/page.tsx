import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — OMNEX",
  description: "OMNEX Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  OMNEX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website, use our services, or interact with us. Please read this policy carefully to understand 
                  our practices regarding your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, company name, 
                    job title, and other contact details you provide when contacting us or requesting services.
                  </li>
                  <li>
                    <strong>Business Information:</strong> Company details, project requirements, technical 
                    specifications, and other business-related information necessary to provide our services.
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser type, device information, 
                    pages visited, time spent on pages, and other analytics data collected automatically.
                  </li>
                  <li>
                    <strong>Communication Records:</strong> Correspondence, inquiries, and communications 
                    between you and OMNEX.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services and products</li>
                  <li>To respond to your inquiries, requests, and provide customer support</li>
                  <li>To process orders, quotations, and transactions</li>
                  <li>To send you technical information, updates, and marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and enforce our agreements</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To protect our rights, property, and safety, and that of our customers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-3">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party service providers who assist 
                    us in operating our business, such as payment processors, shipping companies, and IT service providers.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> With manufacturers, suppliers, and partners necessary 
                    to fulfill your orders and provide requested services.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or government regulation, 
                    or to protect our legal rights.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets, 
                    where your information may be transferred as part of the transaction.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you have given explicit consent for us to share your information.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                  of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee 
                  absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in 
                  this Privacy Policy, unless a longer retention period is required or permitted by law. When we no 
                  longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access and receive a copy of your personal data</li>
                  <li>Right to rectify inaccurate or incomplete information</li>
                  <li>Right to request deletion of your personal data</li>
                  <li>Right to object to processing of your personal data</li>
                  <li>Right to restrict processing of your personal data</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  Cookies are small data files stored on your device that help us improve your experience on our website. 
                  You can control cookies through your browser settings, but disabling cookies may limit your ability 
                  to use certain features of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have data protection laws that differ from those in your country. We take appropriate 
                  safeguards to ensure your information receives adequate protection in accordance with this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If you believe we have collected information from a child, please contact 
                  us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                  operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services 
                  after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="font-semibold text-foreground mb-2">OMNEX</p>
                  <p className="text-sm mb-1">Email: <a href="mailto:privacy@omnex.com" className="text-[var(--accent)] hover:underline">privacy@omnex.com</a></p>
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
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-base text-foreground/60 mb-6 max-w-2xl mx-auto">
            If you have any questions or concerns about how we handle your personal information, 
            please don't hesitate to contact us.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hover:from-[var(--accent-hover)] hover:to-[var(--accent)] transition-all rounded-lg shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

