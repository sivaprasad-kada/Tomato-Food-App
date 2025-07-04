import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets.js'
import './login.css'
export const Login = ({ setLogin }) => {
    const [currState, setCurrState] = useState('Sign Up')
    return (
        /*      <div className='login-container'>
                 <div className='form-container'>
                    <div className="popup-title">
                     <h3 className="login-state">{currState}</h3>
                     <img src={assets.cross_icon} onClick={() => setLogin(false)}></img>
                 </div>  
                 <div className='popup-fields'>
                     <form className="login-form">
                         {currState === 'Sign Up' ? <input type='text' placeholder='Your name' required></input> : <></>}
                         <input type='email' placeholder='Your email' required></input>
                         <input type='password' placeholder='Password' required></input>
                     </form>
     
                 </div>
                 <div className='popup-condition'>
                     <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                     <input type='checkbox'></input >
                     <p>By continuing i agree terms and conditions</p>
                     {
                         currState === "Sign up" ? <p>Already have an account? <span onClick={() => setCurrState('Login')}>{currState === 'Sign Up' ? 'Login here' : 'Sign Up'}</span></p>
                             : <p onClick={() => setCurrState('Sign Up')}>Create a new account ?<span>Click here ?</span></p>
                     }
                 </div>
                 </div>
             </div> */
        <div className="login-container">
            <form className='login-popup-container'>
                <div className="popup-title">
                    <h3 className="login-state">{currState}</h3>
                    <img src={assets.cross_icon} onClick={() => setLogin(false)}></img>
                </div>
                <div className="popup-inputs">
                    {currState === 'Sign Up' ? <input type='text' placeholder='Your name' required></input> : <></>}
                    <input type='email' placeholder='Your email' required></input>
                    <input type='password' placeholder='Password' required></input>
                </div>
                <button className='login-button'>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className='popup-condition'>
                    <input type='checkbox' required></input >
                    <p>By continuing i agree terms and conditions</p>
                </div>
                    <div className='page-change'>{
                        currState === "Sign Up" ? <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                            : <p onClick={() => setCurrState('Sign Up')}>Create a new account ?<span>Click here ?</span></p>
                    }</div>
                    
            </form>
        </div>
    )
}
