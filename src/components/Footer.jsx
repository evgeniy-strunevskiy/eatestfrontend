import styles from './Footer.module.scss'
import classNames from 'classnames';
import { Email } from './Email.jsx';
import { OtherEventsButton } from './UI/OtherEventsButton/OtherEventsButton.jsx';

export const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.footer__container)}>
       <Email />
       <OtherEventsButton />
      </div>
    </footer>
  )
}
