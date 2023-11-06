"use client"
import React, { useState, useEffect } from 'react';
import Product from '../Product/page';

const womenProducts = [
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Elegant Dress',
    price: 49.99,
    description: 'A beautiful and elegant dress for any special occasion.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Casual Jeans',
    price: 34.99,
    description: 'Comfortable and stylish jeans for everyday wear.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Summer Blouse',
    price: 29.99,
    description: 'Light and breezy blouse for the perfect summer look.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Sneaker Shoes',
    price: 54.99,
    description: 'Stylish and comfortable sneakers for an active lifestyle.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Classic Handbag',
    price: 44.99,
    description: 'A classic handbag that complements any outfit.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Stylish Hat',
    price: 19.99,
    description: 'A fashionable hat for a trendy look.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Lace Gloves',
    price: 12.99,
    description: 'Elegant lace gloves for a touch of sophistication.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  {
    imgSrc:
      'https://th.bing.com/th/id/OIP.LIrIpZIfHmLmzrCzM39RRgAAAA?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Silver Necklace',
    price: 39.99,
    description: 'A beautiful silver necklace to enhance your style.',
    longdesc: "jhdsfbjdshjdfsvhsdhuisbhb uysguifwevfshfvudfeougervehbvv uyfyguwegfyuwfebsgyasubfhawufgwofweovsvsyfweyu"
  },
  // You can add more product objects here with descriptions
];

const Women = () => {
  const [products, setProducts] = useState(womenProducts);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState('none'); // 'none', 'lowToHigh', 'highToLow'

  const [typingText, setTypingText] = useState("Women's Products");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      if (charIndex < typingText.length && !isDeleting) {
        setCharIndex(charIndex + 1);
      } else if (charIndex > 0 && isDeleting) {
        setCharIndex(charIndex - 1);
      } else if (charIndex === typingText.length) {
        setIsDeleting(true);
      } else if (charIndex === 0) {
        setIsDeleting(false);
      }
    };
    const interval = setInterval(typeText, 100); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [charIndex, typingText, isDeleting]);

  // Sorting by price function
  const sortProductsByPrice = () => {
    if (sortBy === 'lowToHigh') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (sortBy === 'highToLow') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  };

  // Handle price slider changes
  const handlePriceSliderChange = (event, newValue) => {
    setPriceRange({ min: newValue[0], max: newValue[1] });
  };

  // Filter products by price range
  useEffect(() => {
    const filteredProducts = womenProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
    setProducts(filteredProducts);
  }, [priceRange, womenProducts]);

  return (
    <div className="container mx-auto p-4 pt-28
    ">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-6xl">
        {typingText.substring(0, charIndex)}
        <span style={{ visibility: charIndex === typingText.length ? 'visible' : 'hidden' }}>|</span>
      </h2>
      <div className="w-full px-6 mb-4 bg-gray-100 shadow-2xl rounded-xl py-5">
        <div className="mr-4">
          <label className="mr-3">Sort by Price:</label>
          <select
            className="border rounded p-2"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="none">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High To Low</option>
          </select>
          <button
            className="bg-blue-500 text-white p-3 hover:bg-blue-600 mt-2 transition duration-300 ml-3 rounded-lg"
            onClick={sortProductsByPrice}
          >
            Sort
          </button>
        </div>
        <div>
          <label>Price Range:</label>
          <div className="flex items-center">
            <p className="mr-2">${priceRange.min}</p>
            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })}
              className="w-full"
            />
            <p className="ml-2">${priceRange.max}</p>
            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap drop-shadow-2xl shadow-2xl">
        {products.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.imgSrc}
            productName={product.name}
            price={product.price}
            productDescription={product.description}
            longdesc={product.longdesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Women
