import React from 'react'
import ProductCard from '../components/UniversalItems/ProductCard';




const Featured: React.FC = ({title, items = []}:any) => {

 

  return (
    <section className="featured">
      <div className="container">
        <h5 className="f-title">{title}</h5>
          <div className="row row-cols-1 row-cols-md-4 g4">
            {
              items.map((product:any) => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
      </div>
    </section>
  )
}

export default Featured