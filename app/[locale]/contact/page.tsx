"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    inquiryType: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          inquiryType: "general",
          message: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      title: "General Inquiries",
      icon: "📧",
      email: "info@omnex.com",
      phone: "+1 (555) 123-4567",
      description: "For general questions and information requests",
    },
    {
      title: "Sales & Quotations",
      icon: "💼",
      email: "sales@omnex.com",
      phone: "+1 (555) 123-4568",
      description: "Product inquiries, pricing, and quotation requests",
    },
    {
      title: "Technical Support",
      icon: "🔧",
      email: "support@omnex.com",
      phone: "+1 (555) 123-4569",
      description: "24/7 technical assistance and troubleshooting",
    },
    {
      title: "Emergency Response",
      icon: "🚨",
      email: "emergency@omnex.com",
      phone: "+1 (555) 123-4570",
      description: "Urgent support and emergency response services",
    },
  ];

  const offices = [
    {
      region: "Headquarters",
      location: "Houston, USA",
      address: "1234 Energy Boulevard, Suite 500",
      city: "Houston, TX 77002",
      phone: "+1 (555) 123-4567",
    },
    {
      region: "Europe, Middle East & Africa",
      location: "London, UK",
      address: "456 Industrial Way",
      city: "London, EC1A 1BB, United Kingdom",
      phone: "+44 20 1234 5678",
    },
    {
      region: "Asia-Pacific",
      location: "Singapore",
      address: "789 Business Park Drive",
      city: "Singapore 018956",
      phone: "+65 6123 4567",
    },
  ];

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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              Request a quote, inquire about solutions, or connect with our team. 
              We're here to help and will respond promptly to your inquiry.
            </p>
            <p className="text-base text-white/80 leading-relaxed">
              Whether you need technical support, product information, or project consultation, 
              our team of experts is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-[var(--accent)]/50 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-xs text-foreground/60 mb-3 leading-relaxed">
                  {method.description}
                </p>
                <div className="space-y-1 text-sm">
                  <a
                    href={`mailto:${method.email}`}
                    className="block text-[var(--accent)] hover:underline"
                  >
                    {method.email}
                  </a>
                  <a
                    href={`tel:${method.phone}`}
                    className="block text-foreground/70 hover:text-[var(--accent)] transition-colors"
                  >
                    {method.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {method.title}
                      </h3>
                      <div className="space-y-1 text-sm text-foreground/70">
                        <a
                          href={`mailto:${method.email}`}
                          className="block text-[var(--accent)] hover:underline"
                        >
                          {method.email}
                        </a>
                        <a
                          href={`tel:${method.phone}`}
                          className="block hover:text-[var(--accent)] transition-colors"
                        >
                          {method.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Response Times
                </h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>General inquiries: Within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Sales inquiries: Within 4 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Technical support: Immediate response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--accent)] mr-2">✓</span>
                    <span>Emergency: 24/7 availability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-sm text-foreground/60">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    ✓ Thank you! Your message has been sent successfully. We'll respond shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Quotation</option>
                    <option value="technical">Technical Support</option>
                    <option value="emergency">Emergency</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground rounded-lg focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] hover:from-[var(--accent-hover)] hover:to-[var(--accent)] transition-all rounded-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Office Locations
            </h2>
            <p className="text-base text-foreground/60 max-w-2xl">
              Visit us at our regional offices or contact us for local representation in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[var(--accent)]/40 hover:shadow-sm transition-all"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-foreground/60 rounded-full mb-2">
                    {office.region}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {office.location}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>{office.address}</p>
                  <p>{office.city}</p>
                  <a
                    href={`tel:${office.phone}`}
                    className="block text-[var(--accent)] hover:underline"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <span className="text-[var(--accent)] font-medium">24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Follow Us
              </h3>
              <p className="text-sm text-foreground/70 mb-4">
                Connect with us on social media for updates, industry insights, and company news.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-lg">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white hover:bg-[var(--accent-hover)] transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

