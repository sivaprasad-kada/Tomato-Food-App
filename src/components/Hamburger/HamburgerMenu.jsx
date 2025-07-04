import { useState } from 'react';
import './Hamburger.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <div className={`ham-menu  ${open ? 'open' : '' }`}>
      <ul>

        <Link to={'/'}><li onClick={() => setOpen(false)}>Home</li></Link>
        <HashLink smooth to='#menu'><li onClick={() => setOpen(false)}>Menu</li></HashLink>
        <HashLink smooth
          to="#mobile-app"><li onClick={() => setOpen(false)}>Mobile-app</li></HashLink>
        <HashLink smooth
          to="#footer"><li onClick={() => setOpen(false)}>Contact-Us</li></HashLink>
      </ul>
    </div>
  )
}
