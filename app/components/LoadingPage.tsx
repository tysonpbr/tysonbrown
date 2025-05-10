import React from 'react'

const LoadingPage = ({ loading, displayProgress }: {
  loading: boolean;
  displayProgress: number;
}) => {
  return (
    <div className={`${!loading && 'pointer-events-none opacity-0'} fixed top-0 left-0 h-screen w-screen bg-white z-[1000] flex justify-center ease-in-out duration-1000 sepia-[33%]`}>
      <div className="text-black px-4 py-2 rounded-lg whitespace-nowrap self-center">
        Loading... {displayProgress}%
      </div>
    </div>
  )
}

export default LoadingPage