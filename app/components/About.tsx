const highlights = [
  { icon: "🏆", value: "10+", label: "Years in Business" },
  { icon: "🌱", value: "500+", label: "Projects Completed" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Owned", value: "Local" },
  { icon: "📍", value: "TX", label: "Licensed & Insured" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faf7f0] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4a8c2a]/5 rounded-full translate-x-1/2 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <span className="inline-block bg-[#4a8c2a]/10 text-[#4a8c2a] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              About Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0f1a0f] mb-6 leading-tight">
              Rooted in Montgomery,<br />
              <span className="text-[#4a8c2a]">Built on Quality</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-[#4a8c2a] to-[#d4a843] rounded mb-7" />

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Tino&apos;s Landscape, Lighting &amp; Construction has been serving Montgomery, Texas and the surrounding communities for over a decade. Founded by Tino — a passionate craftsman with deep roots in the Texas Hill Country — our company was built on the belief that every outdoor space deserves to be beautiful, functional, and uniquely yours.
              </p>
              <p>
                We specialize in comprehensive outdoor transformations: from precision landscape design and installation of premium outdoor LED lighting systems, to natural stone feature construction and professional drainage solutions. Every project, large or small, receives the same level of personal attention and craftsmanship we&apos;ve become known for throughout Montgomery County.
              </p>
              <p>
                As a fully licensed and insured local business, we take pride in our work, our community, and our clients. When you hire Tino&apos;s, you&apos;re not just getting a contractor — you&apos;re gaining a trusted outdoor partner for life.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-[#4a8c2a] text-white text-sm font-medium px-4 py-2 rounded-full">✓ Fully Licensed</span>
              <span className="bg-[#4a8c2a] text-white text-sm font-medium px-4 py-2 rounded-full">✓ Fully Insured</span>
              <span className="bg-[#4a8c2a] text-white text-sm font-medium px-4 py-2 rounded-full">✓ Free Estimates</span>
              <span className="bg-[#4a8c2a] text-white text-sm font-medium px-4 py-2 rounded-full">✓ Local Business</span>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-5">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-1 text-center border border-transparent hover:border-[#4a8c2a]/10"
              >
                <div className="text-4xl mb-3">{h.icon}</div>
                <div className="font-display text-3xl font-bold text-[#4a8c2a] mb-1">{h.value}</div>
                <div className="text-gray-500 text-sm font-medium">{h.label}</div>
              </div>
            ))}

            {/* Call to action card */}
            <div className="col-span-2 bg-gradient-to-r from-[#4a8c2a] to-[#2d5a1b] rounded-3xl p-6 flex items-center justify-between text-white">
              <div>
                <div className="font-bold text-lg">Ready to get started?</div>
                <div className="text-white/70 text-sm">Free consultations available</div>
              </div>
              <a
                href="tel:+18329713287"
                className="bg-white text-[#1a3a1a] font-bold px-5 py-2.5 rounded-full text-sm hover:bg-[#faf7f0] transition-colors whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
