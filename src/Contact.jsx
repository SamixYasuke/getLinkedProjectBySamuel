import { useState } from "react";
import style from "./CSS Modules/contact.module.css";
import axios from "axios";
import instagramLogo from "./images/instagramLogo.png";
import xLogo from "./images/xLogo.png";
import facebookLogo from "./images/facebookLogo.svg";
import linkedInLogo from "./images/linkedInLogo.png";
import ContactSuccess from "./Components/ContactSucess";
import ContactError from "./Components/ContactError";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitMessage = async (e) => {
    e.preventDefault();

    const data = {
      email: mail,
      first_name: firstName,
      message: message,
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://backend.getlinked.ai/hackathon/contact-form",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false); // Set submitting state to false when the request is complete
    }
  };

  return (
    <>
      <main className={style.main}>
        <div className={style.contactInfoContainer}>
          <h2>Get in touch</h2>
          <p>Contact Information</p>
          <p className={style.address}>
            27, Alara Street
            Yaba 100012
            Lagos State
          </p>
          <p>
            Call Us : 07067981819
          </p>
          <p>
            We are open from Monday-Friday
          </p>
          <p>
            08:00am - 05:00pm
          </p>
          <span className={style.span}>Share on</span>
          <div className={style.socialMediaLinks}>
            <a href="/#">
              <img src={instagramLogo} alt="instagram logo" />
            </a>
            <a href="/#">
              <img src={xLogo} alt="x logo" />
            </a>
            <a href="/#">
              <img src={facebookLogo} alt="facebook logo" />
            </a>
            <a href="/#">
              <img src={linkedInLogo} alt="linkedIn logo" />
            </a>
          </div>
        </div>
        <div className={style.formContainer}>
          <h2>Questions or need assistance?</h2>
          <h2>Let us know about it!</h2>
          <form>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
            />
            <input
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              type="email"
              placeholder="Mail"
            />
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div>
              <button
                onClick={submitMessage}
                disabled={isSubmitting}
                className={isSubmitting ? style.loadingButton : ""}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
      {isSuccess && <ContactSuccess isSuccess={setIsSuccess} />}
      {isError && <ContactError isError={setIsError} />}
    </>
  );
};

export default Contact;