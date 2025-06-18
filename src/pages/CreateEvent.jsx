import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import Animation from "../components/Animation";

const CreateEvent = () => {
  useTitle("Event Create | SportNexus");
  const { user } = use(AuthContext);
  // console.log(user);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFormData = Object.fromEntries(formData.entries());
    // console.log(newFormData);

    // Send Create Event Data to the Mongodb
    fetch("https://b11a11-server-side-coral.vercel.app/create-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Event Created Successfully!",
            icon: "success",
            draggable: true,
          });

          form.reset();
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="w-full h-full rounded-md  bg-[#98d0ec] mb-1">
        <Animation></Animation>
      </div>
      <div className="bg-[#98d0ec] rounded-md">
        <form onSubmit={handleCreateEvent}>
          <div className="grid grid-cols-1 gap-2">
            <fieldset className="fieldset p-2">
              <label className="label">Event Name</label>
              <input
                type="text"
                name="eventName"
                className="input w-full"
                placeholder="Event Name"
              />
            </fieldset>
            <fieldset className="fieldset  p-2">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Location"
              />
            </fieldset>
            <fieldset className="fieldset  p-2">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="label">Event Date</label>
                  <input type="date" name="date" className="input w-full" />
                </div>
                <div>
                  <label className="label">Event Type</label>
                  <select
                    name="eventType"
                    defaultValue="Swimming"
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
                placeholder="imgUrl"
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label">Description</label>
              <textarea
                type="text"
                name="description"
                className="input textarea h-24 w-full"
                placeholder="Description"
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

export default CreateEvent;
