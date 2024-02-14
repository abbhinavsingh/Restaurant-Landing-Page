import React from 'react';

import { images,data } from '../../constants';
import { SubHeading } from '../../components';

import './Laurels.css';


const AwardCard = ({award : {imgUrl, title, subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="Award" />
    <div className="app__laurel_awards-card_content">
      <p className="p__cormorant">{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)


const Laurels = () =>(
  <div className='app__wrapper app__bg section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards and Recognitions" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award)=> <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>

    
  </div>
);

export default Laurels;
