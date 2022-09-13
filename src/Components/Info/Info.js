import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    const information = [
        { title: 'Opening Hours', details:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        { title: 'Visit Our Locations', details:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"},
        { title: 'Contact Us Now', details:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}
    ]

    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 mt-36'>           
            <InfoCart cartTitle={information[0].title} cartInfo={information[0].details} bgClass='bg-secondary' img={clock}></InfoCart>
            <InfoCart cartTitle={information[1].title} cartInfo={information[1].details} bgClass='bg-accent' img={marker}></InfoCart>
            <InfoCart cartTitle={information[2].title} cartInfo={information[2].details} bgClass='bg-secondary' img={phone}></InfoCart>
       </div>
    );
};

export default Info;