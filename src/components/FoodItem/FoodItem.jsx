import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../contexts/StoreContexts'

export const FoodItem = ({id, name, image, price, description, category }) => {
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)
    // console.log(typeof(id))
    // console.log(cartItem)
    // console.log(cartItem)
    /* first i use itemcount state to for add button button but we cannot store the cart-count so 
    we create a custom context with names cartitem and addtocart to store the data for previous use */
    // const [itemCount,setItemCount] = useState(0);
    return (
        <div className="food-item-container">
            <div className='food-item-img-container'>
                <img className = 'food-item-img'src={image}></img>
                {
                    !cartItem[id] ?<img  className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img> :
                    <div className="item-counter">
                        <img  onClick ={()=>removeFromCart(id)}src = {assets.remove_icon_red}></img>
                        <p>{cartItem[id]}</p>
                        <img onClick ={()=>addToCart(id)}src={assets.add_icon_white}></img>
                    </div>
                }
            </div>
            <div className="food-item-content">
                <div className='food-item-rating'> <h3>{name}</h3>
                    <img src={assets.rating_starts} />
                    </div>
                <p className='food-item-para'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}
