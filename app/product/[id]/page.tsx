// app/product/[id]/page.tsx
import ProductDetailCard from '@/components/productdetail/Product_detailcard1';

interface PageProps {
  params: Promise<{ id: string }>; // <-- params is a Promise now
}

export const dynamic = "force-dynamic"; // ensures fetch happens at runtime

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params; // <-- await before using
  const productId = Number(id);

  // Fetch product from API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${productId}`, {
    cache: 'no-store', // ensures fresh data
  });

  const product = await res.json();

  if (!product || product?.message === 'Product not found') {
    return <div>Product not found</div>;
  }

  return <ProductDetailCard product={product} />;
}
