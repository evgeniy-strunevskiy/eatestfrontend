import styles from './Title.module.scss'
import classNames from 'classnames';

export const Title = ({title}) => {
  return (
    <h2 className={classNames(styles.title)}>{title}</h2>
  )
}
