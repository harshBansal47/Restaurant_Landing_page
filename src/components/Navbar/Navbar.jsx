import React,{useState} from 'react';
import './Navbar.css';
//importing icons
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
//importing logo image
import images from '../../constants/images'

const Navbar =()=>{
  const [toggle,setToggle] = useState(false);
  return(
    <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.logo} alt = "app_logo"/>
    </div>
    <ul className='app_navbar-links'>
    <li className='p__opensans'><a href='#home'>Home</a></li>
    <li className='p__opensans'><a href='#about'>About</a></li>
    <li className='p__opensans'><a href='#menu'>Menu</a></li>
    <li className='p__opensans'><a href='#award'>Award</a></li>
    <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className = "app_navbar-login">
      <a href = "#login" className='p__opensans'>Log In / Register</a>
      <div></div>
      <a href='/' className='p__opensans'>Book a table</a>
    </div>
    <div className='app_navbar-smallscreen'>
      <GiHamburgerMenu color = '#fff' fontSize={27} onClick ={()=>setToggle(true)}/>
      {toggle && (<div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
      <MdOutlineRestaurantMenu fontSize={35} className='overlay__close' onClick={()=>setToggle(false)}/>
      <ul className='app_navbar-smallscreen-links'>
       <li className='p__opensans'><a href='#home'>Home</a></li>
       <li className='p__opensans'><a href='#about'>About</a></li>
       <li className='p__opensans'><a href='#menu'>Menu</a></li>
       <li className='p__opensans'><a href='#award'>Award</a></li>
       <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      </div>)}
    </div>
    </nav>
  )
}
export default Navbar;