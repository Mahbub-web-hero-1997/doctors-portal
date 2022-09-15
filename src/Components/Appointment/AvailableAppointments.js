import React, { useEffect, useState } from 'react';
import Button from '../Sheard/Button';


const AvailableAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                appointments.map(appointment => <>
                    <div class="card w-11/12 bg-base-100 shadow-xl mx-auto">
                        <div class="card-body">
                            <h2 class="text-xl text-center font-semibold">{ appointment.name}</h2>
                            <p>{appointment.time}</p>
                            <p>{appointment.space}</p>
                            <div class="card-actions justify-center">
                               <Button>Book Appointment</Button>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default AvailableAppointments;