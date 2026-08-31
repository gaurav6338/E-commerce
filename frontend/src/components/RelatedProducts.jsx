import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext, useState, useEffect } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,Subcategory}) => {

  const {products} = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productscopy = products.slice();
      productscopy = productscopy.filter((item) => category === item.category);
      productscopy = productscopy.filter((item) => Subcategory === item.subCategory);
      setRelatedProducts(productscopy);
    
      setRelatedProducts(productscopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relatedProducts.map((item) => (
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
