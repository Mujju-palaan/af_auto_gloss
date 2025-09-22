import { NextRequest, NextResponse } from "next/server";
import { ProductData } from "@/data/ProductData";

// GET /api/products
export async function GET(req: NextRequest) {
  return NextResponse.json(ProductData);
}
