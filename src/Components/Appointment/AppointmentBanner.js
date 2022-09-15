import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

import img from '../../assets/images/chair.png'

const AppointmentBanner = () => {
    const [selectedDay, setSelectedDay] = useState();
    const footer = selectedDay ? (
        <p>You selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );

    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse w-full">
                <img alt='' src={img} class="rounded-lg shadow-2xl w-full lg:w-1/2" />
                <div className='w-full lg:w-1/2'>
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