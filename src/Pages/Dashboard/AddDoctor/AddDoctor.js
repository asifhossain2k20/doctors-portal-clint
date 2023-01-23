import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate=useNavigate()
  const {data:specialities,isLoading}=useQuery({
    queryKey:['speciality'],
    queryFn:async ()=>{
      const res=await fetch('https://doctors-portal-server-pink-one.vercel.app/appointmentSpeciality')
      const data=await res.json()
      return data;
    }
  })
  const imgHostKey=process.env.REACT_APP_imgbb_api;
  console.log(imgHostKey);
  const handleAddDoctor = (data) => {
    console.log(data)
    const image=data.img[0];
    const formData=new FormData()
    formData.append('image',image)
    const url=`https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imgData=>{
      if(imgData.success){
        console.log(imgData.data.url);
        const doctor={
          name:data.name,
          email:data.email,
          specialty:data.spacilty,
          image:imgData.data.url
        }
        console.log(doctor);
        fetch('https://doctors-portal-server-pink-one.vercel.app/doctors',{
          method:'POST',
          headers:{
            'content-type':'application/json',
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
          body:JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            toast.success('Doctor Added Successfully')
            navigate('/dashboard/mannagedoctors')
          }
        })
      }
    })
  };
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3 className="text-3xl">Add A Doctor</h3>
      <div className="w-80 p-7">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
          </div>
          <div className="form-control w-full ">
            <label className="label">
            <span className="label-text">Speciality : </span>
            </label>
            <select 
            {...register('spacilty')}
            className="select select-bordered w-full ">
            {
                  specialities.map(spacility=><option
                    key={spacility._id}
                  >{spacility.name}</option>)
                }
              </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Image : </span>
            </label>
            <input
              {...register("img", { required: "Enter Your Image" })}
              type="file"
              className="input input-bordered w-full"
            />
            {errors.img && (
              <p className="text-red-800 font-bold">{errors.img?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-5"
            type="submit"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
