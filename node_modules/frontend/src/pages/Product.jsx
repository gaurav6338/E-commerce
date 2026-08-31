import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useContext, useState, useEffect } from 'react';
import {assets} from '../assets/frontend_assets/assets'
import RelatedProducts from '../components/RelatedProducts';

  function Product() {

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState();

    const fetchProductData = async () => {

      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };

    useEffect(() => {
      fetchProductData();
    }, [productId]);

    return productData ? (
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.6%] w-full'>
              {productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={item} alt="" />
              ))}
            </div>
            <div className='w-full sm:w-[80%] ml-0 sm:ml-5'>
              <img className='w-full h-auto' src={image} alt="" />
            </div>
          </div>
          <div className='flex-1'>
            <h1 className='text-3xl font-medium mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-3'>
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(255)</p>
            </div>
            <p className='text-3xl font-bold mt-3'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5 text-lg'>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p className='font-semibold text-xl'>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button onClick={() => setSize(item)} key={index} className={`border border-gray-400 rounded-sm px-3 py-1 cursor-pointer bg-gray-200 hover:bg-gray-300 ${item === size ? 'border border-orange-500' : ''}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>Add to Cart</button>
            <hr className='mt-8 sm:w-4/5 text-gray-300'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>cash on delivery available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <div className='flex'>
            <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
            <p className='border border-gray-300 px-5 py-3 text-sm'>Review (255)</p>
          </div>
          <div className='flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500'>
            <p>An e-commerce website is a platform that facilitates buying and selling products online. It allows businesses to showcase their products with detailed descriptions, images, prices, and customer reviews, enabling users to make informed purchasing decisions.</p>
            <p> Customers can browse through various categories, search for specific items, add products to their cart, and complete purchases securely using multiple payment options such as credit cards, debit cards, and digital wallets.</p>
          </div>
        </div>

        <RelatedProducts category={productData.category} Subcategory={productData.subCategory} />
      </div>
    ) : <div className='opacity-0'>Loading...</div>;
  }

export default Product
