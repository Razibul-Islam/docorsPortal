import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: Specialties, isLoading } = useQuery({
    queryKey: ["Specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // console.log(doctor);
          // Save doctors information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              toast.success(`${doctor.name} is added successFully!`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-2xl font-bold">Add a New Doctor</h1>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div>
            {/* {signUpError && <p className="text-red-600">{signUpError}</p>} */}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty", {
                required: "Specialty is required",
              })}
              className="select select-bordered w-full max-w-xs"
            >
              {Specialties.map((Specialty) => (
                <option key={Specialty._id} value={Specialty.name}>
                  {Specialty.name}
                </option>
              ))}
            </select>
            {errors.specialty && <p>{errors.specialty.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("img", {
                required: "Image is required",
              })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {errors.img && <p>{errors.img.message}</p>}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            value="ADD DOCTOR"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
