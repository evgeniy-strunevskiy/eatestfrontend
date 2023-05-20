import styles from "./Unit.module.scss";
import classNames from "classnames";
import { ReactComponent as Shape } from "../../../assets/svg/counter-shape.svg";


export const Unit = ({value, date}) => {

  return (
    <div className={classNames(styles.unit)}>
      <div className={classNames(styles.unit__number)}>
        <div className={classNames(styles.unit__value, {[styles.unit__value_last]: date === 'Seconds'})}>{value}</div>
      </div>
      <div className={classNames(styles.unit__time)}>
        <Shape />
        <div className={classNames(styles.unit__date)}>{date}</div>
        </div>
    </div>
  )
}
