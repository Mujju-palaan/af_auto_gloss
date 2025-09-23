import ProductDetailCard from '@/components/productdetail/Product_detailcard1';

interface PageProps {
  params: Promise<{ id: string }>; // <-- params is a promise
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params; // <-- await before accessing id

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: 'no-store', // always fetch fresh data
  });

  const product = await res.json();

  if (!product || product.message === 'Product not found') {
    return <div>Product not found</div>;
  }

  return <ProductDetailCard product={product} />;
}
