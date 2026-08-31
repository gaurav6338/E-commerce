import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to our company! We are a team of passionate individuals dedicated to providing the best products and services to our customersOur mission is to innovate and deliver solutions that make a difference in people's lives. We believe in the power of technology to create positive change.
          </p>
          <p>
            Our team is made up of experts in various fields, including software development, design, marketing, and customer support. We work together to ensure that our products meet the highest standards of quality and usability. We are committed to continuous improvement and strive to exceed our customers' expectations.
          </p>
          <b className='text-gray-500'>
            Our Mission
          </b>
          <p>our mission is to innovate and deliver solutions that make a difference in people's lives.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='mx-5 border border-gray-200 bg-gray-100 flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'md:mb-5>
          <b className='text-gray-500'>Quality Assurance</b>
          <p>We are committed to providing the highest quality products and services to our customers.</p>
        </div>
        <div className='mx-5 border border-gray-200 bg-gray-100 flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-500'>Convenience</b>
          <p>We strive to make your shopping experience as convenient as possible, with easy navigation, fast checkout, and reliable delivery.</p>
        </div>
        <div className='mx-5 border border-gray-200 bg-gray-100 flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-gray-500'>Exceptional Service</b>
          <p>We are committed to providing exceptional service to our customers, ensuring their satisfaction and loyalty.</p>
        </div>
      </div>
      <Newsletterbox/>
    </div>
  )
}

export default About
