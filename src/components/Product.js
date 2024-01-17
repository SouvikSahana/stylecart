import React from 'react'
import "./Product.css"
// import { useStateValue } from './StateProvider'

const Product =React.memo( ({id,title,price,image}) => {
    // const [state, dispatch]=useStateValue()
    // const addToBasket=()=>{
    //     //dispatch item into the data layer
    //     dispatch({type:"ADD_TO_BASKET", item:{
    //         id, title, price, image
    //     }})
    // }
  return (
    <div className='product'>
        <img src={image} alt="product image" />
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
        </div>
        
        
        {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  )
}
)
export default Product