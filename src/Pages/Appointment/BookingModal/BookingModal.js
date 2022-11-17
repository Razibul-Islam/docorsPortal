import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../SignUp/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message)
        }
      });
  };
  return (
    <>
      {/* The button to open modal */}
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-[23px] mt-12"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              placeholder="Email Address"
              className="input input-bordered w-full"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="bg-accent text-secondary input w-full"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
