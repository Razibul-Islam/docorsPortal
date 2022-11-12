import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="mt-[272px]"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="flex items-center flex-col my-0 lg:flex-row">
          <img src={doctor} className="-mt-32 hidden lg:block " alt="" />
          <div className="p-5 lg:p-0">
            <p className="text-[#19D3AE] font-bold text-xl">Appointment</p>
            <h1 className="text-4xl font-semibold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button
              style={{
                background: `linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)`,
              }}
              className="btn btn-primary text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
