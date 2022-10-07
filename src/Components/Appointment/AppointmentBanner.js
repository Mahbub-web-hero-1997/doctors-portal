import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import img from '../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDay, setSelectedDay }) => {
    
    const footer = selectedDay ? (
        <p> {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse w-full">
                <div data-aos='fade-left' className='w-full lg:w-1/2'>
                    <img alt='' src={img} class="rounded-lg shadow-2xl w-full image-fluid" />
                </div>
                <div data-aos='fade-right' className='w-full lg:w-1/2'>
                    <DayPicker
                        mode="single"
                        selected={selectedDay}
                        onSelect={setSelectedDay}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;