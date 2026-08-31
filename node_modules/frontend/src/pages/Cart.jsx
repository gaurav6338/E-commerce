import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const {products,currency,cartItems,updatedQuantity,navigate } = useContext(ShopContext);

  const [ cartData,setcartData] = useState([]);

  useEffect(()=>{
    const tempdata = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    console.log(tempdata)
    setcartData(tempdata);
  },[cartItems])

  
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
        </div>

        <div>
        {
            cartData.map((item, index) => {
              const productdata = products.find((product) => product._id === item._id);
            
              return (
                <div key={index} className=' py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center'>
                  <div className='flex items-start gap-3'>
                    <img src={productdata.image[0]} className='w-16 sm:w-20 ' alt={productdata.name} />
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                        <p>{currency}{productdata.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border border-gray-300'>{item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input onClick={(e)=>e.target.value== '' || e.target.value== '0'?null:updatedQuantity(item._id,item.size,Number(e.taget.value))} min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-2 sm:px-3 py-1' type="number"/>
                  <img onClick={()=>updatedQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5' src={assets.bin_icon} alt="Delete" />
                </div>
              )
            })
          }
        </div>
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={() => navigate('/place-order')} className='w-full flex justify-center bg-black text-white py-2 px-4 cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Cart
