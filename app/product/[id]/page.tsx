import { db } from '@/config/db';
import ProductDetailCard from '@/components/productdetail/Product_detailcard1';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // <-- await before using
  const productId = Number(id);

  const [rows]: any = await db.query(
    'SELECT * FROM products WHERE product_id = ?',
    [productId]
  );

  if (!rows || rows.length === 0) {
    return <div>Product not found</div>;
  }

  // Convert BLOB to Base64 if needed
  if (rows[0].image) {
    rows[0].image = `data:image/jpeg;base64,${Buffer.from(rows[0].image).toString('base64')}`;
  }

  return <ProductDetailCard product={rows[0]} />;
}
