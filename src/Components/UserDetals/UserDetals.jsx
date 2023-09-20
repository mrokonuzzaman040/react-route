import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetals = () => {
    const user = useLoaderData();
    const { name, email, phone, website } = user;
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-white'>UserDetals</h1>
            <br />
            <br />
            <h2 className=''>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetals;