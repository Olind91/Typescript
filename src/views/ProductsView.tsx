import React, { useContext } from 'react'
import Featured from '../Sections/Featured';
import Navbar from '../components/UniversalItems/Navbar';
import { ProductsContext } from '../contexts/context';
import Header from '../Sections/Header';

const ProductsView: React.FC = (_title, ProductModel) => {

  const products = useContext(ProductsContext)





  return (
    <>
    <Navbar />
    <Header {...ProductModel.title}/>
    <Featured {...ProductModel.title} items={products}/>
    </>
  )
}

export default ProductsView