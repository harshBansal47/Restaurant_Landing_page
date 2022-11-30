import React from 'react';
import './Header.css';
import {images} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding'>
  <div className = 'app__wrapper_info'>
  <SubHeading title = "chase the new flavour"/>
  <h1 className='app__header_h1'>The Key to fine dining</h1>
  <p className='p__opensans'style={{margin:"2rem 0rem"}}>Le restaurant propose de délicieuses options de restauration, avec une saveur italienne authentique. Les serveurs du restaurant sont sympathiques et respectueux. </p>
  <button type='button' className='custom__button'>Explore Menu</button>
  </div>
  <div className='app__wrapper_img'>
  <img src ={images.welcome} alt = "welcome image"/>
  </div>
  </div>
);
export default Header;