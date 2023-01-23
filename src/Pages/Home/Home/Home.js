import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../ContactUs/Contactus';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contactus></Contactus>
        </div>
    );
};

export default Home;