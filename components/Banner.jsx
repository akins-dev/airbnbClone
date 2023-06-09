import Image from 'next/image'


function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
          src="https://links.papareact.com/0fm"
          fill={true}
          style={{objectFit: "cover"}}
          alt="Carousel"
        />
        {/* Banner */}
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
            <button type="button" className='text-purple-500 focus:outline-none disable-tap-highlight bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition translate duration-150'>
                I&#39;m flexible
            </button>
        </div>
    </div>
    
  );
}

export default Banner