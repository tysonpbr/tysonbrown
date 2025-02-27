import React from 'react'

const Navbar = ({ setGlobePosition, setGlobeScale, setRotate }: {
  setGlobePosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setGlobeScale: React.Dispatch<React.SetStateAction<number>>;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  const navLinks = [
    {
      text: 'Home',
      function: () => {
        setGlobePosition([0, 10, 40]);
        setGlobeScale(1);
        setRotate(true);
      }
    },
    {
      text: 'About',
      function: () => {
        console.log('i am here')
        setGlobePosition([4.5, 1, 0]);
        setGlobeScale(1);
        setRotate(false);
      }
    },
    {
      text: 'Projects',
      function: () => { }
    },
  ]
  return (
    <div className="fixed top-0 left-0 z-20 p-8  pointer-events-auto">
      <div className="text-6xl font-bold text-[#E9762B]">
        TYSON BROWN
      </div>
      <div className="w-full flex justify-between px-16 text-white">
        {navLinks.map((link, index) => (
          <button onClick={link.function} key={link.text}>
            {link.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar