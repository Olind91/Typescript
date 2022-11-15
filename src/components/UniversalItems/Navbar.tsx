import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar: React.FC = () => {
  return (
    
    <nav className="Navbar">
      <div className="container">
        <NavLink className="Fixxo" to="/" end>Fixxo.</NavLink>
        <div className="directory">
            <NavLink className="Navigation" to="/" end>Home</NavLink>
            <NavLink className="Navigation" to="/categories" end>Categories</NavLink>
            <NavLink className="Navigation" to="/products" >Products</NavLink>
            <NavLink className="Navigation" to="/contacts" end>Contacts</NavLink>
            
        </div>
        
        <div className="navlinks">
          <NavLink to="/search"><i className="fa-regular fa-magnifying-glass" ></i></NavLink>
          <NavLink to="/compare"><i className="fa-light fa-arrows-retweet" ></i></NavLink>
          
          <NavLink to="/wishlist"><i className="fa-light fa-heart" ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></NavLink>
          
          <NavLink to="/shoppingcart"><i className="fa-light fa-bag-shopping" ></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span></NavLink>
          

        </div>
        </div>
    </nav>
    
  )
}

export default Navbar