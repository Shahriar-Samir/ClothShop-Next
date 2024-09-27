import CartData from './CartData'

const Cart = () => {
  
    return (
        <main className='w-full  max-w-[1200px] mx-auto'>
            <h1 className='text-center mt-10 text-3xl font-semibold'>Your Cart</h1>
            <section className='flex w-full gap-10 justify-between mt-10'>
                <CartData/>
            <aside className='w-1/4'>
            <div className="w-full border py-3">
              <h1 className='text-center text-lg font-semibold'>Price Details</h1>
  <table className="table w-full mt-2">
      {/* row 1 */}
      <tbody>
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
      </tbody>
  </table>
</div>
            </aside>
            </section>
        </main>
    );
};

export default Cart;