import React from 'react'
import { useEffect,useState } from 'react'

const Slider = (props) => {
    const [val,setVal]=useState('50%');

    const onchange =() => {
        console.log(val);
        setVal(val);
    };
    return (
        <div>
            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.txt}</label>
            <div className='flex'>
                <input type="range" min={0} max="100"  className="w-5/6 range range-primary border-none " />
                <p>{val}</p>
            </div>
            

        </div>
    )
}

export default Slider