import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/common/navBar/navBar";
import PatientList from "./components/pages/patientList/PatientList";
import PatientDetails from "./components/pages/patientDetails/PatientDetails";
import "./styles.css";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          auth: {
            username: "coalition",
            password: "skills-test",
          },
        }
      );

      console.log("response", response);
      setPatients(response.data);
      setSelectedPatient(
        response.data.find((patient) => patient.name === "Jessica Taylor")
      );
    };

    fetchPatients();
  }, []);

  return (
    <div className="app-container">
      <Sidebar className="sidebar" />
      <div className="main-content">
        <div className="patients-list-section">
          <PatientList
            patients={patients}
            setSelectedPatient={setSelectedPatient}
          />
        </div>
        <div className="patient-details-section">
          {selectedPatient && <PatientDetails patient={selectedPatient} />}
        </div>
      </div>
    </div>
  );
};

export default App;
