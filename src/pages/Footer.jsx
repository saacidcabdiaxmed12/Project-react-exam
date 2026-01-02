import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
     
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-green-500">▲▼▲</span> Nexcent
          </h1>
          <p className="text-sm mt-2">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-sm mb-4">All rights reserved</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaDribbble size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>

    
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-white font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help center</a></li>
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">Legal</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-white font-semibold mb-4">Stay up to date</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-l-lg px-4 py-2 text-gray-900 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition">
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
