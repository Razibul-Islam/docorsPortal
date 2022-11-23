import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="card shadow-md">
      <div className="card-body text-center">
        <h2 className=" text-secondary font-semibold text-xl">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          Price: <small>${price}</small>
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="Booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
