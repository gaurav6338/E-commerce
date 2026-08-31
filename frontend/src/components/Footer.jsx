import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-10 text-sm'>
        <div>
            <img src={assets.logo} className='m-5 w-32' alt="" />
            <p>
                lerem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque?
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 234 567 890</li>
                <li>contact@example.com</li>
            </ul>
        </div>
    </div>
    <div>
        <hr className='text-gray-300'/>
        <p className='py-5 text-sm text-center'>copyright © 2023 shopverse.com- All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer
