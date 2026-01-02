import React from "react";
import ClientLogo from "../../public/lopgo0.png";
import clientIcon from "../../public/Icon0.png";
import clientIcon1 from "../../public/Icon (1).png";
import clientIcon2 from "../../public/Icon (2).png";

const Clients = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h1 className="text-center font-extrabold text-4xl md:text-5xl">
          Our Clients
        </h1>

        <p className="text-center font-medium text-gray-600 pt-4">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Logos */}
        <div className="flex justify-center pt-12">
          <img src={ClientLogo} alt="Client logos" className="max-w-full" />
        </div>

        {/* Sub Heading */}
        <h2 className="text-center font-bold text-3xl md:text-4xl pt-20">
          Manage your entire community <br />
          in a single system
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-12 justify-center pt-16">
          
          {/* Card 1 */}
          <div className="bg-gray-50 p-10 rounded-xl text-center shadow-sm hover:shadow-lg transition w-full md:w-1/3">
            <img src={clientIcon} alt="" className="mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">
              Membership Organisations
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-10 rounded-xl text-center shadow-sm hover:shadow-lg transition w-full md:w-1/3">
            <img src={clientIcon1} alt="" className="mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">
              National Associations
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-10 rounded-xl text-center shadow-sm hover:shadow-lg transition w-full md:w-1/3">
            <img src={clientIcon2} alt="" className="mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">
              Clubs And Groups
            </h3>
            <p className="text-gray-600">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
