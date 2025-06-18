import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import useTitle from "../hooks/useTitle";
import { useLoaderData, useNavigate } from "react-router";
import Animation from "../components/Animation";

const UpdateEvent = () => {
  useTitle("Update Event | SportNexus");
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { _id, eventName, location, eventType, imgUrl, date, description } =
    useLoaderData();

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries());

    // send Updated Event to the DB
    fetch(`https://b11a11-server-side-coral.vercel.app/events/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Event Updated Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/manage-events");
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="w-full h-full rounded-md  bg-[#98d0ec] mb-1">
        <Animation></Animation>
      </div>
      <div className="bg-[#98d0ec] rounded-md">
        <form onSubmit={handleUpdateEvent}>
          <div className="grid grid-cols-1 gap-2">
            <fieldset className="fieldset p-2">
              <label className="label">Event Name</label>
              <input
                type="text"
                name="eventName"
                className="input w-full"
                defaultValue={eventName}
              />
            </fieldset>
            <fieldset className="fieldset  p-2">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                defaultValue={location}
              />
            </fieldset>
            <fieldset className="fieldset  p-2">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="label">Event Date</label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    className="input w-full"
                  />
                </div>
                <div>
                  <label className="label">Event Type</label>
                  <select
                    name="eventType"
                    defaultValue={eventType}
                    className="select w-full"
                  >
                    <option>Swimming</option>
                    <option>Sprinting</option>
                    <option>Long Jump</option>
                    <option>High Jump</option>
                    <option>Hurdle Race</option>
                    <option>etc</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset  p-2">
              <label className="label">Image Url</label>
              <input
                type="text"
                name="imgUrl"
                className="input w-full"
                defaultValue={imgUrl}
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label">Description</label>
              <textarea
                type="text"
                name="description"
                className="input textarea h-24 w-full"
                defaultValue={description}
              />
            </fieldset>

            <fieldset className="fieldset p-2">
              <label className="label">Creator Name</label>
              <input
                type="text"
                name="creatorName"
                className="input w-full"
                value={user?.displayName}
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label">Creator Email</label>
              <input
                type="text"
                name="creatorEmail"
                className="input w-full"
                value={user?.email}
              />
            </fieldset>
          </div>

          <input
            type="submit"
            className="btn bg-[#37b6f5] w-full my-5"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
