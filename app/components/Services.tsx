const services = [
  {
    icon: "🌿",
    title: "Landscape Design",
    description:
      "Custom landscape designs tailored to your property and lifestyle. We create stunning outdoor environments that blend beauty with functionality.",
    features: ["Custom Plant Selection", "3D Design Plans", "Seasonal Planting"],
  },
  {
    icon: "💡",
    title: "Outdoor Lighting",
    description:
      "Transform your outdoor spaces with professional LED lighting systems. Enhance curb appeal, safety, and ambiance after dark.",
    features: ["LED Pathway Lighting", "Accent & Uplighting", "Smart Controls"],
  },
  {
    icon: "🪨",
    title: "Stone & Rock Landscaping",
    description:
      "Natural stone features that add timeless elegance to your landscape. From decorative boulders to retaining walls built to last.",
    features: ["Retaining Walls", "Decorative Boulders", "River Rock Beds"],
  },
  {
    icon: "🧱",
    title: "Patio & Walkway Construction",
    description:
      "Expert patio and walkway construction using premium materials. Create outdoor living spaces that extend your home's comfort outdoors.",
    features: ["Flagstone Patios", "Brick Walkways", "Outdoor Living Areas"],
  },
  {
    icon: "🌊",
    title: "Drainage Solutions",
    description:
      "Protect your property from water damage with professional drainage systems. We solve erosion and flooding problems effectively.",
    features: ["French Drains", "Swales & Grading", "Erosion Control"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#4a8c2a]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a843]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#4a8c2a]/10 text-[#4a8c2a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0f1a0f] mb-4">
            Our Services
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From concept to completion, we handle every aspect of your outdoor transformation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-[#faf7f0] hover:bg-white rounded-3xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/10 hover:-translate-y-1 border border-transparent hover:border-[#4a8c2a]/10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#4a8c2a] to-[#2d5a1b] rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-900/20">
                {service.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-[#0f1a0f] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature tags */}
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-[#4a8c2a]/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a8c2a]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-[#4a8c2a] to-[#d4a843] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#1a3a1a] to-[#0f1a0f] rounded-3xl p-7 flex flex-col justify-between text-white">
            <div>
              <div className="text-3xl mb-4">🏡</div>
              <h3 className="font-display text-xl font-bold mb-3">
                Don&apos;t see your project?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We handle custom outdoor projects of all kinds. Get in touch and we&apos;ll create a solution just for you.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block bg-[#d4a843] hover:bg-[#f0c040] text-[#0f1a0f] font-semibold px-5 py-3 rounded-full text-sm text-center transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
