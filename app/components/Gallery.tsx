import Image from "next/image";

const galleryItems = [
  {
    src: "/gallery-1.png",
    alt: "Outdoor patio with string lights",
    label: "Patio Lighting",
  },
  {
    src: "/gallery-2.png",
    alt: "Stone pathway with landscape lighting",
    label: "Pathway Design",
  },
  {
    src: "/gallery-3.png",
    alt: "Stone retaining wall landscaping",
    label: "Stone Landscaping",
  },
  {
    src: "/gallery-4.png",
    alt: "Backyard pool with tropical landscaping",
    label: "Backyard Oasis",
  },
  {
    src: "/gallery-5.png",
    alt: "Manicured front yard with flower beds",
    label: "Front Yard Design",
  },
  {
    src: "/gallery-6.png",
    alt: "Elegant walkway with pathway lights",
    label: "Walkway Construction",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#faf7f0] relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #4a8c2a22 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#4a8c2a]/10 text-[#4a8c2a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0f1a0f] mb-4">
            Project Gallery
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Explore a selection of our recent landscaping, lighting, and construction projects across Montgomery, Texas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={item.src}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#d4a843] text-[#0f1a0f] font-semibold text-sm px-4 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold text-[#4a8c2a]">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a3a1a] hover:bg-[#0f1a0f] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
