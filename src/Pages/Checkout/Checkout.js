import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePriceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'Unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name, email, phone, message
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed successfully.')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handlePriceOrder}>
            <h2 className='text-4xl'>{title}</h2>
            <h4 className='text-3xl'>Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name='first' type="text" placeholder="First Name" className="input input-bordered w-full" required />
                <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='email' defaultValue={user?.email} type="text" placeholder="email" className="input input-bordered w-full" readOnly required />
                <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full" required />
            </div>
            <textarea name='message' className="textarea textarea-info h-24 w-full" placeholder="Message"></textarea>
            <button className="btn btn-outline btn-info">Order Place</button>
        </form>
    );
};

export default Checkout;