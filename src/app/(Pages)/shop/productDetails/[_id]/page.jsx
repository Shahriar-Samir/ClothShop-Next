import axios from 'axios';
import React from 'react';

const ProductDetails = ({params}) => {
   const productId = params._id
   const res = axios.get('')

    return (
        <main className='mt-10 mx-auto w-11/12 max-w-[1200px]'>
            <section className="card lg:card-side ">
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
</section>
        </main>
    );
};

export default ProductDetails;