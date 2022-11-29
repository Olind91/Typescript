import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import Shoppingcart from './views/ShoppingCartView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import ProductProvider from './contexts/ProductContext';







const App: React.FC = () => {
    
   
        
  
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView/>} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishlistView />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
     
     
     
     
     
    
  );
}

export default App;
