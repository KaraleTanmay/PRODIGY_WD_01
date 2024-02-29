import React from 'react'

export default function ReviewForm() {
    return (
        <div className='flex justify-center items-center flex-col my-10'>
            <div className='text-center text-[40px] md:text-[60px] text-sec my-2 font-[500]'>
                Submit a review
            </div>
            <div className='flex flex-col justify-center items-center bg-sec rounded-lg py-8 w-full md:w-[50%] gap-y-4'>
                <div className='w-[80%] flex justify-center items-center'>
                    <input className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='Your Name' />
                </div>
                <div className='w-[80%] flex justify-center items-center'>
                    <input className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='Profession' />
                </div>
                <div className='w-[80%] flex justify-center items-center'>
                    <input className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='tagline' />
                </div>
                <div className='w-[80%] flex justify-center items-center'>
                    <textarea className='p-2 focus:outline-none rounded-md w-full' type="text" placeholder='tagline' />
                </div>
            </div>
        </div>
    )
}
