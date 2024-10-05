import * as schema from "./drizzle/schema";
import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

const sqlite = new Database(Bun.env.DATABASE_URL || "");
const db = drizzle(sqlite, { schema });
export default db;

export * from "drizzle-orm";
