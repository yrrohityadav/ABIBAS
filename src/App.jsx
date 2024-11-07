import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faShoePrints } from '@fortawesome/free-solid-svg-icons'; // Corrected icons
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Used className instead of class and added Tailwind classes */}
      <div className="font-bold bg-black text-white py-2 text-center"> 
        SIGN UP 15% OFF
      </div>
      
      {/* Empty div2 with no extra styling */}
      <div className="div2"></div>

      {/* FontAwesome icons with correct icon names */}
      <div className="flex items-center justify-center text-black my-4 space-x-4 bg-green-100"> 
      </div>
      <nav className='bg-gray-300 flex items-center mx-2'>
        <div className='container mx-auto flex justify-between items-center'>
        
          
          <FontAwesomeIcon icon={faShoePrints} className="text-gray-800 text-4xl" /> </div>
          <div className='space-x-4 flex items-center'>  
          <a href='#home' className='text-black hover:text-gray-500'>MEN</a>
          <a href='#home' className='text-black hover:text-gray-500'>WOMEN </a>
          <a href='#home' className='text-black hover:text-gray-500'>KIDS</a>
          <a href='#home' className='text-white hover:text-black'>SPORTS</a> 
          <a href='#home' className='text-white hover:text-black'>LIFESTYLE</a> 
          <a href='#home' className='text-white hover:text-black'> OUTLET</a>   </div>
          
          <div className='flex items-center bg-black rounded-full px-3 py-1 my-2 mx-4 '> 
            <input
             type="text"
             placeholder='Search...'
             className='bg-transparent outline-none w-full text-gray-700'
            />
          </div>
      </nav>

<div className=' bg-white flex justify-center space-x-4 mx-2 my-4'>

<div className='bg-white mx-2 my-2 w-1/2  '>
  <h1 className='text-gray-950 text-3xl font-bold'> SHOES,CLOTHING & ACCESSORIES<br/>  <br/> <h2 className='font-sans text-red-800'>SALE: UP TP 60% OFF</h2></h1>
</div>

<div className='bg-gray-300 mx-2 my-2 w-1/2 h-44 ' >
<img src=" src/assets/ney.webp" />
</div>

</div>
<div className="bg-gray-500 p-4 mt-20">
  <div className="flex flex-wrap space-x-4 space-y-4 justify-center">
    {/* Container 1 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        {/* Image goes here */}
         
        <img src="src/assets/shoes/5.jpeg" alt="Shoe 1" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $99</p>
        <p className="text-xs text-red-500">Discount: 20% off</p>
      </div>
    </div>

    {/* Container 2 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/6.jpeg" alt="Shoe 2" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $109</p>
        <p className="text-xs text-red-500">Discount: 15% off</p>
      </div>
    </div>

    {/* Container 3 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/8.jpeg" alt="Shoe 3" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $89</p>
        <p className="text-xs text-red-500">Discount: 25% off</p>
      </div>
    </div>

    {/* Container 4 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/7.jpeg" alt="Shoe 4" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $120</p>
        <p className="text-xs text-red-500">Discount: 10% off</p>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex flex-wrap space-x-4 space-y-4 justify-center mt-4">
    {/* Container 1 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/1.jpeg" alt="Shoe 1" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $99</p>
        <p className="text-xs text-red-500">Discount: 20% off</p>
      </div>
    </div>

    {/* Container 2 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/2.jpeg" alt="Shoe 2" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $109</p>
        <p className="text-xs text-red-500">Discount: 15% off</p>
      </div>
    </div>

    {/* Container 3 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/3.jpeg" alt="Shoe 3" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $89</p>
        <p className="text-xs text-red-500">Discount: 25% off</p>
      </div>
    </div>

    {/* Container 4 */}
    <div className="w-1/4 p-2">
      <div className="bg-white h-32 overflow-hidden rounded-lg shadow-lg">
        <img src="src/assets/shoes/4.jpeg" alt="Shoe 4" className="h-full w-full object-cover" />
      </div>
      <div className="bg-gray-200 p-2 mt-2 text-center rounded-b-lg">
        <p className="text-sm font-semibold">Price: $120</p>
        <p className="text-xs text-red-500">Discount: 10% off</p>
      </div>
    </div>
  </div>
</div>



      
    </>
  );
}

export default App;
