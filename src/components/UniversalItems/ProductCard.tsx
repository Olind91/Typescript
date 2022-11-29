import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductItem } from '../../Models/ProductModel'



interface ProductCardType{
    item: ProductItem
}

const ProductCard: React.FC<ProductCardType> = ({item}) => {
    



  return (
    <div className="col">
        <div className="card">
            <div className="img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu">
                    <button><i className="fa-light fa-arrows-retweet"></i></button>
                    <button><i className="fa-light fa-heart"></i></button>
                    <button><i className="fa-light fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${item.articleNumber}`} end className="theme-button">
                    <span className="btn-theme-left"></span>
                    <span className="btn-theme-right"></span>
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-text">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-stars">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <p className="card-price">${item.price}</p>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard