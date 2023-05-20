import styles from './Logo.module.scss'
import classNames from 'classnames';
import { ReactComponent as LogoImage } from "../../../assets/svg/logo.svg";


export const Logo = () => {
  return (
    <div className={classNames(styles.logo)}>
      <LogoImage />
    </div>
  )
}
