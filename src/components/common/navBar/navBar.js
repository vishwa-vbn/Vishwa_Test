import React from "react";
import "./navBarStyles.css";
import doctorprofile from "../../../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import dotvertical from "../../../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import logo from "../../../assets/images/TestLogo.svg";
import overviewIcon from "../../../assets/images/home_FILL0_wght300_GRAD0_opsz24.svg";
import patientsIcon from "../../../assets/images/group_FILL0_wght300_GRAD0_opsz24.svg";
import messageIcon from "../../../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import scheduleIcon from "../../../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import transactionIcon from "../../../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import settingsIcon from "../../../assets/images/settings_FILL0_wght300_GRAD0_opsz24.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <nav className="navigation">
        <ul>
          <li className="nav-item">
            <a href="#">
              <img src={overviewIcon} alt="Overview" />
              <p>Overview</p>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <img src={patientsIcon} alt="Patients" />
              <p>Patients</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={scheduleIcon} alt="Schedule" />
              <p>Schedule</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={messageIcon} alt="Message" />
              <p>Message</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={transactionIcon} alt="Transactions" />
              <p>Transactions</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <img src={doctorprofile} alt="Dr. Jose Simmons" />
        <div className="profile-wrapper">
          <div className="profile-data-wrapper">
            <h4 className="DoctorName">Dr. Jose Simmons</h4>
            <p className="designation">General Practitioner</p>
          </div>
          <div className="options-wrapper">
            <img className="options-icon" src={settingsIcon}></img>

            <img className="options-icon" src={dotvertical}></img>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
