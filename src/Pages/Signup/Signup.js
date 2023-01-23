import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState(null);
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [createUserEmail,setUserEmail]=useState('')
  const[token]=useToken(createUserEmail)
  if(token){
    navigate('/')
  }
  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created Successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => setLoginError(err.message));
  };

  let from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-pink-one.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email)
      });
  };


  return (
    <div className="flex justify-center items-center h-[400px] my-32">
      <div className="p-6 rounded shadow-xl w-98">
        <h2 className="text-center mb-5 font-lg text-2xl">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name : </span>
            </label>
            <input
              {...register("name", { required: "Enter Your Name" })}
              type="text"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-800 font-bold">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email : </span>
            </label>
            <input
              {...register("email", { required: "Enter Your Email" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-800 font-bold">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Enter Password greater then 6 words",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "Enter Stronge Password",
                },
              })}
              type="password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-800 font-bold">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Login"
          />
        </form>
        {loginError ? (
          <>
            <p className="text-red-500">{loginError}</p>
          </>
        ) : (
          <></>
        )}
        <p className="text-center mt-5">
          You have Already a Account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINIUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
