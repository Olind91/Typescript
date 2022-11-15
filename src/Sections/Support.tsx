import React from 'react'
import i1 from '../assets/Images/customer-service.svg'
import i2 from '../assets/Images/credit-card.svg'
import i3 from '../assets/Images/delivery-truck.svg'



const Support: React.FC = () => {
  return (
    <section className="Support">
        <div className="container">
            <div className="support-b">
                <div>
                    <div className="support-image">
                    <img src={i1} alt="CS"></img>
                    </div>
                    <h5>Customer Support</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i2} alt="CC"></img>
                    </div>
                    <h5>Secured Payment</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i3} alt="DT"></img>
                    </div>
                    <h5>Free Home Delivery</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
                <div>
                    <div className="support-image">
                    <img src={i3} alt="DT"></img>
                    </div>
                    <h5>30 Day Reuters</h5>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Support