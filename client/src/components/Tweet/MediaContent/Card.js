import React from 'react';

const Card = ({src}) => {
    return (
        <div className='media-card'>
            <img src={src} alt="uploaded pic"/>
        </div>
    );
};

export default Card;