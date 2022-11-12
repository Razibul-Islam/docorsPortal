import React from "react";
import contentFormBg from "../../../assets/images/appointment.png";

const ContactForm = () => {
  return (
    <div
      className="py-[65px] bg-cover bg-center mt-[149px]"
      style={{ backgroundImage: `url(${contentFormBg})` }}
    >
      <p className="text-secondary font-bold text-center text-xl">Contact Us</p>
      <h1 className="text-white text-4xl text-center">
        Stay connected with us
      </h1>
      <div className="w-full">
        <div className="mx-auto lg:px-0 px-5 max-w-[450px]">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mt-[41px] input-primary w-full block"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered mt-[19px] input-primary w-full block"
          />
          <textarea
            rows={4}
            className="textarea textarea-secondary mt-[19px] block w-full"
            placeholder="Bio"
          ></textarea>
          <div className="text-center">
            <button className="btn btn-primary mt-[19px] text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
