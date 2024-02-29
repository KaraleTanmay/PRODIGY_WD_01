import React from 'react'

export default function Section(props) {
    return (
        <div className='w-[90%] m-auto md:w-[80%] overflow-x-hidden'>
            {props.children}
        </div>
    )
}
