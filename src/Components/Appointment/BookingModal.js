import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';

const BookingModal = ({ treatment, selectedDay,setTreatment }) => {
    const { name, slots } = treatment;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        setTreatment(null)
    };
   
    return (
        <div>
            <input type="checkbox" id="booking_Modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking_Modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-xl font-semibold mb-2'>{ name}</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                        <input readOnly value={ format(selectedDay, 'PP') } {...register("date")} className=' border border-secondary rounded-sm p-2'/>                       
                        <select class=" border border-secondary rounded-sm p-2">
                            {slots.map(slot => <option>                       
                            <option value={slot}>{slot}</option>                           
                            </option>)}
                           
                        </select>
                        <input placeholder='Name' {...register("name")} className=' border border-secondary rounded-sm p-2'/>                        
                        <input placeholder='+880 ' {...register("phone")} className=' border border-secondary rounded-sm p-2'/>
                        <input placeholder='Address' {...register("address")} className=' border border-secondary rounded-sm p-2'/>                        
                    <button className='w-full btn btn-secondary text-white uppercase font-semibold'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;