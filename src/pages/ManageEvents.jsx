import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ManageEvents = () => {
  const allEvents = useLoaderData();

  const handleDelete = (_id) => {
    // console.log(_id);

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
        fetch(`http://localhost:3000/events/${_id}`, {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allEvents.map((event, index) => (
            <tr key={event._id}>
              <th>{index + 1}</th>
              <td>
                <h3 className="font-bold">{event.eventName}</h3>
              </td>
              <td>{event.eventType}</td>
              <td>{event.location}</td>
              <th>
                <Link to={`/update-event/${event._id}`}>
                  {" "}
                  <button className="btn btn-ghost btn-xs">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="btn btn-ghost btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEvents;
