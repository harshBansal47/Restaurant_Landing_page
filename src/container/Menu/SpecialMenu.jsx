import React from 'react';
import './SpecialMenu.css';
import {images,data} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading'
import MenuItem from '../../components/Menuitem/MenuItem'
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id = "menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu That Fits You Palette"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine & Bear</p>
        <div className = "app__specialMenu_menu_items">
        {data.wines.map((wine,index)=>(<MenuItem title={wine.title} price={wine.price} tags={wine.tags} key = {wine.title+index}/>))}
        </div>
      </div>
      <div className='app__specialMenu_menu_img'>
      <img src = {images.menu} />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className = "app__specialMenu_menu_items">
        {data.cocktails.map((cocktail,index)=>(<MenuItem title={cocktail.title} price={cocktail.price} tags={cocktail.tags} key = {cocktail.title+index}/>))}
        </div>
      </div>
    </div>
    <div style = {{marginTop:"15px"}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);
export default SpecialMenu;