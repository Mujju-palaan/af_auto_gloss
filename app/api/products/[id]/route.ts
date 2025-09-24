export const dynamic = "force-dynamic";  // ensure dynamic behavior
export const revalidate = 60;            // ISR every 60s
import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> } // <- note Promise
) {
  try {
    const { id } = await context.params;
    const productId = Number(id);

    if (isNaN(productId)) {
      return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
    }

    // query() returns rows directly
    const rows: any[] = await query(
      "SELECT * FROM products WHERE product_id = ?",
      [productId]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const product = rows[0];

    if (product.image) {
      product.image = `data:image/jpeg;base64,${Buffer.from(product.image).toString("base64")}`;
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
