import React from 'react'

const Navbar = ({ setGlobePosition, setGlobeScale, setRotate }: { 
  setGlobePosition: React.Dispatch<React.SetStateAction<[number, number, number]>>;
  setGlobeScale: React.Dispatch<React.SetStateAction<number>>;
  setRotate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed top-0 left-0 z-20">
      TYSON BROWN
    </div>
  )
}

export default Navbar