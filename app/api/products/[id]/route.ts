import { db } from '@/config/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> } // <-- params is a Promise
) {
  try {
    const { id } = await context.params; // <-- await before using
    const productId = Number(id);

    if (isNaN(productId)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }

    const [rows]: any = await db.query(
      'SELECT * FROM products WHERE product_id = ?',
      [productId]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    // Convert BLOB -> Base64 if image exists
    if (rows[0].image) {
      rows[0].image = `data:image/jpeg;base64,${Buffer.from(rows[0].image).toString('base64')}`;
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
