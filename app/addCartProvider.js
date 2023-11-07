"use client"

import React, { useState, useEffect } from "react";
import { addCartContext } from "./context";

export const AddCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [img, setImge] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [shortdesc, setshortDesc] = useState("");
  useEffect(() => {
    // Load cart data from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  function addCart(url, productName) {
    const updatedCart = [...cart, { url, productName }];

    // Save the updated cart data to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCart(updatedCart);
  }

  return (
    <addCartContext.Provider value={{ cart, setCart, addCart , name,setName ,img, setImge ,price,setPrice,desc,setDesc , shortdesc,setshortDesc}}>
      {children}
    </addCartContext.Provider>
  );
};
