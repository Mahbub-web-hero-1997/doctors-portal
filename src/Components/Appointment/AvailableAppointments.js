import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointments = ({ selectedDay, setSelectedDay } ) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);
   
    useEffect(() => {
        fetch('appointment.json')
            .then(res => res.json())
        .then(data=>setAppointments(data))
    },[])
    return (
        <>
            <h1 className='text-2xl font-semibold'>You selected {format(selectedDay, 'PP')}.</h1>
            <hr className='w-11/12 lg:w-1/4 mx-auto mt-2'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment => <Service
                        key={appointment.id}
                        appointment={appointment}
                        setTreatment={setTreatment}                       
                    ></Service>)
                }  
                {treatment && <BookingModal treatment={treatment} selectedDay={selectedDay}></BookingModal>}
            </div>
        </>
    );
};

export default AvailableAppointments;