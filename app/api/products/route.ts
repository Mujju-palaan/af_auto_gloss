import { NextResponse } from "next/server";
import { query } from "@/lib/mysql";

interface Product {
  id: number;
  title: string;
  price: string;
}

export async function GET() {
  try {
    const products = await query<Product[]>(
      "SELECT id, title, price FROM products LIMIT 10"
    );
    return NextResponse.json({ products });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
