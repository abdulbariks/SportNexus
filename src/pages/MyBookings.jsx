import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router";

const MyBookings = () => {
  const { user, loading } = use(AuthContext);
  const allBookings = useLoaderData();

  const [bookings, setBookings] = useState(allBookings);
  console.log(bookings);

  if (loading) {
    return <Loading />;
  }

  const myBookings = bookings.filter(
    (booking) => booking?.email === user?.email
  );

  const handleBookedEvent = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the event
        fetch(`http://localhost:3000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been deleted.",
                icon: "success",
              });
              // Remove the Events from the State
              const remainingRoommate = bookings.filter(
                (roommate) => roommate._id !== _id
              );
              setBookings(remainingRoommate);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-5 overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Event Name</th>
            <th>Event Type</th>
            <th>Location</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myBookings?.map((event, index) => (
            <tr key={event._id}>
              <th>{index + 1}</th>
              <td>
                <h3 className="font-bold">{event.eventName}</h3>
              </td>
              <td>{event.eventType}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
              <td>
                <button
                  onClick={() => handleBookedEvent(event._id)}
                  className="btn btn-ghost btn-xs"
                >
                  cancel the booked event
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
