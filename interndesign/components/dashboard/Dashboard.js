import React from 'react'
import Profile from '../profile/Profile'
import Strategy from '../strategy/Strategy'
import InDashbord from '../income/InDashbord'

const Dashboard = () => {
    return (
        <div class="lg:ml-16 md:ml-16 grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 ">
            <div class="col-span-1 md:col-span-1 lg:col-span-1 ">
                <Profile/>
            </div>
            
            <div class=" lg:col-start-2 lg:col-span-2 ">
                <InDashbord/>
            </div>

            <div class="col-span-1 ">
                <Strategy/>
            </div>
        </div>
    )
}

export default Dashboard