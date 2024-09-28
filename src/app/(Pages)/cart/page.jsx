import CartData from './CartData'

const Cart = () => {
  
    return (
        <main className='w-full  max-w-[1200px] mx-auto'>
            <h1 className='text-center mt-10 text-3xl font-semibold'>Your Cart</h1>
            <section className='flex w-full gap-10 justify-center mt-10'>
                <CartData/>
            </section>
        </main>
    );
};

export default Cart;