import style from "../CSS Modules/footer.module.css";
import getLinkedLogo from "../images/getlinked.png";
import phoneLogo from "../images/phoneLogo.svg";
import locationLogo from "../images/locationLogo.svg";
import instagramLogo from "../images/instagramLogo.png";
import xLogo from "../images/xLogo.png";
import linkedInLogo from "../images/linkedInLogo.png";
import facebookLogo from "../images/facebookLogo.svg";

const Footer = ()=>{
    return(
        <footer>
            <div className={style.footerContent}>
                <div className={style.footerContent1}>
                    <img src={getLinkedLogo} alt="getLinked logo" />
                    <p className={style.footerText}>
                        Getlinked Tech Hackathon is a technology innovation program 
                        established by a group of organizations with the aim of showcasing 
                        young and talented individuals in the field of technology
                    </p>
                    <div>
                        <a href="/#">Terms Of Use</a>
                        <p>|</p>
                        <a href="/#">Privacy</a>
                    </div>
                </div>
                <div className={style.footerContent2}>
                    <h3>Useful Links</h3>
                    <a href="/#">Overview</a>
                    <a href="/#">Timeline</a>
                    <a href="/#">FAQs</a>
                    <a href="/#">Register</a>
                    <div>
                        <p>Follow Us</p>
                        <a href="/#">
                            <img src={instagramLogo} alt="Instagram Logo" />
                        </a>
                        <a href="/#">
                            <img src={xLogo} alt="X Logo" />
                        </a>
                        <a href="/#">
                            <img src={facebookLogo} alt="Facebook Logo" />
                        </a>
                        <a href="/#">
                            <img src={linkedInLogo} alt="LinkedIn Logo" />
                        </a>
                    </div>
                </div>
                <div className={style.footerContent3}>
                    <h3>Contact Us</h3>
                    <div>
                        <img src={phoneLogo} alt="call logo" />
                        <p>+234 6707653444</p>
                    </div>
                    <div>
                        <img src={locationLogo} alt="location logo" />
                        <p>
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </p>
                    </div>
                </div>
            </div>
            <p className={style.rightText}>All rights reserved. © getlinked Ltd.</p>
        </footer>
    )
}

export default Footer;