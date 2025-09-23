// app/product/[id]/page.tsx (Next 13+ server component)
import { db } from '@/config/db';
import Product_detailcard1 from '../../../components/productdetail/Product_detailcard1';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);

  // Fetch DB data **at request time**, not build time
  const [rows]: any = await db.query(
    'SELECT * FROM products WHERE product_id = ?',
    [productId]
  );

  if (!rows || rows.length === 0) return <div>Product not found</div>;

  return <Product_detailcard1 product={rows[0]} />;
}
