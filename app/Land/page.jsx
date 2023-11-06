"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image.js";
import Product from '../Product/page'; 
import { AddCartProvider } from '../addCartProvider';

function land() {
  const words = ["BH", "AR", "AT"];
  const colors = ["red", "white", "green"];
  const [displayText, setDisplayText] = useState("");
  const [background, setBackground] = useState("blue");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      if (wordIndex < words.length) {
        if (letterIndex < words[wordIndex].length) {
          const currentChar = words[wordIndex][letterIndex];
          const currentColor = colors[wordIndex];
          setDisplayText(
            (prevText) =>
              prevText +
              `<span style="color: ${currentColor}">${currentChar}</span>`
          );
          setLetterIndex(letterIndex + 1);
        } else if (wordIndex === 0) {
          setBackground("blue");
          setWordIndex(1);
          setLetterIndex(0);
        } else if (wordIndex === 1) {
          setBackground("blue");
          setWordIndex(2);
          setLetterIndex(0);
        } else {
          // Reached the end of the word, reset and repeat
          setBackground("blue");
          setWordIndex(0);
          setLetterIndex(0);
          setDisplayText(""); // Optional: clear the text for a pause before repeating
        }
      }
    };

    const typingInterval = setInterval(type, 300); // Adjust the duration here (in milliseconds)

    return () => clearInterval(typingInterval);
  }, [wordIndex, letterIndex]);

  return (
  
    <div className="flex-col bg-[rgb(53,42,172)]   pt-20">
    <div className="w-100 bg-[rgb(53,42,172)] flex sm:flex-row flex-col-reverse">
        <div className=" sm:w-2/5 flex justify-center items-center flex-col shadow-6xl text-5xl m-6 mb-12">
            <div className=" sm:text-4xl md:text-5xl text-gray-50 font-bold m-9 mt-0 mr-0 drop-shadow-2xl font-serif ">Shop With </div>
            <div className=" sm:text-5xl lg:text-7xl md:text-6xl text-gray-50 font-extrabold drop-shadow-2xl font-serif"><div className=" inline-block  relative left-0 font-serif">E - </div> <span
        className="whitespace-no-wrap overflow-hidden border-r border-black "
        dangerouslySetInnerHTML={{ __html: displayText }}
      ></span></div>
          
             </div>
        <div className=" w-screen sm:w-3/5 right-0 text-xl">
        <img  src="/homemain.png" alt="contact choolha chowka image" className=" right-0 w-100vw  w-screen bg-[#352AAC]" />
        </div>
       </div>
       <div className=" flex flex-col sm:flex-row text-lg sm:p-5">
       <Product
        imageUrl="shoe1.jpg"
        productName="Product 1"
        productDescription="Description for Product 1 in 20 words or less."
        price={24.99}
      />
       <Product
        imageUrl="shoe1.jpg"
        productName="Product 2"
        productDescription="Description for Product 2 in 20 words or less."
        price={24.99}
      />
       <Product
        imageUrl="shoe1.jpg"
        productName="Product 3"
        productDescription="Description for Product 3 in 20 words or less."
        price={24.99}
      />
      
       </div>
  </div>
  );
}

export default land;

