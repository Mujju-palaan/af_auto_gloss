import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // query() returns rows directly
    const rows: any[] = await query("SELECT * FROM products");

    const products = rows.map((row: any) => ({
      ...row,
      image: row.image
        ? `data:image/png;base64,${Buffer.from(row.image).toString("base64")}`
        : "", // fallback to empty string
    }));

    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
