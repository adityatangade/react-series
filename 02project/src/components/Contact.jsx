import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Top Buttons */}
        <div className="flex justify-around mb-6">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
            VIA SUPPORT CHAT
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">
            VIA CALL
          </button>
        </div>

        {/* Center Button */}
        <div className="flex justify-center mb-6">
          <button className="bg-white text-gray-900 hover:bg-gray-200 font-semibold py-2 px-6 rounded shadow">
            VIA EMAIL FORM
          </button>
        </div>

        {/* Form Section */}
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <legend className="text-lg font-semibold mb-4 block text-center">
            Contact Us
          </legend>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
