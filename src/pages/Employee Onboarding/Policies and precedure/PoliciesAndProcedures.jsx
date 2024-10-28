// src/pages/PoliciesAndProcedures.jsx
import React, { useState } from 'react';
import Sidebar from '../../../Components/Sidebar';

const policies = [
  {
    title: "Code of Conduct",
    content: "Our code of conduct policy outlines the rules and expected behaviors for all employees...",
  },
  {
    title: "Confidentiality Agreement",
    content: "Employees are expected to maintain the confidentiality of all company data and client information...",
  },
  {
    title: "Data Privacy",
    content: "This policy explains our commitment to data privacy and employees’ responsibilities in protecting sensitive information...",
  },
  {
    title: "Equal Opportunity",
    content: "We are an equal opportunity employer and follow laws to prevent discrimination based on race, gender, etc.",
  },
];

const PoliciesAndProcedures = () => {
  const [acknowledgments, setAcknowledgments] = useState(
    new Array(policies.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedAcknowledgments = [...acknowledgments];
    updatedAcknowledgments[index] = !updatedAcknowledgments[index];
    setAcknowledgments(updatedAcknowledgments);
  };

  const handleSubmit = () => {
    if (acknowledgments.every((ack) => ack)) {
      alert("Thank you! You've acknowledged all policies.");
      // Submit data or navigate to the next onboarding step here
    } else {
      alert("Please acknowledge all policies before proceeding.");
    }
  };

  return (
    <>
    <Sidebar />
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Policies and Procedures
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        {policies.map((policy, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {policy.title}
            </h2>
            <p className="text-gray-600">{policy.content}</p>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id={`acknowledge-${index}`}
                checked={acknowledgments[index]}
                onChange={() => handleCheckboxChange(index)}
                className="mr-2"
              />
              <label htmlFor={`acknowledge-${index}`} className="text-gray-700">
                I have read and understand the {policy.title} policy
              </label>
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Acknowledgment
        </button>
      </div>
    </div>
    </>
  );
};

export default PoliciesAndProcedures;
