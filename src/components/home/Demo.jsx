import React from 'react'
import ReactPlayer from 'react-player'

const video = "https://www.youtube.com/watch?v=AR5Zbw2u_Ug"

export default function Demo() {

    return (
        <div className='w-full my-4 flex flex-col md:flex-row justify-between items-center mt-10 md:mt-[100px]'>
            <div className='w-full flex flex-col justify-center items-center md:w-[40%]'>
                <div className='text-[20px] text-secbl'>Having problems ?</div>
                <div className='md:text-[70px] text-[50px] text-sec font-[600]'>Take a Demo</div>
            </div>

            <div className='w-full md:w-[60%] flex justify-center items-center rounded-lg my-10'>
                <ReactPlayer url={video} controls={true} />
            </div>
        </div>
    )
}
