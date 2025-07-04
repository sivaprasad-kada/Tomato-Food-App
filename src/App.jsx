// import React from 'react'
// export by using rfc
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }
import { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { Orders } from './pages/Orders/Orders'
import { Login } from './components/LoginPopUP/Login'
import { Footer } from './components/Footer/Footer'
// export my using rafc
export const App = () => {
  const [login,setLogin] = useState(false);
  return (
    <div>
     { login ?<Login setLogin = {setLogin}/> :<></>
      }
      <Navbar setLogin = {setLogin} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

