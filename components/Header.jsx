import Image from 'next/image';
import { 
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UsersIcon
 } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection"
  }

  const handelSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const resetInput = () => {
    setSearchInput("");
  }


  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-8">
      {/* Left */}
      <div className="relative flex items-center h-8 cursor-pointer disable-tap-highlight my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill={true}
          style={{objectFit: "contain", objectPosition: "left"}}
          alt="Airbnb logo"
        />
      </div>
      {/* Left end */}

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm md:hover:shadow-md">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text" 
            className='flex-grow md:-mr-4 pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' placeholder='Start your search'/>
          <SearchIcon className='hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer disable-tap-highlight md:mx-2'/>
      </div>
      {/* Middle end */}

      {/* Right */}
      <div className='flex items-center justify-end text-black'>
        <p className='hidden lg:inline-flex hover:bg-gray-100 disable-tap-highlight font-medium rounded-full px-4 py-2 text-sm cursor-pointer'>Airbnb your home</p>
        
        <div className="hidden md:inline-flex hover:bg-gray-100 rounded-full px-4 py-2">
          <GlobeAltIcon className='h-5 cursor-pointer disable-tap-highlight' />
        </div>
        <div className='hidden sm:inline-flex disable-tap-highlight items-center border-2 hover:shadow-md rounded-full space-x-2 p-2 cursor-pointer text-gray-500'>
          <MenuIcon className='h-5' />
          <UserCircleIcon className='h-5' />
        </div>
      </div>
      {/* Right end */}

      {searchInput && (
        <div className='hidden sm:inline-flex mt-2 flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handelSelect}
          />
          <div className="flex border-b mb-4">
            <h2 className="text-xl flex-grow font-medium">Number of Guests</h2>
            <UsersIcon className="h-5"/>
            <input 
              value={noOfGuests} 
              onChange={(e) => setNoOfGuests(e.target.value)} 
              min={1}
              type="number" 
              className='w-12 outline-none tex-lg pl-2 text-red-400' 
            />
          </div>

          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
     
    </header>
  );
}

export default Header