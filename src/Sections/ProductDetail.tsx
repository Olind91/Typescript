import React from 'react'
import { ProductItem } from '../Models/ProductModel'

interface ProdDetail{
  item:ProductItem
}

const ProductDetail: React.FC<ProdDetail> = ({item}) => {




  return (
    <section className="detailFlex">
      <div className="container">
        <div className="detailGrid">
          <div className="gridBoxLarge">
            <img src ={item.imageName}></img>
          </div>
            <div className="smallBoxes">
              <div className="gridBoxSmall"><img src ={item.imageName}></img></div>
              <div className="gridBoxSmall"><img src ={item.imageName}></img></div>
              <div className="gridBoxSmall"><img src ={item.imageName}></img></div>
            </div>
        </div>
      
        <div className="detailsInfo">
          <div className="detailsRight">
            <div className="title">{item.name} - ${item.price}</div>
            <div className="description">{item.description} blablabla bla </div>
            
            <div className="size">
              <span className="spanTitle">Size:</span>
              <span className="sizes">S</span>
              <span className="sizes">M</span>
              <span className="sizes">L</span>
              <span className="sizes">XL</span>
            </div>
            
            <div className="color">
              <span className="spanTitle">Color:</span>
              <span className="optionDrop">Choose an option</span>
            </div>
            
            <div className="qty">
              <span className="spanTitle">Qty:</span>
                <span className="removeAdd">
                  <span className="remove">-</span>
                  <span className="number">1</span>
                  <span className="add">+</span>
                </span>
                <span><button className="theme-button">ADD TO CART</button></span>
            </div>

            
            <div className="share">
            <span className="spanTitle">Share:</span>
              <span className="shareLinks">
                  <a href="https://www.facebook.com/" target="blank"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://twitter.com/" target="blank"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://www.google.com/" target="blank"><i className="fa-brands fa-google"></i></a>
                  <a href="https://www.linkedin.com/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProductDetail
