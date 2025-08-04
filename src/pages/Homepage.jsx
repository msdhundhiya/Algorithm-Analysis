import React from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  return <div className="text-center bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to the Sorting Visualizer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Choose a sorting algorithm from the navigation above to see its performance statistics and code examples in various languages.
        </p>
        <Link 
            to="/sort/bubble" 
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition text-lg shadow-md"
        >
            Get Started
        </Link>
    </div>
};

export default HomePage;