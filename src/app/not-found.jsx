'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[80vh] gap-4 text-center flex justify-center items-center flex-col '>
      <h1 className='text-2xl font-semibold'>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
        <Link href='/' className='btn bg-blue-500 hover:bg-blue-600 text-white'>Go back to Home</Link>
    </div>
  );
}
