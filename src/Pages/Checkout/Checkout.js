import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { title } = useLoaderData();
    return (
        <form>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input type="text" placeholder="First Name" className="input input-ghost w-full" />
                <input type="text" placeholder="Last Name" className="input input-ghost w-full" />
                <input type="text" placeholder="email" className="input input-ghost w-full" />
                <input type="text" placeholder="phone" className="input input-ghost w-full" />
            </div>
        </form>
    );
};

export default Checkout;