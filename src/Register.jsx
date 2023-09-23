import { useEffect, useState } from "react";
import style from "./CSS Modules/register.module.css";
import registerImage from "./images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import partOfMovementImage from "./images/Part of move.png";
import RegisterSuccess from "./Components/RegisterSuccess";
import axios from "axios";
import Error from "./Components/Error";

const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [getData, setGetData] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [policyIsAgreed, setPolicyIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validateForm = () => {
    setTeamNameValid(!!teamName);
    setPhoneNumberValid(!!phoneNumber);
    setEmailValid(email.match(emailRegex));
    setProjectTopicValid(!!projectTopic);

    if (!teamName || !phoneNumber || !projectTopic || !category || !groupSize || !policyIsAgreed || !email.match(emailRegex)) {
      return false;
    }
    if (!email.match(emailRegex)) {
      alert("Invalid Email");
    }

    return true;
  };

  const [teamNameValid, setTeamNameValid] = useState(true);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [projectTopicValid, setProjectTopicValid] = useState(true);

  const submitForm = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
      setIsLoading(true);

      const data = {
        email: `${email}`,
        phone_number: `${phoneNumber}`,
        team_name: `${teamName}`,
        group_size: Number(groupSize),
        project_topic: `${projectTopic}`,
        category: Number(category),
        privacy_poclicy_accepted: `${policyIsAgreed}`,
      };

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://backend.getlinked.ai/hackathon/registration",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      const response = await axios(config);
      if (response.status === 201) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const url = `https://backend.getlinked.ai/hackathon/categories-list`;
      const response = await axios.get(url);
      const data = response.data;
      setGetData(data);
      setIsSuccess(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <main className={style.main}>
        <img
          className={style.responsiveImage}
          src={registerImage}
          alt="showing a man sitting"
        />
        <div>
          <h3>Register</h3>
          <img src={partOfMovementImage} alt="part of a movement" />
          <h2>CREATE YOUR ACCOUNT</h2>
          <form>
            <div className={style.inputDiv}>
              <div className={style.inputContainers}>
                <label htmlFor="groupName">Team's Name</label>
                <input
                  value={teamName}
                  onChange={(e) => {
                    setTeamName(e.target.value);
                  }}
                  id="groupName"
                  type="text"
                  placeholder="Enter the name of your group"
                />
                {!teamName && !teamNameValid && <span className={style.errorMessage}>Enter Your group name!</span>}
              </div>
              <div className={style.inputContainers}>
                <label htmlFor="phone">Phone</label>
                <input
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="number"
                  id="phone"
                  placeholder="Enter your phone number"
                />
                {!phoneNumber && !phoneNumberValid && <span className={style.errorMessage}>Enter Your phone number!</span>}
              </div>
              <div className={style.inputContainers}>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                />
                {!email && !emailValid && <span className={style.errorMessage}>Enter Your Email Address!</span>}
              </div>
              <div className={style.inputContainers}>
                <label htmlFor="projectTopic">Project Topic</label>
                <input
                  value={projectTopic}
                  onChange={(e) => {
                    setProjectTopic(e.target.value);
                  }}
                  type="text"
                  id="projectTopic"
                  placeholder="What is your Project Topic"
                />
                {!projectTopic && !projectTopicValid && <span className={style.errorMessage}>Enter Your Project Topic!</span>}
              </div>
              <div className={style.inputContainers}>
                <label htmlFor="category">Category</label>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  id="category"
                >
                  <option disabled>Select Your Category *</option>
                  {getData.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={style.inputContainers}>
                <label htmlFor="groupSize">Group Size</label>
                <select
                  onChange={(e) => {
                    setGroupSize(e.target.value);
                  }}
                  id="groupSize"
                >
                  <option disabled>Select *</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <p>Please review your registration details before submitting</p>
            <div className={style.checkBoxContainer}>
              <input
                checked={policyIsAgreed}
                onChange={(e) => setPolicyIsAgreed(e.target.checked)}
                type="checkbox"
                id="agree"
              />
              <label htmlFor="agree">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <button onClick={submitForm} disabled={isLoading}>
              {isLoading ? "Registering..." : "Register Now"}
            </button>
          </form>
        </div>
      </main>
      {isSuccess && <RegisterSuccess />}
      {isError && <Error isError={setIsError} />}
    </>
  );
};

export default Register;
