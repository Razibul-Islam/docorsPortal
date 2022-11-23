import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  // const [AppointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["doctorsAppointmentOptions", date],
    queryFn: () =>
      fetch(
        `https://doctors-portal-server-three-nu.vercel.app/v2/doctorsAppointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch("https://doctors-portal-server-three-nu.vercel.app/doctorsAppointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  return (
    <div className="my-16">
      <p className="text-secondary text-[22px] text-center">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
