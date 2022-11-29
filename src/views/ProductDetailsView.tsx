import React, { useEffect } from 'react'
import Footer from '../components/UniversalItems/Footer'
import Navbar from '../components/UniversalItems/Navbar'
import ProductDetail from '../Sections/ProductDetail'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext';


const ProductDetailsView: React.FC = () => {

  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.get(id)
  }, [])

  return (
    <>
    <Navbar />
    <ProductDetail item={productContext.product} />
    <Footer />
    </>
    
  )
}

export default ProductDetailsView