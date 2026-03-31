import React, { useContext } from "react"; // Added useContext import here
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "../../NavCart/CartContext";

const Products = ({ product, addedToCart, setAddedToCart }) => {
  const { name, description, price, period, tag, features, icon } = product;
  
  // Pull addToCart from global context
  const { addToCart } = useContext(CartContext);

  // Combined function to update both the local page cart AND the Nav cart
  const handleBuyNow = () => {
    // Check if it's already in the local cart to prevent duplicates
    if (!addedToCart.includes(product)) {
      // 1. Update the local page cart
      setAddedToCart([...addedToCart, product]);
      
      // 2. Update the global Navbar cart
      addToCart(product);
      
      // 3. Fire the toast notification
      toast.success(`${name} is added to Cart`);
    } else {
      // Optional: Tell them it's already in the cart if they click twice
      toast.info(`${name} is already in the Cart`);
    }
  };

  return (
    <div className="max-w-sm rounded-2xl border-3 border-gray-300 bg-white p-6 shadow-sm relative mx-auto">
      <span
        className={`absolute right-4 top-4 text-xs font-semibold px-3 py-1 rounded-full 
            ${tag === "New" ? "new" : tag === "Best Seller" ? "best-seller" : "popular"}
        `}
      >
        {tag}
      </span>

      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <img src={icon} alt={name} />
      </div>

      <h2 className="text-xl font-semibold mb-2">{name}</h2>

      <p className="text-gray-500 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-500">/{period}</span>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <FaCheck className="text-green-500" />
              {feature}
            </li>
          );
        })}
      </ul>

      {/* Updated onClick to use our new combined function */}
      <button 
        onClick={handleBuyNow} 
        className="w-full bg-purple-600 text-white py-2 rounded-lg mt-4 font-medium hover:bg-purple-700 transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Products;