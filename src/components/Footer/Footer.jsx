import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-[#101727] pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5 text-white">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5 text-white">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5 text-white">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5 text-white">
              Social Links
            </h3>
            <div className="flex items-center gap-3">
              <a href="#">
                <AiFillInstagram
                  size={50}
                  className="bg-white rounded-full p-3 text-black"
                />
              </a>
              <a href="#" className="bg-white rounded-full">
                <ImFacebook2 size={50} className="p-3 text-black" />
              </a>
              <a href="#">
                <FaXTwitter
                  size={50}
                  className="bg-white rounded-full p-3 text-black"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 md:flex items-center justify-between text-center text-gray-500 text-sm">
          <p className="font-semibold mb-5 md:mb-0">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-5 font-semibold">
            <p className="hover:text-white">Privacy Policy</p>
            <p className="hover:text-white">Terms of Service</p>
            <p className="hover:text-white">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
