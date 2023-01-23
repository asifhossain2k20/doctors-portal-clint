import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken/useToken";

const Login = () => {
  const [loginError,setLoginError]=useState(null)
  const {user,signUp,googleSignIn}=useContext(AuthContext)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const location=useLocation()
  const navigate=useNavigate()
  let from = location.state?.from?.pathname || "/";
  const[createUserEmail,setCreateUserEmail]=useState('')
  const[token]=useToken(createUserEmail)
  if(token){
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('')
    signUp(data.email,data.password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setCreateUserEmail(data.email)
    })
    .catch(err=>{
      setLoginError(err.message)
    })
  };
  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      const user=result.user;
      navigate(from, { replace: true });
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="flex justify-center items-center h-[400px] my-32">
      <div className="p-6 rounded shadow-xl w-98">
        <h2 className="text-center mb-5 font-lg text-2xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              })}
              type="password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-800 font-bold">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text-alt">Enter Your Password?</span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Login"
          />
        </form>
        {
          loginError && <p className="text-red-500">{loginError}</p>
        }
        <p className="text-center mt-5">
          New in Doctors Portal ?{" "}
          <Link to="/signup" className="text-primary">
            Create a new Account
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

export default Login;
