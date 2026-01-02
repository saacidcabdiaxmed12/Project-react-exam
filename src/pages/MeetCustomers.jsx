import React from 'react'
import ImageCustomer from '../../public/imageCustomers.png'
import frame from '../../public/frame 10.png'
const MeetCustomers = () => {
  return (
    <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 px-6">
            
           
            <div className="w-full md:w-1/2">
              <img
                src={ImageCustomer}
                alt="Learning illustration"
                className="w-full drop-shadow-xl"
              />
            </div>
    
         
            <div className="w-full md:w-1/2">
              {/* <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                The unseen journey of spending
                <span className="text-green-600"> three years </span>
                at Pixelgrade
              </h1> */}
    
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h3 className='text-green-500'>Tim Smith</h3>
              <p>British Dragon Boat Racing Association</p>
       <div className="flex items-center space-x-4">
  <img src={frame} alt="Frame" className="w-[300px] h-auto pb-12 pt-8" />
  <h2 className="text-sm font-semibold text-green-500 pt-8 pb-12">Meet All customers</h2>
</div>

    
              <button className=" bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
                Learn More
              </button>
            </div>
    
          </div>
        </section>
  )
}

export default MeetCustomers