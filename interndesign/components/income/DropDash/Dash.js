import React from 'react'
import Droptab from './Droptab'

const data=[
  {
    op: 'Under 25',
  },
  {
    op: 'Under 20',
  },
];


const data2=[
  {
    op: 'K30 - K40',
  },
  {
    op: 'K40 - K50',
  },
];

const data3=[
  {
    op: 'male',
  },
  {
    op: 'female',
  },
  {
    op: 'others',
  }
];


const Dash = () => {
  return (
    <div>
      <div className='flex'>
        <p className='my-2 mr-4 font-bold '>Age:</p>
        <Droptab data={data} sel={'Under 30'}/>
      </div>
      <div className='flex'>
        <p className='my-2 mr-4 font-bold'>Salary:</p>
        <Droptab data={data2} sel={'K20 - K30'}/>
      </div>
      <div className='flex'>
        <p className='my-2 mr-4 font-bold'>Gender:</p>
        <Droptab data={data3} sel={'male'}/>
      </div>
    </div>
  )
}

export default Dash