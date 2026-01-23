import ProductCardsOnly from '@/components/product/ProductCardsOnly';
import Content from '../components/home/Content';
import Home_HeroSection from '../components/home/Home_HeroSection'
import Status from '../components/home/Stats'
import Banner from '../components/home/Banner'

const  Page = ()  => {
  return (
    <div className='text-white/80'>
      <Banner />
      <Home_HeroSection />
      <ProductCardsOnly />
      <Content />
      
      <Status />
      
    </div>
  );
}

export default Page