import React from "react";
import style from "../CSS Modules/navmobile.module.css";
import navCloseBtn from "../images/navClosebtn.svg";

const NavMobile = ({ openNav, navIsActive }) => {
  const navClass = navIsActive ? `${style.navMobile} ${style.active}` : style.navMobile;

  return (
    <div className={navClass}>
      <div>
        <img onClick={openNav} src={navCloseBtn} alt="nav-btn" />
      </div>
      <ul>
        <li>
          <a href="/#">TimeLine</a>
        </li>
        <li>
          <a href="/#">OverView</a>
        </li>
        <li>
          <a href="/#">FAQs</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a className={style.registerBtn} href="/register">Register</a>
        </li>
      </ul>
    </div>
  );
}

export default NavMobile;
