import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

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
    fetch("http://localhost:3000/create-event", {
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
    <div className="w-11/12 mx-auto py-5">
      <div className="text-center space-y-4 pb-5">
        <h1 className="text-4xl">Create Event</h1>
      </div>
      <form onSubmit={handleCreateEvent}>
        <div className="grid grid-cols-1 gap-6">
          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
            <label className="label">Event Name</label>
            <input
              type="text"
              name="eventName"
              className="input w-full"
              placeholder="Event Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="label">Event Date</label>
                <input
                  type="text"
                  name="date"
                  className="input w-full"
                  placeholder="Event Date"
                />
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
          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <textarea
              type="text"
              name="description"
              className="input textarea h-24 w-full"
              placeholder="Description"
            />
          </fieldset>

          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
            <label className="label">Creator Name</label>
            <input
              type="text"
              name="creatorName"
              className="input w-full"
              value={user?.displayName}
            />
          </fieldset>
          <fieldset className="fieldset bg-[#EDC9AF] border-base-300 rounded-box border p-4">
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
          className="btn bg-[#d17331] w-full my-5"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default CreateEvent;
