import React from 'react';

const Card = ({src}) => {
    return (
        <div className='media-card'>
            <img src={src}/>
        </div>
    );
};

export default Card;