import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Teeth from "../../../assets/images/whitening.png";
import Services from "./Services";
import treatment from "../../../assets/images/treatment.png";

const Service = () => {
  const AllService = [
    {
      id: 1,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Cavity,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Teeth,
    },
  ];
  return (
    <div className="mt-[131px]">
      <p className="text-[#19D3AE] font-bold text-xl text-center">
        OUR SERVICES
      </p>
      <h1 className="text-4xl text-accent text-center">Services We Provide</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[34px] mt-[70px]">
        {AllService.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
      <div>
        <div className="hero mt-[154px]">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={treatment}
              className=" lg:w-96 rounded-lg shadow-2xl lg:mr-[102px]"
              alt=""
            />
            <div className="lg:w-[497px] ">
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
