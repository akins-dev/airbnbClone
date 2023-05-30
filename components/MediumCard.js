import Image from 'next/image'

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer disable-tap-highlight hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-80 w-80">
            <Image src={img} fill={true} alt="Image" className="rounded-xl"/>
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard