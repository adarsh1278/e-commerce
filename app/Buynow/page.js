"use client"


import React, { useContext, useState } from "react";
import { AddCartProvider } from "../addCartProvider";
import { addCartContext } from "../context";
const Buynowform = () => {
   
    const obj = useContext(addCartContext)
let total = obj.price;
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    mobile: "",
    paymentOption: "creditCard", // Default payment option
  });

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to the server
  };

  return (
    <div className=" pt-24">
    <div className="max-w-md mx-auto p-6 rounded-md shadow-2xl drop-shadow-2xl  m-3 mb-7">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 transition duration-300"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="pincode" className="block text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus-border-blue-500 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus-border-blue-500 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block text-gray-700">
            Payment Option
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={formData.paymentOption}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus-border-blue-500 transition duration-300"
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Total: ${total}</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default Buynowform;


