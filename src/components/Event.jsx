import styles from "./Event.module.scss";
import classNames from "classnames";
import { ButtonToEvent } from "./UI/ButtonToEvent/ButtonToEvent.jsx";


export const Event = () => {
  return (
    <div className={classNames(styles.event)}>
      <h4 className={classNames(styles.event__title)}>
        Check our event page when you wait:
      </h4>
      <ButtonToEvent />
    </div>
  );
};
