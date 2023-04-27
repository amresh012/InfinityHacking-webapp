import React from 'react'
import '../App.css'
import AboutImg from '../img/Other/about.jpg'
import {IoFingerPrintSharp} from 'react-icons/io5'
import {BiRightArrow} from 'react-icons/bi'

const About = () => {
  return (
    <div className='animation flex  items-center mt-12 justify-around h-full  mb-2 gap-4 '>
     <div className='h-full w-full p-4'>
        <img src={AboutImg} alt="" className='aboutimg rounded-md w-[90%] px-10 ml-12 h-[100vh]'/>
        <div className='flex justify-center items-center relative bottom-[25rem] left-[20rem] bg-green-600 rounded-full w-20 h-20'>
          <BiRightArrow size={30} className='text-white font-extrabold text-center'/>
        </div>
     </div>

     {/* Content-contaner */}
     <div className=' flex flex-col  items-start  justify-start m-5   h-[100vh] w-[100vw] overflow-hidden'>
        <span className='uppercase bg-green-100 font-bold text-center w-1/6 py-1 m-3 text-green-400 inline-block rounded-xl px-1'>🪲About Us</span>
        <h1 className='font-bold capitalize text-4xl px-4 py-4'>Full Ethical Hacking Course</h1>
        <p className='px-5 leading-7  text-gray-500 captitalize'>we are providing the ethical hacking course with lab practices, you can learn with mobile or laptop, also focus Android Hacking, Wifi-Hacking, Website Hacking, Social media account hacking like facebook, instagram, bugbounty, password cracking.</p>
        <div className='flex flex-col  h-full'>
            <div className=' flex flex-col h-full justify-between'>
                {/* About-1 */}
                    <div className='flex item-center gap-2  p-5'>
                    <div className='border-2 rounded-full hover:border-green-500'>
                    <IoFingerPrintSharp size={45} className=' m-10 text-green-400 '/>
                </div>
                <div className='px-4 py-2'>
                    <h4 className='font-bold text-xl px-2 py-2'>Social Media Account Hacking</h4>
                    <p className='text-gray-400 px-1 '>In this Session i will teach you how to hack the social media account just like facebook, instagram with tools.</p>
                </div>
                    </div>
                {/* About-2 */}
               <div className='flex item-center gap-2  m-5'>
               <div className='border-2 rounded-full hover:border-green-500 hover:bg-green-500'>
                    <IoFingerPrintSharp size={45} className='m-10 text-green-400 hover:text-white'/>
                </div>
                <div className=' px-4 py-2'>
                    <h4 className='font-bold text-xl px-2 py-2'>Android Hacking</h4>
                    <p className='text-gray-400 px-1'>Full android hacking tool with videos and live perform and hand to hand practices.</p>
                </div>
               </div>
               {/* About-3 */}
               <div className='flex item-center gap-2 m-5'>
               <div className='border-2 rounded-full hover:border-green-500'>
                    <IoFingerPrintSharp size={45} className='m-10 text-green-400 hover:text-white hover:bg-green-400'/>
                </div>
                <div className=' px-4 py-2'>
                    <h4 className='font-bold text-xl px-2 py-2'>Website Hacking</h4>
                    <p className='text-gray-400 px-1'>We can provide you full website hacking course with live perform hacking, and tools explain.</p>
                </div>
               </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default About