import React from 'react';
import './TeamDetails.css'; // Importing the styles
import profile from '../images/dashboardprofile.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TeamDetails = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-pic" />
          <h2>Bharath</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active-tab" onClick={() => navigate('/dashboard')}>
              Team Details
            </li>
            <li onClick={() => navigate('/dashboard/createproject')}>
              Create Project
            </li>
            <li onClick={() => navigate('/progress')}>Progress</li>
            <li
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/form.pdf';  // The path to your file
    link.download = 'form.pdf';     // The name of the file to download
    link.click();                   // Programmatically click the link to trigger the download
  }}
>
  Download Form
</li>

            <li onClick={() => navigate('/others')}>Others</li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        {/* Project Summary Container */}
        <div className="project-summary-container">
          <h3>PROJECT SUMMARY</h3>
          <p><strong>Team Size :</strong> Members</p>
          <p><strong>Team Leader:</strong>Rajavendan R</p>
          <p><strong>Project Title:</strong>Advanced Web Application</p>
          <p><strong>Project Cluster:</strong>Web Development</p>
          <p><strong>Faculty Guide:</strong>Dr. John Doe</p>
          <p><strong>Project Category:</strong> Internal</p>
        </div>

        <div className="project-cards-container">
          {/* The 4 Project Cards */}
          <div className="project-card">
            <h3>PROJECT DETAILS</h3>
            <p><strong>Team Leader:</strong> RAJAVENDAN R</p>
            <p><strong>Roll no:</strong> 7376222IT230</p>
            <p><strong>Department:</strong> INFORMATION TECHNOLOGY</p>
            <p><strong>Role:</strong> Front end Developer</p>
          </div>
          <div className="project-card">
            <h3>PROJECT DETAILS</h3>
            <p><strong>Team Leader:</strong> BHARATH K</p>
            <p><strong>Roll no:</strong> 7376222IT231</p>
            <p><strong>Department:</strong> INFORMATION TECHNOLOGY</p>
            <p><strong>Role:</strong> Back end Developer</p>
          </div>
          <div className="project-card">
            <h3>PROJECT DETAILS</h3>
            <p><strong>Team Leader:</strong> SURESH S</p>
            <p><strong>Roll no:</strong> 7376222IT232</p>
            <p><strong>Department:</strong> INFORMATION TECHNOLOGY</p>
            <p><strong>Role:</strong> Database Manager</p>
          </div>
          <div className="project-card">
            <h3>PROJECT DETAILS</h3>
            <p><strong>Team Leader:</strong> ANIL K</p>
            <p><strong>Roll no:</strong> 7376222IT233</p>
            <p><strong>Department:</strong> INFORMATION TECHNOLOGY</p>
            <p><strong>Role:</strong> UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
