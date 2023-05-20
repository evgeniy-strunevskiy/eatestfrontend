import styles from './Counter.module.scss'
import classNames from 'classnames';
import { ReactComponent as ShapeLeft } from "../assets/svg/shapes/shapesLeft.svg";
import { ReactComponent as ShapeRight } from "../assets/svg/shapes/shapesRight.svg";
import { Footer } from '../components/Footer.jsx';

export const Counter = () => {
  return (
    <section className={classNames(styles.counter)}>
      {/* <ShapeLeft className={classNames(styles.counter__shapeLeft)}/>
      <ShapeRight className={classNames(styles.counter__shapeRight)}/> */}
      <Footer />
    </section>
  )
}
