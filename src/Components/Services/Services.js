import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (

        <div className='mt-32'>
            <h4 className='text-xl text-primary uppercase font-bold mb-2'>Our Services</h4>
            <h2 className='text-2xl lg:text-5xl mb-4 lg:mb-8 mt-5 '>Services We Provide</h2>
            <hr className='w-1/3 mx-auto mb-6 lg:mb-16 shadow-2xl bg-secondary '/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;