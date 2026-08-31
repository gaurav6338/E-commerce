import React, { useContext } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-40 md:w-50' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 mt-1'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      
      <div className='flex items-center gap-8'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className=' w-5 cursor-pointer' alt="Search" />
        <div className='group relative '>
        <Link to='/Login'><img src={assets.profile_icon} className=' w-5 cursor-pointer' alt="Profile" /></Link>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black'>My profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>

          </div> 
        </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className=' w-5 cursor-pointer min-w-5' alt="Cart" />
          <p className='absolute -bottom-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>{getCartCount()}</p>
        </Link>

        <img onClick={()=>setIsMenuOpen(true)} src={assets.menu_icon} className=' w-5 cursor-pointer sm:hidden' alt="Menu" />

        <div>
          <div className={`absolute overflow-hidden top-0 right-0 bottom-0 z-50 bg-white  flex flex-col  text-center transition-all duration-300 ${isMenuOpen ? 'w-full' : 'w-0'}`}>
            <div onClick={()=>setIsMenuOpen(false)}  className='flex flex-col text-gray-600'>
              <div className='flex items-center gap-4 p-3'>
               <img className=' rotate-180 h-3 cursor-pointer' src={assets.dropdown_icon} alt="Close" />
               <p className='font-bold text-lg'>Back</p> 
              </div>
            
            <NavLink to='/' className='flex flex-col items-center gap-1 my-5 mt-8' onClick={()=>setIsMenuOpen(false)}>
              <p className='font-bold text-lg'>HOME</p>
              <hr className='w-1/8 border-none h-[1.5px] bg-gray-700 hidden ' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1 my-5' onClick={()=>setIsMenuOpen(false)}>
              <p className='font-bold text-lg'>COLLECTION</p>
              <hr className='w-1/8 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 my-5' onClick={()=>setIsMenuOpen(false)}>
              <p className='font-bold text-lg'>ABOUT</p>
              <hr className='w-1/8 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 my-5' onClick={()=>setIsMenuOpen(false)}>
              <p className='font-bold text-lg'>CONTACT</p>
              <hr className='w-1/8 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
