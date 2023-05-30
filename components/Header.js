import Image from 'next/image';
import { 
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon
 } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-8">

      {/* Left */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill={true}
          style={{objectFit: "contain", objectPosition: "left"}}
          alt="Airbnb logo"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md">
          <input type="text" className='flex-grow md:-mr-4 pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' placeholder='Start your search'/>
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      {/* Right */}
      <div className='flex items-center justify-end text-black'>
        <p className='hidden lg:inline-flex hover:bg-gray-100 font-medium rounded-full px-4 py-2 text-sm cursor-pointer'>Airbnb your home</p>
        
        <div className="hidden md:inline-flex hover:bg-gray-100 rounded-full px-4 py-2">
          <GlobeAltIcon className='h-5 cursor-pointer' />
        </div>
        <div className='hidden sm:inline-flex items-center border-2 hover:shadow-md rounded-full space-x-2 p-2 cursor-pointer text-gray-500'>
          <MenuIcon className='h-5' />
          <UserCircleIcon className='h-5' />
        </div>
      </div>
    </header>
  );
}

export default Header