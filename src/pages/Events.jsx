import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Events = () => {
  useTitle("Events | SportNexus ");
  // const allEvents = useLoaderData();

  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(data);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axiosSecure.get("/events"); // ✅ change endpoint
        setData(response.data);
        console.log("responseresponseresponseresponseresponse", response);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [axiosSecure]);

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="my-5">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.map((event) => (
          <div className="card bg-[#98d0ec] shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={event?.imgUrl}
                alt="Shoes"
                className="rounded-xl h-48"
              />
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
