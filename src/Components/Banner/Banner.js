import React from 'react';
import banner from '../../assets/images/chair.png'


const Banner = () => {
    return (
   
      <div class="hero mt-10">
        <div class="hero-content flex-col md:flex-row-reverse">
          <div data-aos="fade-left" className='w-full md:w-1/2'>
            <img alt='' className=' w-full  rounded-lg shadow-xl ' src={banner} />
         </div >
          <div data-aos="fade-right" className='text-start lg:w-1/2'>
            <h1 class=" text-3xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-2 lg:py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <button class="btn btn-primary text-white font-semibold  bg-gradient-to-r from-secondary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;