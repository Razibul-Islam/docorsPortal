import React from "react";

const Review = ({ review }) => {
  const { description, name, location, img } = review;
  return (
    <div className="card  shadow-md">
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions justify-start items-center mt-[38px]">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="ml-[14px]">
            <h5 className="text-accent font-semibold text-xl">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
