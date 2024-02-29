import React from 'react'
import LandingPage from './LandingPage'
import Testimonials from './Testimonials'
import Demo from './Demo'
// import Features from './Features';
import Services from './Services';
import ReviewForm from './ReviewForm';
import Section from '../factory components/Section';

export default function Home() {
    return (
        <div>
            <LandingPage />
            <Section>

                <Services text="Our Features" />
                <div className='w-[90%] h-[2px] bg-sec m-auto'></div>
                <Testimonials />
                <div className='w-[90%] mt-[100px] h-[2px] bg-sec m-auto'></div>


                <Demo />
                <div className='w-[90%] mt-[70px] h-[2px] bg-sec m-auto'></div>
                <Services />
                <ReviewForm />
            </Section>
        </div>
    )
}
