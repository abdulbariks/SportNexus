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
    <section className="w-11/12 mx-auto my-10 py-12 rounded-md">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center  mb-10">
          Have questions, feedback, or want to collaborate? We'd love to hear
          from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {" "}
            <div className="h-full bg-[#98d0ec] rounded-xl shadow-md overflow-hidden border border-gray-200">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902423598345!2d90.39068167501218!3d23.750885889137287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a35a7e1f3b%3A0x8f59352a5a0b6eeb!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1691754873555!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px]"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="">
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
                  className="bg-[#37b6f5] hover:bg-[#37b6f5c9] text-white font-semibold px-6 py-2 rounded-xl transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
