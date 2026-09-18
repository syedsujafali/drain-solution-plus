"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { business, counties, services } from "@/lib/site";
import { LUXE, Reveal } from "@/components/motion";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;
type Status = "idle" | "sending" | "sent" | "error";

export function EstimateForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [reference, setReference] = useState<number | null>(null);

  const dark = tone === "dark";
  const label = dark ? "text-white/45" : "text-steel";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      county: String(data.get("county") ?? ""),
      propertyType: String(data.get("propertyType") ?? "residential"),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    setErrors({});
    setFormError("");

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok: boolean;
        id?: number | null;
        errors?: Errors;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setErrors(json.errors ?? {});
        setFormError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setReference(json.id ?? null);
      setStatus("sent");
    } catch {
      setFormError("We could not reach the server. Please call us instead.");
      setStatus("error");
    }
  }

  return (
    <div className={dark ? "text-white" : "text-ink"}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: reduce ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.7, ease: LUXE }}
            className={`rounded-[3px] border p-8 sm:p-10 ${
              dark ? "border-white/15 bg-white/5" : "border-navy/15 bg-white"
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M4 12.5 9.5 18 20 6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-6 font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy dark:text-white">
              Request received.
            </h3>
            <p className={`mt-3 max-w-md text-[14px] leading-relaxed ${dark ? "text-white/65" : "text-steel"}`}>
              We&rsquo;re committed to respond to all emergency calls within the hour, and provide the same day
              service. For anything urgent, call us now.
            </p>
            {reference !== null && (
              <p className={`mt-4 text-[10px] font-bold tracking-[0.2em] uppercase ${dark ? "text-white/40" : "text-steel/70"}`}>
                Reference #{String(reference).padStart(5, "0")}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn btn-crimson">
                Call {business.phone}
              </a>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-ghost">
                Send another
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : -14 }}
            transition={{ duration: reduce ? 0.3 : 0.55, ease: LUXE }}
            className={`rounded-[3px] border p-7 sm:p-9 ${
              dark ? "border-white/15 bg-navy-950/45 backdrop-blur-sm" : "border-navy/12 bg-white"
            }`}
          >
            <p className={`eyebrow ${dark ? "text-crimson-300" : "text-crimson"}`}>{business.estimateLabel}</p>
            <h3 className={`mt-4 font-display text-[26px] font-extrabold tracking-[-0.03em] ${dark ? "text-white" : "text-navy"}`}>
              {business.scheduleLabel}
            </h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name} labelClass={label} placeholder="Your name" />
              <Field
                label="Phone"
                name="phone"
                required
                type="tel"
                error={errors.phone}
                labelClass={label}
                placeholder="(201) 000-0000"
              />
              <Field label="Email" name="email" type="email" error={errors.email} labelClass={label} placeholder="you@email.com" />
              <div>
                <label htmlFor="county" className={`eyebrow block ${label}`}>
                  County
                </label>
                <select id="county" name="county" className="field mt-2" defaultValue="">
                  <option value="" disabled>
                    Select county
                  </option>
                  {counties.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className={`eyebrow block ${label}`}>
                  Service needed
                </label>
                <select id="service" name="service" className="field mt-2" defaultValue="" required>
                  <option value="" disabled>
                    Choose one of our eight services
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.index} — {s.name}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-2 text-[11px] font-bold text-crimson">{errors.service}</p>}
              </div>
              <div className="sm:col-span-2">
                <span className={`eyebrow block ${label}`}>Property type</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(["residential", "commercial"] as const).map((t, i) => (
                    <label
                      key={t}
                      className={`cursor-pointer rounded-[2px] border px-4 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-400 has-[:checked]:border-crimson has-[:checked]:bg-crimson has-[:checked]:text-white ${
                        dark ? "border-white/20 text-white/70" : "border-navy/18 text-ink/70"
                      }`}
                    >
                      <input type="radio" name="propertyType" value={t} defaultChecked={i === 0} className="sr-only" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={`eyebrow block ${label}`}>
                  What&rsquo;s happening?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="field mt-2 resize-none"
                  placeholder="Backed-up line, slow drain, clog, inspection…"
                />
              </div>
            </div>

            <AnimatePresence>
              {status === "error" && formError && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-5 overflow-hidden text-[12px] font-bold text-crimson"
                >
                  {formError}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn btn-crimson !px-8" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request Service"}
              </button>
              <p className={`text-[11px] font-bold tracking-[0.14em] uppercase ${dark ? "text-white/40" : "text-steel/80"}`}>
                Or call{" "}
                <a href={business.phoneHref} className="text-crimson underline decoration-crimson/30 underline-offset-4">
                  {business.phone}
                </a>
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
  labelClass,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  labelClass: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={`eyebrow block ${labelClass}`}>
        {label}
        {required && <span className="text-crimson"> *</span>}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className="field mt-2" />
      {error && <p className="mt-2 text-[11px] font-bold text-crimson">{error}</p>}
    </div>
  );
}
