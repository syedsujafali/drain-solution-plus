"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { business, faqs, reviews, reviewsIntro, satisfaction, type FAQCategory } from "@/lib/site";
import { LUXE, MaskLines, Reveal } from "@/components/motion";

const STARS = (
  <svg viewBox="0 0 100 18" className="h-3 w-auto" fill="currentColor" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <path
        key={i}
        transform={`translate(${i * 20} 0)`}
        d="M9 0l2.4 5.3 5.6.6-4.2 3.8 1.2 5.7L9 12.6 3.9 15.4l1.2-5.7L1 5.9l5.6-.6z"
      />
    ))}
  </svg>
);

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(129,0,12,0.07),transparent_68%)] lg:block"
        aria-hidden="true"
      />
      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-crimson">
                <span className="h-px w-8 bg-crimson/50" />
                Client Reviews
              </p>
            </Reveal>
            <MaskLines
              as="h2"
              className="display-md mt-6 text-navy"
              lines={["Our Clients Reviews", "Speak For The Quality", "Of Our Services"]}
            />
            <Reveal delay={0.14} className="mt-7 max-w-md">
              <p className="lede">{reviewsIntro.text}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 inline-flex items-center gap-3 text-crimson">
              {STARS}
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase">Five Stars Rated Company</span>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.09} y={40} className={i % 2 === 1 ? "sm:mt-10" : ""}>
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.55, ease: LUXE }}
                  className="group relative h-full overflow-hidden rounded-[3px] border border-navy/10 bg-white p-6 transition-colors duration-500 hover:border-navy/25"
                >
                  <span
                    className="absolute -right-2 -top-6 font-display text-[7rem] font-extrabold leading-none text-navy/[0.05] transition-colors duration-500 group-hover:text-crimson/10"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                  <span className="relative block text-crimson">{STARS}</span>
                  <blockquote className="relative mt-4 text-[13.5px] leading-relaxed text-ink/75">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="relative mt-5 flex items-center gap-3 border-t border-navy/10 pt-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy font-display text-[11px] font-bold text-white">
                      {r.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-bold text-navy">{r.name}</span>
                      <span className="block text-[10px] font-bold tracking-[0.16em] text-steel uppercase">
                        {r.source}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Satisfaction() {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([faqs[0]?.q || ""]);

  const categories: FAQCategory[] = ["All", "Emergency", "Services", "Inspection", "Pricing & Areas"];

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: faqs.length };
    faqs.forEach((f) => {
      counts[f.category] = (counts[f.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All") return faqs;
    return faqs.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  const toggleFaq = (question: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]
    );
  };

  const allExpanded = filteredFaqs.length > 0 && filteredFaqs.every((f) => expandedQuestions.includes(f.q));

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedQuestions([]);
    } else {
      setExpandedQuestions(filteredFaqs.map((f) => f.q));
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Emergency":
        return "bg-crimson/10 text-crimson border-crimson/25";
      case "Services":
        return "bg-navy/10 text-navy border-navy/20";
      case "Inspection":
        return "bg-azure-soft/10 text-azure border-azure-soft/25";
      case "Pricing & Areas":
        return "bg-steel/10 text-steel border-steel/25";
      default:
        return "bg-navy/5 text-navy border-navy/15";
    }
  };

  return (
    <section id="faqs" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute -right-24 top-1/4 hidden h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(1,73,116,0.06),transparent_70%)] lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(129,0,12,0.05),transparent_70%)] lg:block"
        aria-hidden="true"
      />

      <div className="shell grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Brand Pillar, Team Trust & 24/7 Live Assistance Card (Sticky on desktop) */}
        <div className="space-y-8 lg:col-span-5 lg:sticky lg:top-28">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-crimson/20 bg-crimson/5 px-3.5 py-1 text-crimson">
                <span className="h-2 w-2 rounded-full bg-crimson animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{satisfaction.eyebrow}</span>
              </div>
            </Reveal>

            <MaskLines
              as="h2"
              className="display-md mt-5 text-navy"
              lines={["Always Striving For", "Our Customers", "Satisfaction"]}
            />

            <Reveal delay={0.12} className="mt-5 space-y-3">
              <p className="font-display text-[15.5px] font-bold tracking-[-0.01em] text-ink/85">
                {satisfaction.sub}
              </p>
              <p className="lede text-steel">{satisfaction.body}</p>
            </Reveal>
          </div>

          {/* Team Showcase & Trust Highlights */}
          <Reveal delay={0.18}>
            <div className="group relative overflow-hidden rounded-[4px] border border-navy/10 bg-white p-5 shadow-sm transition-all duration-500 hover:border-navy/25 hover:shadow-md">
              <div className="relative overflow-hidden rounded-[2px] bg-paper">
                <img
                  src="/images/dsp/skew-img.png"
                  alt="Drain Solutions Plus service team"
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-[420px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-navy/90 px-3 py-1 text-[9.5px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Trusted Professionals
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-navy/10 pt-4 text-center">
                <div className="rounded-[3px] bg-cream px-2 py-2">
                  <span className="block font-display text-sm font-extrabold text-crimson">30+ Yrs</span>
                  <span className="block text-[10px] font-medium text-steel">Combined Exp.</span>
                </div>
                <div className="rounded-[3px] bg-cream px-2 py-2">
                  <span className="block font-display text-sm font-extrabold text-navy">99.9%</span>
                  <span className="block text-[10px] font-medium text-steel">Clear Rate</span>
                </div>
                <div className="rounded-[3px] bg-cream px-2 py-2">
                  <span className="block font-display text-sm font-extrabold text-crimson">5.0 ★</span>
                  <span className="block text-[10px] font-medium text-steel">Rated Team</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 24/7 Live Emergency & Dispatch Assistance Card (Fills empty vertical space) */}
          <Reveal delay={0.24}>
            <div className="relative overflow-hidden rounded-[4px] border border-navy-800/20 bg-gradient-to-br from-navy to-navy-900 p-6 text-white shadow-lg">
              <div
                className="pointer-events-none absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-crimson/20 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.22em] text-emerald-300 uppercase">
                      Live Dispatch Available 24/7
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-white/60">North NJ</span>
                </div>

                <h3 className="font-display mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
                  Facing a Drain Emergency?
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">
                  Have an active backup, flooded basement, or urgent question? Speak immediately with Dennis and our Hawthorne master technicians.
                </p>

                <div className="mt-5 space-y-2.5">
                  <a
                    href={business.phoneHref}
                    className="btn btn-crimson flex w-full items-center justify-center gap-2.5 !py-3 !text-[13px] font-bold tracking-wider shadow-md transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now: {business.phone}
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={business.textHref}
                      className="btn btn-ghost-light flex items-center justify-center gap-2 !py-2.5 !text-[12px] font-medium"
                    >
                      <svg className="h-3.5 w-3.5 shrink-0 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Text Us
                    </a>
                    <a
                      href="#estimate"
                      className="btn btn-ghost-light flex items-center justify-center !py-2.5 !text-[12px] font-medium"
                    >
                      Free Estimate
                    </a>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-white/70">
                    <span className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      1-Hr Fast Response
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Upfront Pricing
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Insured & Bonded
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Same-Day Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Category Filter, Rich Accordions & Guarantee Card */}
        <div className="space-y-6 lg:col-span-7 lg:pl-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow flex items-center gap-2 text-steel">
                  <span className="h-px w-6 bg-steel/40" />
                  Transparent & Reliable Answers
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Frequently Asked Questions
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-steel">
                  Got questions about our drain methods, emergency response, video cameras, or pricing? Find clear answers below.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <button
                type="button"
                onClick={toggleAll}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[3px] border border-navy/15 bg-white px-3 py-1.5 text-[11px] font-bold tracking-wider text-navy uppercase shadow-xs transition-colors hover:border-navy/35 hover:bg-paper"
              >
                <svg className="h-3.5 w-3.5 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {allExpanded ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  )}
                </svg>
                {allExpanded ? "Collapse All" : "Expand All"}
              </button>
            </Reveal>
          </div>

          {/* Interactive Category Filter Pills */}
          <Reveal delay={0.14}>
            <div className="flex flex-wrap items-center gap-2 border-y border-navy/10 py-3.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11.5px] font-bold tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? "bg-navy text-white shadow-xs"
                        : "bg-white text-navy/75 border border-navy/10 hover:border-navy/25 hover:text-navy"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`grid h-4 min-w-[16px] place-items-center rounded-full px-1 text-[9px] font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-navy/10 text-navy"
                      }`}
                    >
                      {categoryCounts[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Accordion FAQ Items */}
          <div className="space-y-3">
            {filteredFaqs.map((f, i) => {
              const isOpen = expandedQuestions.includes(f.q);
              return (
                <Reveal key={f.q} delay={i * 0.04} y={18}>
                  <div
                    className={`group rounded-[4px] border transition-all duration-400 ${
                      isOpen
                        ? "border-navy/25 bg-white shadow-sm"
                        : "border-navy/12 bg-white hover:border-navy/25"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(f.q)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 p-5 text-left transition-colors sm:gap-5"
                    >
                      <span className="font-sans text-[11px] font-extrabold tracking-[0.16em] text-crimson tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-block rounded-[3px] border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase ${getCategoryBadge(
                              f.category
                            )}`}
                          >
                            {f.category}
                          </span>
                        </div>
                        <h4
                          className={`font-display text-[clamp(0.975rem,1.4vw,1.15rem)] font-bold tracking-[-0.02em] transition-colors duration-300 ${
                            isOpen ? "text-crimson" : "text-navy group-hover:text-crimson"
                          }`}
                        >
                          {f.q}
                        </h4>
                      </div>

                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "rotate-45 border-crimson bg-crimson text-white shadow-xs"
                            : "border-navy/20 bg-paper text-navy group-hover:border-crimson/50 group-hover:text-crimson"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0.2 : 0.45, ease: LUXE }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-navy/8 px-5 pt-3.5 pb-5 pl-12 sm:pl-14">
                            <p className="text-[13.5px] leading-relaxed text-steel">{f.a}</p>

                            {f.highlight && (
                              <div className="mt-3.5 flex items-start gap-2.5 rounded-[3px] border border-crimson/15 bg-crimson/5 p-3 text-[12px] text-navy">
                                <svg
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-crimson"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2.5}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-semibold text-ink/90">
                                  <strong className="font-bold text-crimson">Key Takeaway:</strong> {f.highlight}
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Help & Guarantee Banner (Completely fills bottom space) */}
          <Reveal delay={0.25}>
            <div className="rounded-[4px] border border-navy/12 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-crimson">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[11px] font-extrabold tracking-wider uppercase">Our Service Promise</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-navy">
                    &ldquo;If water runs through it, we do it!&rdquo;
                  </h4>
                  <p className="text-[12.5px] text-steel">
                    Still have a unique question or need advice? Dennis and the team are just a phone call away.
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2.5">
                  <a href={business.phoneHref} className="btn btn-crimson !px-5 !py-2.5 !text-[12px] font-bold">
                    Call {business.phone}
                  </a>
                  <a href="/contact" className="btn btn-ghost-dark !px-4 !py-2.5 !text-[12px] font-bold">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
