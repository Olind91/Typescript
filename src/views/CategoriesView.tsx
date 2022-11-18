import React from 'react'
import Navbar from '../components/UniversalItems/Navbar';
import Header from '../Sections/Header';

const CategoriesView: React.FC = (_title, ProductModel) => {
  return (
    <>
    <Navbar />
    <Header {...ProductModel.title}/>
    
    </>
  )
}

export default CategoriesView