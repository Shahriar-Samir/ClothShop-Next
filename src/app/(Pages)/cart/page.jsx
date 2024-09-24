import React from 'react';

const Cart = () => {
    return (
        <main className='w-full  max-w-[1200px] mx-auto'>
            <h1 className='text-center mt-10 text-3xl font-semibold'>Your Cart</h1>
            <section className='flex w-full gap-10 justify-between mt-10'>
            <section className='flex flex-col gap-5 '>
            {[1,2,3,4].map(item=>{
              return <article key={item} className="card lg:card-side bg-base-100 shadow-xl h-[200px]">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </article>
            })}
            </section>
            <aside className='w-1/4'>
            <div className="w-full border py-3">
              <h1 className='text-center text-lg font-semibold'>Price Details</h1>
  <table className="table w-full mt-2">
      {/* row 1 */}
      <tr >
        <td>Subtotal price</td>
        <td className='text-end'>1000</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Discount</td>
        <td className='text-end'>0</td>
      </tr>
      {/* row 3 */}
      <tr className='border-t '>
        <td className='font-bold'>Total Price</td>
        <td className='text-end font-bold'>1000</td>
      </tr>
  </table>
</div>
            </aside>
            </section>
        </main>
    );
};

export default Cart;