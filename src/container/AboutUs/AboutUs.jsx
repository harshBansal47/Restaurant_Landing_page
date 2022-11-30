import React from 'react';
import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className = "app__aboutus-overlay flex__center">
      <img src = {images.E}/>
    </div>
    <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About Us</h1>
    <img src = {images.spoon} className='spoon__img spoon__imgr'/>
    <p className='p__opensans'>Ouvert tous les jours pour le déjeuner et le dîner, Express propose un choix de choses naturellement disposées .</p>
    <button type='button' className='custom__button'>Know More</button>
    </div>
    <div className='app__aboutus-content_knife flex__center'>
      <img src ={images.knife}/>
    </div>
    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our History</h1>
    <img src = {images.spoon} className='spoon__img'/>
    <p className='p__opensans'>Ouvert tous les jours pour le déjeuner et le dîner, Express propose un choix de choses naturellement disposées .</p>
    <button type='button' className='custom__button'>Know More</button>
    </div>
    </div>
  </div>
);
export default AboutUs;