import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const FeaturedEvents = () => {
  const [events, setEvents] = useState([]);

  console.log(events);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "https://b11a11-server-side-coral.vercel.app/featured"
        );
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="my-5">
      <h3 className="text-center pb-5 text-3xl font-bold">Featured Events</h3>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {events.map((event) => (
          <div key={event?._id} className="card bg-[#98d0ec] shadow-sm">
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
      <div className="text-center mt-5">
        <Link to={"/events"}>
          <button className="btn cursor-pointer bg-[#37b6f5] ">
            See All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEvents;
