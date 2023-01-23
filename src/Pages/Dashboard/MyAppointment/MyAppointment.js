import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `https://doctors-portal-server-pink-one.vercel.app/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.json();
      return data;
    },
  });
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-3xl">Appointments</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Day</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              return (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {
                      booking.price && !booking.payment && <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-primary btn-xs">Pay</button>
                      </Link>
                    }
                    {
                      booking.price && booking.payment && <><p className="text-2xl font-bold text-green-700">Paid</p></>
                    }
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

export default MyAppointment;
