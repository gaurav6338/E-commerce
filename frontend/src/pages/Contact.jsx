import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>s4700 william station <br /> City, Country</p>
          <p className='text-gray-500'>Phone: +1 234 567 890 <br /> Email: contact@example.com</p>
          <p className='font-semibold text-gray-600'>Careers at SHOPVERSE</p>
          <p className='text-gray-500'>learn more about our team and Job Openings</p>
          <button className='border border-gray-300 text-gray-600 px-8 py-4 text-sm rounded hover:bg-gray-600 transition all duration-500 hover:text-white'>VIEW OPENINGS</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
