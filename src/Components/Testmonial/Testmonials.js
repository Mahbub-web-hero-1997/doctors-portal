import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg'
import TestimonialData from '../TestimonialData/TestimonialData';

const Testmonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
        
    },[])
   
    return (
        <div className='px-6 mt-10 lg:mt-20'>
            <div className='flex justify-between mb-4'>
                <div>
                    <p className='text-secondary text-left'>Testimonial</p>
                    <h3 className='text-2xl lg:text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-16 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {testimonials.map(testimonial => <TestimonialData
                    key={testimonial.id}
                    testimonial={testimonial}
                >            
                </TestimonialData>)}
            </div>
       </div>
    );
};

export default Testmonial;