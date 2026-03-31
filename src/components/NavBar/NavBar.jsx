import React, { useContext } from 'react';
import { CartContext } from "../NavCart/CartContext";

const Navbar = () => {
  // Pull cartItems AND setShowCartView from global context
  const { cartItems, setShowCartView } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-6 py-4 lg:px-12 flex justify-between items-center shadow-sm">
      
      <a href="/" className="text-3xl font-bold text-[#8a2be2]">
        DigiTools
      </a>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#products" className="hover:text-purple-600 transition-colors">Products</a></li>
        <li><a href="#features" className="hover:text-purple-600 transition-colors">Features</a></li>
        <li><a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a></li>
        <li><a href="#testimonials" className="hover:text-purple-600 transition-colors">Testimonials</a></li>
        <li><a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a></li>
      </ul>

      <div className="flex items-center space-x-6">
        
        {/* Cart Icon - Added href to scroll down, and onClick to switch the view */}
        <a 
          href="#tools-section" 
          onClick={() => setShowCartView(true)} 
          aria-label="Cart" 
          className="relative text-gray-700 hover:text-purple-600 transition-colors cursor-pointer block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          
          {cartItems && cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </a>

        <a href="#login" className="text-gray-700 font-medium hover:text-purple-600 transition-colors">Login</a>
        <button className="bg-[#8a2be2] text-white px-6 py-2.5 rounded-full font-medium hover:bg-purple-700 transition-colors shadow-md">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;