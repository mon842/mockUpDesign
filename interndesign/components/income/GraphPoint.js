import React from 'react'

const GraphPoint = (props) => {
    return (
        <div>
            <div className='flex'>
                <div className={` ${props.col} h-3 w-3 rounded-lg mt-1`}></div>
                <p className='mr-2 text-xs font-semibold text-gray-400'>{props.tag}</p>
                <p className='hidden md:block text-xsm md:text-sm font-bold '>{props.amt}</p>
            </div>
            <p className='block md:hidden font-extrabold'>{props.tamt}</p>
        </div>

    )
}

export default GraphPoint