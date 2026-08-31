import { createContext, useEffect } from "react";
import {products} from '../assets/frontend_assets/assets'
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
 
    const currency ='$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems,setcartItems]=useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size)=>{

        if(!size){
            toast.error('Please select a size');
            return;
        }
        let cartData =structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setcartItems(cartData);

    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    
    const getCartCount = ()=>{
        let count = 0;
        for(let items in cartItems){
            for(let item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        count +=cartItems[items][item]
                    }
                }catch (error){

                }
                
            }
        }
        return count;
    }

    const updatedQuantity=async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItems);

        cartData[itemId][size]=quantity;
        setcartItems(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount =0;
        for(const items in cartItems){
            let itemsinfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                try{
                if(cartItems[items][item]>0){
                    totalAmount += cartItems[items][item]*itemsinfo.price;
                }
                } catch (error){
            }
            }
        }
        return totalAmount;
    }
    const value = {
       products, currency, delivery_fee,
       search, setSearch,
       showSearch, setShowSearch,
       cartItems, addToCart, getCartCount,
       updatedQuantity,getCartAmount,navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;