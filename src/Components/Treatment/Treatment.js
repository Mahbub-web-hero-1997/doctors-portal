import React from 'react';
import Button from '../Sheard/Button';

const Treatment = ({ treatment }) => {
    const {id, name, time, space} = treatment;
    return (
        <div class="card w-full lg:w-96 bg-base-100 shadow-xl mx-auto ">
            <div class="card-body">
                <h2 class="text-xl font-bold text-center">{name}</h2>
                <p>{time}</p>
                <p>{space}</p>
                <div class="card-actions justify-center">
                    <Button>Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;