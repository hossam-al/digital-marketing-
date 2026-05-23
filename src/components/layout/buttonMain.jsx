import { Link, useLocation } from 'react-router-dom';
import style from "./buttonMain.module.css";

const ButtonMain = () => {
  const { pathname } = useLocation();

  if (pathname === "/about") return null;

  return (
    <button className={style.ctaButton}>
      <Link to="/about">Learn More</Link>
    </button>
  );
};

export default ButtonMain;
