import { db } from "@/config/db";

export async function GET() {
  try {
    const [rows]: any = await db.query("SELECT * FROM products");

    const products = rows.map((row: any) => ({
      ...row,
      image: row.image
        ? `data:image/png;base64,${row.image.toString("base64")}`
        : "", // return empty string instead of null
    }));

    return Response.json(products);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
