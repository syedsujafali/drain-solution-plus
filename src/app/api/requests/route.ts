import { NextResponse } from "next/server";
import { db } from "@/db";
import { serviceRequests } from "@/db/schema";
import { counties, services } from "@/lib/site";

export const dynamic = "force-dynamic";

const COUNTY_NAMES: string[] = counties.map((c) => c.name);
const SERVICE_NAMES: string[] = services.map((s) => s.name);

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const raw = (body ?? {}) as Record<string, unknown>;

  const name = clean(raw.name, 160);
  const phone = clean(raw.phone, 48);
  const email = clean(raw.email, 200);
  const county = clean(raw.county, 80);
  const propertyType = raw.propertyType === "commercial" ? "commercial" : "residential";
  const service = clean(raw.service, 160);
  const message = clean(raw.message, 2000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email.";
  if (!SERVICE_NAMES.includes(service) && service.length < 2) errors.service = "Please choose a service.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    const [inserted] = await db
      .insert(serviceRequests)
      .values({
        name,
        phone,
        email: email || null,
        county: COUNTY_NAMES.includes(county) ? county : null,
        propertyType,
        service,
        message: message || null,
      })
      .returning({ id: serviceRequests.id, createdAt: serviceRequests.createdAt });

    return NextResponse.json(
      {
        ok: true,
        id: inserted?.id ?? null,
        receivedAt: inserted?.createdAt ?? new Date().toISOString(),
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("service_request_insert_failed", error);
    return NextResponse.json(
      { ok: false, error: "We could not save your request. Please call (201) 881-9622." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const rows = await db
      .select({
        id: serviceRequests.id,
        name: serviceRequests.name,
        service: serviceRequests.service,
        county: serviceRequests.county,
        propertyType: serviceRequests.propertyType,
        status: serviceRequests.status,
        createdAt: serviceRequests.createdAt,
      })
      .from(serviceRequests)
      .orderBy(serviceRequests.id)
      .limit(50);

    return NextResponse.json({ ok: true, count: rows.length, requests: rows });
  } catch (error) {
    console.error("service_request_read_failed", error);
    return NextResponse.json({ ok: false, count: 0, requests: [] }, { status: 200 });
  }
}
