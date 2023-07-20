import React from 'react'

const Slider = () => {
    return (
        <div>

            <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
            <div className='flex'>
                <input id="default-range" type="range" value="50" className="mt-2 w-56 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                <p>12%</p>
            </div>
            

        </div>
    )
}

export default Slider