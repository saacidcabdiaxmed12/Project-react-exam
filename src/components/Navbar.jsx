import React from 'react'
import navlogo from '../../public/Logo.png'
import illustrationImage from '../../public/illustration.png'
const Navbar = () => {
  return (
   <div className="min-h-screen bg-gray-50 font-sans">
{/* Navbar */}
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-2">
{/* <div className="w-6 h-6 bg-green-500 rotate-45" /> */}

    <img src={navlogo} alt="" />

</div>
<nav className="hidden md:flex gap-8 text-gray-500">
<a href="#" className="hover:text-green-600">Home</a>
<a href="#" className="hover:text-green-600">Service</a>
<a href="#" className="hover:text-green-600">Feature</a>
<a href="#" className="hover:text-green-600">Product</a>
<a href="#" className="hover:text-green-600">Testimonial</a>
<a href="#" className="hover:text-green-600">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-green-600 font-medium">Login</button>
<button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
Sign up
</button>
</div>
</div>
</header>



<section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-5xl font-bold text-gray-800 leading-tight">
Lessons and insights <br />
<span className="text-green-500">from 8 years</span>
</h1>
<p className="text-gray-500 mt-6 max-w-md">
Where to grow your business as a photographer: site or social media?
</p>
<button className="mt-8 bg-green-500 text-white px-12 py-3 rounded-lg hover:bg-green-600">
Register
</button>
</div>



<div className="flex justify-center">
<div className="w-80 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center">
<span className="text-gray-400">
    <img src={illustrationImage} alt="" />
</span>
</div>
</div>
</section>



<div className="flex justify-center gap-2 pb-10">
<span className="w-2 h-2 rounded-full bg-green-500" />
<span className="w-2 h-2 rounded-full bg-gray-300" />
<span className="w-2 h-2 rounded-full bg-gray-300" />
</div>
</div>
  );
}

export default Navbar