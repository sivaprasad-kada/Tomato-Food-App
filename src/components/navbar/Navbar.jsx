import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.css'
import { assets } from '../../assets/frontend_assets/assets.js'
import { useState } from 'react';
import Hamburger from 'hamburger-react'; // it is a prebuild component we cannot style it directly to style it wrap with div or button tag
import { HamburgerMenu } from '../Hamburger/HamburgerMenu.jsx';
export const Navbar = ({setLogin}) => {
  const [activemenu, setActivemenu] = useState('home');
  const [open,setOpen] = useState(false);
  return (
    <div className='navbar'>
      <Link to={'/'}>
      <img src={assets.logo} alt='logo' className='logo'></img></Link>
      <div className='navelements'>
        <Link to={'/'} onClick={() => setActivemenu('home')} className={activemenu === 'home' ? "active" : ''}>Home</Link>
        < HashLink smooth to='#menu' onClick={() => setActivemenu('menu')} className={activemenu === 'menu' ? "active" : ''}>menu</HashLink>
        <HashLink
          smooth
          to="#mobile-app"
          onClick={() => setActivemenu('mobile-app')}
          className={activemenu === 'mobile-app' ? "active" : ''}
        >
          mobile-app
        </HashLink>
        <HashLink
          smooth
          to="#footer"
          onClick={() => setActivemenu('contact')}
          className={activemenu === 'contact' ? "active" : ''}
        >
          contact Us
        </HashLink>      
        </div>
      <div className='nav-left'>      
      <img src={assets.search_icon} alt="" className="search-icon" />
      <Link to={'/Cart'}>
      <img src={assets.bag_icon} alt="" className="cart" /></Link>
      <button className='sigin' onClick={()=>setLogin(true)}>Sign in</button></div>
      <div className='hamburger-menu'><Hamburger toggled={open} toggle={setOpen} /></div>
      {
        open?<HamburgerMenu open = {open} setOpen={setOpen}/>:<></>
      }
    </div>
  )
}
