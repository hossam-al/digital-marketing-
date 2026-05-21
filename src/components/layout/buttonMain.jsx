import React from 'react';
import style from "./buttonMain.module.css";
import { Link } from 'react-router-dom';
const ButtonMain = () => {
  return (
    <>
        <button className={style.ctaButton}>
            <Link to="/about" >Learn More</Link>
        </button>
    </>
  );
};

export default ButtonMain;