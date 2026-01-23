import ProductCardsOnly from '@/components/product/ProductCardsOnly';
import Content from '../components/home/Content';
import Home_HeroSection from '../components/home/Home_HeroSection'

const  Page = ()  => {
  return (
    <div>
      <Home_HeroSection />
      <Content />
      <ProductCardsOnly />
      
    </div>
  );
}

export default Page