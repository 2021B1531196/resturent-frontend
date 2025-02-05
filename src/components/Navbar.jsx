import React, { useState } from 'react'
import "./Navbar.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import gericht from '../assets/gericht.png';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState(false);


  return (
    <nav className='app__navbar '>
        <div className='app__navbar_logo'>
            <img src={gericht} alt="app logo" />
        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#menu'>Menu</a></li>
            <li className='p__opensans'><a href='#reviews'>Reviews</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        <div className='app__navbar_login'>
          <a href='#login' className='p_opensans'> <Link to="/login"> Log In / Register</Link> </a>
          <div/>
          <a  href='/' className='p__opensans'><Link to="/booktable">Book Table</Link></a>
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
            <li className='p__opensans'><a href='#reviews'>Reviews</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
         )}

        </div>

    </nav>
  )
}
