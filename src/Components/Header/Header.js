import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';

import Navbar from '../Sheard/Navbar';

const Header = () => {
    return (
       <>
       <Navbar></Navbar>
       <Banner></Banner>
            <Info></Info>
            <Services></Services>
       </>
      
    );
};

export default Header;