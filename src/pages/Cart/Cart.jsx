import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../contexts/StoreContexts'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {
    const navigate = useNavigate();
  const { cartItem, getTotalCartAmount, removeFromCart, food_list } = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItem[item._id]) {
              return (
                <>
                  <div className="cart-items-title cart-items-map" key={index}>
                    <img src={item.image} alt='food_image'></img>
                    <p>{item.name}</p>
                    <p>$  {item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${cartItem[item._id] * item.price}</p>
                    <p className='cart-remove' onClick={() => removeFromCart(item._id)}>X</p>
                  </div>
                  <hr />
                  {/* cart Total */}
                </>)
            }

          })
        }
      </div>
      {/* Cart Total */}
      <div className='cart-total'>
        <div className="total">
          <h2>Cart Totals</h2>
            <div className="subtotal">
              <p>subTotal </p>            
              <p>${getTotalCartAmount()}</p></div>
              <hr/>
            <div className="del-fee">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()?'$2':'$0'}</p>
            </div>
            <hr/>
            <div className='totals'>
            <p>Total</p>
            <p>${getTotalCartAmount()?getTotalCartAmount()+2:getTotalCartAmount()}</p></div>
            <button onClick={()=>navigate('/Orders')}>Proceed to CheckOut</button>
        </div>
        <div className="promocode">
          <p>if you have a promo code,Enter it here</p>
          <div className='promo-input'>
            <input type='text' placeholder='Promocode'></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
