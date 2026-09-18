import Link from "next/link";
import { business } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <img
        src="/images/dsp/hero-banner.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(1,15,24,0.97),rgba(1,73,116,0.55))]" />
      <div className="grain absolute inset-0 -z-10 opacity-25" aria-hidden="true" />

      <div className="shell relative py-32">
        <p className="eyebrow flex items-center gap-3 text-crimson-300">
          <span className="h-px w-8 bg-crimson-300/60" />
          Error 404
        </p>
        <h1 className="mt-6 font-display text-[clamp(3rem,12vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-white">
          Page Not
          <br />
          <span className="text-stroke-light">Found</span>
        </h1>
        <p className="mt-7 max-w-md text-[14.5px] leading-relaxed text-white/70">
          {business.tagline} {business.promise}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-crimson !px-7">
            Back Home
          </Link>
          <a href={business.phoneHref} className="btn btn-ghost-light !px-7">
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
