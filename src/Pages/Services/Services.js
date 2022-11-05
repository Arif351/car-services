import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-center mb-4'>
            <p className="text-2xl font-bold text-orange-500">Services</p>
            <h2 className='text-5xl font-semibold'>Our Services Area {services.length}</h2>
            <p className='my-5'> The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>

        </div>
    );
};

export default Services;