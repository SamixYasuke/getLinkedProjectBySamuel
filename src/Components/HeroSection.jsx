import style from "../CSS Modules/herosection.module.css";
import curve from "../images/Curve Line.png";
import man from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import bubble from "../images/bubble.png";
import chain from "../images/chain-9365116-7621444.png";
import bang from "../images/bang Image.png";
import creative from "../images/Creative 1.png";

const HeroSection = ()=>{
    return(
        <>
            <div className={style.HeroSection}>
                <div className={style.HeroSectionFirstText}>
                    <h2>Igniting a Revolution in HR Innovation</h2>
                    <img src={curve} alt="curve" />
                </div>
                <div className={style.HeroSectionContent}>
                    <div className={style.HeroSectionContent1}>
                        <div>
                            <h1>getlinked Tech</h1>
                            <h1>Hackathon <span>1.0</span></h1>
                            <img className={style.getLinkedImg1} src={chain} alt="chain" />
                            <img className={style.getLinkedImg2}  src={bang} alt="bang" />
                            <img className={style.getLinkedImg3}  src={creative} alt="creative" />
                        </div>
                        <p>
                            Participate in getlinked tech Hackathon 2023 stand 
                            a chance to win a Big prize
                        </p>
                        <a href="/#">Register</a>
                        <h3>
                            00<span>H</span>  00<span>M</span> 00<span>S</span>
                        </h3>
                    </div>
                    <div className={style.HeroSectionContent2}>
                            <img className={style.HeroSectionContent2Img1} src={man} alt="man" />
                            <img className={style.HeroSectionContent2Img2} src={bubble} alt="globe" />
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default HeroSection;