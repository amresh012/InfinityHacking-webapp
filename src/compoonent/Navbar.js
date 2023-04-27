import React from 'react'
import Dropdown from './Dropdown';
import {MdEmail,MdPhoneIphone} from 'react-icons/md'
import {FaFacebookSquare,FaInstagram,FaTwitter} from "react-icons/fa"


const Navbar = () => {
  return (
    <>
    <div className='flex justify-around h-8 bg-black' >
        <ul className='flex justify-around'>
            <div className='flex mr-10'>
                <MdEmail className='relative top-[5px] text-green-400 m-1 hover:border-green-500'/>
                <h3 className='px-3 m-1 hover:text-green-600 font-medium text-white'>infinityhacking@hotmail.com</h3>
            </div>
            <div className='flex gap-10'>
                <MdPhoneIphone className='relative top-1 left-10'/>
                <p className='text-white m-1'>+91 6393833668</p>
                <MdPhoneIphone className='relative top-1 left-10'/>
                <p className='text-white m-1'>+91 9554794798</p>
            </div>
        </ul>
        <div className='flex justify-evenly gap-10 w-48'>
            <div className='m-2'>
                <FaFacebookSquare size={20} className='text-white'/>
            </div>
            <div className='m-2'>
                <FaInstagram size={20} className='text-white'/>
            </div>
            <div className='m-2'>
                <FaTwitter size={20} className='text-white'/>
            </div>
        </div>
    </div>
      <div className='w-full flex h-fits justify-between bg-black'>
          <div className=''>
            <h1 className='text-white text-3xl font-bold p-8 italic'>SofTechs</h1>
          </div>
          <div className='mr-5 flex'>
            <ul className='flex items-center justify-center m-5'>
              <li className= 'mr-5 text-center font-medium  mt-1 px-5 py-2 uppercase text-green-500 border-l-4 border-green-400  shadow-xl bg-gray-700 '>Home</li>
                <li className='mr-5 text-white  font-medium  px-5 py-2 mt-1 hover:border-l-4 border-green-400 hover:bg-gray-700 uppercase hover:text-green-300 duration-75 transition-all'>About</li>
                <li className= 'mr-5 text-white  font-medium  px-5 mt-1 py-2 hover:border-l-4 border-green-400 hover:bg-gray-700 uppercase hover:text-green-300 duration-75 transition-all'>Contact</li>
                <li className= 'mr-5 text-white  font-medium  px-5 mt-1 py-2 hover:border-l-4 border-green-400 hover:bg-gray-700 uppercase hover:text-green-300 duration-75 transition-all'>Courses</li>
                <li className= 'mr-5 text-white font-medium  px-5 mt-1 py-2 hover:border-l-4 border-green-400 hover:bg-gray-700 uppercase hover:text-green-300 duration-75 transition-all'>Support</li>
                <li className= 'mr-5 text-white font-medium  px-5 mt-1 py-2 hover:border-l-4 border-green-400 hover:bg-gray-700 uppercase hover:text-green-300 duration-75 transition-all'>Certificate</li>
                <div className=''>
                <Dropdown/>
                </div>
            </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar