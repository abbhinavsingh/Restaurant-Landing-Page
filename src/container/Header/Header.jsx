import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nisi sed ipsa quia quam nobis esse exercitationem, vero, ut molestiae accusamus reiciendis possimus. Consectetur ea, quibusdam atque unde a at?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome}/>
    </div>
  </div>
);

export default Header;
