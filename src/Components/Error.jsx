import style from "../CSS Modules/error.module.css";
import errorImg from "../images/errorImg.png";
import React from 'react';

const Error = ({ isError }) => {
  const closeModal = () => {
    isError(false);
  };
  
  return (
    <>
        <div className={style.overlay}></div>
        <article className={style.article}>
            <div>
            <img className={style.popImg1} src={errorImg} alt="showing error" />
            </div>
            <h2>AN ERROR OCCURRED!!!!</h2>
            <p>Make the email you're using hasn't been used before, and try again </p>
            <button onClick={closeModal}>Exit</button>
      </article>
    </>
  );
};

export default Error;
