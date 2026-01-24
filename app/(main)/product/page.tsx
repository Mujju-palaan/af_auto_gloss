import { Suspense } from "react";
import ProductCardsOnly from "../../../components/product/ProductCardsOnly";
import Productdetailpage from "../../../components/product/Productdetailpage";

const page = () => {
  const ProductDetailSkeleton = () => (
    <div className="animate-pulse p-10 text-white">
      Loading product details…
    </div>
  );
  return (
    <div>
      <ProductCardsOnly />
      <Suspense fallback={<ProductDetailSkeleton />}>
        <Productdetailpage />
      </Suspense>
    </div>
  );
};

export default page;
