import React from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div
      className="hero bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
