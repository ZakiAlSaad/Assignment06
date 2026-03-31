import React, { useContext } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../NavCart/CartContext"; // <-- Check this path!

const Cart = ({ product, addedToCart, setAddedToCart }) => {
  const { name, price, icon } = product;
  
  // Pull the new removeFromCart function from global context
  const { removeFromCart } = useContext(CartContext);

  const cartRemover = (currentProduct) => {
    // 1. Remove from the local page state (Your original code)
    setAddedToCart(
      addedToCart.filter((item) => currentProduct.name !== item.name)
    );

    // 2. Remove from the global Navbar context (New code)
    removeFromCart(currentProduct);

    // 3. Show notification
    toast.error(`${currentProduct.name} is removed from Cart`);
  };

  return (
    <div className="grid mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full shadow bg-gray-50">
            <img src={icon} alt={name} className="w-8 h-8 object-contain" />
          </div>

          <div>
            <p className="text-[20px] font-bold text-gray-800">{name}</p>
            <p className="text-gray-500">${price}</p>
          </div>
        </div>

        <button
          onClick={() => {
            cartRemover(product);
          }}
          className="text-pink-500 font-medium hover:text-pink-600 transition-colors cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;