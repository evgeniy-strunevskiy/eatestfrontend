import styles from "./Countdown.module.scss";
import classNames from "classnames";
import { Unit } from "./UI/Unit/Unit.jsx";

export const Countdown = () => {

  return (
    <div className={classNames(styles.countdown)}>
      <ul className={classNames(styles.countdown__list)}>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Days'} value={92} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Hours'} value={11} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Minutes'} value={41} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Seconds'} value={48} />
        </li>
      </ul>
    </div>
  )
}
