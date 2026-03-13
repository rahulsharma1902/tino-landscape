"use client";
import { useState, useCallback } from "react";

const reviews = [
  {
    name: "Marty Owens",
    location: "Google Review",
    initials: "MO",
    color: "from-[#4a8c2a] to-[#2d5a1b]",
    rating: 5,
    review:
      "I have used Tino twice and both times the service and attention to detail were perfect. Their crew completed the project in 3 days — one of them in the snow! Lighting, irrigation, sod, and design are all part of the project and Tino is there everyday with his team working. I would give a 6th star if I could. Do not start a project without consulting with Tino's Landscape and Construction.",
    project: "Lighting, Irrigation & Sod",
    reviewUrl: "https://www.google.com/maps/contrib/108756430535424801186/reviews?hl=en",
  },
  {
    name: "Trevor Dippon",
    location: "Google Review",
    initials: "TD",
    color: "from-[#d4a843] to-[#b08630]",
    rating: 5,
    review:
      "I had a great experience with Tino's Landscaping from start to finish. He helped narrow down my design, provide great suggestions and ultimately complete it better than I had envisioned — patio, paver, landscaping, and lighting. Quote was provided quickly, install scheduled within a week. Very transparent on costs. Will definitely use Tino's again!",
    project: "Patio, Pavers & Lighting",
    reviewUrl: "https://www.google.com/maps/contrib/104751373090150480786/reviews",
  },
  {
    name: "Thomas Riggs",
    location: "Google Review",
    initials: "TR",
    color: "from-[#1a3a1a] to-[#0f2a0f]",
    rating: 5,
    review:
      "Tino's Landscape is one of the best outfits I've had the pleasure of working with. They took what was a muddy patch and made it better than what my wife and I could have imagined. Each morning Tino would discuss what was added or removed from the quote and worked with us to make minor adjustments. If you need landscaping work, these are the folks to do it.",
    project: "Full Landscape Transformation",
    reviewUrl: "https://www.google.com/maps/contrib/106649848187432223398/reviews",
  },
  {
    name: 'Jason "The Paint Guy" Cope',
    location: "Google Review",
    initials: "JC",
    color: "from-[#2d5a1b] to-[#4a8c2a]",
    rating: 5,
    review:
      "TINO'S did an absolutely wonderful job transforming my yard. Professional, efficient, and incredibly easy to work with. They showed up on time, worked quickly without sacrificing quality. What really sets them apart is how collaborative they are — they listened to my ideas and executed everything exactly as discussed. I'm extremely happy and already excited about future projects!",
    project: "Full Yard Transformation",
    reviewUrl:
      "https://www.google.com/maps/contrib/117361084581897119652/place/ChIJ2RB_EPKh2aARrAk0TkCev7I",
  },
  {
    name: "Craig Gibbons",
    location: "Google Review",
    initials: "CG",
    color: "from-[#b08630] to-[#d4a843]",
    rating: 5,
    review:
      "I'm thrilled with my newly transformed backyard. Owner Tino was incredibly professional and knowledgeable. His team transformed my unusable, muddy, mosquito-ridden deck into a clean modern outdoor space — dog-friendly with no more standing water. The project took just 3.5 days. The lighting package added a touch of elegance. Highly recommend Tino's Landscaping!",
    project: "Backyard Redesign & Lighting",
    reviewUrl:
      "https://www.google.com/maps/contrib/100453332029591064467/place/ChIJ2RB_EPKh2aARrAk0TkCev7I",
  },
];

const GOOGLE_ICON = (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// How many cards visible at once per breakpoint (we handle via CSS)
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // We always show up to 3 cards: current, current+1, current+2 (wrapping)
  const visible = [0, 1, 2].map((offset) => reviews[(current + offset) % total]);

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a8c2a]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#d4a843]/15 text-[#b08630] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0f1a0f] mb-4">
            What Our Clients Say
          </h2>
          <div className="section-divider" />
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real reviews from real customers — verified on Google.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((r, idx) => (
              <div
                key={`${r.name}-${current}-${idx}`}
                className="bg-[#faf7f0] rounded-3xl p-7 shadow-sm border border-transparent hover:border-[#4a8c2a]/10 hover:shadow-xl hover:shadow-green-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  // hide 2nd/3rd on mobile, 3rd on sm
                  display: idx === 0 ? "flex" : undefined,
                }}
              >
                {/* Top: stars + Google badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#d4a843] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <a
                    href={r.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-300 rounded-full px-2.5 py-1 transition-all"
                  >
                    {GOOGLE_ICON}
                    <span className="text-[10px] font-semibold text-gray-500">Google</span>
                  </a>
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{r.review}&rdquo;
                </p>

                {/* Project tag */}
                <span className="inline-block mt-4 bg-[#4a8c2a]/10 text-[#4a8c2a] text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  {r.project}
                </span>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0f1a0f] text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            id="reviews-prev"
            onClick={prev}
            aria-label="Previous reviews"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-[#4a8c2a] hover:bg-[#4a8c2a] hover:text-white hover:border-[#4a8c2a] transition-all duration-200 hover:scale-110 z-10 hidden sm:flex"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            id="reviews-next"
            onClick={next}
            aria-label="Next reviews"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-[#4a8c2a] hover:bg-[#4a8c2a] hover:text-white hover:border-[#4a8c2a] transition-all duration-200 hover:scale-110 z-10 hidden sm:flex"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Mobile prev */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="sm:hidden w-10 h-10 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center text-[#4a8c2a]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2.5 bg-[#4a8c2a]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-[#4a8c2a]/50"
                }`}
              />
            ))}
          </div>

          {/* Mobile next */}
          <button
            onClick={next}
            aria-label="Next"
            className="sm:hidden w-10 h-10 bg-white border border-gray-200 rounded-full shadow flex items-center justify-center text-[#4a8c2a]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Counter */}
        <p className="text-center text-gray-400 text-xs mt-3">
          {current + 1} / {total} reviews
        </p>

        {/* Rating banner */}
        <div className="mt-12 bg-gradient-to-r from-[#1a3a1a] to-[#2d5a1b] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-5xl font-bold">5.0</div>
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#d4a843] text-xl">★</span>
              ))}
            </div>
            <div className="text-white/70 text-sm mt-1">Average Google Rating</div>
          </div>
          <div className="text-center sm:text-right">
            <div className="font-display text-3xl font-bold">200+</div>
            <div className="text-white/70 text-sm">Happy customers across Montgomery County</div>
          </div>
          <a
            href="#contact"
            className="bg-[#d4a843] hover:bg-[#f0c040] text-[#0f1a0f] font-semibold px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Join Our Clients
          </a>
        </div>
      </div>
    </section>
  );
}
