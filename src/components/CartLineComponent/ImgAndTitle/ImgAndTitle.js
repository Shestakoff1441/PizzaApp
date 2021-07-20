import React from 'react';

import './ImgAndTitle.css';

const ImgAndTitle = props => (
    <div className='imgAndTitle__container'>
        <img className='imgAndTitle__image' src={props.image} alt='' />
        <div className='imgAndTitle__titleBlock'>
            <div className='imgAndTitle__title'>
                {props.title}
            </div>
            <div className='imgAndTitle__subTitle'>
                {props.type} тесто, {props.size} см.
            </div>
        </div>
    </div>
);

export default ImgAndTitle;