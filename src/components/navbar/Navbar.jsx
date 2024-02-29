import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import { Squash as Hamburger } from 'hamburger-react'
import { Home, PermPhoneMsg } from '@mui/icons-material';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sticky top-0 drop-shadow-lg z-10'>

            {/* for laptop screens */}
            <div className='hidden md:block'>
                <div className='w-[100%] h-[8vh] flex flex-row justify-between bg-pri items-center px-10 bg-navbg'>
                    <div className='w-[20%] h-[70%] flex justify-start'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='h-[100%] rounded-lg' />
                        </Link>
                    </div>
                    <div className='min-w-[30%] flex justify-evenly gap-x-8'>

                        <div className='flex justify-center items-center text-sec rounded-lg ease-in-out duration-[300ms] cursor-pointer px-3 py-1 hover:bg-sec hover:text-pri'>
                            <Link to="/" className='flex justify-center items-center gap-x-1'>
                                <span className='flex justify-center items-center'>
                                    <Home></Home>
                                </span>
                                <span>Home</span>
                            </Link>
                        </div>


                        <div className='flex justify-center items-center text-sec rounded-lg ease-in-out duration-[300ms] cursor-pointer px-3 py-1 hover:bg-sec hover:text-pri'>
                            <Link to="/about-us" className='flex justify-center items-center gap-x-1'>
                                <span className='flex justify-center items-center'>
                                    <PermPhoneMsg></PermPhoneMsg>
                                </span>
                                <span>Contact Us</span>
                            </Link>
                        </div>

                        <Link to="https://www.youtube.com" className='flex justify-center items-center text-pri bg-secbl rounded-lg text-lg px-3 py-1 gap-x-1'>
                            <span>Try for free</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* for mobile screens */}
            <div className='block md:hidden overflow-x-hidden bg-pri'>
                <div className='w-[100%] h-[8vh]  flex justify-between px-4 items-center'>
                    <div className='h-[60%] flex justify-center'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='h-[100%] rounded-lg' />
                        </Link>
                    </div>
                    <div className='text-sec' >
                        <Hamburger toggled={isOpen} toggle={setIsOpen}></Hamburger>
                    </div>
                </div>
                <div className={`${isOpen ? "left-[0]" : "left-[-100%]"} bg-pri flex flex-col justify-start items-center absolute top-[8vh]  w-full h-[92vh] duration-[400ms] gap-y-5 text-lg`}>
                    <div className="flex justify-center items-center w-[80%] border-b-2 border-sec">
                        <Link to="/">
                            <div className='flex justify-center items-center text-sec px-3 pb-4 ' onClick={() => { setIsOpen(!isOpen) }}>Home</div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center w-[80%] border-b-2 border-sec">
                        <Link to="about-us">
                            <div className='flex justify-center items-center text-sec px-3 pb-4  ' onClick={() => { setIsOpen(!isOpen) }}>About Us</div>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center text-pri bg-sec rounded-lg text-lg cursor-pointer px-3 py-1' onClick={() => { setIsOpen(!isOpen) }}>
                        <Link to="https://www.youtube.com" className='flex justify-center items-center gap-x-1'>
                            <span>Try for free</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
