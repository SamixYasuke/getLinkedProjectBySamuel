import React, { useState } from "react";
import style from "../CSS Modules/nav.module.css";
import navImg from "../images/getlinked.png";
import navBtn from "../images/Vectorhamburger.png";
import NavMobile from "../Components/NavMobileContent";

const Nav = () => {
  const [navIsActive, setNavIsActive] = useState(false);

  const openNav = () => {
    setNavIsActive(!navIsActive);
  }

  return (
    <>
      <nav>
        <div className={style.navImageContainer}>
          <a href="/">
            <img src={navImg} alt="nav" />
          </a>
        </div>
        <div className={style.navContent}>
          <ul>
            <li>
              <a href="/#">Timeline</a>
            </li>
            <li>
              <a href="/#">Overview</a>
            </li>
            <li>
              <a href="/#">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div>
            <a href="/register">Register</a>
          </div>
        </div>
        <div className={style.navBtn}>
          <img onClick={openNav} src={navBtn} alt="nav-btn" />
        </div>
        {
          navIsActive && <NavMobile navIsActive={navIsActive} openNav={openNav}/>
        }
      </nav>
      <div className={style.hr}></div>
    </>  
  );
}

export default Nav;
