import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";

const MyBookings = () => {
  useTitle("MyBookings | SportNexus ");
  const { user, loading } = use(AuthContext);
  const allBookings = useLoaderData();
  const [isCardView, setIsCardView] = useState(false);

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
        fetch(`https://b11a11-server-side-coral.vercel.app/bookings/${_id}`, {
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
    <div className="my-5">
      {!isCardView ? (
        <div className="w-11/12 mx-auto bg-[#98d0ec] my-5 overflow-x-auto">
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
                      className="btn bg-[#37b6f5]"
                    >
                      cancel the booked event
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {myBookings.map((event) => (
            <div className="card bg-[#98d0ec] shadow-sm">
              <figure className="px-10 pt-10">
                <img src={event?.imgUrl} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{event?.eventName}</h2>
                <p>Date : {event?.date}</p>
                <p>Location : {event?.location}</p>
                <div className="card-actions">
                  <button
                    onClick={() => handleBookedEvent(event._id)}
                    className="btn bg-[#37b6f5]"
                  >
                    cancel the booked event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center py-5">
        <button
          onClick={() => setIsCardView(!isCardView)}
          className="bg-[#37b6f5] text-white px-4 py-2 rounded mb-4"
        >
          {isCardView ? "Show Table" : "Show Cards"}
        </button>
      </div>
    </div>
  );
};

export default MyBookings;
