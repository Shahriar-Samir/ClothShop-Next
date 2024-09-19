'use client'
import { useSession } from 'next-auth/react';

const Shop = () => {
    const session = useSession()
    return (
        <main className='w-full h-[100vh]'>
            <h1 className='mt-5 text-center text-2xl'>All Products</h1>
        </main>
    );
};

export default Shop;