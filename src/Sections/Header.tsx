import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = ({title}) => {
  return (
    <header className="contacts">
        <div className="container">
           <NavLink className="clink" to="/"><i className="fa-sharp fa-solid fa-house"></i></NavLink><span>{title}</span>
        </div>
    </header>
  )
}

export default Header