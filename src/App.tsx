import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsContext, FeaturedProductsContext, GridProductsContext } from './contexts/context';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import Shoppingcart from './views/ShoppingCartView';
import ProductDetailsView from './views/ProductDetailsView';







const App: React.FC = () => {
  
    const [products, setProducts] = useState([] as string[]);
    const [featured, setFeatured] = useState([] as string[]);
    const [gridProducts, setGridProducts] = useState([] as string []);
  
    useEffect(() => {
      const fetchAllData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
        setProducts(await result.json())
      }
      fetchAllData()
  
      
      const fetchFeaturedData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setFeatured(await result.json())
      }
      fetchFeaturedData()

      const fetchGridData = async () => {
        const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
        setGridProducts(await result.json())
      }
      fetchGridData()
    
  
    }, [setProducts, setFeatured, setGridProducts])
  
    
    
  
  return (
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
        <FeaturedProductsContext.Provider value={featured}>
        <GridProductsContext.Provider value={gridProducts}>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:articleNumber" element={<ProductDetailsView />} />
          
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishlistView />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        </GridProductsContext.Provider>
        </FeaturedProductsContext.Provider>
      </ProductsContext.Provider>
     </BrowserRouter>
     
     
     
     
     
    
  );
}

export default App;
