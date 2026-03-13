export default function Footer() {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0f1a0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-1">
              Tino&apos;s Landscape
            </h3>
            <p className="text-[#d4a843] text-sm font-medium tracking-wider mb-4">
              Lighting &amp; Construction
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Professional landscaping, outdoor lighting installation, stone &amp; rock
              landscaping, patio construction, and drainage solutions serving
              Montgomery, Texas and surrounding areas.
            </p>
            <a
              href="tel:+18329713287"
              className="mt-5 inline-flex items-center gap-2 text-[#d4a843] font-semibold hover:text-[#f0c040] transition-colors"
            >
              <span className="text-xl">📞</span>
              +1 832-971-3287
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Landscape Design",
                "Outdoor Lighting",
                "Stone & Rock Landscaping",
                "Patio & Walkways",
                "Drainage Solutions",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#d4a843] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4a8c2a] flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-[#d4a843] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#4a8c2a] flex-shrink-0" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Service area badges */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-xs">
                Service Area
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Montgomery", "Conroe", "The Woodlands", "Willis", "Magnolia"].map(
                  (city) => (
                    <span
                      key={city}
                      className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full"
                    >
                      {city}, TX
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Tino&apos;s Landscape, Lighting &amp; Construction.
            All rights reserved. &bull; Montgomery, Texas
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#4a8c2a] rounded-full animate-pulse" />
            <span className="text-white/40 text-xs">
              Serving Montgomery County, TX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
