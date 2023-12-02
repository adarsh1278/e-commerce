"use client"

import Link from "next/link"
import React, { useState } from 'react';


const Header =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [productinCart, setProductInCart] = useState("sumit ke gaand free");
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return(
        <>
        {/* <div className="bg-slate-700 p-4 text-lg text-white text-centre">Header</div>
        <div className=" text-lg bg-slate-700 text-white flex justify-between">
        <Link href="/Land" >Home</Link>
        <Link href="/About" className="ml-7">About</Link>
        <Link href="/men/">Men</Link>
        <Link href="/Women/">Women</Link>
        <Link href="/Add_Cart/">Add to cart</Link>
        <Link href="/Login/">Login</Link>
        <Link href="/Register/">Register</Link>
        </div> */}
    

    <nav className="  bg-[rgba(59,47,198,0.98)] shadow  fixed  w-screen  z-10  ">
   
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
        
          <Link href="/Land " > {/* Use Link instead of anchor tag */}
            <img
              className="w-auto h-12 sm:h-12 w-25"
              src="https://ecommercebharat.co/wp-content/uploads/2020/10/ebharat-png-1.png"
              alt=""
            />
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/Land" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover-text-red-400 md:mx-4 md:my-0" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/men" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover-text-blue-400 md:mx-4 md:my-0 " onClick={toggleMenu}>
              Men
            </Link>
            <Link href="/Women" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover-text-blue-400 md:mx-4 md:my-0" onClick={toggleMenu}>
              Women
            </Link>
            <Link href="/About" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover-text-blue-400 md:mx-4 md:my-0" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/signup" className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover-text-blue-400 md:mx-4 md:my-0" onClick={toggleMenu}>
              Register
            </Link>
          </div>

          <div className="flex justify-center md:block">
            <Link href="/Add_Cart" className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover-text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>







        </>
    )
}
export default Header