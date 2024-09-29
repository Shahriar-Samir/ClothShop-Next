import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic"


const App =async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/featured`)
  const products = await res.data
  return (
    <main className='w-full '>
        <header className='w-full  bg-[url("/images/banner.jpg")]  h-[90vh] bg-cover text-white flex justify-center flex-col items-end relative'>
      
              <h1 className='lg:text-5xl  2xl:text-8xl w-11/12 lg:max-w-[500px] 2xl:max-w-[900px] font-bold text-end me-7 z-10'>Style Redefined for the Modern Man</h1>
              <p className='lg:text-lg 2xl:text-3xl text-end lg:max-w-[500px] w-11/12 2xl:max-w-[900px] me-7 mt-4 z-10'>Discover premium collections of mens fashion, from casual wear to formal attire. Elevate your wardrobe with the latest trends and timeless classics.</p>
              <div className="z-0 absolute inset-0 bg-[#00000031]"></div>
        </header>
        <main className='mt-20 w-10/12 mx-auto'>
            <h1 className='text-center text-2xl font-semibold'>Our Featured Products</h1>
            <section className='grid grid-cols-3 w-full mx-auto max-w-[1000px] gap-10 mt-10'>
            {products.map(item=>{
                    return   <article key={item._id} className="card bg-base-100 shadow-xl">
  <figure>
    <Image
      src={item.imageURL}
      width={1000}
      height={1000}
      alt={item.productName} className="w-full h-[300px] object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.productName}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end w-full">
      <Link href={`/shop/productDetails/${item._id}`} className="w-full"><button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">Details</button></Link>
    </div>
  </div>
</article>})}
            </section>
            <section className="mt-20 ">
            <h1 className='text-center text-2xl font-semibold'>About Us</h1>
            <div className="hero ">
  <div className="hero-content items-start flex-col lg:flex-row-reverse gap-10">
    <Image
    width={1000}
    height={1000}
      src="/images/about.jpg"
      className="w-[400px] h-full rounded-lg shadow-2xl object-cover" />
    <p>At GentStyle, we believe that clothing is more than just fabric&mdash;it is an expression of personality, confidence, and individuality. Our passion is to help men look their best while feeling empowered in their own skin. Whether you are updating your wardrobe for work, planning an event, or just looking for something stylish yet comfortable, we are here to guide you every step of the way. Our team is dedicated to making shopping for mens fashion simple, seamless, and enjoyable. We offer expert advice to help you find the perfect fit and style, along with unparalleled customer service that ensures your satisfaction. Whether you shop online or in-store, our focus is always on providing you with an exceptional shopping experience. What sets us apart at GentStyle is our commitment to delivering not just great clothing but a lifestyle. We know that the modern man values comfort as much as style, and our collection is designed to meet the needs of a busy life without compromising on fashion. We partner with trusted designers and brands that share our dedication to quality and craftsmanship. From exclusive collections to seasonal must-haves, you will find everything you need to express your unique style at GentStyle. Our vision is to inspire men to embrace their individuality with confidence and sophistication, while ensuring that their wardrobe evolves with them. Step into GentStyle and elevate your wardrobe today. Discover the perfect balance of elegance, quality, and innovation&mdash;because every man deserves to look and feel his best.</p>
  </div>
</div>
            </section>
        </main>
    </main>
  );
};

export default App;