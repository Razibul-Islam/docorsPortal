import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <h1 className='text-7xl text-red-700'>Something went wrong!!</h1>
            <p className='text-2xl text-red-500'>{error.statusText || error.message}</p>
            <Link className='bg-gray-400 text-3xl text-black p-5' to="/">Home Back</Link>
        </div>
    );
};

export default DisplayError;