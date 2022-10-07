import React from 'react';
import Doctor from '../../assets/images/doctor-small.png'
import appointmentBg from '../../assets/images/appointment.png'
import Button from '../Sheard/Button';
const HomeAppointment = () => {
    return (
        <section data-aos="zoom-in-up" style={{background:`url(${appointmentBg})`}} className='mt-10 lg:mt-40 flex justify-evenly items-center lg:min-h-screen'>
            <div className='w-full min-h-full lg:w-1/2 hidden lg:block'>
                <img  className=''  src={Doctor} alt=""/>
            </div>
            <div  className='w-full lg:w-1/2 text-white lg:mr-10 text-left p-5 lg:pr-10'>
                <p className='text-secondary lg:mb-4'>Appointment</p>
                <h1 className='text-3xl lg:text-4xl mb-4'>Make an appointment Today</h1>
                <p className='mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Appointment</Button>
            </div>
        </section>
    );
};

export default HomeAppointment;