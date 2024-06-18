import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import "./patientDetailsStyles.css";
import heartbpm from "../../../assets/images/HeartBPM (1).svg";
import resprate from "../../../assets/images/respiratory rate.svg";
import temperature from "../../../assets/images/temperature.svg";
import downloadicon from "../../../assets/images/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import birthIcon from "../../../assets/images/BirthIcon (1).svg";
import phoneIcon from "../../../assets/images/PhoneIcon.svg";
import genderIcon from "../../../assets/images/FemaleIcon (1).svg";
import insuranceIcon from "../../../assets/images/InsuranceIcon.svg";
import DataTable from "../../common/dataTable/dataTable";

import arrowUp from "../../../assets/images/ArrowUp (1).svg";
import arrowDown from "../../../assets/images/ArrowDown (2).svg";

const PatientDetails = ({ patient }) => {



  console.log("patient data ", patient);
  const [timePeriod, setTimePeriod] = useState(6);

  const bloodPressureData = patient.diagnosis_history
  .slice(-timePeriod) 
  .map(diagnosis => ({
    name: moment(`${diagnosis.month}, ${diagnosis.year}`, "MMMM, YYYY").format("MMM YYYY"),
    systolic: diagnosis.blood_pressure.systolic.value,
    diastolic: diagnosis.blood_pressure.diastolic.value,
  }));


  return (
    <div className="Patient-container">
      <div className="diagnostic-data">
        <div className="diagnosis-history">
          <h2>Diagnosis History</h2>
          <div className="chart-container">
            <div className="chart-wrapper">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>Blood Pressure</h3>

                <div className="time-period-selector">
                  <select
                    id="timePeriod"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                  >
                    <option value={6}>Last 6 months</option>
                    <option value={12}>Last 12 months</option>
                  </select>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={bloodPressureData}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }} // Minimal margins
                >
                  <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#E66FD2"
                    dot={{ r: 5, fill: "#E66FD2" }} // Smaller dot size
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#8C6FE6"
                    dot={{ r: 5, fill: "#8C6FE6" }} // Smaller dot size
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="blood-pressure-info">
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  <div
                    className="dot"
                    style={{ backgroundColor: "#E66FD2" }}
                  ></div>
                  Systolic{" "}
                </div>
                <h2>
                  {patient.diagnosis_history[0]?.blood_pressure.systolic.value}
                </h2>
                <div className="info-wrapper">
                  {patient.diagnosis_history[0]?.blood_pressure.systolic
                    .levels === "Higher than Average" && (
                    <img
                      src={arrowUp}
                      alt="Above average"
                      className="arrow-icon"
                    />
                  )}
                  {patient.diagnosis_history[0]?.blood_pressure.systolic
                    .levels === "Lower than Average" && (
                    <img
                      src={arrowDown}
                      alt="Below average"
                      className="arrow-icon"
                    />
                  )}
                  {patient.diagnosis_history[0]?.blood_pressure.systolic
                    .levels !== "Higher than Average" &&
                    patient.diagnosis_history[0]?.blood_pressure.systolic
                      .levels !== "Lower than Average" && <></>}
                  <p>
                    {
                      patient.diagnosis_history[0]?.blood_pressure.systolic
                        .levels
                    }
                  </p>
                </div>
              </div>
              <div className="line-separator"></div>
              <div>
                <div
                  style={{
                    fontWeight: "bold",
                    alignItems: "center",
                    display: "flex",
                    gap: "5px",
                  }}
                >
                  <div
                    className="dot"
                    style={{ backgroundColor: "#8C6FE6" }}
                  ></div>
                  Diastolic{" "}
                </div>
                <h2>
                  {patient.diagnosis_history[0]?.blood_pressure.diastolic.value}
                </h2>
                <div className="info-wrapper">
                  {patient.diagnosis_history[0]?.blood_pressure.diastolic
                    .levels === "Lower than Average" && (
                    <img
                      src={arrowDown}
                      alt="Below average"
                      className="arrow-icon"
                    />
                  )}
                  <p>
                    {
                      patient.diagnosis_history[0]?.blood_pressure.diastolic
                        .levels
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="vitals">
            <div className="vital Respiratory">
              <img
                className="card-icon"
                src={resprate}
                alt="Respiratory Rate Icon"
              />
              <h4>Respiratory Rate</h4>
              <h2>
                {patient.diagnosis_history[0]?.respiratory_rate.value} bpm
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {patient.diagnosis_history[0]?.respiratory_rate.levels ===
                  "Higher than Average" && (
                  <img
                    src={arrowUp}
                    alt="Above average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.respiratory_rate.levels ===
                  "Lower than Average" && (
                  <img
                    src={arrowDown}
                    alt="Below average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.respiratory_rate.levels ===
                  "Normal" && <></>}
                <p>{patient.diagnosis_history[0]?.respiratory_rate.levels}</p>
              </div>
            </div>

            <div className="vital Temperature">
              <img
                className="card-icon"
                src={temperature}
                alt="Temperature Icon"
              />
              <h4>Temperature</h4>
              <h2>{patient.diagnosis_history[0]?.temperature.value}°F</h2>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {patient.diagnosis_history[0]?.temperature.levels ===
                  "Higher than Average" && (
                  <img
                    src={arrowUp}
                    alt="Above average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.temperature.levels ===
                  "Lower than Average" && (
                  <img
                    src={arrowDown}
                    alt="Below average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.temperature.levels ===
                  "Normal" && <></>}
                <p>{patient.diagnosis_history[0]?.temperature.levels}</p>
              </div>
            </div>

            <div className="vital Heart">
              <img className="card-icon" src={heartbpm} alt="Heart Rate Icon" />
              <h4>Heart Rate</h4>
              <h2>{patient.diagnosis_history[0]?.heart_rate.value} bpm</h2>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                {patient.diagnosis_history[0]?.heart_rate.levels ===
                  "Higher than Average" && (
                  <img
                    src={arrowUp}
                    alt="Above average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.heart_rate.levels ===
                  "Lower than Average" && (
                  <img
                    src={arrowDown}
                    alt="Below average"
                    className="arrow-icon"
                  />
                )}
                {patient.diagnosis_history[0]?.heart_rate.levels ===
                  "Normal" && <></>}
                <p>{patient.diagnosis_history[0]?.heart_rate.levels}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="diagnostic-list">
          <h2>Diagnostic List</h2>
          <DataTable data={patient.diagnostic_list} />
        </div>
      </div>

      <div className="patient-details">
        <div className="patient-data">
          <div className="patient-header">
            <img
              src={patient.profile_picture}
              className="patient-profile-img"
              alt={patient.name}
            />
            <h2>{patient.name}</h2>
          </div>
          <div className="patient-info-wrapper">
            <div className="info-item">
              <img src={birthIcon} alt="Birth Icon" />
              <div className="info-content">
                <p className="label">Date of Birth:</p>
                <p className="data">{patient.date_of_birth}</p>
              </div>
            </div>
            <div className="info-item">
              <img src={genderIcon} alt="Gender Icon" />
              <div className="info-content">
                <p className="label">Gender:</p>
                <p className="data">{patient.gender}</p>
              </div>
            </div>
            <div className="info-item">
              <img src={phoneIcon} alt="Phone Icon" />
              <div className="info-content">
                <p className="label">Contact Info:</p>
                <p className="data">{patient.phone_number}</p>
              </div>
            </div>
            <div className="info-item">
              <img src={phoneIcon} alt="Emergency Contact Icon" />
              <div className="info-content">
                <p className="label">Emergency Contacts:</p>
                <p className="data">{patient.emergency_contact}</p>
              </div>
            </div>
            <div className="info-item">
              <img src={insuranceIcon} alt="Insurance Provider Icon" />
              <div className="info-content">
                <p className="label">Insurance Provider:</p>
                <p className="data">{patient.insurance_type}</p>
              </div>
            </div>
            <button className="show-all-info-button">
              Show All Information
            </button>
          </div>
        </div>

        <div className="lab-results">
          <div className="lab-result-head">
            {" "}
            <h2>Lab Results</h2>
          </div>

          <div className="lab-results-list">
            {patient.lab_results.map((result, index) => (
              <div className="lab-result-item" key={index}>
                <p>{result}</p>
                <img src={downloadicon} alt="Download Icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
