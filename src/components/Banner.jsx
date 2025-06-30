import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

const Banner = () => {
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
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex "
      >
        {events.map((event) => (
          <SwiperSlide key={event._id}>
            <div className="relative">
              <img
                src={event?.imgUrl}
                alt="Slide 1"
                className="w-full h-[450px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-center text-5xl font-bold">
                  {event?.eventName}
                </h3>
                <p className="w-8/12 mx-auto text-center py-5 text-3xl font-light">
                  {event?.description}
                </p>
                <button className="btn bg-[#37b6f5] px-6 py-2">
                  {event?.location}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
