import styles from "./ButtonInfo.module.scss";
import classNames from "classnames";


export const ButtonInfo = () => {
  return (
    <button type="submit" className={classNames(styles.button)}>More information</button>
  )
}
