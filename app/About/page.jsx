"use client"

import React from 'react';

const AboutUs = () => {
  // Random "About Us" text (you can replace this with actual content)
  const aboutUsText = `Welcome to our e-commerce store! We are passionate about providing high-quality products and excellent customer service. Our goal is to make your shopping experience delightful and convenient. Thank you for choosing us.`;

  // Team members (you can expand this array)
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
    },
    {
      name: 'Michael Johnson',
      position: 'Marketing Specialist',
    },
  ];

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="container mx-auto p-4 pt-24">
      {/* About Us Section */}
      <section className="mb-8 bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">{aboutUsText}</p>
      </section>

      {/* Our Team Section */}
      <div className='  w-full flex flex-col sm:flex-row  drop-shadow-xl shadow-2xl p-8'>
      <section className="mb-8 bg-white  rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 p-5   sm:w-2/5   md:mr-14" >
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <ul>
          {teamMembers.map((member, index) => (
            <li
              key={index}
              className="text-gray-700 mb-2 "
            >
              <span className="font-bold">{member.name}:</span> {member.position}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Us Section */}
      <section className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300  sm:w-2/5">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="border rounded w-full p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-background duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;



