import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext,useState,useEffect } from 'react';
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilter,setshowFilter] = useState(false);
  const [filteredProducts,setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter((item) => item !== e.target.value));
    }else{
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter((item) => item !== e.target.value));
    }else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilters = () => {
    let productscopy = products.slice();

    if(showSearch && search){
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productscopy = productscopy.filter((item) => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productscopy = productscopy.filter((item) => subCategory.includes(item.subCategory));
    }
    setFilteredProducts(productscopy);
  };

  const sortProducts = () => {
    let fpCopy = filteredProducts.slice();
    switch(sortType){
      case 'low-high':
        fpCopy.sort((a,b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a,b) => b.price - a.price);
        break;

      default:
        applyFilters();
        break; 
    }
    setFilteredProducts(fpCopy);
  };


  useEffect(() => {
    setFilteredProducts(products);
  },[])

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProducts();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>
      <div className='min-w-60'>
        <p onClick={() => setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
      
      {/*subcategory filter*/}

      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'OUR'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">Relevent</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default Collection
