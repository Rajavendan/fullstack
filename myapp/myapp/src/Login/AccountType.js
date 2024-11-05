import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountType.css';
import BITlogo from '../images/bitlogo.png'; // Adjust the path according to your folder structure
import adminpng from '../images/adminpng.png'; // Adjust the path according to your folder structure
import student from '../images/student.png'; // Adjust the path according to your folder structure

const AccountType = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate('/login'); 
  };

  const handleAdminClick = () => {
    // Add navigation logic for Admin if needed
  };

  return (
    <div className="account-type-container">
      <h2>PROJECT SELECTION PORTAL</h2>
      <div className="logo">
        <img src={BITlogo} alt="BIT Logo" /> {/* Use the imported image */}
      </div>
      <h3>CHOOSE YOUR ACCOUNT TYPE</h3>

      <div className="buttons-container">
        <div className="account-type-button" onClick={handleAdminClick}>
        <img src={adminpng} alt="ADMIN Logo" />
        <h3>ADMIN</h3>
        </div>
        <div className="account-type-button" onClick={handleStudentClick}>
        <img src={student} alt="Student" />
        <h3>STUDENT</h3>
        </div>
    
      </div>
    </div>
  );
};

export default AccountType;
