import React from 'react';

const TestimonialData = ({ testimonial }) => {
    const { id, name, country, message, img } = testimonial;
    return (
        <section data-aos="flip-left" className='px-6 mt-3 lg:mt-10 shadow-2xl'>
        <div className='text-left mt-3'>
            <p>{ message}</p>
                </div>
            <div className='flex mt-3 py-6 items-center'>
                <div>
                    <img alt='' class="mask mask-heart" src={img} />
                </div>
                <div className='ml-3 text-left'>
                    <h4 className='text-xl font-semibold'>{ name}</h4>
                    <p>{ country}</p>
                </div>
                 </div>
        </section>
    );
};

export default TestimonialData;