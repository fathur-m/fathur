import React from "react";
import { MdEmail } from "react-icons/md";
import "./EmailLoading.css";

const EmailSucces = () => {
  return (
    <div className="email-succes">
      <MdEmail className="mail-icon" />
      <p className="light-24">Message sent</p>
    </div>
  );
};

export default EmailSucces;
