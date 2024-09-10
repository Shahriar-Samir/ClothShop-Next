import Image from "next/image";


const App = () => {
  return (
    <main className='w-full'>
        <header className='w-full  bg-[url("/images/banner.jpg")]  h-[90vh] bg-cover text-white flex justify-center flex-col items-end relative'>
      
              <h1 className='lg:text-5xl  2xl:text-8xl w-11/12 lg:max-w-[500px] 2xl:max-w-[900px] font-bold text-end me-7 z-10'>Style Redefined for the Modern Man</h1>
              <p className='lg:text-lg 2xl:text-3xl text-end lg:max-w-[500px] w-11/12 2xl:max-w-[900px] me-7 mt-4 z-10'>Discover premium collections of men's fashion, from casual wear to formal attire. Elevate your wardrobe with the latest trends and timeless classics.</p>
              <div class="z-0 absolute inset-0 bg-[#00000031]"></div>
        </header>
    </main>
  );
};

export default App;