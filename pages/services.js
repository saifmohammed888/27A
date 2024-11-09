import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HomeLayout } from '../components/layouts/homeLayout';
import { toast, ToastContainer } from 'react-toastify';
import { services } from '../components/utils/constants';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import WhatsAppPopup from '../components/common/whatsapp';

const Services = () => {
  return (
    <HomeLayout pageName="Services">
    <div className="max-w-[90%] m-auto bg-white text-gray-800 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center">Services</h2>
        <section>
            <CardGrid />
        </section>
    </div>    
  </HomeLayout>
  )
}

const CardGrid = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false)

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      subject: `Pricing request for ${selectedService.title}`,
      message: `Please Share price for ${selectedService.title} - ${selectedService.description}`
    };

    if (!formData.name || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill in all fields.");
      return;
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
        toast.success('Pricing submitted successfully!');
      } else {
        toast.error("Error sending request. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false); 
    }

    closeModal();
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <ToastContainer position="top-right" autoClose={false} />
      <WhatsAppPopup/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button
                onClick={() => openModal(service)}
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Query for Pricing
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Query for Pricing"
        className="bg-white relative rounded-lg max-w-lg mx-auto my-16 shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <a href='#' onClick={closeModal} className="flex font-bold text-xl justify-end pr-4">X</a>
        <section className='p-8'>
        {selectedService && (
          <div>
            <img
              src={selectedService.imageUrl}
              alt={selectedService.title}
              className="w-full h-48 object-cover object-center"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-2">{selectedService.title}</h2>
            <p className="text-gray-600 mb-6">{selectedService.description}</p>
            <form onSubmit={handleSubmitQuery}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="phoneNumber"
                  id="phoneNumber"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your phoneNumber"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full hover:bg-gray-800 text-white py-2 sm:py-3 rounded-md bg-yellow-600 transition duration-200"
                disabled={loading}
              >
                  {loading ? (
                    <span className='flex justify-center'>
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
                      Submitting...
                    </span>
                  ) : (
                    "Submit Pricing Query"
                  )}
              </button>
            </form>
          </div>
        )}
        </section>
      </Modal>
    </div>
  );
};

export default Services