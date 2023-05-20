import styles from './App.module.scss'
import classNames from 'classnames';
import { Counter } from './sections/Counter.jsx';

function App() {
  return (
    <div className={classNames(styles.App)}>
      <Counter />
    </div>
  );
}

export default App;
