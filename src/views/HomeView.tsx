import React, { useEffect } from 'react';
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../Sections/Showcase';
import Support from '../Sections/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../Sections/FlashgridLeft';
import FlashgridRight from '../Sections/FlashgridRight';
import Featured from '../Sections/Featured';
import DoubleImg from '../Sections/DoubleImg';
import { ProductContextType, useProductContext } from '../contexts/ProductContext';





const HomeView: React.FC = () => {

  const {featured, flashSaleLeft, flashSaleRight, getFeatured, getFlashSaleRight, getFlashSaleLeft} = useProductContext() as ProductContextType
  
  useEffect (() => {
    getFeatured(8)
    
  },[])
  useEffect (() => {
    getFlashSaleRight(4)
    
  },[])
  useEffect (() => {
    getFlashSaleLeft(4)
    
  },[])

return (
    <>
    <div className="homepage">
    <Navbar />
     <Showcase />
     <Featured title="Featured Products" items={featured}/>  
     <DoubleImg />
     <FlashgridLeft items={flashSaleLeft}/>
     <FlashgridRight items={flashSaleRight}/>
     <Support />
     <Footer />
     </div>
    </>
  )
}

export default HomeView