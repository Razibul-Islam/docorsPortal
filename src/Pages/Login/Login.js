import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../SignUp/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn, googleCreate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [loginError, setLoginError] = useState("");
  const [pass, setPass] = useState("password");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginUserEmail(data.email);
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
        // console.log(user);
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
          <div className="form-control w-full relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={pass}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            <p
              onClick={() => setPass("text")}
              className={`${
                pass === "text" ? "hidden" : "block"
              } absolute right-2 bottom-12 cursor-pointer`}
            >
              <FaEye />
            </p>
            <p
              onClick={() => setPass("password")}
              className={`${
                pass === "password" ? "hidden" : "block"
              } absolute right-2 bottom-12 cursor-pointer`}
            >
              <FaEyeSlash />
            </p>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <Link
                to="/forgetEmail"
                // onClick={handlePassword}
                className="label-text-alt cursor-pointer hover:text-blue-700 hover:underline"
              >
                Forget Password?
              </Link>
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
