import React from 'react'
import Tags from './Tags'
import DashChart from './DashChart2'
// import { CircularProgress } from '@mui/material'
// import CircularProcess from './circularDash/CircularProcessTab'
import Dash from './DropDash/Dash'
import CDash from './circularDash/CDash'
import GraphPoint from './GraphPoint'
import { Roboto_Slab } from 'next/font/google'

const robo = Roboto_Slab({ subsets: ['latin'] })


const InDashbord = () => {
  return (
    <div className='p-4'>
        <p className={`my-2 font-bold text-indigo-600 ${robo.className}`}>Retirement Income</p>
        <p className={`mb-5 font-bold text-2xl ${robo.className}`}>Starting Year 2026</p>
        
        <div className='mb-8 grid grid-cols-2 lg:grid-cols-4 '>
            <div className='col-span-2'>
                <Tags amt={'$300,000'} txt={'My Goal'}/>
            </div>
            <div className='col-span-1'>
                <Tags amt={'59%'} txt={'Goal Achieved'}/>
            </div>
            <div className='col-span-1'>
                <Tags amt={'$300'} txt={'Est. Monthly Income'}/>
            </div>
        </div>
        <p className={` ${robo.className} font-bold text-lg`}>Contribution Overtime</p>
        
        <div className='grid grid-cols-3 my-3 p-3'>
            <GraphPoint col={'bg-violet-800'} tag={'Employer'} amt={'K 73,500'} tamt={'$73,500'}/>
            <GraphPoint col={'bg-indigo-600'} tag={'Employee'} amt={'K 52,500'} tamt={'$52,500'} />
            <GraphPoint col={'bg-indigo-400'} tag={'Total Intrest'} amt={'K 244,313'} tamt={'$244,313'} />
        </div>

        <div className='mt-5 mb-8'>
            <DashChart/>
        </div>
        

        <p className={` ${robo.className} pl-3 font-bold text-lg`}>How do I compare to my peers?</p>
        <p  className='pl-3 mb-8 text-gray-400 text-sm'>These numbers present current Goals achievement</p>

        <div className='px-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4' > 
            
            <div>
                <Dash/>
            </div>
            <div className='col-span-2 flex justify-center'>
                <CDash/>
            </div>
            
        </div>

    </div>
  )
}

export default InDashbord