import styles from "./Logo.module.scss";
import classNames from "classnames";
import { ReactComponent as LogoImage } from "../../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      onClick={() => console.log("link")}
      className={classNames(styles.logo)}
    >
      <LogoImage />
    </Link>
  );
};
