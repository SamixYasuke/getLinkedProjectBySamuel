import style from "../CSS Modules/termssection.module.css";
import shieldLockImage from "../images/shield and padlock.png";
import manOnPadlockImage from "../images/man standing on padlock.png";

const TermsSection = ()=>{
    return(
        <div className={style.termsSection}>
            <div className={style.TextContainer}>
                <div className={style.TextContainer1}>
                    <h1>Privacy Policy and <span>Terms</span></h1>
                    <p className={style.TextContainerParagraph1}>Last updated on September 12, 2023</p>
                    <p className={style.TextContainerParagraph2}>
                        Below are our privacy & policy, which outline a lot of goodies. 
                        it’s our aim to always take of our participant
                    </p>
                </div>
                <div className={style.TextBorder}>
                    <h4>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </h4>
                    <h3>Licensing Policy</h3>
                    <h2>Here are terms of our Standard License:</h2>
                    <div>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                            <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                        </svg>
                        <h5>
                            The Standard License grants you a non-exclusive right to
                            navigate and register for our event
                        </h5>
                    </div>
                    <div>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                            <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                        </svg>
                        <h5>
                            You are licensed to use the item available at any free source
                            sites, for your project developement
                        </h5>
                    </div>
                    <section>
                        <a href="/#">Read More</a>
                    </section>
                </div>
            </div>
            <div className={style.imageContainer}>
                <img className={style.image1} src={shieldLockImage} alt="shield and padlock.png" />
                <img className={style.image2} src={manOnPadlockImage} alt="man standing on padlock.png" />
            </div>
        </div>
    )
}

export default TermsSection;