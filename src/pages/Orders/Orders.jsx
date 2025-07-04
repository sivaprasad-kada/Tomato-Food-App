import { useContext } from 'react'
import './Orders.css'
import { StoreContext } from '../../contexts/StoreContexts'
export const Orders = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='order-form'>
      <div className="form-left">
        <h2>Delivery Information</h2>
        <div className="multi-fields">
          <input type='text' placeholder='Firstname'></input>
          <input type="text" placeholder='Lastname' />
        </div>
        <input type='text' placeholder='Your e-mail'></input>
        <input type="text" placeholder='Your Street' />
         <div className="multi-fields">
          <input type='text' placeholder='City'></input>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type='text' placeholder='ZipCode'></input>
          <input type="text" placeholder='Country' />
        </div>
        <input type='phone' placeholder='phone'></input>
      </div>
      <div className="form-right">
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
            <button >Proceed to Payment</button>
        </div>
      </div>
      </div>
    </form>
  )
}
