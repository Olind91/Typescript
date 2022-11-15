import React from 'react'


const ProductDetail: React.FC = ({}) => {


// Inte hunnit klart med detta

  return (
    <section className="detailFlex">
      <div className="container">
        <div className="detailGrid">
          <div className="gridBoxLarge"></div>
            <div className="smallBoxes">
              <div className="gridBoxSmall">Röd</div>
              <div className="gridBoxSmall">Blå</div>
              <div className="gridBoxSmall">Grön</div>
            </div>
        </div>
      
        <div className="detailsInfo">
          <div className="detailsRight">
            <div className="title">Title m.m här</div>
            <div className="description">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably.
             Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly</div>
            
            <div className="size">
              <span className="spanTitle">Size:</span>
              <span className="sizes">S</span>
              <span className="sizes">M</span>
              <span className="sizes">L</span>
              <span className="sizes">X</span>
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
