import React, { use, useState, useContext } from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import { toast } from "react-toastify";
import { CartContext } from "../NavCart/CartContext";

const ToolsDisplay = ({ productsDataPromise }) => {
  const productsData = use(productsDataPromise);
  
  const { showCartView, setShowCartView, clearCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);

  return (
    <section id="tools-section" className="common-w mx-auto">
      <div className="md:w-[50%] space-y-6 text-center mx-auto my-20">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              setShowCartView(false);
            }}
            className={`${!showCartView && "activeBtn"} rounded-full p-6 btn font-bold`}
          >
            Products
          </button>
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

            {/* Empty Cart State */}
            {addedToCart.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200 mt-6">
                <div className="text-gray-300 mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-700">Your cart is empty</h3>
                <p className="text-gray-500 mt-2 mb-8">Looks like you haven't added any digital tools yet.</p>
                
                <button 
                  onClick={() => setShowCartView(false)}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-colors shadow-md"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              /* Populated Cart State */
              <>
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
                    toast.success("Proceeding to Checkout!");
                    setAddedToCart([]);
                    clearCart(); 
                  }}
                  className="btn bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-full w-full font-bold text-white py-4 mt-8 shadow-lg transition-all"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsDisplay;