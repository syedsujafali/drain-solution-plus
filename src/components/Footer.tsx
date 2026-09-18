import Link from "next/link";
import { business, counties, services } from "@/lib/site";
import { FooterCTA } from "@/components/FooterCTA";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <img
        src="/images/dsp/footer-bg.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/85 to-navy-950" />
      <div className="grain absolute inset-0 opacity-20" aria-hidden="true" />

      <FooterCTA />

      <div className="shell relative">
        <div className="grid gap-12 border-t border-white/12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Drain Solutions Plus — home" className="group inline-flex items-center gap-3.5">
              <div className="grid place-items-center rounded-[4px] bg-white px-2.5 py-1.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Drain Solutions Plus"
                  className="h-11 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="leading-none">
                <span className="block font-display text-[17px] font-extrabold tracking-[-0.02em] text-white transition-colors group-hover:text-crimson-300">
                  DRAIN SOLUTIONS
                </span>
                <span className="mt-[3px] block text-[9px] font-bold tracking-[0.42em] text-crimson-300 uppercase">
                  PLUS
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">{business.tagline}</p>
            <p className="mt-2 max-w-xs font-display text-sm font-bold tracking-[-0.01em] text-white/85">
              {business.promise}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-crimson-300 uppercase">
              <img src="/images/dsp/five-star.png" alt="Five stars" className="h-3.5 w-auto" loading="lazy" />
              {business.ratingLabel}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-white/40">Serviced Locations</h3>
            <ul className="mt-5 space-y-2.5">
              {counties.map((c) => (
                <li key={c.slug} id={c.slug}>
                  <Link href="/contact" className="text-[13px] text-white/65 transition-colors hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white/40">Our Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[13px] text-white/65 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-white/40">Our Links</h3>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "Client Reviews", href: "/reviews" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="eyebrow mt-9 text-white/40">Contact Us</h3>
            <address className="mt-4 space-y-1.5 text-[13px] not-italic text-white/65">
              <p>{business.addressLine1}</p>
              <p>{business.addressLine2}</p>
              <p>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">
                  {business.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 py-7 text-[11px] tracking-[0.06em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} Drain Solutions Plus. All Rights Reserved.</p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>{business.availability}</span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <a href={business.phoneHref} className="font-bold text-white transition-colors hover:text-crimson-300">
              {business.phone}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
