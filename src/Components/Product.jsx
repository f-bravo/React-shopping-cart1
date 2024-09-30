import React from 'react'

const Product = ({product}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.thumbnail} class="card-img-top h-75" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5 className="">${product.price}</h5>
          
          <button href="#" class="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product