import Image from 'next/image'
import React from 'react'
import Notes from './Notes'
import { Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';


const Profile = () => {
    return (
        <div className='p-4'>
            <div className='relative flex mt-10 md:mt-3 lg:mt-5 mx-6 mb-7 '>

                
                <img className='h-20 w-20 rounded-full' src="/dp2.jpg" alt='dp' srcset="" />
                <div className='mx-2 mt-2'>
                    <div className='font-bold text-lg'>Hi Mike,</div>
                    <div className='text-gray-400 text-xs'>welcome back</div>
                </div>
                <Badge className='block absolute right-0' color="primary" variant="dot">
                    <NotificationsIcon
                        sx={{
                            color: 'gray'
                        }}
                    />
                </Badge>
            </div>

            <div className='mx-6'>
                <p className='font-semibold text-base mb-2'>Today</p>
                <p className='font-bold text-3xl'>$19.45</p>
                <p className='text-gray-400 text-xs'>Account balance</p>

                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 mt-4' >
                    <div className='mb-2'>
                        <p className='font-bold text-xl'>$4,000</p>
                        <p className='text-gray-400 text-xs'>Year-to-Date</p>
                    </div>

                    <div className='mb-2'>
                        <p className='font-bold text-xl'>$1,892</p>
                        <p className='text-gray-400 text-xs'>Total Interest</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center md:justify-start'>
                <button type="button" className="mx-6 mt-3 mb-5 px-5 py-2.5 mr-2 text-xl w-2/3 md:w-40 lg:text-sm  text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ">I want to</button>
            </div>

            <div className='mx-6 my-6 font-semibold text-base '>Recent Transactions</div>
            <Notes />
            <Notes />
            <Notes />
        </div>
    )
}

export default Profile