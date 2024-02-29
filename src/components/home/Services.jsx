import { Analytics, Assignment, Biotech, Code, ContentPasteSearch, MenuBook } from '@mui/icons-material'
import React from 'react'
import coding from "./img/programming.png"
import research from "./img/research.png"
import assignment from "./img/assignment.png"
import anylytics from "./img/analytics.png"
import thesis from "./img/open-book.png"
import synopsis from "./img/contract.png"
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'

const services = [
    {
        icon: <Biotech></Biotech>,
        text: "research proposels",
        img: research
    },
    {
        icon: <MenuBook></MenuBook>,
        text: "Synopsis writing",
        img: synopsis
    },
    {
        icon: <ContentPasteSearch></ContentPasteSearch>,
        text: "Thesis research",
        img: thesis
    },
    {
        icon: <Analytics></Analytics>,
        text: "Statistics & data analysis",
        img: anylytics
    },
    {
        icon: <Assignment></Assignment>,
        text: "Assignment support",
        img: assignment
    },
    {
        icon: <Code></Code>,
        text: "Programming / Coding help",
        img: coding
    },
]

export default function Services(props) {
    const { ref: headingRef, inView: headingInView } = useInView()


    const slide = useSpring(
        headingInView ? {
            from: { y: 100, opacity: 0 },
            to: { y: 0, opacity: 1 },
            delay: 300
        } : {}
    )

    return (
        <animated.div style={slide} className='flex flex-col justify-center items-center mb-[120px] '>
            <div ref={headingRef} className='text-center text-[40px] md:text-[70px] my-10 text-sec font-[600]'> {props.text || "Our Services"}</div>
            <div className='flex justify-center items-center gap-y-8 md:gap-x-[40px] gap-x-[20px] flex-wrap'>
                {
                    services.map((ele, i) => {
                        return (
                            <div className='cursor-pointer w-[150px] md:w-[180px] flex flex-col justify-center items-center gap-y-4 border-new2 border-[2px] rounded-xl p-2' key={i}>
                                <div className='text-sec w-[80%] flex justify-center items-center'>
                                    <img src={ele.img || coding} alt="img" className='w-[80%]' />
                                </div>
                                <div className='text-[16px] md:text-[20px] text-center bg-pri text-sec font-[500] rounded-lg px-2'>{ele.text || "Reasearch Proposels"}</div>
                            </div>
                        )
                    })
                }


            </div>
        </animated.div>
    )
}
