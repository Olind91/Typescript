import React from 'react'
import { NavLink } from 'react-router-dom'


const Header: React.FC = (_title, ProductModel) => {
  return (
    <header className="contacts">
        <div className="container">
           <NavLink className="clink" to="/"><i className="fa-sharp fa-solid fa-house"></i></NavLink><span>{ProductModel.title}</span>
        </div>
    </header>
  )
}

export default Header