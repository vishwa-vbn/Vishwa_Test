import React from "react";
import searchIcon from "../../../assets/images/search_FILL0_wght300_GRAD0_opsz24 (1).svg";
import horizontalmenu from "../../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import "./patientListStyles.css";

const PatientList = ({ patients, setSelectedPatient }) => {
  return (
    <ul className="patient-list">
      <div className="search-head-wrapper">
        <h2>Patients</h2>
        <img src={searchIcon} alt="Search" />
      </div>
      <div className="patient-items-wrapper">
        {patients.map((patient) => (
          <li
            key={patient.name}
            className="patient-item"
            onClick={() => setSelectedPatient(patient)}
          >
            <div className="patient-info">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="patient-img"
              />
              <div className="patient-details-wrapper">
                <h4 className="patient-name">{patient.name}</h4>
                <div className="patient-meta">
                  <span>{patient.gender}</span>, <span>{patient.age}</span>
                </div>
              </div>
            </div>
            <img className="horizontal-dots" src={horizontalmenu} alt="More" />
          </li>
        ))}
      </div>
    </ul>
  );
};

export default PatientList;
