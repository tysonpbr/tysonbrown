import React from 'react'

const Navbar = ({ setGlobePosition, setGlobeScale, setRotate }: {
  setGlobePosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setGlobeScale: React.Dispatch<React.SetStateAction<number>>;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const navLinks = [
    {
      text: 'Home',
      function: () => { }
    },
    {
      text: 'About',
      function: () => { }
    },
    {
      text: 'Projects',
      function: () => { }
    },
  ]
  return (
    <div className="fixed top-0 left-0 z-20 p-8">
      <div className="text-6xl font-bold text-[#E9762B]">
        TYSON BROWN
      </div>
      <div className="w-full flex justify-between px-16">
        {navLinks.map((link, index) => (
          <div key={link.text}>
            {link.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar