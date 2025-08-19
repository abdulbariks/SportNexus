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
    <div className="my-10">
      <h3 className="text-center pb-5 text-3xl font-bold text-gray-800">
        Featured Events
      </h3>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event?._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <figure className="px-5 pt-5">
              <img
                src={event?.imgUrl}
                alt={event?.eventName}
                className="rounded-xl w-full h-48 object-cover shadow-sm"
              />
            </figure>

            <div className="card-body items-center text-center p-5">
              <h2 className="card-title text-xl font-bold text-gray-800">
                {event?.eventName}
              </h2>
              <p className="text-gray-600">📅 Date : {event?.date}</p>
              <p className="text-gray-600">📍 Location : {event?.location}</p>

              <div className="card-actions mt-4">
                <Link to={`/event-details/${event?._id}`}>
                  <button className="btn bg-[#37b6f5] hover:bg-[#2fa1d6] text-white font-semibold rounded-xl px-5 py-2 shadow-md hover:shadow-lg transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to={"/events"}>
          <button className="btn cursor-pointer bg-[#37b6f5] hover:bg-[#2fa1d6] text-white font-semibold rounded-xl px-6 py-2 shadow-md hover:shadow-lg transition">
            See All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEvents;
