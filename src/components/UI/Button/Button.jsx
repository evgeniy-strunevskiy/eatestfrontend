import styles from "./Button.module.scss";
import classNames from "classnames";
import { ReactComponent as Arrow } from "../../../assets/svg/arrow.svg";


export const Button = () => {
  return (
    <button type="submit" className={classNames(styles.button)}>
      <Arrow />
    </button>
  )
}
