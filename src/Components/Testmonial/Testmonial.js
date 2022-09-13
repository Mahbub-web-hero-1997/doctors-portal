import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testmonial = () => {
    return (
        <section className='px-6 mt-10 lg:mt-20'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-secondary text-left'>Testimonial</p>  
                    <h3 className='text-2xl lg:text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-16 lg:w-48' src={quote} alt=""/>
                </div>
            </div>
            <div>
                <div>
                    <img alt='' class="mask mask-heart" src="https://placeimg.com/160/160/arch" />
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Testmonial;