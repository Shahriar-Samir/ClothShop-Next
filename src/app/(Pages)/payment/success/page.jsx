import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='w-full h-[80vh] flex justify-center items-center gap-5 flex-col'>
            <h1 className='text-2xl font-semibold text-center'>Your payment was successful</h1>
            <Link href='/' className='btn'><button>Go to Homepage</button></Link>
        </div>
    );
};

export default page;