import React from 'react';
import { useForm } from "react-hook-form";
import bg from '../../assets/images/appointment.png'

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{background:`url(${bg})`}} className='lg:min-h-screen py-10 mt-5'>
            <h3 className='text-center font-semibold text-xl text-secondary'>Contact us</h3>
            <h1 className='text-center font-semibold text-3xl text-secondary'>Stay Connected With Us</h1>
            <form className='flex flex-col w-11/12 lg:w-1/3 mx-auto py-5 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-3 lg:rounded-md mb-2 bg-transparent border border-secondary text-white' {...register("Name")} placeholder="Name" />               
                <input className='p-3 lg:rounded-md mb-2 bg-transparent border border-secondary text-white' {...register("Email")} placeholder="Example@gmail.com" />               
                <input className='p-3 lg:rounded-md mb-2 bg-transparent border border-secondary text-white' {...register("Number")} placeholder="+880" />               
                <textarea className='p-3 lg:rounded-md mb-2 bg-transparent border border-secondary text-white' rows="4" cols="3" placeholder='Write Your Message'></textarea>  
                           
               <input className='text-white uppercase border p-3 btn-secondary btn rounded-none lg:rounded ' type='submit' value='Send Message'/>            </form>
        </div>
    );
};

export default Contact;