import ProductCardsOnly from "@/components/product/ProductCardsOnly";
import Content from "../components/home/Content";
import Home_HeroSection from "../components/home/Home_HeroSection";
import Status from "../components/home/Stats";
import Banner from "../components/home/Banner";
import ServiceMenu from "../components/(service)/service/ServiceMenu";
import Heading_desc from "@/components/Heading_desc";
import TeamData from "@/data/TeamData";
import TeamCard from "./(main)/about/TeamCard";

const Page = () => {
  return (
    <div className="text-white/80">
      <Banner />
      <Heading_desc
        title={`Why Professionals Choose AF Autogloss for Regular Car Washing ?`}
        description={``}
      />
      <Home_HeroSection />
      <ProductCardsOnly />
      <Status />
      <ServiceMenu />
      <Content />

      {/* -------- founnder team page here -------- */}
      <div className="min-h-screen flex flex-col gap-8">
        <Heading_desc
          title={`Meet Our Founder`}
          description={`Driven by a passion for automotive excellence, our founder leads the brand with innovation, quality, and a commitment to delivering superior car care solutions.`}
        />
        <div className="flex flex-wrap gap-8 justify-center md:p-8 ">
          {TeamData.slice(0, 3).map((e) => (
            <TeamCard
              key={e.id}
              avatar={e.avatar}
              name={e.name}
              title={e.title}
              instagram={e.instagram}
              linkedin={e.linkedin}
              phone={e.phone}
              whatsapp={e.whatsapp}
              mail={e.mail}
            />
          ))}
        </div>
        <div className="md:pb-10"></div>
      </div>
    </div>
  );
};

export default Page;
