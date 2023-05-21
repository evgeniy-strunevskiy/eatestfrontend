import styles from "./Construction.module.scss";
import classNames from "classnames";
import { Title } from "./UI/Title/Title.jsx";
import { Countdown } from "./Countdown.jsx";
import { Event } from "./Event.jsx";


export const Construction = () => {
  return (
    <div className={classNames(styles.construction)}>
      <div className={classNames(styles.construction__container)}>
        <div className={classNames(styles.construction__info)}>
          <Title title={"Under Construction"} />
          <h4 className={classNames(styles.construction__lid)}>
            We're making lots of improvements and will be back soon
          </h4>
        </div>
        <div className={classNames(styles.construction__countdown)}>
          <Countdown />
        </div>
        <Event />
      </div>
    </div>
  );
};
