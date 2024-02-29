// import { Person } from '@mui/icons-material'
import React from 'react'
import user from "./user.png"

export default function ReviewCard() {
    return (
        <div className='w-full max-h-[260px] overflow-y-hidden border-[2px] border-sec p-4 rounded-lg text-sec'>

            <div>
                <div className='text-[20px] font-[500]'>
                    Tanmay Karale
                </div>
            </div>


            <div className='text-[18px] font-[600] my-1'>
                It's Awesome
            </div>
            <div className='text-[15px] text-secbl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tenetur quam, deleniti porro beatae eos quidem consequuntur dolores omnis iure quibusdam cumque provident necessitatibus, velit officia, repudiandae reiciendis et voluptates?
            </div>
        </div>
    )
}
