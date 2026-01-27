import ProductCardsOnly from "@/components/product/ProductCardsOnly";
import Content from "../components/home/Content";
import Home_HeroSection from "../components/home/Home_HeroSection";
import Status from "../components/home/Stats";
import Banner from "../components/home/Banner";

const Page = () => {
  return (
    <div className="text-white/80">
      <Banner />
      <h1 className="flex md:text-5xl text-xl font-semibold text-red-600 
      justify-center items-center text-center md:px-32 px-8 md:mt-20 mt-6">
        Why Professionals Choose AF Autogloss for Regular Car Washing ?
      </h1>
      <Home_HeroSection />
      <ProductCardsOnly />
      <Content />

      <Status />
    </div>
  );
};

export default Page;
