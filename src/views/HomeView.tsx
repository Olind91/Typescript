import React, { useContext } from 'react';
import Navbar from '../components/UniversalItems/Navbar';
import Showcase from '../Sections/Showcase';
import Support from '../Sections/Support';
import Footer from '../components/UniversalItems/Footer';
import FlashgridLeft from '../Sections/FlashgridLeft';
import FlashgridRight from '../Sections/FlashgridRight';
import Featured from '../Sections/Featured';
import DoubleImg from '../Sections/DoubleImg';
import { FeaturedProductsContext, GridProductsContext } from '../contexts/context';




const HomeView = (_title:any, ProductModel:any) => {

  const products = useContext(FeaturedProductsContext)
  const gridProducts = useContext(GridProductsContext)

return (
    <>
    <div className="homepage">
    <Navbar />
     <Showcase />
     <Featured {...ProductModel.title} items={products}/>
     <DoubleImg />
     <FlashgridLeft {...ProductModel.title} items={gridProducts}/>
     <FlashgridRight {...ProductModel.title} items={gridProducts}/>
     <Support />
     <Footer />
     </div>
    </>
  )
}

export default HomeView