import React, { useState } from 'react';
import { HomeLayout } from '../components/layouts/homeLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phoneNumber: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Limit to 3 queries per day for a specific user email
    const storedData = JSON.parse(localStorage.getItem('queryData')) || {};
    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const userEmail = formData.email;

    if (storedData[userEmail] && storedData[userEmail].date === today) {
      if (storedData[userEmail].count >= 3) {
        toast.error("You have already sent 3 queries today. Please try again tomorrow.");
        return;
      }
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Query sent successfully. We will reach out within 12 hours.");

        // Update the query count for the user
        if (storedData[userEmail] && storedData[userEmail].date === today) {
          storedData[userEmail].count += 1;
        } else {
          storedData[userEmail] = { date: today, count: 1 };
        }

        localStorage.setItem('queryData', JSON.stringify(storedData));

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false); // Stop loading after process is complete
    }
  };

  return (
    <HomeLayout pageName="Services">
    <div className="max-w-[90%] m-auto bg-white text-gray-800 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center">Contact Us</h2>
        <div className="bg-white m-auto shadow-2xl rounded-lg max-w-5xl w-full flex flex-col lg:flex-row">
          <ToastContainer position="top-right" autoClose={false} />

          {/* Image Section */}
          <div className="flex w-full lg:w-1/2">
            <img
              src="/images/models/ali3.jpg"
              alt="Contact Us"
              className="w-full h-[30vh] sm:h-[43vh] md:h-[54vh] lg:h-[67vh] object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-500 mb-6 text-center lg:text-left">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter subject"
                  required
                />
              </div>
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Write your message here..."
                  rows="4"
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full hover:bg-gray-800 text-white py-2 sm:py-3 rounded-md bg-yellow-600 transition duration-200 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
    </div>    
  </HomeLayout>
  );
};

export default Contact;
