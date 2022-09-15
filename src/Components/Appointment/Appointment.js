import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDay={selectedDay} setSelectedDay={setSelectedDay}></AppointmentBanner>
            <AvailableAppointments selectedDay={selectedDay} setSelectedDay={setSelectedDay}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;