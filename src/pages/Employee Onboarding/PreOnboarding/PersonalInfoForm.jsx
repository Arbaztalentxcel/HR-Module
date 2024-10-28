// PersonalInfoForm.jsx
import React, { useState } from 'react';
import Sidebar from '../../../Components/Sidebar';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to send formData to backend or process it as needed
};

  return (
    <>
    <Sidebar />
    <div className="h-screen flex flex-col justify-center items-center px-4 bg-gray-100">
        <div className="w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto p-6 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md py-5">
            <h2 className="text-2xl font-bold mb-4 text-center">Employee Information</h2>
            <form onSubmit={handleSubmit}>
                {/* Personal Details */}
                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Emergency Contact */}
                {/* Uncomment if emergency contact is required */}
                {/* <h3 className="text-xl font-bold mb-2 mt-6">Emergency Contact</h3>
    <div className="mb-4">
        <label className="block text-gray-700">Contact Name</label>
        <input
            type="text"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
        />
    </div>

    <div className="mb-4">
        <label className="block text-gray-700">Contact Phone</label>
        <input
            type="tel"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
        />
    </div>

    <div className="mb-4">
        <label className="block text-gray-700">Relation</label>
        <input
            type="text"
            name="emergencyContactRelation"
            value={formData.emergencyContactRelation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
        />
    </div> */}

                <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>

</>
  );
};

export default PersonalInfoForm;
