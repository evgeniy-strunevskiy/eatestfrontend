import styles from "./Events.module.scss";
import classNames from "classnames";
import { Title } from "../components/UI/Title/Title.jsx";
import { UpcomingEvent } from "../components/UpcomingEvent.jsx";
import { useState } from 'react';

const events = [
  { id: 1, name: "Hawaiian party", date: "13.02.2023" },
  { id: 2, name: "Mafia party", date: "13.02.2023" },
  { id: 3, name: "Party", date: "13.02.2023" },
  { id: 4, name: "Party on the beach", date: "13.02.2023" },
  { id: 5, name: "Home Security", date: "13.02.2023" },
  { id: 6, name: "Network Design & Implementation", date: "13.02.2023" },
  { id: 7, name: "System Design & Engineering", date: "13.02.2023" },
  { id: 8, name: "Client Care Plans", date: "13.02.2023" },
];
export const Events = () => {

  const [activeEvent, setActiveEvent] = useState(1);

  return (
    <section className={classNames(styles.events)}>
      <div className={classNames(styles.events__container)}>
        <Title title={"All Events"} />
        <ul className={classNames(styles.events__list)}>
          {events.map((event) => (
            <li
              className={classNames(styles.events__item)}
              key={event.id}
            >
              <UpcomingEvent event={event} setActiveEvent={setActiveEvent} activeEvent={activeEvent} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
