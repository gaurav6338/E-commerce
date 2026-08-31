import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer a simple and hassle-free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return policy</p>
            <p className='text-gray-400'>We offer a 7-day return policy for your convenience</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>Our dedicated support team 24/7 is available to assist you.</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
