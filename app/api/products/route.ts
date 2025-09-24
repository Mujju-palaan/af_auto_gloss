import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";  // ensure this API is dynamic
export const revalidate = 60;            // optional ISR

export async function GET() {
  try {
    const rows: any[] = await query("SELECT * FROM products");

    const products = rows.map((row) => ({
      ...row,
      image: row.image
        ? `data:image/png;base64,${Buffer.from(row.image).toString("base64")}`
        : "",
    }));

    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
