import styles from "./Unit.module.scss";
import classNames from "classnames";
import { ReactComponent as Shape } from "../../../assets/svg/counter-shape.svg";

export const Unit = ({ value, date }) => {
  return (
    <div className={classNames(styles.unit)}>
      <div className={classNames(styles.unit__number)}>
        <div
          className={classNames(styles.unit__value, {
            [styles.unit__value_last]: date === "Seconds",
          })}
        >
          {value}
        </div>
      </div>
        <div className={classNames(styles.unit__time, {
          [styles.unit__time_days]: date === "Days",
          [styles.unit__time_hours]: date === "Hours",
          [styles.unit__time_minutes]: date === "Minutes",
          [styles.unit__time_seconds]: date === "Seconds",
        })} >
          <Shape className={classNames(styles.unit__shape)} />
        </div>
    </div>
  );
};
