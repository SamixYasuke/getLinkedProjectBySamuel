import style from "../CSS Modules/contactsuccess.module.css";
import successImg from "../images/successcontactpage.png";
import React from 'react';

const ContactSuccess = ({ isSuccess }) => {
  const closeModal = () => {
    isSuccess(false);
  };
  
  return (
    <>
        <div className={style.overlay}></div>
        <article className={style.article}>
            <div>
            <img className={style.popImg1} src={successImg} alt="showing success" />
            </div>
            <h2>MESSAGE SENT SUCCESSFULLY</h2>
            <p>You've successfully sent the message, you would get back to you as soon as possible </p>
            <button onClick={closeModal}>Exit</button>
      </article>
    </>
  );
};

export default ContactSuccess;
