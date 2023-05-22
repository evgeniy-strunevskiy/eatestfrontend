import styles from "./ButtonToEvent.module.scss";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";
import classNames from "classnames";

export const ButtonToEvent = () => {

  const goEvent = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <button onClick={goEvent} className={classNames(styles.button)}>
      <h5 className={classNames(styles.button__title)}>Go to the event</h5>
      <Arrow />
    </button>
  );
};
