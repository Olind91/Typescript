import React from 'react'
import { NavLink } from 'react-router-dom'

const ShopNowButton: React.FC = () => {
  return (
    <NavLink className="theme-button" to="/categories" end>
                    <span className="btn-theme-left"></span>
                    SHOP NOW
                    <span className="btn-theme-right"></span>
                </NavLink>
  )
}

export default ShopNowButton