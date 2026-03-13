"use client";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    name: "Marty Owens",
    location: "Google Review",
    initials: "MO",
    color: "from-[#4a8c2a] to-[#2d5a1b]",
    rating: 5,
    review:
      "I have used Tino twice and both times the service and attention to detail were perfect. Their crew completed the project in 3 days — one of them in the snow! Lighting, irrigation, sod, and design are all part of the project and Tino is there everyday with his team working. I would give a 6th star if I could.",
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
      "I had a great experience with Tino's Landscaping from start to finish. He helped narrow down my design, provide great suggestions and ultimately complete it better than I had envisioned. Quote was provided quickly, install scheduled within a week. Very transparent on costs. Will definitely use Tino's again!",
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
      "Tino's Landscape is one of the best outfits I've had the pleasure of working with. They took what was a muddy patch and made it better than what my wife and I could have imagined. Each morning Tino would discuss what was added or removed from the quote. If you need landscaping work, these are the folks to do it.",
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
      "TINO'S did an absolutely wonderful job transforming my yard. Professional, efficient, and incredibly easy to work with. They showed up on time, worked quickly without sacrificing quality. What really sets them apart is how collaborative they are — they listened to my ideas and executed everything exactly as discussed. Already excited about future projects!",
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
      "I'm thrilled with my newly transformed backyard. Owner Tino was incredibly professional and knowledgeable. His team transformed my unusable, muddy, mosquito-ridden deck into a clean modern outdoor space — dog-friendly with no more standing water. The project took just 3.5 days. The lighting package added a touch of elegance. Highly recommend!",
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

type Review = (typeof reviews)[0];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col select-none">
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: r.rating }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#d4a843] fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {/* Google link */}
        <a
          href={r.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 hover:border-blue-300 rounded-full px-2.5 py-1 transition-all duration-200"
        >
          {GOOGLE_ICON}
          <span className="text-[10px] font-semibold text-gray-500">Google</span>
        </a>
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        &ldquo;{r.review}&rdquo;
      </p>

      {/* Project tag */}
      <span className="inline-block mt-4 bg-[#4a8c2a]/10 text-[#4a8c2a] text-xs font-semibold px-3 py-1 rounded-full w-fit">
        {r.project}
      </span>

      {/* Reviewer */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0`}>
          {r.initials}
        </div>
        <div>
          <div className="font-semibold text-[#0f1a0f] text-sm">{r.name}</div>
          <div className="text-gray-400 text-xs">{r.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Infinite auto-scroll using CSS animation + pause on hover
  const looped = [...reviews, ...reviews, ...reviews]; // triple for seamless loop

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
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
      </div>

      {/* Full-width carousel — overflow escapes the container intentionally */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left + right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{
            animation: `scrollTrack 40s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {looped.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* Rating banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-gradient-to-r from-[#1a3a1a] to-[#2d5a1b] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
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

      {/* Keyframe animation injected inline */}
      <style>{`
        @keyframes scrollTrack {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
