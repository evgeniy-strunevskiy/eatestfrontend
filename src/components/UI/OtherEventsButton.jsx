import styles from './OtherEventsButton.module.scss'
import classNames from 'classnames';
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";


export const OtherEventsButton = () => {
  return (
    <button className={classNames(styles.events)}>
      <h5 className={classNames(styles.events__title)}>Other Events</h5>
      <Arrow className={classNames(styles.events__arrow)} />
    </button>
  )
}
