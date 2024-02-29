import React from 'react'
import robot from "./img/robot.png"
import graph from "./img/blob.svg"
import { ArrowForward } from '@mui/icons-material'
import { Typewriter } from 'react-simple-typewriter'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom'



const data = [
    {
        main: "25 +",
        sec: "research papers"
    },
    {
        main: "8+ years",
        sec: "Experience"
    },
    {
        main: "100 +",
        sec: "satisfied customers"
    }
]

export default function LandingPage() {

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1000
    })
    const expand = useSpring({
        from: { x: -1000 },
        to: { x: 0 },
        delay: 300
    })
    const slide = useSpring({
        from: { x: 600 },
        to: { x: 0 },
        delay: 300
    })

    return (
        <div >
            <div className='flex flex-col lg:flex-row justify-center items-center bg-sec m-auto '>
                <div className='w-full lg:w-[60%] flex flex-col justify-center item center text-center mt-5'>
                    <animated.div style={expand} className='text-new2 md:text-[30px] text-[25px]'>Let's start</animated.div>
                    <animated.div style={expand} className='text-new2 md:text-[30px] text-[25px]'> Something Big</animated.div>
                    <animated.div style={expand} className='text-pri text-[70px] md:text-[100px] md:relative md:bottom-5'>Together...</animated.div>
                    <animated.div style={fade} className='w-[80%] text-pri mx-auto md:text-[15px] hidden md:block'>Our objective is to bridge the gap between the changing needs of research Students with our innovative, c2reative & experienced team. We believe in providing quality services and maintaining long-term relationships.</animated.div>


                    <animated.div style={fade} className='flex justify-center gap-x-10 w-full my-5 flex-wrap gap-y-4 md:gap-y-0'>
                        {
                            data.map((ele, i) => {
                                return (
                                    <div className='bg-sec flex flex-col justify-center items-center p-2 rounded-lg min-w-[140px]' key={i}>
                                        <div className='text-[20px] text-pri text-center'>
                                            {ele.main}
                                        </div>
                                        <div className='textanimated.-pr style={fade}i text-center'>
                                            {ele.sec}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </animated.div>
                    <animated.div style={fade} className='text-pri text-lg flex justify-center items-center gap-x-2'>
                        <span>get ready your</span> <span className='text-[25px] text-or font-[600]'>
                            <Typewriter
                                words={['Assignment', 'Synopsix', 'Code', 'Content']}
                                loop={false}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500} />
                        </span>
                    </animated.div>

                    <animated.div style={fade} className='bg-secbl text-pri font-[500] p-3 mx-auto rounded-lg cursor-pointer mt-4'>
                        <Link to={"/calculator"}>Claim 1000 Words</Link> <ArrowForward></ArrowForward>
                    </animated.div>


                    {/* calculator */}
                </div>

                <animated.div style={slide} className='w-[90%] lg:w-[40%] lg:mt-0 mt-10 flex justify-end items-center'>
                    <div className='w-[90%] flex justify-center items-center'>
                        <img src={robot} alt="robot" className='w-[60%] z-[4] relative left-[150px] lg:left-[130px]' />
                        <img src={graph} alt="robot" className='w-[500px] relative left-[-120px] lg:left-[-300px]' />
                    </div>
                    {/* <div className='w-[400px] flex justify-center items-center relative top-[50px]'>
                       
                    </div> */}

                </animated.div>

            </div>
            <div className='relative lg:top-[-50px] top-[-10px] z-[-2]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3E54AC" fill-opacity="1" d="M0,64L40,85.3C80,107,160,149,240,165.3C320,181,400,171,480,138.7C560,107,640,53,720,53.3C800,53,880,107,960,106.7C1040,107,1120,53,1200,53.3C1280,53,1360,107,1400,133.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </div>
        </div>
    )
}
