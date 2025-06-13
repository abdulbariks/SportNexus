import React from "react";
import { useLoaderData } from "react-router";

const EventDetails = () => {
  const eventDetails = useLoaderData();
  const {
    _id,
    eventName,
    location,
    date,
    eventType,
    description,
    creatorName,
    creatorEmail,
  } = eventDetails;
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 bg-gray-100 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {eventName}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src="https://source.unsplash.com/75x75/?portrait"
                alt=""
                className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300"
              />
              <p className="text-sm">{date}</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{creatorName}</p>
          </div>
        </div>
        <div className="text-gray-800">
          {location}
          {eventType}
          <p className="">{creatorEmail}</p>
          <p>{description}</p>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
