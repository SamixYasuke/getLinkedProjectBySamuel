import style from "../CSS Modules/registersucess.module.css";
import boy from "../images/successful-man-3025713-2526911 1.png";
import good from "../images/successfully-done-5108472-4288033 1.png";

const RegisterSucess = ()=>{
    return(
        <>
            <div className={style.overlay}></div>
            <article className={style.article}>
                <div>
                    <img className={style.popImg1} src={good} alt="good" />
                    <img className={style.popImg2} src={boy} alt="boy" />
                </div>
                <h2>Congratulations you have successfully Registered</h2>
                <p>Yes, It was easy and you did it! Check your mail box for next step</p>
                <a href="/">Back</a>
            </article>
        </>
    )
}

export default RegisterSucess;