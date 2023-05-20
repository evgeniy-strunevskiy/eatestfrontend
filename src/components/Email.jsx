import styles from './Email.module.scss'
import classNames from 'classnames';
import { Input } from './UI/Input/Input.jsx';
import { Button } from './UI/Button/Button.jsx';

export const Email = () => {
  return (
    <div className={classNames(styles.email)}>
      <Input />
      <Button />
    </div>
  )
}
