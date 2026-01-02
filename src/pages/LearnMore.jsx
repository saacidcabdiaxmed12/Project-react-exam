import React from "react";
import rafiki from "../../public/rafiki.png";

const LearnMore = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
        
       
        <div className="w-full md:w-1/2">
          <img
            src={rafiki}
            alt="Learning illustration"
            className="w-full drop-shadow-xl"
          />
        </div>

     
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            The unseen journey of spending
            <span className="text-green-600"> three years </span>
            at Pixelgrade
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis.
          </p>

          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default LearnMore;
