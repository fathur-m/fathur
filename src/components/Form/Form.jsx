import React, { useState } from "react";
import { send } from "emailjs-com";
import { motion } from "framer-motion";
import "./Form.css";
import EmailStatus from "../LoadingAnimation/EmailStatus";
import EmailFailed from "../LoadingAnimation/EmailFailed";
import EmailSucces from "../LoadingAnimation/EmailSucces";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [mailStatus, setMailStatus] = useState(false);
  const [mailSucces, setMailSucces] = useState(false);
  const [mailFailed, setMailFailed] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setMailStatus(!mailStatus);
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log("SUCCES!", response.status, response.text);
        setMailStatus(false);
        setMailSucces(!mailSucces);
        setTimeout(() => {
          setMailSucces(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setMailStatus(false);
        setMailFailed(!mailFailed);
      });
    setToSend({
      from_name: "",
      reply_to: "",
      message: "",
    });
    document.getElementById("name").classList.remove("focus");
    document.getElementById("email").classList.remove("focus");
    document.getElementById("message").classList.remove("msg-focus");
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const nameFocus = () => {
    document.getElementById("name").classList.add("focus");
  };
  const nameUnFocus = () => {
    if (toSend.from_name !== "") {
      return;
    } else {
      document.getElementById("name").classList.remove("focus");
    }
  };
  const emailFocus = () => {
    document.getElementById("email").classList.add("focus");
  };
  const emailUnFocus = () => {
    if (toSend.reply_to !== "") {
      return;
    } else {
      document.getElementById("email").classList.remove("focus");
    }
  };
  const msgFocus = () => {
    document.getElementById("message").classList.add("msg-focus");
  };
  const msgUnFocus = () => {
    if (toSend.message !== "") {
      return;
    } else {
      document.getElementById("message").classList.remove("msg-focus");
    }
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form-title">Send Email</h1>
      <div className="i-box i-name">
        <label id="name">Name</label>
        <input
          type="text"
          name="from_name"
          required
          autoComplete="off"
          value={toSend.from_name}
          onChange={handleChange}
          onFocus={nameFocus}
          onBlur={nameUnFocus}
        />
      </div>
      <div className="i-box i-mail">
        <label id="email">Email</label>
        <input
          type="email"
          name="reply_to"
          required
          autoComplete="off"
          value={toSend.reply_to}
          onChange={handleChange}
          onFocus={emailFocus}
          onBlur={emailUnFocus}
        />
      </div>
      <div className="i-box i-message">
        <label id="message">Message</label>
        <textarea
          required
          name="message"
          value={toSend.message}
          onChange={handleChange}
          onFocus={msgFocus}
          onBlur={msgUnFocus}
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="form-btn"
        whileTap={{ scale: 1.1 }}
      >
        Send
      </motion.button>
      {/* STATUS ANIMATION */}
      {mailStatus && <EmailStatus />}
      {mailSucces && <EmailSucces />}
      {mailFailed && <EmailFailed onClick={() => setMailFailed(false)} />}
    </form>
  );
};

export default Form;
