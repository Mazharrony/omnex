"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-3xl leading-relaxed">
            Request a quote, inquire about solutions, or connect with our team.
            We'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6 text-base text-foreground/60">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    General Inquiries
                  </h3>
                  <p>info@omnex.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Sales
                  </h3>
                  <p>sales@omnex.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    Technical Support
                  </h3>
                  <p>support@omnex.com</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-foreground focus:outline-none focus:border-foreground/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 text-base font-medium text-white bg-[var(--accent)] hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

