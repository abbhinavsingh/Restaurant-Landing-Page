import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className=' app__wrapper app__bg section__padding'>
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title={"chef's word"} />
      <h1 className="headtext__cormorant">What We Belive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quis. </p>
        </div>
        <p className="p__opensans">Qui officiis totam consectetur, delectus, veniam eligendi voluptates saepe dolore ea distinctio nam libero amet ut quae fuga necessitatibus minus!</p>
      </div>
      
      <div className="app__chef-sign">
        <p>Kevin lou </p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
  </div>
);

export default Chef;
