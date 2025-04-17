import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 pb-10  mt-40 text-sm'>
        <div className='text-gray-600 dark:text-white'>
             <img className="w-[150px] pb-5" src={assets.logo} alt='app_logo'/>
            <p className='w-full md:w-2/3 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>COMPANY</p>
            <ul>
                <li className='text-sm pb-2'>Home</li>
                <li className='text-sm pb-2'>About us</li>
                <li className='text-sm pb-2'>Contact us</li>
                <li className='text-sm pb-2'>Privacy policy</li>
            </ul>
        </div>
        <div className='text-gray-600 dark:text-white'>
            <p className='text-lg font-semibold pb-5'>GET IN TOUCH</p>
            <ul>
                <li className='text-sm pb-2'>+92842492349230</li>
                <li className='text-sm pb-2'>prescripto@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer