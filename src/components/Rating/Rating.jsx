import React from "react";

const Rating = () => {
  return (
    <section className="bg-linear-to-r to-[#9514FA] from-[#4F39F6]">
      <div className=" md:flex justify-around items-center text-white py-5 md:py-15 md:space-y-0 space-y-3 common-w mx-auto">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-6xl font-bold">50K+</h1>
          <p className="md:text-2xl">Active Users</p>
        </div>

        <hr className="transform rotate-90 w-40 hidden md:inline" />
        <hr className="md:hidden text-gray-400 w-[50%] mx-auto" />

        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-6xl font-bold">200+</h1>
          <p className="md:text-2xl">Premium Tools</p>
        </div>

        <hr className="transform rotate-90 w-40 hidden md:inline" />
        <hr className="md:hidden text-gray-400 w-[50%] mx-auto" />

        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-6xl font-bold">4.9</h1>
          <p className="md:text-2xl">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
