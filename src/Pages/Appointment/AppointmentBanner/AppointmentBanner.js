import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
import bgImg from "../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className=" bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero min-h-screen my-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-[594px] w-full rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="lg:mr-[121px]">
            <DayPicker
              mode="single" // there is many of mode to select a date you can select a range
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            {/* <p>You have selected data {format(selectedDate, "PP")}.</p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
