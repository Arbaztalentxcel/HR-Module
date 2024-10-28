import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import EmployeeInfoForm from '../pages/Employee Onboarding/EmployeeInfoForm';

const Sidebar = () => {
   const [isSidebarOpen, setSidebarOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);
   const sidebarRef = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
   };

   // Close the sidebar if clicking outside of it
   const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
         setSidebarOpen(false);
         setActiveDropdown(null); // Close all dropdowns if clicking outside
      }
   };

   useEffect(() => {
      // Add event listener
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup on unmount
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const handleMouseEnter = (item) => {
      setActiveDropdown(item);
   };

   const handleMouseLeave = () => {
      setActiveDropdown(null);
   };

   return (
      <div className="flex">
         {/* Mobile Toggle Button */}
         <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
         >
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
               <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         {/* Sidebar */}
         <aside
            ref={sidebarRef}
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
               } lg:translate-x-0 bg-gray-50 dark:bg-gray-800`}
            aria-label="Sidebar"
         >
            <div className="h-full px-3 py-4">
               <ul className="space-y-2 font-medium">
                  {/* Menu Item 1 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item1')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <Link to="/onboarding-info">
                        <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span className="flex items-center gap-2">Employee Onboarding</span>
                           {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item1' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 15l-5-5h10z" />
                           </svg> */}
                        </button>
                     </Link>
                     {activeDropdown === 'item1' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <Link to="/welcome-page" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Pre-Onboarding</Link>
                              </li>
                              <li>
                                 <Link to="/policy-procedure" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Policies and Procedures</Link>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Training and Development</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Tools and Resources</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">  Cultural Integration</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Performance and Feedback</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> HR and Benefits</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Social and Networking</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> FAQs and Support</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 2 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item2')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Performance </span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item2' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item2' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Goal Setting and Alignment</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Continuous Feedback and Communication</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Performance Monitoring and Evaluation</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Employee Development and Training</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Recognition and Rewards</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Performance Improvement Plans (PIP)</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Annual or Biannual Performance Appraisals</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Documentation and Record-Keeping</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 3 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item3')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Attendance</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item3' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item3' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Time Tracking and Monitoring</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Leave and Absence Management</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Compliance with Labor Laws</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Overtime Management</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Shift and Schedule Management</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Real-Time Tracking and Alerts</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Integration with Payroll System</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Attendance Analytics and Reporting</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Self-Service Portal</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 4 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item4')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Payroll </span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item4' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item4' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Employee Data Management</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Salary and Wages Calculation</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Deductions and Contributions</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Compliance with Tax and Labor Laws</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Payroll Processing and Disbursement</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Record Keeping and Reporting</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Handling Reimbursements and Expenses</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Payroll Software Integration</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Employee Self-Service Portal</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Error Resolution and Payroll Audits</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 5 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item5')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Employee Helpdesk</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item5' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item5' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Centralized Communication Platform</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Issue Categorization and Prioritization</a>
                              </li>

                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Knowledge Base and Self-Service Options</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Automated Ticketing System</a>
                              </li>

                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> SLA (Service Level Agreement) Management</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Multi-Departmental Integration</a>
                              </li>

                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Real-Time Tracking and Status Updates</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Feedback and Continuous Improvement</a>
                              </li>

                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Escalation Protocols</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Reporting and Analytics</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 6 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item6')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Reward & Recognition</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item6' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item6' && (
                        <div className="absolute left-full top-0 z-50 w-96 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Clear Objectives and Criteria</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Types of Rewards and Recognition</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Performance-Based Rewards</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Peer-to-Peer Recognition</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Spot and Immediate Recognition</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Annual Awards and Milestone Recognition</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Employee of the Month/Quarter Programs</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Personalized Recognition</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Career Development Opportunities as Rewards</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> Feedback and Continuous Improvement</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 7 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item7')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Employee engagement</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item7' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item7' && (
                        <div className="absolute left-full top-0 z-50 w-48 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 7-1</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 7-2</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 8 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item8')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Compensation Planning</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item8' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item8' && (
                        <div className="absolute left-full top-0 z-50 w-48 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 8-1</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 8-2</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 9 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item9')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Travell & Expense</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item9' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item9' && (
                        <div className="absolute left-full top-0 z-50 w-48 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-1</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-2</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 10 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item10')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">HR Analytics</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item10' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item10' && (
                        <div className="absolute left-full top-0 z-50 w-48 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-1</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-2</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>

                  {/* Menu Item 11 */}
                  <li
                     onMouseEnter={() => handleMouseEnter('item11')}
                     onMouseLeave={handleMouseLeave}
                     className="relative"
                  >
                     <button className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span className="flex items-center gap-2">Exit Process</span>
                        {/* <svg className={`w-5 h-5 transition-transform ${activeDropdown === 'item11' ? 'rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                           <path d="M10 15l-5-5h10z" />
                        </svg> */}
                     </button>
                     {activeDropdown === 'item11' && (
                        <div className="absolute left-full top-0 z-50 w-48 p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                           <ul className="space-y-1">
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-1</a>
                              </li>
                              <li>
                                 <a href="#" className="block p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 4-2</a>
                              </li>
                           </ul>
                        </div>
                     )}
                  </li>
               </ul>
            </div>
         </aside>

      </div>
   );
};

export default Sidebar;
