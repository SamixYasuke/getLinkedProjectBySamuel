import style from "../CSS Modules/rg.module.css";
import womanSittingImage from "../images/Woman Sitting Img.png";

const RG = ()=>{
    return(
        <>
            <div className={style.rulesSection}>
                <div className={style.container}>
                    <div>
                        <h2>Rules and <span>Guidelines</span></h2>
                        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>
                    <img src={womanSittingImage} alt="woman sitting and holding a tablet" />
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default RG;