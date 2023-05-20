import styles from "./Input.module.scss";
import classNames from "classnames";

export const Input = () => {
  return (
    <input
      className={classNames(styles.input)}
      type="email"
      required
      placeholder="Enter your Email and get notified"
    />
  );
};
