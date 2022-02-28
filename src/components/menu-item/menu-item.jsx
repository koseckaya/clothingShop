import React from 'react';
import './menu-item.scss';


const MenuItem = ({ title, imageUrl, size}) => (
    <div className={`${size} menu-item`} >
        <div className='backgroundImage' style={{ backgroundImage: `url(${imageUrl})`}}></div> 
        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
)

export default MenuItem
