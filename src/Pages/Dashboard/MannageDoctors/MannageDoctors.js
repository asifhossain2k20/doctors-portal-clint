import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import { confirm } from "react-confirm-box";
import { useState } from "react";
import ConformationModal from "../../Shared/ConformationModal/ConformationModal";
const options = {
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const MannageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-pink-one.vercel.app/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const closeModal=()=>{
    setDeleteDoctor(null)
  }
  const handleDeleteDoctor =async (doctor) => {
      const res = await fetch(`https://doctors-portal-server-pink-one.vercel.app/doctors/${doctor._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      console.log(data);
      if (data) {
        refetch();
      }
  };
  return (
    <div>
      <div>
        <h3 className="text-3xl">Mannage Doctors {doctors.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.email}</td>
                <td>
                  <label htmlFor="conformation-modal" onClick={() => setDeleteDoctor(doctor)}
                    className="btn btn-error">
                    DELETE
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteDoctor && <ConformationModal
          data={deleteDoctor}
          closeModal={closeModal}
          handleDeleteDoctor={handleDeleteDoctor}
          deleteBtn='Delete'
          message='Do You Want To Delete?'
        ></ConformationModal>
      }
    </div>
  );
};

export default MannageDoctors;
