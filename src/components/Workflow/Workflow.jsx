import React from "react";

const Workflow = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 ">
      <div className="container mx-auto px-2 text-white space-y-5 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="font-semibold opacity-70">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br />
          Start your free trial today.
        </p>

        <div className="flex gap-5 items-center flex-wrap justify-center">
          <div className="bg-white rounded-full btn py-7 px-8">
            <button
              className="w-full font-semibold 
               bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
               bg-clip-text text-transparent"
            >
              Explore Products
            </button>
          </div>
          <button className="btn rounded-full py-7 px-8 font-semibold border text-white hover:bg-white hover:text-black border-gray-300 bg-transparent ">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
};

export default Workflow;
