import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./Components/Sidebar";
// import EmployeeInfoForm from "./pages/Employee Onboarding/EmployeeInfoForm";
import OnboardingPage from "./pages/Employee Onboarding/OnboardingPage";
import PersonalInfoForm from "./pages/Employee Onboarding/PreOnboarding/PersonalInfoForm";
import WelcomePage from "./pages/Employee Onboarding/PreOnboarding/WelcomePage";
import PoliciesAndProcedures from "./pages/Employee Onboarding/Policies and precedure/PoliciesAndProcedures";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        {/* <Route path="/employee-info" element={<EmployeeInfoForm />} /> */}
        <Route path="/onboarding-info" element={<OnboardingPage />} />
        <Route path="/personal-info" element={<PersonalInfoForm />} />
        <Route path="/welcome-page" element={<WelcomePage />} />
        <Route path="/policy-procedure" element={<PoliciesAndProcedures />} />


        
        

      </Routes>
    </div>
  );
};

export default App;
