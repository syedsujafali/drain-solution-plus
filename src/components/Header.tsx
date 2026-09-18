"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { business, nav } from "@/lib/site";
import { LUXE } from "@/components/motion";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    icon: (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [timeString, setTimeString] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const year = now.getFullYear();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
      setTimeString(`${month}/${day}/${year} ${hours}:${minutesStr} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every route opens on a dark cinematic hero, so the header stays
  // transparent until the visitor scrolls.
  const solid = scrolled;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[120]">
        {/* Utility top bar matching user reference image */}
        <motion.div
          initial={false}
          animate={{ height: solid ? 0 : 46, opacity: solid ? 0 : 1 }}
          transition={{ duration: 0.4, ease: LUXE }}
          className="overflow-hidden border-b border-[#cbd5e1] bg-[#e8ebed] text-[#1e293b] shadow-xs"
        >
          <div className="flex h-[46px] w-full items-stretch justify-between">
            {/* Left Box: Crimson Red with Live Date/Time */}
            <div className="flex items-center justify-center bg-[#c02f2d] px-4 sm:px-6 md:px-7 text-white font-extrabold text-[12px] sm:text-[13px] tracking-wide border-r-2 border-[#1e293b] shrink-0 select-none">
              <span>
                It&apos;s {timeString || "9/18/2026 10:31 PM"}, We&apos;re Here For You
              </span>
            </div>

            {/* Right Group / Center Items */}
            <div className="flex flex-1 items-center justify-between gap-4 px-4 sm:px-8 xl:px-12">
              {/* Same Day Service + Phone */}
              <div className="flex items-center gap-2 text-[12px] sm:text-[13px] whitespace-nowrap">
                <span className="font-extrabold text-[#014485]">Same Day Service</span>
                <a
                  href={business.phoneHref}
                  className="inline-flex items-center gap-1.5 font-extrabold text-[#c02f2d] hover:underline transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#014485] shrink-0">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                  </svg>
                  <span>{business.phone}</span>
                </a>
              </div>

              {/* Five Stars Rating with Pixel-Perfect SVG Stars */}
              <div className="hidden md:flex items-center gap-2 font-extrabold text-[#c02f2d] text-[12px] sm:text-[13px] tracking-wide whitespace-nowrap">
                <span>FIVE STARS RATED COMPANY</span>
                <div className="flex items-center gap-0.5 text-[#eab308]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Social Media Icons (Replacing Locations We Service) */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 text-[#014485]">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#014485] transition-all duration-300 hover:bg-[#c02f2d] hover:text-white shadow-xs hover:scale-105"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={`relative bg-white border-b border-slate-200/90 transition-all duration-500 ${solid ? "shadow-md" : "shadow-xs"}`}>
          <div className={`shell flex items-center justify-between gap-6 transition-all duration-500 ${solid ? "h-[78px] sm:h-[88px] lg:h-[96px]" : "h-[88px] sm:h-[102px] lg:h-[114px]"}`}>
            <Link
              href="/"
              aria-label="Drain Solutions Plus — home"
              className="group flex items-center py-1.5 shrink-0"
            >
              <img
                src="/images/logo.png"
                alt="Drain Solutions Plus"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-xs ${
                  solid ? "h-[62px] sm:h-[72px] lg:h-[80px]" : "h-[72px] sm:h-[84px] md:h-[94px] lg:h-[102px]"
                }`}
              />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-1.5 lg:flex">
              {nav.map((item) => (
                <HeaderLink key={item.label} item={item} pathname={pathname} />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={business.phoneHref}
                className="btn btn-crimson hidden !px-5 !py-3 !text-[11px] font-extrabold sm:inline-flex"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.7 2.8c.1.4 0 .9-.4 1.1L7.6 10a12 12 0 0 0 6.4 6.4l1.3-1.3c.3-.3.7-.4 1.1-.3l2.8.7c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A16 16 0 0 1 4 5Z" strokeLinejoin="round" />
                </svg>
                {business.phone}
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="grid h-11 w-11 place-items-center rounded-[3px] bg-navy text-white hover:bg-crimson transition-colors duration-300 lg:hidden shadow-xs"
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-[1.5px] w-[18px] bg-current" />
                  <span className="block h-[1.5px] w-[18px] bg-current" />
                  <span className="block h-[1.5px] w-[11px] bg-current" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} reduce={!!reduce} />}
      </AnimatePresence>
    </>
  );
}

function HeaderLink({
  item,
  pathname,
}: {
  item: (typeof nav)[number];
  pathname: string;
}) {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
  const children = "children" in item ? item.children : undefined;

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className={`relative block px-3.5 py-2 text-[12px] font-extrabold tracking-[0.14em] uppercase transition-colors duration-300 ${
          active ? "text-crimson" : "text-navy/85 hover:text-crimson"
        }`}
      >
        {item.label}
        <span
          className={`absolute bottom-1 left-3.5 h-[2px] origin-left bg-crimson transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
          style={{ width: "calc(100% - 1.75rem)" }}
        />
      </Link>
      {children && children.length > 0 && (
        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-400 group-hover:pointer-events-auto group-hover:opacity-100">
          <div className="overflow-hidden rounded-[3px] border border-navy/10 bg-cream shadow-[0_28px_60px_-30px_rgba(1,32,47,0.55)]">
            {children.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="block border-b border-navy/8 px-4 py-3 text-[11px] font-bold tracking-[0.1em] text-ink/70 uppercase transition-colors last:border-0 hover:bg-navy hover:text-white"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ onClose, reduce }: { onClose: () => void; reduce: boolean }) {
  return (
    <motion.div
      className="fixed inset-0 z-[190] lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0.2 : 0.4 }}
    >
      <motion.div
        className="absolute inset-0 bg-navy-950"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        exit={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: reduce ? 0.25 : 0.75, ease: LUXE }}
      />
      <div className="grain absolute inset-0 opacity-25" />
      <div className="relative flex h-full flex-col">
        <div className="shell flex h-[68px] items-center justify-between">
          <span className="font-display text-[15px] font-extrabold tracking-[-0.02em] text-white">
            DRAIN SOLUTIONS <span className="text-crimson-300">PLUS</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-[3px] bg-white/10 text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l14 14M19 5 5 19" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="shell no-bar flex-1 overflow-y-auto py-6">
          <ul className="border-t border-white/10">
            {nav.map((item, i) => (
              <motion.li
                key={item.label}
                className="border-b border-white/10"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.14 + i * 0.055, ease: LUXE }}
              >
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between gap-4 py-4 font-display text-[26px] font-extrabold tracking-[-0.03em] text-white"
                >
                  {item.label}
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-8 grid gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : 0.55, ease: LUXE }}
          >
            <a href={business.phoneHref} className="btn btn-crimson w-full">
              Call Today! {business.phone}
            </a>
            <Link href="/contact" className="btn btn-ghost-light w-full">
              {business.scheduleLabel}
            </Link>
            <p className="pt-3 text-center text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              {business.addressLine1} · {business.addressLine2}
            </p>
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
}
