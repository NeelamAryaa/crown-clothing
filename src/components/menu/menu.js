import React from 'react';

import {withRouter} from 'react-router-dom';

import './menu.styles.scss'

const MenuItem = ({history, title, imageUrl, size}) => {
    console.log(title)
    return(
        <div className={`${size} menu-item`} >
            <div className="background-image" 
            style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="content" onClick = {() => history.push(`/shop/${title}`)}>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
} 

export default withRouter(MenuItem);


