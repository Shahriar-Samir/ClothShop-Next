import { getServerSession } from 'next-auth';
import CartData from './CartData'
import { authOptions } from '../../api/auth/[...nextauth]/route';

const Cart = async () => {
    const session = await getServerSession(authOptions)
    const uid = session?.user?.uid
    return (
        <main className='w-full  max-w-[1200px] mx-auto'>
            <h1 className='text-center mt-10 text-3xl font-semibold'>Your Cart</h1>
            <section className='flex flex-col-reverse md:flex-row w-full gap-10 justify-center mt-10'>
                <CartData uid={uid}/>
            </section>
        </main>
    );
};

export default Cart;