import style from "../CSS Modules/prizesection.module.css";
import trophy from "../images/trophy.png";
import goldMedal from "../images/gold_medal 1.png";
import silverMedal from "../images/silver_medal 1.png";
import bronzeMedal from "../images/bronze_medal 1.png";

const PrizeSection = ()=>{
    return(
        <>
            <div className={style.prizeSection}>
                <div className={style.TextContainer}>
                    <div>
                        <h2>Prizes and <span>Rewards</span></h2>
                        <p>Highlights of the prizes or rewards for winners and for participants</p>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.trophyDiv}>
                        <img src={trophy} alt="showing a trophy" />
                    </div>
                    <div className={style.medalDiv}>
                        <div className={style.silverMedalDiv}>
                            <div className={style.medalImage}>
                                <img src={silverMedal} alt="silver medal" />
                            </div>
                            <div>
                                <h3 className={style.medalHeadText}>2nd</h3>
                                <p className={style.medalText}>Runner</p>
                                <h2 className={style.medalPriceText13}>N300,000</h2>
                            </div>
                        </div>
                        <div className={style.goldMedalDiv}>
                            <div className={style.medalImage}>
                                <img src={goldMedal} alt="gold medal" />
                            </div>
                            <div>
                                <h3 className={style.medalHeadText}>1st</h3>
                                <p className={style.medalText}>Runner</p>
                                <h2 className={style.medalPriceText2}>N400,000</h2>
                            </div>
                        </div>
                        <div className={style.bronzeMedalDiv}>
                            <div className={style.medalImage}>
                                <img src={bronzeMedal} alt="bronze medal" />
                            </div>
                            <div>
                                <h3 className={style.medalHeadText}>3rd</h3>
                                <p className={style.medalText}>Runner</p>
                                <h2 className={style.medalPriceText13}>N150,000</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default PrizeSection;