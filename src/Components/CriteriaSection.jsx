import style from "../CSS Modules/citeriasection.module.css";
import manAndWoman from "../images/3d image of a man and woman.png";

const CriteriaSection = ()=>{
    return(
        <>
            <div className={style.criteriaSection}>
                <div className={style.container}>
                    <img src={manAndWoman} alt="3d man and woman" />
                    <div className={style.texts}>
                        <h2>Judging Criteria <span>Key Attributes</span></h2>
                        <div className={style.text}>
                            <p>
                                <span>Innovation and Creativity: </span>
                                Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel 
                                way or introduces innovative features.
                            </p>
                        </div>
                        <div className={style.text}>       
                            <p>
                                <span>Functionality: </span>
                                Assess how well the solution works. Does it perform its 
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </p>
                        </div>
                        <div className={style.text}>     
                            <p>
                                <span>Impact and Relevance: </span>
                                Determine the potential impact of the solution 
                                in the real world. Does it address a significant problem, and is it relevant 
                                to the target audience? Judges would assess the potential social, 
                                economic, or environmental benefits.  
                            </p>
                        </div>
                        <div className={style.text}> 
                            <p>
                                <span>Technical Complexity: </span>
                                Evaluate the technical sophistication of the solution. 
                                Judges would consider the complexity of the code, the use of advanced 
                                technologies or algorithms, and the scalability of the solution.    
                            </p>
                        </div>
                        <div className={style.text}> 
                                <span>Adherence to Hackathon Rules: </span>
                                Judges will Ensure that the team adhered 
                                to the rules and guidelines of the hackathon, including deadlines, use of 
                                specific technologies or APIs, and any other competition-specific requirements.
                            <p> 
                            </p>
                        </div>
                        <div className={style.linkContainer}>
                            <a href="/#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default CriteriaSection;