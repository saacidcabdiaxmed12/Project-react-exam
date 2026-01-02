import React from 'react'
import designImage from '../../public/pana.png'
const Designs = () => {
  return (
  <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
        
       
        <div className="w-full md:w-1/2">
          <img
            src={designImage}
            alt="Learning illustration"
            className="w-full drop-shadow-xl"
          />
        </div>

     
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
        
    

      </div>
    </section>
            <span className="text-green-600"> How to design your </span>
            site footer like we did
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
           Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>

          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  )
}

export default Designs