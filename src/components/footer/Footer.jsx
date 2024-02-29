import React from 'react'
import Section from '../factory components/Section'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import paypal from "./paypal.png"

const links = ["About Us", "Terms and Conditions", "Fair Use Policy", "Contact Us", "Earn With Us", "Blogs"]

export default function Footer() {
    return (
        <div className='w-full flex justify-center items-center bg-sec p-4 text-pri'>
            <Section>
                <div className='flex justify-center items-center flex-col'>
                    <div className='flex justify-evenly items-center w-[20%] my-5'>
                        <span className='hover:cursor-pointer'>

                            <Instagram fontSize='large'></Instagram>
                        </span>
                        <span className='hover:cursor-pointer'>

                            <Facebook fontSize='large'></Facebook>
                        </span>
                        <span className='hover:cursor-pointer'>

                            <LinkedIn fontSize='large'></LinkedIn>
                        </span>
                    </div>
                    <div className='w-[80%] my-5 h-[2px] bg-pri'></div>
                    <div className='flex justify-evenly items-center w-[80%] flex-wrap'>

                        {
                            links.map((ele, i) => {
                                return (
                                    <div className='text-lg' key={i}>
                                        <Link to="/">{ele}</Link>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className='w-[80%] my-5 h-[2px] bg-pri'></div>
                    <div className='flex flex-col justify-center items-center gap-y-4'>
                        <div className='text-[35px]'>
                            Payment Partner
                        </div>
                        <div className='w-[50px]'>
                            <img src={paypal} alt="" />
                        </div>
                    </div>
                    <div className='mt-2'>
                        © Copyright 2022 Qodeit
                    </div>
                </div>
            </Section>
        </div>
    )
}
