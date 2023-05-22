import styles from './App.module.scss'
import classNames from 'classnames';
import {  Routes, Route} from 'react-router-dom';
import { Main } from './pages/Main.jsx';

function App() {
  return (
    <div className={classNames(styles.App)}>
      <Routes>
        <Route path='/' element={<Main />}  />
      </Routes>
    </div>
  );
}

export default App;
