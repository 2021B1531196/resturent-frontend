import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import gericht from '../assets/gericht.png';


export const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false);


  return (
    <nav className='app__navbar'>
        <div className='app__navbar_logo'>
            <img src={gericht} alt="app logo" />
        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#awards'>Awards</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='app__navbar_login'>
          <a href='#login' className='p_opensans'>Log In / Register</a>
          <div/>
          <a  href='/' className='p__opensans'>Book Table</a>
        </div>



        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}></GiHamburgerMenu>
         
         
         
         {toggleMenu &&(
         
         <div className="app__navbar-smallscreen_overlay">
          <MdOutlineRestaurantMenu fontSize={27}className='overlay__close' onClick={()=>setToggleMenu(false)}/>

         
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#awards'>Awards</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
         )}

        </div>

    </nav>
  )
}
