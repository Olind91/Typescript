import React from 'react'
import Footer from '../components/UniversalItems/Footer'
import Navbar from '../components/UniversalItems/Navbar'
import ProductDetail from '../Sections/ProductDetail'



const ProductDetailsView: React.FC = () => {

  

  return (
    <>
    <Navbar />
    <ProductDetail />
    <Footer />
    </>
    
  )
}

export default ProductDetailsView