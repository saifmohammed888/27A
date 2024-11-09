import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { HomeLayout } from '../components/layouts/homeLayout';

const services = [
    {
      id: 1,
      title: 'Full Hair Color',
      description: 'Complete color coverage for a consistent and vibrant look.',
      imageUrl: 'images/services/service1.jpg',
    },
    {
      id: 2,
      title: 'Highlights',
      description: 'Lighten selected sections of hair for a bright and blended look.',
      imageUrl: 'images/services/service2.jpg',
    },
    {
      id: 3,
      title: 'Partial Highlights',
      description: 'Highlights applied to specific sections for a natural look.',
      imageUrl: 'images/services/service3.jpg',
    },
    {
      id: 4,
      title: 'Balayage',
      description: 'Natural sun-kissed highlights with a smooth, hand-painted technique.',
      imageUrl: 'images/services/service4.jpg',
    },
    {
      id: 5,
      title: 'Ombre',
      description: 'Gradual fade from dark roots to light ends, creating a beautiful transition.',
      imageUrl: 'images/services/service5.jpg',
    },
    {
      id: 6,
      title: 'Sombre (Soft Ombre)',
      description: 'A softer, more subtle version of ombre for a natural transition.',
      imageUrl: 'images/services/service6.jpg',
    },
    {
      id: 7,
      title: 'Lowlights',
      description: 'Adding darker shades to certain strands for depth and contrast.',
      imageUrl: 'images/services/service7.jpg',
    },
    {
      id: 8,
      title: 'Root Touch-Up',
      description: 'Color application to new hair growth for consistent color coverage.',
      imageUrl: 'images/services/service8.jpg',
    },
    {
      id: 9,
      title: 'Glossing Treatment',
      description: 'Adds shine and refreshes color for a vibrant finish.',
      imageUrl: 'images/services/service9.jpg',
    },
    {
      id: 10,
      title: 'Hair Tinting',
      description: 'Temporary or semi-permanent color to adjust tone and add shine.',
      imageUrl: 'images/services/service10.jpg',
    },
    {
      id: 11,
      title: 'Babylights',
      description: 'Very fine highlights that mimic natural, sun-lit highlights.',
      imageUrl: 'images/services/service11.jpg',
    },
    {
      id: 12,
      title: 'Color Correction',
      description: 'Correcting unwanted tones or uneven color for a fresh start.',
      imageUrl: 'images/services/service12.jpg',
    },
    {
      id: 13,
      title: 'Fantasy Colors',
      description: 'Bright, bold colors for creative and high-fashion looks.',
      imageUrl: 'images/services/service13.jpg',
    },
    {
      id: 14,
      title: 'Double Process Color',
      description: 'Bleaching followed by color application for vibrant results.',
      imageUrl: 'images/services/service14.jpg',
    },
    {
      id: 15,
      title: 'Highlights/Lowlights Combo',
      description: 'Combining highlights and lowlights for a multi-dimensional look.',
      imageUrl: 'images/services/service15.jpg',
    },
    {
      id: 16,
      title: 'Shadow Root',
      description: 'Blending root color with the rest of the hair for a natural transition.',
      imageUrl: 'images/services/service16.jpg',
    },
    {
      id: 17,
      title: 'Toner',
      description: 'Adjusts undertones and neutralizes brassiness for a perfect shade.',
      imageUrl: 'images/services/service17.jpg',
    },
    {
      id: 18,
      title: 'Hair Contouring',
      description: 'Strategically placed highlights and lowlights to enhance facial features.',
      imageUrl: 'images/services/service18.jpg',
    },
];
  
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
    return (
      <div className="min-h-screen py-12 px-6">
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
                <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-200">
                  Query for Pricing
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
};
  
export default Services