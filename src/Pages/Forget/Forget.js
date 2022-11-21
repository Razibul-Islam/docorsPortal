import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../SignUp/AuthProvider";

const Forget = () => {
    const { resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleForget = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    resetPassword(email)
      .then(() => {
        toast.success("Check your email spam box!");
          e.target.reset();
          navigate('/login')
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleForget} className="mx-auto w-96">
      <input
        type="email"
        className="input input-bordered w-full"
        name="email"
        placeholder="Email"
        required
      />
      <button className="btn btn-outline outline-accent block my-5 mx-auto btn-wide ">
        Forget
      </button>
    </form>
  );
};

export default Forget;
