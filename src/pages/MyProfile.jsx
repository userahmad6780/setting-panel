import React from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  return (
    <>
      <div className='w-1/3'>
        <img src={assets.profile_pic} alt={assets.profile_pic} className='rounded-lg w-30 mt-10 mb-5' />
        <p className='text-lg font-medium border-b-1 border-gray-300 pb-1'>Pikes Light</p>
      </div>
      <p className='text-gray-500 py-5 underline'>CONTACT INFORMATION</p>
      <div className='flex'>
        <div className='text-sm pr-10'>
          <p className='pb-2'>Email id:</p>
          <p className='pb-2'>Phone:</p>
          <p>Address:</p>
        </div>
        <div className='text-sm'>
          <p className='text-blue-400 pb-2'>test@gmail.com</p>
          <p className='text-blue-400 pb-2'>0000000000</p>
          <p className='text-blue-400'>57th Cross, Richmond London</p>
        </div>
      </div>
      <p className='text-gray-500 py-5 underline'>BASIC INFORMATION</p>
      <div className='flex'>
        <div className='text-sm pr-10'>
          <p className='pb-2'>Gender:</p>
          <p className='pb-2'>Birthday:</p>
        </div>
        <div className='text-sm'>
          <p className='text-gray-500 text-sm pb-2'>Not Selected</p>
          <p className='text-gray-500 text-sm pb-2'>Not Selected</p>
        </div>
      </div>
      <div className='mt-10'>
        <button className='border-1 mr-3 text-sm rounded-full text-gray-600 border-blue-400 w-max py-2 px-6 mb-2 hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer'>
          Edit
        </button>
        <button className='border-1 text-sm rounded-full text-gray-600 border-blue-400 w-max py-2 px-6 hover:bg-blue-400 hover:text-white hover:border-blue-400 cursor-pointer'>
          Save information
        </button>
      </div>
    </>
  )
}

export default MyProfile