import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUser = () => {
  const { data: users=[] ,refetch} = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://doctors-portal-server-pink-one.vercel.app/users");
      const users = await res.json();
      return users;
    },
  });
  const handleMakeAdmin=id=>{
    fetch(`https://doctors-portal-server-pink-one.vercel.app/users/admin/${id}`,{
        method:'PUT',
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        refetch();
    })
  }
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-2xl">All Users</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user?.role!=='admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Admin</button>
                    }
                  </td>
                  <td>
                    <button className="btn btn-xs btn-red-500">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
