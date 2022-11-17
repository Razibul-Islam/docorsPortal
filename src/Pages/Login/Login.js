import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../SignUp/AuthProvider";

const Login = () => {
  const { signIn, googleCreate, resetPassword, loading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.code);
      });

    // const email = data.email;
    // console.log(email);
    // handlePassword(email);
  };

  const handleGoogle = () => {
    googleCreate(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  // const handlePassword = (email) => {
  // console.log(email);
  //   resetPassword(email)
  //     .then()
  //     .catch((err) => console.error(err));
  // };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span
                // onClick={handlePassword}
                className="label-text-alt cursor-pointer hover:text-blue-700 hover:underline"
              >
                Forget Password?
              </span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="LOGIN"
            type="submit"
          />
        </form>
        <p className="text-xs mt-3 text-center">
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogle}
          className="btn btn-outline outline-accent w-full "
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
