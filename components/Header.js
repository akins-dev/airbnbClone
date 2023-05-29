import Image from 'next/image';
import { 
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon
 } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-6">

      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill={true}
          style={{objectFit: "contain", objectPosition: "left"}}
          alt="Airbnb logo"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input type="text" className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' placeholder='Start your search'/>
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline-flex text-sm lg:text-lg cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center border-2 rounded-full space-x-2 p-2 cursor-pointer'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  )
}

export default Header