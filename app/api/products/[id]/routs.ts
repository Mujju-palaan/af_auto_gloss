import { NextRequest, NextResponse } from "next/server";
import { ProductData } from "@/data/ProductData";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const product = ProductData.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
