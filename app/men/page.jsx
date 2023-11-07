"use client"
import React, { useState, useEffect } from 'react';
import Product from '../Product/page';

const menProducts = [
  {
    imgSrc: 'shoe1.jpg',
    name: 'Athletic Sneakers',
    price: 79.99,
    description: 'Comfortable athletic sneakers for active lifestyles.',
    longdesc: "Enjoy the perfect blend of style and performance with these top-quality athletic sneakers. These sneakers are designed to provide exceptional support, making them ideal for sports, workouts, or casual wear."
  },
  {
    imgSrc: 'shoe2.png',
    name: 'Casual Slip-Ons',
    price: 49.99,
    description: 'Easy-to-wear slip-on shoes for a laid-back look.',
    longdesc: "Step into comfort with these versatile slip-on shoes designed for both style and convenience. Whether you're heading to a beach party or a casual dinner, these slip-ons are the perfect choice for a relaxed and stylish appearance."
  },
  {
    imgSrc: 'shoe3.png',
    name: 'Formal Oxfords',
    price: 99.99,
    description: 'Elegant formal oxfords for special occasions.',
    longdesc: "Elevate your formal attire with these exquisite oxfords, a perfect choice for any special event. Crafted with attention to detail, these oxfords exude sophistication and will leave a lasting impression at weddings, galas, and formal gatherings."
  },
  {
    imgSrc: 'shoe4.png',
    name: 'Hiking Boots',
    price: 89.99,
    description: 'Sturdy hiking boots for outdoor adventures.',
    longdesc: "Conquer the great outdoors with these durable and comfortable hiking boots, built for rugged terrain. With advanced technology for traction and support, these boots will keep you safe and comfortable on your wilderness expeditions."
  },
  {
    imgSrc: 'ment1.png',
    name: 'Classic White Tee',
    price: 19.99,
    description: 'A timeless white t-shirt for a casual look.',
    longdesc: "Upgrade your wardrobe with this essential white tee, a versatile piece that complements any outfit. Made from premium cotton, this classic white tee offers superior comfort and breathability, making it an ideal choice for everyday wear."
  },
  {
    imgSrc: 'ment2.png',
    name: 'Graphic Print Shirt',
    price: 29.99,
    description: 'Express your style with a trendy graphic print shirt.',
    longdesc: "Make a statement with this eye-catching graphic print shirt, designed for those who love to stand out. The intricate graphic design and high-quality fabric ensure that you'll turn heads wherever you go, and the shirt's durability will keep it looking great over time."
  },
  {
    imgSrc: 'ment3.png',
    name: 'Striped Polo Shirt',
    price: 24.99,
    description: 'A classic striped polo shirt for a smart-casual look.',
    longdesc: "Achieve a polished look with this timeless striped polo shirt, suitable for various occasions. The soft and breathable fabric offers comfort, and the classic stripes add a touch of elegance. Whether you're at a business meeting or a weekend brunch, this shirt is a versatile choice."
  },
  {
    imgSrc: 'ment4.png',
    name: 'Sporty Performance Tee',
    price: 34.99,
    description: 'Stay active and stylish with a performance tee.',
    longdesc: "Experience superior comfort and style with this performance tee, perfect for your active lifestyle. Engineered with moisture-wicking technology, this tee keeps you cool and dry during workouts, and its sporty design ensures you look your best while staying fit."
  },
  // You can add more product objects here with longer descriptions
];


const Men = () => {
  const [products, setProducts] = useState(menProducts);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [sortBy, setSortBy] = useState('none'); // 'none', 'lowToHigh', 'highToLow'

  const [typingText, setTypingText] = useState("Men's Products");
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
    const filteredProducts = menProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
    setProducts(filteredProducts);
  }, [priceRange, menProducts]);

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

export default Men

