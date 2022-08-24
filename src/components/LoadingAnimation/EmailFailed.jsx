import React from "react";
import { GrVmMaintenance } from "react-icons/gr";
import "./EmailLoading.css";

const EmailFailed = ({ onClick }) => {
  return (
    <div className="email-failed">
      <GrVmMaintenance className="fail-icon" />
      <p className="light-24">
        Message failed <span>😞</span>
      </p>
      <p className="small-text">
        There seems to be something wrong with the server, please try again or
        wait until Fathur fixes it
      </p>
      <button type="button" className="close-mail" onClick={onClick}>
        Close
      </button>
    </div>
  );
};

export default EmailFailed;
