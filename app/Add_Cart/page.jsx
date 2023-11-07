"use client"

import React, { useContext, useState, useEffect } from "react";
import { AddCartProvider } from "../addCartProvider";
import { addCartContext } from "../context";

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
    <div className="w-screen bg-slate-200" key={i}>
      <div className="p-2 flex sm:flex-row flex-col items-center gap-3 justify-center">
        {/* img */}
        <div className="w-1/2 sm:w-1/4">
          <img src={t.imageUrl} alt={t.productName} className="product-image w-full" />
        </div>

        {/* name, desc, price */}
        <div className="p-2">
          <div className="font-semibold text-xl text-blue-600">{t.productName}</div>
          <div>{t.productDescription}</div>
          <div className="text-emerald-700">Price - {t.price}</div>
        </div>

        <div className="p-2">
          <div className="font-medium font-sans mb-2">Quantity</div>
          <div className="flex overflow-hidden bg-white border divide-x rounded-lg">
            <button
              className="px-2 py-1 text-sm font-medium text-gray-600"
              onClick={() => {
                increaseQuantity(i);
              }}
            >
              +
            </button>
            <div className="px-2 py-1 text-sm font-medium text-gray-600">
              {t.quantity}
            </div>
            <button
              className="px-2 py-1 text-sm font-medium text-gray-600"
              onClick={() => {
                decreaseQuantity(i);
              }}
            >
              -
            </button>
          </div>
        </div>
<div className="flex w-1/4 sm:flex-col flex-row gap-3 items-center justify-center px-5">
<div className="">
          <button
            className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus-outline-none focus-ring focus-ring-blue-300 focus-ring-opacity-80 text-center my-3"
          >
            Buy Now
          </button>
        </div>

        <div className=" hover:bg-gray-100 flex bg-white border rounded-lg ">
          <button
            className="px-5 font-medium tracking-wide capitalize transition-colors duration-300 transform text-gray-600 rounded-lg  focus-outline-none focus-ring focus-ring-blue-300 focus-ring-opacity-800 text-center my-2"
            onClick={() => {
              removeProduct(i);
            }}
          >
            Remove
          </button>
        </div>
</div>
        
      </div>
    </div>
  ));

  return (
    <AddCartProvider>
      <div className="pt-20">
        {renderCart}
      </div>
      {obj.cart.length > 0 && (
        <div className="text-center mt-3">
          <div className="p-4 border-solid border-2 border-white mx-10 rounded-lg bg-slate-200">
            <h1 className="font-bold text-xl mb-4 text-gray-700">TOTAL BILL</h1>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>GST: ${gst.toFixed(2)}</p>
            <p className="font-bold text-lg">Final Price: ${(totalPrice - discount + gst).toFixed(2)}</p>
          </div>
          <button
            className=" px-6 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 focus-outline-none focus-ring focus-ring-blue-300 focus-ring-opacity-80 w-11/12 text-center my-3 duration-300 hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      )}
    </AddCartProvider>
  );
};

export default AddCart;