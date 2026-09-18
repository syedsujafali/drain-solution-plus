import { pgTable, serial, text, timestamp, varchar, pgEnum } from "drizzle-orm/pg-core";

export const requestStatusEnum = pgEnum("request_status", ["new", "contacted", "scheduled", "closed"]);

export const propertyTypeEnum = pgEnum("property_type", ["residential", "commercial"]);

/**
 * Schedule Online / Free Estimate submissions.
 * Mirrors the "Free Estimate" and "Schedule Online" calls to action
 * that already exist in the Drain Solutions Plus navigation.
 */
export const serviceRequests = pgTable("service_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 48 }).notNull(),
  email: varchar("email", { length: 200 }),
  county: varchar("county", { length: 80 }),
  propertyType: propertyTypeEnum("property_type").notNull().default("residential"),
  service: varchar("service", { length: 160 }).notNull(),
  message: text("message"),
  status: requestStatusEnum("status").notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type ServiceRequest = typeof serviceRequests.$inferSelect;
export type NewServiceRequest = typeof serviceRequests.$inferInsert;
