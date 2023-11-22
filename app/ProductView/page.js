"use client"
import React, { useContext, useState } from 'react';
import Notification from '../Notification/page';
import Link from 'next/link';
import { AddCartProvider } from "../addCartProvider";
import { addCartContext } from "../context";

const ProductView = () => {
  const obj = useContext(addCartContext)
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  let imageUrl = obj.img;
  let productName=obj.name;
  let productDescription=obj.shortdesc;
  let price=obj.price;
  let shortDesc =  obj.desc;
  
  const handleAddToCart = () => {
    const existingProductIndex = obj.cart.findIndex((item) => item.productName === obj.name);

    if (existingProductIndex !== -1) {
      // Product with the same name exists, update its quantity
      const updatedCart = [...obj.cart];
      updatedCart[existingProductIndex].quantity += 1;
      obj.setCart(updatedCart);
    } else {
      // Product with the same name doesn't exist, add it to the cart
      obj.setCart([...obj.cart, { imageUrl, productName, productDescription, price, quantity: 1 }]);
      console.log(shortDesc)
    }

    setNotificationMessage('Product added successfully!');
    setShowNotification(true);

    // Automatically hide the notification after 1.5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 1500);
    localStorage.setItem('cart', JSON.stringify(obj.cart));

    // Set the state to show the ProductView

  };
  
 
  return (
     
   <div className="md:grid md:grid-cols-4 md:grid-rows-3 gap-4 mr-10 grid grid-row pt-24 mb-8 ml-8 bg-white">
      {/* <!-- Row 1 --> */}
      <div className="bg-blue-200 row-span-3 col-span-2 rounded-lg"> <img src={obj.img}
          alt="Picture of the author"
          className="w-full h-full object-cover rounded-lg"/></div>
      <div className=" p-4 col-span-2 pt-10 bg-white"> <h1 className=" text-gray-700 font-bold text-5xl">{obj.name}</h1> 
       <br/>
       <div className='bg-white'>
       <span className='text-xl mr-1'>$</span>
       <span className=' text-sm line-through mr-1'>{price}</span>
       <span className=' text-2xl text-red-600'>{(price*0.8).toFixed(2)}</span>
       </div>
       </div>
      <div className="bg-white p-4 col-span-2 row-span-3">
        <h1 className="font-bold text-xl">Description:</h1> <br/>
        <p className=' text-justify'>
    {shortDesc}
    <br/>
    { productDescription }
   </p>
    <div>

    </div>
      </div>
      <div className="bg-[rgba(53,42,172,0.93)] text-white p-4 text-center hover:transform hover:scale-105 rounded-lg">BUY NOW</div>
    
      {/* <!-- Row 2 --> */}
      <div className="bg-[rgba(53,42,172,0.93)] text-white p-4 text-center hover:transform hover:scale-105 rounded-lg" onClick={handleAddToCart}>ADD TO CART</div>
      {showNotification && <Notification message={notificationMessage} />}
      </div>
          
      )
    }


 
export default ProductView;