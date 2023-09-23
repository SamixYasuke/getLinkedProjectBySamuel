import style from "../CSS Modules/question.module.css";
import image from "../images/man thinking.png"

const Question = ()=>{
    return(
        <>
            <div className={style.questionSection}>
                <div className={style.container}>
                    <div className={style.questionSide}>
                        <h2>Frequently Ask <span>Question</span></h2>
                        <p>
                            We got answers to the questions that you might
                            want to ask about <span>getlinked Hackathon 1.0</span>
                        </p>
                        <div className={`${style.question} ${style.mt}`}>
                            <div>
                                <p>Can I work on a project I started before the hackathon?</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                        <div className={style.question}>
                            <div>
                                <p>What happens if I need help during the hackathon?</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                        <div className={style.question}>
                            <div>
                                <p>What happens if I don't have an idea for a project</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                        <div className={style.question}>
                            <div>
                                <p>Can I join a team or do i have to come with one?</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                        <div className={style.question}>
                            <div>
                                <p>What happens after the hackathon ends?</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                        <div className={style.question}>
                            <div>
                                <p>Can I work on a project I started before the hackathon?</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                        <div className={style.hr1}></div>
                    </div>
                    <img src={image} alt="man thinking on the cloud" />
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default Question;