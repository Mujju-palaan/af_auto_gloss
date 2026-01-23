import ProductCardsOnly from '@/components/product/ProductCardsOnly';
import Content from '../components/home/Content';
import Home_HeroSection from '../components/home/Home_HeroSection'
import Status from '../components/home/Stats'

const  Page = ()  => {
  return (
    <div>
      <Home_HeroSection />
      <Content />
      <ProductCardsOnly />
      <Status />
      
    </div>
  );
}

export default Page