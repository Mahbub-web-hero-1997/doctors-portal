import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Navbar from '../Sheard/Navbar';
import Testmonial from '../Testmonial/Testmonials';


const Header = () => {
    return (
       <>
       <Navbar></Navbar>
       <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Testmonial></Testmonial>
            <Contact></Contact>
            
       </>
      
    );
};

export default Header;