import React from 'react'
import '../App.css'

const Courses = () => {
  return (
    <>
     <div className='flex flex-col justify-center items-center mt-24'>
        <div className='flex flex-col items-center justify-evenly m-auto mb-8'>
            <span className='text-center text-green-500 uppercase bg-green-300 font-bold w-20 px-2 rounded-full'>Why us</span>
            <h1 className='text-center font-bold text-3xl text-gray-500'>Why you shoud <span className='text-green-400 opacity-75'> choose us?</span></h1>
            <p className='text-center font-medium text-gray-400'>For Best Content and Live Perform Classes with less prices.</p>
        </div>
        {/* ************************************************************************ */}
        <div className='flex justify-around  w-full h-80'>
            <div className='h-full w-[450px] border flex flex-col justify-center shadow-md rounded-md'>
                <span className='px-4 py-6 font-bold text-3xl text-green-600 opacity-75'>01</span>
                <p className='px-4 py-4 text-2xl font-bold text-gray-400'>Web Devlopment</p>
                <p className='px-4 py-4 font-medium text-gray-500'>This course offer are comming soon.</p>
            </div>
            <div className='h-full w-[450px] border flex flex-col justify-center shadow-xl rounded-md'>
            <span className='px-4 py-6 font-bold text-3xl text-green-600 opacity-75'>01</span>
                <p className='px-4 py-4 text-2xl font-bold text-gray-400'>Web Devlopment</p>
                <p className='px-4 py-4 font-medium text-gray-500'>This course offer are comming soon.</p>
            </div>
            <div className='h-full w-[450px] border flex flex-col justify-center shadow-2xl rounded-md'>
            <span className='anima px-4 py-6 font-bold text-3xl text-green-600 opacity-75'>01</span>
                <p className='anima px-4 py-4 text-2xl font-bold text-gray-400'>Web Devlopment</p>
                <p className='anima px-4 py-4 font-medium text-gray-500'>This course offer are comming soon.</p>
            </div>
        </div>
        {/* ****************************************************************************** */}
        <div className='flex justify-around'>
            <p className=''>1</p>
            <p className=''>2</p>
            <p className=''>3</p>
            <p className=''>4</p>
        </div>
     </div>
    </>
  )
}

export default Courses