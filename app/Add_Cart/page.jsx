"use client"

import React, { useContext, useState, useEffect } from "react";
import { AddCartProvider } from "../addCartProvider";
import { addCartContext } from "../context";
import Link from "next/link";

const AddCart = () => {
  const obj = useContext(addCartContext);
  const [discount, setDiscount] = useState(0);
  const [gst, setGst] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function increaseQuantity(i) {
    let copyCart = [...obj.cart];
    copyCart[i].quantity += 1;
    obj.setCart(copyCart);
  }

  function decreaseQuantity(i) {
    if (obj.cart[i].quantity > 1) {
      let copyCart = [...obj.cart];
      copyCart[i].quantity -= 1;
      obj.setCart(copyCart);
    }
  }

  function removeProduct(i) {
    let copyCart = [...obj.cart];
    copyCart.splice(i, 1);
    obj.setCart(copyCart);
  }

  function calculateTotalPrice() {
    const calculatedTotalPrice = obj.cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    const calculatedDiscount = calculatedTotalPrice * 0.1; // 10 percent discount
    setDiscount(calculatedDiscount);

    const calculatedGst = calculatedTotalPrice * 0.02; // 2 percent GST
    setGst(calculatedGst);

    setTotalPrice(calculatedTotalPrice);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [obj.cart]); // Calculate the total price whenever the cart changes

  const renderCart = obj.cart.map((t, i) => (
    <div className="w-screen md:h-48 bg-slate-200 justify-center  " key={i}>
      <div className="flex bg-slate-200 md:flex-row  flex-col p-2 h-full ml-9 justify-center ">
        <div className="flex flex-col md:w-1/4 justify-center items-center w-screen">
          <img src={t.imageUrl} alt={t.productName} className="product-image h-48 object-contain" />
        </div>
        <div className="px-3 w-2/4 flex flex-col h-full ml-14 p-2">
          <div className="font-semibold text-xl text-blue-600 pb-1 mb-4 px-3 pt-4">{t.productName}</div>
          <div className="p-3">{t.productDescription}</div>
          <div className="p-1 px-3 text-lg text-emerald-700">Price - {t.price}</div>
        </div>
        <div className="w-full p-3 flex flex-col md:flex-row justify-center items-center">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="font-medium font-sans mt-0 mb-3">Quantity</div>
            <div>
              <div class="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6  hover-bg-gray-100"
                  onClick={() => {
                    increaseQuantity(i);
                  }}
                >
                  +
                </button>
                <div class="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6  hover-bg-gray-100">
                  {t.quantity}
                </div>
                <button
                  class="px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6  hover-bg-gray-100"
                  onClick={() => {
                    decreaseQuantity(i);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="flex md:w-1/4 md:flex-col  flex-row items-center   justify-between ml-0 pl-0 ">
            <Link href="/Buynow" onClick={
              ()=>{
               obj.setPrice(t.price)


              }
            }>
            <button
              class=" ml-0 md:px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus-outline-none focus-ring focus-ring-blue-300 focus-ring-opacity-80 w-full text-center md:my-3"
            >
              Buy Now
            </button>
            </Link>
            <div class=" ml-3 flex overflow-hidden bg-white border divide-x rounded-lg rtl-flex-row-reverse">
              <button
                class=" md:px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm-text-base sm-px-6  hover:bg-gray-100"
                onClick={() => {
                  removeProduct(i);
                }}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <AddCartProvider>
      <div  className=" pt-20">
        {renderCart}
      </div>
      {obj.cart.length > 0 && (
        <div className="text-center mt-3">
          <div className=" p-4 border-solid border-2 border-black align-middle mx-10 rounded-lg">
            <h1 className=" font-bold text-xl mb-4">  TOTAL BILL</h1>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>GST: ${gst.toFixed(2)}</p>
            <p>Final Price: ${(totalPrice - discount + gst).toFixed(2)}</p>
          </div>
          <Link href="/Buynow" onClick={()=>{
            obj.setPrice((totalPrice - discount + gst).toFixed(2))
          }}> 

          <button
            className=" px-6 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus-outline-none focus-ring focus-ring-blue-300 focus-ring-opacity-80 w-11/12 text-center my-3 transition-transform duration-300 transform hover:scale-110"
          >Buy Now
          </button>
          </Link>
        </div>
      )}
    </AddCartProvider>
  );
};

export default AddCart;





