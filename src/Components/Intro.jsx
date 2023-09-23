import style from "../CSS Modules/intro.module.css";
import bigIdea from "../images/The big idea.png";

const Intro = ()=>{

    return(
        <>
            <div className={style.introSection}>
                <div className={style.container}>
                    <img className={style.image} src={bigIdea} alt="big idea" />
                    <div>
                        <h3>Introduction to getlinked <span>tech Hackathon 1.0</span></h3>
                        <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default Intro;