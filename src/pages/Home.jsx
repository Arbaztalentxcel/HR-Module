import React from 'react'
import Sidebar from '../Components/Sidebar'
// import EmployeeInfoForm from './Employee Onboarding/EmployeeInfoForm'
// import OnboardingPage from './Employee Onboarding/OnboardingPage'

const Home = () => {
  return (
    <div>
      <Sidebar />
      {/* <EmployeeInfoForm /> */}
      {/* <OnboardingPage /> */}
      <>
      <div className="min-h-screen p-4 md:p-8 bg-gray-100 flex flex-col items-center">
            {/* Welcome Message */}
            <section className="w-full md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Welcome to [Company Name]</h2>
                <p className="text-gray-700">
                    Dear [Employee Name],
                    <br /><br />
                    Welcome to the team! We’re thrilled to have you on board. Our CEO, [CEO Name], and the HR team are here to ensure your transition is smooth and that you have everything you need to succeed. We look forward to achieving great things together!
                </p>
            </section>

            {/* Company Overview */}
            <section className="w-full md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Company Overview</h3>
                <p className="text-gray-700">
                    <strong>History:</strong> Founded in [Year], [Company Name] has grown to become a leader in [Industry].
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Mission:</strong> To [describe mission briefly, e.g., "innovate and lead the way in sustainable technology solutions."].
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Vision:</strong> Our vision is to [vision statement, e.g., "create a sustainable and inclusive future for all"].
                </p>
                <p className="text-gray-700 mt-2">
                    <strong>Values:</strong> Integrity, Innovation, Teamwork, and Customer Focus.
                </p>
            </section>

            {/* Onboarding Schedule */}
            <section className="w-full md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Onboarding Schedule</h3>
                <ul className="space-y-4">
                    <li>
                        <strong>Day 1:</strong> Orientation and Office Tour - 9:00 AM to 11:00 AM
                    </li>
                    <li>
                        <strong>Day 2:</strong> HR and Policy Overview - 10:00 AM to 12:00 PM
                    </li>
                    <li>
                        <strong>Week 1:</strong> Initial Training Sessions on Tools and Systems - Daily from 9:00 AM to 4:00 PM
                    </li>
                    <li>
                        <strong>Week 2:</strong> Department-Specific Training and Shadowing - As per schedule
                    </li>
                    <li>
                        <strong>Important Dates:</strong> [Add any special dates here, like end of probation, first performance review, etc.]
                    </li>
                </ul>
            </section>
        </div>
      </>
    </div>
  )
}

export default Home