import React from "react";
// import { FaRegClock } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";
// import { FiPhoneCall } from "react-icons/fi";
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCard = () => {
  return (
    <div className="mt-52">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        <div className="md:flex items-center bg-primary px-5 py-10 rounded-lg text-white">
          {/* <FaRegClock className="text-7xl" /> */}
          <img
            src={clock}
            className="w-[86px] h-[86px] md:mx-0 mx-auto md:mb-0 mb-[30px]"
            alt=""
          />
          <div className="pl-3">
            <h3 className="text-xl font-bold pb-2">Opening Hours</h3>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div className="md:flex items-center bg-accent px-5 py-10 rounded-lg text-white">
          {/* <CiLocationOn className="text-7xl" /> */}
          <img
            src={location}
            className="w-[86px] h-[86px] md:mx-0 mx-auto md:mb-0 mb-[30px]"
            alt=""
          />
          <div className="pl-3">
            <h3 className="text-xl font-bold pb-2">Visit our location</h3>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="md:flex items-center bg-primary px-5 py-10 rounded-lg text-white">
          {/* <FiPhoneCall className="text-7xl" /> */}
          <img
            src={phone}
            className="w-[86px] h-[86px] md:mx-0 mx-auto md:mb-0 mb-[30px]"
            alt=""
          />
          <div className="pl-3">
            <h3 className="text-xl font-bold pb-2">Contact us now</h3>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
