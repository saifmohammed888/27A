import React from 'react'
import "./flip.module.css"

export const ImageGrid = () => {
  return (
      <div>
        <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 zmt-12">
            {[3, 4, 5, 1].map((index) => (
                <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:flip-animation"
                >
                <img
                    src={`/images/models/model${index}.jpg`} // Replace with actual paths to images
                    className="w-full h-[50vh] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
                    <p className="text-white font-semibold text-lg opacity-0 hover:opacity-100 transition-opacity duration-500">
                    Model {index}
                    </p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}
