import React from 'react'

const Percentage = (props) => {
  return (
    <div className='relative my-6 flex font-semibold text-sm'>
        <p >{props.txt}</p>
        <p className='absolute right-10'>{props.pec}</p>
    </div>
  )
}

export default Percentage