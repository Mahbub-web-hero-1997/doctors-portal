import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';

import Navbar from '../Sheard/Navbar';

const Header = () => {
    return (
       <>
       <Navbar></Navbar>
       <Banner></Banner>
       <Info></Info>
       </>
      
    );
};

export default Header;