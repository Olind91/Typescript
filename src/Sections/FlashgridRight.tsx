import React from 'react'
import FlashSaleButton from '../components/UniversalItems/FlashSaleButton'
import ProductCard from '../components/UniversalItems/ProductCard'


const FlashgridRight: React.FC = ({items = []}:any) => {

  

  return (
    <section className="flash-grid">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g4">
              {
                items.map((product:any)=> <ProductCard key={product.articleNumber} item={product} />)
              }
            </div>
            
            <div className="flash-grid-box">
           
              <h1 className="flash-grid-title">2 FOR USD $29</h1>
              <FlashSaleButton/>
            </div>
        </div>
        
    </section>
  )
}

export default FlashgridRight