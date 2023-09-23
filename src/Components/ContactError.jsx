import style from "../CSS Modules/contactsuccess.module.css";
import errorImg from "../images/errorImg.png";
import React from 'react';

const ContactError = ({ isError }) => {
  const closeModal = () => {
    isError(false);
  };
  
  return (
    <>
        <div className={style.overlay}></div>
        <article className={style.article}>
            <div>
            <img className={style.popImg1} src={errorImg} alt="showing success" />
            </div>
            <h2>AN ERROR OCCURRED!!!!</h2>
            <p>Please Make sure all inputs are properly entered and try again</p>
            <button onClick={closeModal}>Exit</button>
      </article>
    </>
  );
};

export default ContactError;
