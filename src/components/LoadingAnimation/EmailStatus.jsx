import React from "react";
import { BarLoader } from "react-spinners";
import { MdEmail } from "react-icons/md";
import "./EmailLoading.css";
const EmailStatus = () => {
  return (
    <div className="loading-bar">
      <MdEmail className="mail-icon"/>
      <BarLoader color="#36B5BB" />
      <p className="light-24">Sending Message</p>
    </div>
  );
};

export default EmailStatus;
