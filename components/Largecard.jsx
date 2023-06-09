import Image from 'next/image'

function Largecard({ img, title, description, buttonText }) {
  return (
    <div className='relative py-16'>
        <div className="relative h-96 min-w-[300px]">
            <Image 
                src={img} 
                fill={true} 
                alt="Image"
                style={{objectFit: "cover"}}
                className="rounded-2xl"
            />
        </div>

        <div className='absolute top-32 left-12'>
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>

            <button className="text-sm focus:outline-none disable-tap-highlight text-white bg-gray-900 px-4 py-2 rounded-lg mt-5" type="button">{buttonText}</button>
        </div>
    </div>
  )
}

export default Largecard