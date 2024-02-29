import React from 'react'
import Section from '../factory components/Section'
import { Call, Email, LocationOn } from '@mui/icons-material'

export default function ContactUs() {
    return (
        <Section>
            <div className='flex flex-col lg:flex-row w-full justify-between mx-auto my-8 md:my-[100px] gap-y-10'>
                <div className='w-full lg:w-[45%] text-sec'>
                    <div className='text-[40px] font-[500]'>Contact Us</div>
                    <div className='flex justify-start items-center gap-x-4 my-4'>
                        <div><LocationOn fontSize='large'></LocationOn></div>
                        <div>Bengaluru, India</div>
                    </div>
                    <div className='flex justify-start items-center gap-x-4 my-4'>
                        <div><Email fontSize='large'></Email></div>
                        <div>support@supremewriter.io</div>
                    </div>
                    <div className='flex justify-start items-center gap-x-4 my-4'>
                        <div><Call fontSize='large'></Call></div>
                        <div>+1-424-7777-1469</div>
                    </div>
                    <div className='flex justify-start items-center gap-x-4 my-4'>
                        <div><Call fontSize='large'></Call></div>
                        <div>+91-942429851</div>
                    </div>
                </div>
                <div className='w-full lg:w-[45%]'>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='text-center text-[40px] text-sec font-[500]'>
                            Send Us a Messsage
                        </div>
                        <div className='flex flex-col justify-center items-center bg-sec rounded-lg py-8 w-full my-4 gap-y-4'>
                            <div className='w-[80%] flex justify-center items-center'>
                                <input className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='Your Name' />
                            </div>
                            <div className='w-[80%] flex justify-center items-center'>
                                <input className='p-2 focus:outline-none rounded-md w-full' type="email" placeholder='Email' />
                            </div>
                            <div className='w-[80%] flex justify-center items-center'>
                                <input className='p-2 focus:outline-none rounded-md w-full' type="number" placeholder='Mobile No.' />
                            </div>
                            <div className='w-[80%] flex justify-center items-center'>
                                <textarea className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='Message' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
