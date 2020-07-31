import React from 'react';

const Banner = props => {
    const { title, heading } = props;
    return (
        <div id="banner">
            <div className="title-wrapper">
                <p className="title">{title}</p>
            </div>
            <h1>{heading}</h1>
            <img src={require('../../assets/pasta-banner.jpg')} className="banner-img"/>
        </div>
    )
}

export default Banner;

