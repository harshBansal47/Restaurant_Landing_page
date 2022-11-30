import React from 'react';
import './Chef.css';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
const Chef = () => (
  <div className='app__wrapper app__bg section__padding'>
  <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src = {images.chef}/>
  </div>
  <div className='app__wrapper_info'>
    <SubHeading title = "Chef's word"/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
        <img src = {images.quote} alt = '"'/>
        <p className='p__opensans'>L'expérience et la qualité des repas sont à la portée de tous</p>
      </div>
      <p className='p__opensans'> Dans les restaurants, qu'ils soient à service rapide, gastronomiques ou quelque part entre les deux. Nous comprenons à quoi ressemble votre expérience culinaire et travaillons dessus pour la rendre la meilleure possible.</p>
       <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src = {images.sign}/>  
    </div>
    </div>
  </div>
  </div>
);
export default Chef;