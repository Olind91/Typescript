import React from 'react'
import ImgL from '../assets/Images/img-3.svg'
import ImgR from '../assets/Images/img-4.svg'
import FlashSaleButton from '../components/UniversalItems/FlashSaleButton'
import ShopNowButton from '../components/UniversalItems/ShopNowButton'

const DoubleImg: React.FC = () => {
  return (
    <section className="Double-image">
        <div className="container">
            <div className="Images">
                <div className="DoubleLeft">
                     <img src={ImgL} alt="something"></img>
                    <div className="DoubleText">
                        <h1>Pamela Reif's Top Picks</h1>
                        <ShopNowButton/>
                    </div>
                
                
                
                </div>
                <div className="DoubleRight">
                    <img src={ImgR} alt="something else"></img>
                    <h1>Let's Be Conscious</h1>
                    <FlashSaleButton/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DoubleImg