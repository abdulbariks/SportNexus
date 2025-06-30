import axios from "axios";
import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import useTitle from "../hooks/useTitle";
import Error from "./Error";

const EventDetails = () => {
  useTitle("Event Details | SportNexus ");
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const eventDetails = useLoaderData();
  const {
    _id: bookingId,
    eventName,
    location,
    date,
    eventType,
    description,
    creatorName,
    creatorEmail,
    imgUrl,
  } = eventDetails;

  if (typeof eventDetails !== "object") {
    return <Error></Error>;
  }

  const handleBookingsEvents = (e) => {
    e.preventDefault();

    if (creatorEmail === user.email) {
      return Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are not available this Event ",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    const booking = {
      bookingId,
      eventName,
      location,
      date,
      eventType,
      description,
      creatorName,
      email: user.email,
      imgUrl,
    };

    axios
      .post("https://b11a11-server-side-coral.vercel.app/bookings", booking)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your booking has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/my-bookings`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Already Booked this Event ",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto bg-[#98d0ec] my-5">
      <h3 className="text-center py-10 text-5xl font-bold">Event Details</h3>
      <div className="min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={imgUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{eventName}</h1>
            <div className="flex gap-5 my-5">
              <h3>Date: {date}</h3>
              <h3>Location: {location}</h3>
            </div>
            <button className="btn bg-[#739baf]">{eventType}</button>
            <h3 className="font-bold mt-5">Event Creator: {creatorName}</h3>
            <p className="py-6 w-8/12 ">{description}</p>
            <button onClick={handleBookingsEvents} className="btn bg-[#37b6f5]">
              Booked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
