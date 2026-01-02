import React from "react";
import market1 from '../../public/marketing1.png'
import market2 from '../../public/marketing2.png'
import market3 from '../../public/marketing3.png'
import { IoIosArrowRoundForward } from "react-icons/io";
const Marketing = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Caring is the new marketing
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's more.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src={market1}
              alt=""
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <button className="text-green-600 font-semibold hover:underline flex items-center justify-center gap-2 mx-auto">
                Readmore <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src={market2}
              alt=""
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <button className="text-green-600 font-semibold hover:underline flex items-center justify-center gap-2 mx-auto">
                Readmore <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
            <img
              src={market3}
              alt=""
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Revamping the Membership Model with Triathlon Australia
              </h3>
              <button className="text-green-600 font-semibold hover:underline flex items-center justify-center gap-2 mx-auto">
                Readmore <span>→</span>
              </button>
            </div>
          </div>

        </div>
       
<div className="text-center pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Pellentesque suscipit fringilla libero eu.
      </h1>

      <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition flex items-center justify-center gap-2 mx-auto">
        Go Demo <IoIosArrowRoundForward />
      </button>
    </div>



      </div>
    </section>
  );
};

export default Marketing;
