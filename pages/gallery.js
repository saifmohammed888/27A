import React, { useEffect, useState } from 'react';
import { HomeLayout } from '../components/layouts/homeLayout';

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;

    // Set loading to false once the script has loaded
    script.onload = () => setLoading(false);

    // Append the script to the body
    document.body.appendChild(script);

    // Fallback to hide loader after 5 seconds if onLoad doesn't fire
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup script and timeout on unmount
    return () => {
      document.body.removeChild(script);
      clearTimeout(timeout);
    };
  }, []);
      
    return (
    <HomeLayout pageName="Gallery">
      <div className="bg-white text-gray-800 px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-500 mb-4 text-center">Gallery</h2>
        <div className="text-center w-full mx-auto mb-10">
        <p className="text-gray-600 text-lg mb-2">
            Discover our curated collection of hair transformations, where elegance meets artistry. Sharing memories from our beautiful and elegant clients.
        </p>
        </div>
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-yellow-600 h-10 w-10 animate-spin"></div>
          </div>
        )}
        
        {/* Iframe Section */}
        <section className={`w-full overflow-hidden ${loading ? 'hidden' : ''}`}>
          <iframe
            src="//lightwidget.com/widgets/cbc91b5ccc57572baf8578b885eb5daa.html"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{ width: '100%', border: 0, overflow: 'hidden', height: '400px' }}
            title="Instagram Gallery"
          ></iframe>
        </section>
      </div>    
    </HomeLayout>
  );
};

export default Gallery;
