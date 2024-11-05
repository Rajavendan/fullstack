import React, { useState } from 'react';
import './CreateProject.css'; // Importing the same styles for consistency
import profile from '../images/dashboardprofile.png';

const CreateProject = () => {
  const [projectType, setProjectType] = useState('Internal');
  const [teamSize, setTeamSize] = useState(1);
  const [cluster, setCluster] = useState('');
  const [externalCategory, setExternalCategory] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false); // State to manage popup visibility

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  const handleTeamSizeChange = (e) => {
    setTeamSize(parseInt(e.target.value));
  };

  const handleClusterChange = (e) => {
    setCluster(e.target.value);
  };

  const handleExternalCategoryChange = (e) => {
    setExternalCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisible(true); // Show popup on form submission
  };

  const closePopup = () => {
    setPopupVisible(false); // Hide popup when clicked
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-pic" />
          <h2>Bharath</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="/Dashboard/TeamDetails">Team Details</a>
            </li>
            <li className="active-tab">Create Project</li>
            <li>
              <a href="/progress">Progress</a>
            </li>
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
            <li>
              <a href="/others">Others</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="project-summary-container create-project-container">
          <h3>CREATE PROJECT</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><strong>Project Type:</strong></label>
              <select value={projectType} onChange={handleProjectTypeChange}>
                <option disabled>Select the project type</option> 
                <option value="Internal">Internal</option>
                <option value="External">External</option>
              </select>
            </div>

            {projectType === 'External' && (
              <div className="form-group">
                <label><strong>Category:</strong></label>
                <select value={externalCategory} onChange={handleExternalCategoryChange}>
                  <option value="" disabled>Select</option>
                  <option value="External Own">External Own</option>
                  <option value="Industry">Industry</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label><strong>Project Title:</strong></label>
              {projectType === 'Internal' ? (
                <select>
                  <option value="" disabled>Select</option>
                  <option value="Object Detection">Object Detection</option>
                  <option value="Color Detection">Color Detection</option>
                  <option value="Image Classification">Image Classification</option>
                  <option value="Natural Language Processing">Natural Language Processing</option>
                  <option value="Speech Recognition">Speech Recognition</option>
                  <option value="Recommendation System">Recommendation System</option>
                </select>
              ) : (
                <input type="text" placeholder="Enter Project Title" />
              )}
            </div>

            <div className="form-group">
              <label><strong>Team Size:</strong></label>
              <select value={teamSize} onChange={handleTeamSizeChange}>
                <option value="" disabled>Select</option>
                <option value="1">1 Member</option>
                <option value="2">2 Members</option>
                <option value="3">3 Members</option>
              </select>
            </div>

            {projectType === 'Internal' && (
              <div className="form-group">
                <label><strong>Project Cluster:</strong></label>
                <select value={cluster} onChange={handleClusterChange}>
                  <option value="" disabled>Select The Project Cluster</option>
                  <option value="Cluster 1">Cluster 1 (Mechanical, Mechatronics, Aeronautical)</option>
                  <option value="Cluster 2">Cluster 2 (Civil, Agricultural)</option>
                  <option value="Cluster 3">Cluster 3 (ECE, E&I, EEE, Biomedical)</option>
                  <option value="Cluster 4">Cluster 4 (CSE, IT, AIDS, AIML, CT, CSD, ISE, CSBS)</option>
                  <option value="Cluster 5">Cluster 5 (Fashion, Textile)</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label><strong>Faculty Guide:</strong></label>
              <input type="text" placeholder="Enter Faculty Guide Name" />
            </div>

            <div className="form-group">
              <label><strong>Project Category:</strong></label>
              <input type="text" placeholder="Enter Project Category" />
            </div>

            {teamSize >= 2 && (
              <>
                <div className="form-group">
                  <label><strong>Member 1:</strong></label>
                  <input type="text" placeholder="Enter Member 1 Name" />
                </div>
                <div className="form-group">
                  <label><strong>Roll No:</strong></label>
                  <input type="text" placeholder="Enter Roll No" />
                </div>
                <div className="form-group">
                  <label><strong>Department:</strong></label>
                  <select>
                    <option value="" disabled>Select</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                  </select>
                </div>
              </>
            )}
            {teamSize === 3 && (
              <>
                <div className="form-group">
                  <label><strong>Member 2:</strong></label>
                  <input type="text" placeholder="Enter Member 2 Name" />
                </div>
                <div className="form-group">
                  <label><strong>Roll No:</strong></label>
                  <input type="text" placeholder="Enter Roll No" />
                </div>
                <div className="form-group">
                  <label><strong>Department:</strong></label>
                  <select>
                    <option value="" disabled>Select</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="MECH">MECH</option>
                  </select>
                </div>
              </>
            )}
            <button type="submit">Create Project</button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <h3>Project Registered</h3>
            <p>Your project has been successfully registered!</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProject;
