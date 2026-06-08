import { Link, useLocation } from "react-router-dom";
import style from "./buttonMain.module.css";

const ButtonMain = () => {
  const { pathname } = useLocation();

  if (pathname === "/about") return null;

  return (
    <Link to="/about" className={style.ctaButton}>
      Learn More
    </Link>
  );
};

export default ButtonMain;