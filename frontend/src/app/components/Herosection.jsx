import React from 'react'

function Herosection() {
  return (
    <div className='relative h-screen '>
      <img src='./college.png' className='absolute h-full w-full top-0 left-0 object-cover z-10 object-center'/>
      <div className='py-10  absolute z-20 top-0 left-0 bg-black/65 flex-wrap md:flex justify-between items-center h-full w-full text-white'>
          <div className='w-full md:w-1/2  py-10 px-10 md:px-20 '>
            <h1 className=' text-4xl md:text-7xl font-bold text-white py-4'>Entrepreneurship Cell</h1>
            <h3 className=' text-md md:text-2xl py-2 font-semibold'>Indian Institute of Information Technology Ranchi</h3>
            <p className=' text-sm md:text-lg'>At E-Cell, IIIT Ranchi, we foster innovation and entrepreneurial spirit, empowering students to turn their ideas into impactful ventures. Join us to learn, collaborate, and lead the way in building a brighter, innovative future!</p>
          </div>
          <div className='w-full md:w-1/2  py-10 px-10 md:px-20 '>
             <h3 className='text-2xl text-center font-semibold'>CREATE</h3>
             <h1 className=' text-4xl lg:text-6xl font-extrabold text-center py-4'>INNOVATE</h1>
             <h3 className='text-2xl text-center font-semibold'>IMPACT</h3>
          </div>
      </div>
    </div>
  )
}

export default Herosection
