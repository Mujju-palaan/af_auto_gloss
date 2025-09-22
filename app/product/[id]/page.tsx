import Product_detailcard1 from "../../../components/productdetail/Product_detailcard1";
import { ProductData } from "@/data/ProductData";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.id);
  const product = ProductData.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-8 text-center text-2xl font-bold">Product Not Found</div>;
  }

  return <Product_detailcard1 product={product} />;
}
