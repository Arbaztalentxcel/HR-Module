// WelcomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar';

const WelcomePage = () => (
  <>
  <Sidebar />
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
    <h1 className="text-3xl font-bold mb-4">Welcome to Pre-Onboarding!</h1>
    <p className="text-center mb-6">
      Let's start your journey. Click below to begin the pre-onboarding process.
    </p>
    <Link to="/personal-info" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Start Now
    </Link>
  </div>
  </>
);

export default WelcomePage;
