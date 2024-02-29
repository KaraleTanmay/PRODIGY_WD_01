import React from 'react'
import ReviewCard from '../factory components/ReviewCard'
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

export default function Testimonials() {

    const { ref: headingRef, inView: headingInView } = useInView()


    const slide = useSpring(
        headingInView ? {
            from: { y: 100, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 300
        } : {}
    )

    return (
        <animated.div style={slide} className='w-full my-4 flex flex-col justify-between items-center '>
            <div className='w-full  flex justify-around flex-col items-center gap-y-[70px]'>
                <div ref={headingRef} className='text-[40px] md:text-[60px] text-sec mb-10 text-center font-[600]'>What People Say About Us</div>
            </div>
            <div className='w-full h-[32vh] md:h-[60vh] flex flex-col md:flex-row gap-x-4 md:gap-x-0 gap-y-4 md:justify-around items-center flex-wrap overflow-y-scroll border-secbl'>
                <div className='w-[90%] md:w-[40%]'>
                    <ReviewCard />
                </div>
                <div className='w-[90%] md:w-[40%]'>
                    <ReviewCard />
                </div>
                <div className='w-[90%] md:w-[40%]'>
                    <ReviewCard />
                </div>
                <div className='w-[90%] md:w-[40%]'>
                    <ReviewCard />
                </div>
                <div className='w-[90%] md:w-[40%]'>
                    <ReviewCard />
                </div>
            </div>
        </animated.div>
    )
}
