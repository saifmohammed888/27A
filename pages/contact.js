import React from 'react';
import { HomeLayout } from '../components/layouts/homeLayout';

const Contact = () => {
  return (
    <HomeLayout pageName="Contact">
      <div className="py-10 flex items-center justify-center bg-white">
        
        {/* Contact Container with Responsive Grid Layout */}
        <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Section (Visible on all screen sizes) */}
          <div className="flex">
            <img
              src="/images/models/ali3.jpg" // Replace with the actual image path
              alt="Contact Us"
              className="w-full h-[40vh] md:h-[50vh] lg:h-[65vh] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* Right Contact Form Section */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-500 mb-6 text-center md:text-left">Contact Us</h2>
            
            {/* Subject Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                placeholder="Enter subject"
              />
            </div>
            
            {/* Message Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                placeholder="Write your message here..."
                rows="4"
              ></textarea>
            </div>
            
            {/* Send Button */}
            <button className="w-full hover:bg-gray-800 text-white py-2 sm:py-3 rounded-md bg-yellow-600 transition duration-200">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Contact;
