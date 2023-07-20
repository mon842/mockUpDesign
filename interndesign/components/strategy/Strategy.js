import React from 'react'
import Slider from './Slider'
import Percentage from './Percentage'
import Notice from './Notice'

const Strategy = () => {
    const d=`View Help docs >`
    return (
        <div className='mb-20 p-5 '>
            <p className='my-10 font-semibold'>Retirement Stratergy</p>
            <Slider />
            <Slider />
            <p className='w-64 my-6 bg-gray-200 h-1 '></p>
            <Percentage txt={'Employee Contribution'} pec={'8.4%'}/>
            <Percentage txt={'Interest Rate'} pec={'5%'}/>
            <button type="button" className="mx-6 mt-3 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Update</button>
            <br />
            <a className='text-blue-500' href=""> {d}</a>
            <Notice/>
        </div>
    )
}

export default Strategy