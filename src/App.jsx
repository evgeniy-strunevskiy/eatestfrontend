import styles from './App.module.scss'
import classNames from 'classnames';
import { Counter } from './sections/Counter.jsx';
import { Events } from './sections/Events.jsx';

function App() {
  return (
    <div className={classNames(styles.App)}>
      <Counter />
      <Events />
    </div>
  );
}

export default App;
