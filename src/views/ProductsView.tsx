import React, { useEffect } from 'react'
import Featured from '../Sections/Featured';
import Navbar from '../components/UniversalItems/Navbar';
import { ProductContextType, useProductContext } from '../contexts/ProductContext';
import Header from '../Sections/Header';




const ProductsView: React.FC = () => {

  const {all, getAll} = useProductContext() as ProductContextType
  useEffect (() => {
    getAll()
  },[])

  return (
    <>
    <Navbar />
    <Header title="All Products"/>
    <Featured title="All Products" items={all}/>
    </>
  )
}

export default ProductsView