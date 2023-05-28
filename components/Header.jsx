import Image from 'next/image';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3">
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
      <div>

      </div>

      {/* Right */}
      <div>

      </div>
    </header>
  )
}

export default Header