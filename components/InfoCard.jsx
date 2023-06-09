import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t disable-tap-highlight">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image 
                alt="image" 
                src={img}
                fill={true}
                style={{objectFit: "cover"}}
                className="rounded-2xl"
            />
        </div>
        <div className="flex flex-col flex-grow pl-5">
            <div className="hidden md:inline-flex justify-between">
                <p>{ location }</p>
                <HeartIcon className="h-7 cursor-pointer" />
            </div>

             <h4 className="hidden md:inline-flex text-xl">{title}</h4>
             {/* custom line */}
             <div className="hidden md:inline-flex border-b w-10 pt-2"/>

             <p className="hidden md:inline-flex pt-2 text-sm text-gray-500 flex-grow">{description}</p>

             <div className="flex justify-between items-end lg:pt-5">
                <p className="hidden md:inline-flex items-center">
                    <StarIcon className="h-5 text-red-400" />
                    {star}
                </p>

                <div className="">
                    <p className="md:text-lg font-semibold lg:text-2xl pb-2">{price}</p>
                    <p className="md:text-right font-extralight">{total}</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default InfoCard