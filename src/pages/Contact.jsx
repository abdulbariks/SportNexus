import React, { useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useTitle("Contact | SportNexus ");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: send data to backend or email service here

    // Show success popup
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message sent successfully!",
      showConfirmButton: false,
      timer: 2000,
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-11/12 mx-auto bg-[#98d0ec] my-10 py-12 px-4 md:px-20 rounded-md">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center  mb-4">Contact Us</h2>
        <p className="text-center  mb-10">
          Have questions, feedback, or want to collaborate? We'd love to hear
          from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium ">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border  rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#37b6f5] hover:bg-[#37b6f5c9] font-semibold px-6 py-2 rounded-xl transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
