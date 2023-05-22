import styles from "./Countdown.module.scss";
import classNames from "classnames";
import { Unit } from "./UI/Unit/Unit.jsx";
import { getCounter } from "../utils/getCounter.js";
import { useEffect, useState } from "react";

export const Countdown = () => {
  
  const [date, setDate] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const dateLeft = getCounter()
      setDate(dateLeft)
    }, 1000)
    return () => clearInterval(interval)
  },[])

  return (
    <div className={classNames(styles.countdown)}>
      <ul className={classNames(styles.countdown__list)}>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Days'} value={date.daysLeft} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Hours'} value={date.hoursLeft} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Minutes'} value={date.minutesLeft} />
        </li>
        <li className={classNames(styles.countdown__item)}>
          <Unit date={'Seconds'} value={date.secondsLeft} />
        </li>
      </ul>
    </div>
  )
}
