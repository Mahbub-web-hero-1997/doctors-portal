import React from 'react';

const Service = ({ service }) => {
    const { id, name, detail, img } = service;
    return (
        <div data-aos="flip-left"  class="card  mx-auto bg-base-100 shadow-xl">
            <figure class="pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{detail}</p>               
            </div>
        </div>
    );
};

export default Service;