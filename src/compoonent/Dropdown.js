import React, { useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AiOutlineCaretUp,} from 'react-icons/ai'
import {BiLogOut ,BiLogIn} from 'react-icons/bi'
import {MdAccountBox} from 'react-icons/md'
import { useAuth0 } from "@auth0/auth0-react";



const Dropdown = () => {
    const [isOpen , setOpen] = useState(false)
    const { loginWithRedirect,logout } = useAuth0();
  return (
    <div className=' relative flex flex-col items-center w-[100px]'>
        <button onClick={()=> setOpen((prev) => !prev)} className='bg-white  px-2 py-1 rounded-md w-full flex items-center justify-between font-bold  tracking-wider border-4 border-transparent active:border-green-300 duration-300 active:text-green-300 capitalize shadow-md'>
            Profile
            {!isOpen ?(
                <AiOutlineCaretDown  className=''/>
            ):(
                <AiOutlineCaretUp className=''/>
            )
            }
        </button>
        { isOpen && (
            <div className='bg-white absolute flex flex-col top-12 items-center rounded-md p-2 w-full shadow-lg border-b-4 border-green-400'>
                <div className='flex justify-between  hover:border-l-4 border-green-300'>
                    <li className='p-2 font-medium cursor-pointer'onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
                        LogOut
                     </li>
                        <BiLogOut size={20} className='relative top-3'/>
                </div>
                <div className='flex justify-between  px-2 hover:border-l-4 border-green-300'>
                   <li className='p-2 font-medium cursor-pointer' onClick={() => loginWithRedirect()}>
                    LogIn
                    </li>
                    <BiLogIn size={23} className='relative top-3'/>
                </div>
                <hr className='w-full border-1 border-gray-500 mt-1 mb-1'/>
                <div className='flex justify-between  hover:border-l-4 border-green-300 rounded-tr-md rounded-br-md'>
                   <li className=' font-medium p-2 cursor-pointer'>
                    Account
                    </li>
                    <MdAccountBox size={20} className='relative top-3'/>
                </div>



            </div>
        )

        }

    </div>
  )
}

export default Dropdown