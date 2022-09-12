import React from 'react';

const InfoCart = ({ img, cartTitle, cartInfo, bgClass }) => {
    return (
        <div class={`card lg:card-side shadow-xl py-5 ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body  text-white text-left">
                <h2 class="card-title ">{cartTitle}</h2>
                <p>{cartInfo}</p>                
            </div>
        </div>
    );
};

export default InfoCart;