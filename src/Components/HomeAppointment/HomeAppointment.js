import React from 'react';
import Doctor from '../../assets/images/doctor-small.png'
import appointmentBg from '../../assets/images/appointment.png'
const HomeAppointment = () => {
    return (
        <section style={{background:`url(${appointmentBg})`}} className='lg:mt-40 flex justify-evenly items-center lg:min-h-screen'>
            <div className='w-full lg:w-1/2 hidden lg:block'>
                <img className='mt-[-200px]'  src={Doctor} alt=""/>
            </div>
            <div className='w-full lg:w-1/2 text-white lg:mr-10 text-left p-5 lg:pr-10'>
                <p className='text-secondary lg:mb-4'>Appointment</p>
                <h1 className='text-3xl lg:text-4xl mb-4'>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </section>
    );
};

export default HomeAppointment;