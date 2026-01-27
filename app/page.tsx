import ProductCardsOnly from "@/components/product/ProductCardsOnly";
import Content from "../components/home/Content";
import Home_HeroSection from "../components/home/Home_HeroSection";
import Status from "../components/home/Stats";
import Banner from "../components/home/Banner";
import ServiceMenu from "../components/(service)/service/ServiceMenu";
import Heading_desc from "@/components/Heading_desc";

const Page = () => {
  return (
    <div className="text-white/80">
      <Banner />

      <ServiceMenu />

      <Heading_desc
        title={`Why Professionals Choose AF Autogloss for Regular Car Washing ?`}
        description={``}
      />
      <Home_HeroSection />

      <ProductCardsOnly />
      
      <Content />

      <Status />
    </div>
  );
};

export default Page;
