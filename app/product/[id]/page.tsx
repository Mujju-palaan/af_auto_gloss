import ProductDetailCard from "@/components/productdetail/Product_detailcard1";

interface PageProps {
  params: Promise<{ id: string }>; // params is a Promise
}

export const dynamic = "force-dynamic"; // ensures runtime fetch

export default async function ProductPage({ params }: PageProps) {
  try {
    const { id } = await params;
    const productId = Number(id);

    if (isNaN(productId)) {
      return <div>Invalid product ID</div>;
    }

    // Use absolute URL from environment
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/products/${productId}`, {
      cache: "no-store", // ensures fresh data
    });

    const product = await res.json();

    if (!product || product?.message === "Product not found") {
      return <div>Product not found</div>;
    }

    return <ProductDetailCard product={product} />;
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return <div>Failed to load product</div>;
  }
}
