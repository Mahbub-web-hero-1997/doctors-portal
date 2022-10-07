import React from 'react';


const Service = ({ appointment, setTreatment }) => {
    const { id, name, slots}=appointment;
    return (
        <div data-aos="zoom-in-up" >
            <div class="card w-11/12 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="text-xl text-center font-semibold">{name}</h2>
                    <p>{
                        slots.length ? slots[0] : <span className='text-red-500'>Try another date.</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                    <div class="card-actions justify-center">                     
                        
                        <label
                            disabled={slots.length === 0}
                            className='btn btn-secondary text-white'
                            for="booking_Modal"
                            onClick={() => setTreatment(appointment)}                           
                        >Book Now</label>                  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;