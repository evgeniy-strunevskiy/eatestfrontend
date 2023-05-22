import styles from "./Popup.module.scss";
import classNames from "classnames";
import { ReactComponent as Cross } from "../../../assets/svg/cross.svg";

export const Popup = ({ setPopupVisible, responseServer }) => {
  const title = responseServer === "SUCCESS!" ? "SUCCESS" : "ERROR";
  const success = "You have successfully subscribed to the email newsletter"
  const response = responseServer === "SUCCESS!" ? success : responseServer
  console.log(responseServer);

  const handleVisible = () => {
    setPopupVisible(false)
    document.body.style.overflow = "auto";
  }

  return (
    <div
      className={classNames(styles.popup)}
      onClick={handleVisible}
    >
      <div
        className={classNames(styles.popup__body)}
        onClick={(e) => e.stopPropagation()}
      >
        <Cross
          className={classNames(styles.popup__cross)}
          onClick={handleVisible}
        />
        <h2 className={classNames(styles.popup__title)}>{title}</h2>
        <div className={classNames(styles.popup__lid)}>
          {response}
        </div>
        <button
          onClick={handleVisible}
          className={classNames(styles.popup__button)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
