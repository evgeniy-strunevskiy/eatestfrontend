import styles from "./Email.module.scss";
import classNames from "classnames";
import { Button } from "./UI/Button/Button.jsx";
import { useState } from "react";
import { emailServer } from "../api/emailServer.js";
import { Popup } from "./UI/Popup/Popup.jsx";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [responseServer, setResponseServer] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();
      try {
        await emailServer.addEmail(email);
        setPopupVisible(true);
        setResponseServer('SUCCESS!')
        setEmail('')
      } catch (error) {
        setPopupVisible(true);
        setResponseServer(error.message)
      }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className={classNames(styles.email)}>
      <input
        className={classNames(styles.email__input)}
        type="email"
        required
        name="email"
        value={email}
        onChange={handleEmailChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        placeholder="Enter your Email and get notified"
      />
      <Button />
    </form>
    {popupVisible && (
        <Popup setPopupVisible={setPopupVisible} responseServer={responseServer}/>
      )}
    </>
  );
};
