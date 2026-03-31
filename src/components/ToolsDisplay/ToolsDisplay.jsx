import React, { use, useState, useContext } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { toast } from "react-toastify";
import { CartContext } from "../NavCart/CartContext"; // Import Context

const ToolsDisplay = ({ productsDataPromise }) => {
  const productsData = use(productsDataPromise);
  
  // Pull the view toggle and clearCart function from Context
  const { showCartView, setShowCartView, clearCart } = useContext(CartContext);
  
  // Keep your local cart array for the child components
  const [addedToCart, setAddedToCart] = useState([]);

  return (
    // Added id="tools-section" so the navbar can scroll down to this element
    <section id="tools-section" className="common-w mx-auto">
      <div className="md:w-[50%] space-y-6 text-center mx-auto my-20">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center gap-2">
          
          {/* Changed setSwitchBtn to setShowCartView(false) */}
          <button
            onClick={() => {
              setShowCartView(false);
            }}
            className={`${!showCartView && "activeBtn"} rounded-full p-6 btn font-bold`}
          >
            Products
          </button>
          
          {/* Changed setSwitchBtn to setShowCartView(true) */}
          <button
            onClick={() => {
              setShowCartView(true);
            }}
            className={`${showCartView && "activeBtn"} rounded-full p-6 btn font-bold`}
          >
            Cart ({addedToCart.length})
          </button>
        </div>
      </div>

      <div>
        {/* Changed switchBtn check to !showCartView */}
        {!showCartView ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
            {productsData.map((product) => {
              return (
                <Products
                  addedToCart={addedToCart}
                  setAddedToCart={setAddedToCart}
                  key={product.id}
                  product={product}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl text-gray-800 mb-6 font-bold">Your Cart</h2>

            {addedToCart.map((product, index) => {
              return (
                <Cart
                  key={index}
                  product={product}
                  addedToCart={addedToCart}
                  setAddedToCart={setAddedToCart}
                />
              );
            })}

            <div className="flex justify-between px-5 items-center mt-8">
              <p className="text-gray-500 text-xl">Total</p>
              <p className="font-bold text-xl">
                $ {addedToCart.reduce((sum, product) => sum + product.price, 0)}
              </p>
            </div>

            <button
              onClick={() => {
                toast.warn("All cart products proceeded");
                setAddedToCart([]); // Clears local cart
                clearCart(); // NEW: Clears Navbar cart!
              }}
              className="btn bg-linear-to-r to-[#9514FA] from-[#4F39F6] rounded-full w-full font-bold text-white py-6 mt-10"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsDisplay;