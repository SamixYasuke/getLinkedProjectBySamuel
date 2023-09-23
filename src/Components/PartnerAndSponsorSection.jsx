import style from "../CSS Modules/partnerandsponsor.module.css";
import libertyAssuredImage from "../images/Liberty company logo white colour.png";
import libertyPayImage from "../images/Liberty company logo white.png";
import winWiseImage from "../images/Winwise logo White colour 1.png";
import whispersmsImage from "../images/wisper logo white.png";
import payBoxImage from "../images/Paybox.png";
import vuzualImage from "../images/Vuzual Plus.png";


const PartnerAndSponsorSection = ()=>{
    return(
        <>
            <div className={style.partnerAndSponsorSection}>
                <div className={style.partnerAndSponsorSectionTexts}>
                    <h2>Partners and Sponsors</h2>
                    <p>Getlinked Hackathon 1.0 is honored to have the following major 
                        companies as its partners and sponsors</p>
                </div>
                <div className={style.sponsorsImagesContainer}>
                    <div>
                        <img src={libertyAssuredImage} alt="liberty assured" />
                    </div>
                    <div>
                        <img src={libertyPayImage} alt="liberty pay" />
                    </div>
                    <div>
                        <img src={winWiseImage} alt="win wise" />
                    </div>
                    <div>
                        <img src={whispersmsImage} alt="whispersms" />
                    </div>
                    <div>
                        <img src={payBoxImage} alt="pay box" />
                    </div>
                    <div>
                        <img src={vuzualImage} alt="vuzual" />
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default PartnerAndSponsorSection;