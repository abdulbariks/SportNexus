import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";

const BookEvent = () => {
  useTitle("Book Event | SportNexus ");
  const bookEvent = useLoaderData();
  const [isCardView, setIsCardView] = useState(false);
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
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookEvent?.map((event, index) => (
                <tr key={event._id}>
                  <th>{index + 1}</th>
                  <td>
                    <h3 className="font-bold">{event.eventName}</h3>
                  </td>
                  <td>{event.eventType}</td>
                  <td>{event.location}</td>
                  <td>{event.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {bookEvent.map((event) => (
            <div className="card bg-[#98d0ec] shadow-sm">
              <figure className="px-10 pt-10">
                <img src={event?.imgUrl} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{event?.eventName}</h2>
                <p>Date : {event?.date}</p>
                <p>Location : {event?.location}</p>
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

export default BookEvent;
