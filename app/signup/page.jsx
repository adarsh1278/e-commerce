// Import necessary dependencies
"use client"
import Image from 'next/image';
import appwriteService from '@/appwrite/config';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the Login component
export default function Login() {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to create a user account and show a toast notification
  const create = async () => {
    try {
      const userData = await appwriteService.createUserAccount(formData);
      console.log(userData);
      toast.success('Signup successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log('Signup failed:', error.message);
      toast.error(`Signup failed. Please try again.${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Handle form submission
 let loginstatus = "no"

  // Check if the user is logged in on component mount
  useEffect(() => {
    const checkLoggedIn = async () => {
      const isLoggedIn = await appwriteService.isLoggedIn();
      if (isLoggedIn) {
        loginstatus="yeas"
      } else {
        console.log('User is not logged in.');
      }
    };

    checkLoggedIn();
  }, []); // Make sure to pass an empty dependency array to useEffect

  // Check if the form is valid
  const isFormValid = formData.email && formData.password && formData.name;

  // Render the component
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-gray-100 p-8 rounded-md shadow-md max-w-md">
        {/* Input fields */}
        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </label>
        {/* Submit button */}
        <button
          type="button"
          onClick={create}
          disabled={!isFormValid}
          className={`bg-blue-500 text-white p-2 rounded ${
            isFormValid
              ? 'hover:shadow-lg transition-all'
              : 'cursor-not-allowed opacity-50'
          }`}
        >
          Submit
        </button>
      </form>
    
      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
}

