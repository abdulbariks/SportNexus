import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyBookings = () => {
  const allEvents = useLoaderData();

  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const bookedEventIds = [...new Set(bookings?.map((b) => b.bookingId))];
  console.log(bookedEventIds);
  const bookedEvents = allEvents?.filter((event) =>
    bookedEventIds?.includes(event._id)
  );
  console.log(bookedEvents);

  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  }, []);

  const handleBookedEvent = (_id) => {
    const deleteId = bookings
      ?.filter((booking) => booking.bookingId === _id)
      .map((booking) => booking._id);
    console.log(deleteId);

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
        fetch(`http://localhost:3000/bookings/${deleteId}`, {
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
              setBookings(data);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
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
          {bookedEvents?.map((event, index) => (
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
