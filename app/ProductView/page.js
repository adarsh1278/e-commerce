// components/Product.js
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
  let productDescription=obj.desc;
  let price=obj.price;
  
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
     
   
          <div className="md:grid md:grid-cols-4 md:grid-rows-3 gap-4  grid grid-row  pt-24">
      {/* <!-- Row 1 --> */}
      <div className="bg-blue-200 row-span-3 col-span-2 rounded-lg"> <img src={obj.img}
          alt="Picture of the author"
          className="w-full h-full object-cover rounded-lg"/></div>
      <div className=" bg-white
       p-4 col-span-2 pt-10"> <h1 className=" text-6xl text-center">{obj.name}</h1> </div>
      <div className="bg-white p-4 col-span-2 row-span-3">
        <h1 className="font-bold text-xl">Description:</h1>
        {productDescription}
     </div>
      <div className=" bg-slate-300 p-4 text-center hover:translate-y-2 hover:font-bold hover:text-xl">BUY NOW</div>
    
      {/* <!-- Row 2 --> */}
      <div className="bg-slate-300 p-4 text-center hover:translate-y-2 hover:font-bold hover:text-xl " onClick={handleAddToCart}>ADD TO CART</div>
      {showNotification && <Notification message={notificationMessage} />}
      </div>
      )
    }


 
export default ProductView;

