import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';


const OurServices = () => {
    const serviceData=[
        {
            id:1,
            name:'Flouride Treatment',
            decription:'Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.',
            img:flouride
        },
        {
            id:2,
            name:'cavity filling',
            decription:'Although some of the materials are strong and durable, none are considered permanent. This means that fillings do not last forever.',
            img:cavity
        },
        {
            id:3,
            name:'teeth whitening',
            decription:'If youre looking for a radical change in the coloring of your teeth, you need professional-grade whitening to get the job done.',
            img:whitening
        },
    ]
    return (
        <div className='mt-10'>
            <h1 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-2xl text-center'>Our Services</h1>
            <h1 className='text-4xl mt-4 mb-10 text-center'>Service We Provide</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service=><Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default OurServices;