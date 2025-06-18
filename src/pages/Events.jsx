import React from "react";
import { Link, useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";

const Events = () => {
  useTitle("Events | SportNexus ");
  const allEvents = useLoaderData();

  return (
    <div className="my-5">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {allEvents.map((event) => (
          <div className="card bg-[#98d0ec] shadow-sm">
            <figure className="px-10 pt-10">
              <img src={event?.imgUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{event?.eventName}</h2>
              <p>Date : {event?.date}</p>
              <p>Location : {event?.location}</p>
              <div className="card-actions">
                <Link to={`/event-details/${event?._id}`}>
                  {" "}
                  <button className="btn bg-[#37b6f5]">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
