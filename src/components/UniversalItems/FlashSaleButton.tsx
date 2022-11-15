import React from 'react'
import { NavLink } from 'react-router-dom'

const FlashSaleButton: React.FC = () => {
  return (
    <NavLink className="theme-button" to="/products" end>
        <span className="btn-theme-left"></span>
        <span className="btn-theme-right"></span>
        FLASH SALE
    </NavLink>
  )
}

export default FlashSaleButton