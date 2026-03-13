"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0f1a0f] via-[#1a3a1a] to-[#0f1a0f] relative overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a8c2a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#d4a843]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact info */}
          <div className="text-white">
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Ready to Transform<br />
              <span className="gold-shimmer">Your Outdoors?</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#4a8c2a] to-[#d4a843] rounded mb-7" />

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Contact us today for a free consultation and estimate. We&apos;d love to hear about your project and show you what we can do.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+18329713287"
                className="flex items-center gap-4 group"
                id="contact-phone-link"
              >
                <div className="w-12 h-12 bg-[#4a8c2a] rounded-2xl flex items-center justify-center text-xl group-hover:bg-[#d4a843] transition-colors group-hover:scale-110 transform duration-200">
                  📞
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-white font-semibold text-lg group-hover:text-[#d4a843] transition-colors">
                    +1 832-971-3287
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4a8c2a]/30 rounded-2xl flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Service Area</div>
                  <div className="text-white font-semibold">
                    Montgomery, TX &amp; Surrounding Areas
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4a8c2a]/30 rounded-2xl flex items-center justify-center text-xl">
                  🕐
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Hours</div>
                  <div className="text-white font-semibold">Mon – Sat: 7:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-white/70">
                  Thank you! We&apos;ll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  Request a Free Quote
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4a8c2a] focus:ring-1 focus:ring-[#4a8c2a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (832) 000-0000"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4a8c2a] focus:ring-1 focus:ring-[#4a8c2a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4a8c2a] focus:ring-1 focus:ring-[#4a8c2a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2" htmlFor="details">
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                    placeholder="Tell us about your landscaping project, property size, timeline, and any specific requirements..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4a8c2a] focus:ring-1 focus:ring-[#4a8c2a] transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4a8c2a] hover:bg-[#3d7523] disabled:opacity-70 text-white font-semibold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send My Free Quote Request"
                  )}
                </button>

                <p className="text-white/40 text-xs text-center">
                  We typically respond within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
