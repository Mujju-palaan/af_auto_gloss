import { db } from "@/config/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM patient LIMIT 10"); // sample query
    return Response.json(rows);
  } catch (error) {
    return Response.json({ error: "Failed to fetch patients" }, { status: 500 });
  }
}
