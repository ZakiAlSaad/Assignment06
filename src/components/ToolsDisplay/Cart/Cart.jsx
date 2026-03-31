import React from "react";
import { toast } from "react-toastify";

const Cart = ({ product, addedToCart, setAddedToCart }) => {
  const { name, price, icon } = product;

  const cartRemover = (currenProduct) => {
    setAddedToCart(
      addedToCart.filter((product) => currenProduct.name !== product.name),
    );

    toast.error(`${currenProduct.name} is removed from Cart`);
  };

  return (
    <div className="grid mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full shadow">
            <img src={icon} alt={name} />
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
          className="text-pink-500 font-medium hover:text-pink-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
