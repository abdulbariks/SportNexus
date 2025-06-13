import React from "react";
import { Link, useLoaderData } from "react-router";

const Events = () => {
  const allEvents = useLoaderData();

  return (
    <div>
      {allEvents.map((event) => (
        <div
          key={event._id}
          className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800"
        >
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {event.eventName}
              </h2>
              <p className="text-gray-800">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <Link to={`/event-details/${event._id}`}>
              {" "}
              <button
                type="submit"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
