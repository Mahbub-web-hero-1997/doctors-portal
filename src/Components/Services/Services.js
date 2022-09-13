import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Treatment from '../../assets/images/treatment.png'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    return (

        <div className='mt-10 lg:mt-32'>
            <h4 className='text-xl text-primary uppercase font-semibold lg:mb-2'>Our Services</h4>
            <h2 className='text-2xl lg:text-5xl mb-4 lg:mb-8 lg:mt-5 '>Services We Provide</h2>
            <hr className='w-1/3 mx-auto mb-6 lg:mb-16 shadow-2xl bg-secondary '/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>           
            <div class="hero min-h-screen w-11/12 mx-auto">
                <div class="hero-content flex-col lg:flex-row">
                    <img alt='' src={Treatment} class=" w-full lg:max-w-md rounded-lg shadow-2xl" />
                    <div className='w-full lg:w-1/2 text-left lg:ml-20' >
                        <h1 class=" text-3xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>     
        </div>
    
    );
};

export default Services;