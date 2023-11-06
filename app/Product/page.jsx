"use client"
import React, { useContext, useState } from 'react';
import { addCartContext } from '../context';
import Notification from '../Notification/page';
import ProductView from '../ProductView/page'; // Import ProductView component
import Link from 'next/link';
const Product = ({ imageUrl, productName, price, productDescription }) => {
  const obj = useContext(addCartContext);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [productViewData, setProductViewData] = useState(null); // State for ProductView
  
  const handleAddToCart = () => {
    const existingProductIndex = obj.cart.findIndex((item) => item.productName === productName);

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
    setProductViewData({ imageUrl, productName, productDescription, show: true });
  };
  function renderProduct(productName){
   obj.setName(productName);
  obj.setImge(imageUrl)

   obj.setPrice(price)
   obj.setDesc(productDescription)

   console.log(obj.name);
  //  console.log(obj.img)
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img src={imageUrl} alt={productName} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800" onClick={()=>{
            renderProduct(productName)
          }}><Link href="/ProductView">{productName}</Link></h2>
          <p className="text-sm text-gray-600 mb-2">{productDescription}</p>
          <div className="text-xl text-indigo-600">${price}</div>
          <div className="mt-4">
            <button
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {showNotification && <Notification message={notificationMessage} />}
     
    </div>
  );
};

export default Product;

