import styles from "./UpcomingEvent.module.scss";
import classNames from "classnames";
import { ButtonInfo } from "./UI/ButtonInfo/ButtonInfo.jsx";

export const UpcomingEvent = ({ event, setActiveEvent, activeEvent }) => {
  
  return (
    <article className={classNames(styles.upcomingEvent)}>
      <div
        onClick={() => setActiveEvent(event.id)}
        className={classNames(styles.upcomingEvent__header)}
      >
        <div className={classNames(styles.upcomingEvent__number)}>
          {event.id >= 10 ? event.id : "0" + event.id}
        </div>
        <h3 className={classNames(styles.upcomingEvent__title)}>
          {event.name}
        </h3>
      </div>
      <div
        className={classNames(styles.upcomingEvent__body, {
          [styles.upcomingEvent__body_active]: activeEvent === event.id,
        })}
      >
        <div className={classNames(styles.upcomingEvent__content)}>
          <div className={classNames(styles.upcomingEvent__bodyNumber)}>
            {event.id >= 10 ? event.id : "0" + event.id}
          </div>
          <div className={classNames(styles.upcomingEvent__name)}>
            {event.name}
          </div>
          <div className={classNames(styles.upcomingEvent__date)}>
            {event.date}
          </div> 
           <ButtonInfo />
        </div>
      </div>
    </article>
  );
};
