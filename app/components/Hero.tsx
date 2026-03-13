import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Professional landscaping and outdoor lighting"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1a0f]/75 via-[#0f1a0f]/55 to-[#1a3a1a]/60" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#faf7f0] to-transparent" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4a8c2a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#d4a843]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
          <span className="w-2 h-2 bg-[#d4a843] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Montgomery, Texas &bull; Serving the Greater Area
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up animate-delay-100 leading-tight">
          Tino&apos;s Landscape,<br />
          <span className="gold-shimmer">Lighting &amp; Construction</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-200 leading-relaxed">
          Professional Landscaping &amp; Outdoor Lighting in Montgomery, Texas.
          We transform your outdoor spaces into breathtaking, functional retreats.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
          <a
            id="hero-quote-btn"
            href="#contact"
            className="group relative bg-[#4a8c2a] hover:bg-[#3d7523] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/50 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Request a Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4a8c2a] to-[#5da832] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            id="hero-projects-btn"
            href="#gallery"
            className="group glass text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
          >
            View Projects
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-up animate-delay-400">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Projects Done" },
            { value: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl py-3 px-2 text-center">
              <div className="font-display text-2xl font-bold text-[#d4a843]">{s.value}</div>
              <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
