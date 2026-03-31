import React from "react";
import banner from "../../assets/banner.png";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="common-w mx-auto flex md:flex-row flex-col justify-between items-center gap-15 my-10 md:text-left text-center ">
      <div className="max-w-full md:max-w-[55%] space-y-5">
        <button className="flex justify-center items-center gap-1 bg-[#E1E7FF] text-[#4F39F6] rounded-full md:px-3 px-2 md:py-2 font-semibold md:mx-0 mx-auto">
          <MdWifiTetheringErrorRounded /> New: AI-Powered Tools Available
        </button>
        <h1 className="md:text-7xl text-3xl font-bold ">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-[#627382] text-[18px]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-2 md:space-y-0 space-y-1.5 flex flex-wrap md:justify-start justify-center gap-y-2">
          
          {/* Changed this button to an anchor tag pointing to #tools-section */}
          <a 
            href="#tools-section" 
            className="btn bg-linear-to-r to-[#9514FA] from-[#4F39F6] rounded-full p-6 text-white font-semibold inline-flex items-center justify-center cursor-pointer"
          >
            Explore Products
          </a>

          <button className="btn rounded-full p-6 font-semibold border-[#4F39F6] text-[#4F39F6]">
            <FaPlay className="text-[20px] font-bold" /> Watch Demo
          </button>
        </div>
      </div>

      <img src={banner} alt="Banner" />
    </section>
  );
};

export default Banner;