import React from 'react'
import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import ShopNowButton from '../components/UniversalItems/ShopNowButton'

const Showcase: React.FC = () => {
  return (
    <section className ="Showcase">
        <div className="container">
             <img src={img1} className="img-left"></img> 
            
            <div className="showcase-text">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free home delivery over $100</p>
                <ShopNowButton/>
            </div>
            
            <img src={img2} className="img-right"></img>
            
        </div>
    </section>
  )
}

export default Showcase