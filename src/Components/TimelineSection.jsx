import style from "../CSS Modules/timeline.module.css";

const TimelineSection = ()=>{
    return(
        <>
            <div className={style.timelineSection}>
                <div className={style.timelineText}>
                    <h2>Timeline</h2>
                    <p>Here is the breakdown of the time we anticipate using the upcoming event.</p>
                </div>
                <div className={style.container}>
                    <div className={style.item1}>
                        <div>
                            <h2>Hackathon Announcement</h2>
                            <p>The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>
                        </div>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Teams Registration ends</h2>
                            <p>Interested Participants are no longer Allowed to
                            register</p>
                        </div>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Getlinked Hackathon 1.0 Offically Begins</h2>
                            <p>Accepted teams can now proceed to build their
                            ground breaking skill driven solutions</p>
                        </div>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                    </div>
                    <div className={style.item2}>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>1</div>
                        </div>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>2</div>
                        </div>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>3</div>
                        </div>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>4</div>
                        </div>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>5</div>
                        </div>
                        <div>
                            <div className={style.vLine}></div>
                            <div className={style.circle}>6</div>
                        </div>
                    </div>
                    <div className={style.item3}>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Teams Registration ends</h2>
                            <p>Interested Participants are no longer Allowed to
                            register</p>
                        </div>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Announcement of the accepted teams
                            and ideas</h2>
                            <p>All teams whom idea has been accepted into getlinked tech
                            hackathon 1.0 2023 are formally announced</p>
                        </div>
                        <div>
                            <h2>November 18, 2023</h2>
                            <p></p>
                        </div>
                        <div>
                            <h2>Demo</h2>
                            <p>Teams get the opportunity to pitch their projects to judges.
                            The winner of the hackathon will also be announced on
                            this day</p>
                        </div>
                    </div>
                </div>
                <div className={style.containerMobile}>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>1</div>
                        </div>
                        <div>
                            <h3>Hackathon Announcement</h3>
                            <p>The getlinked tech hackathon 1.0 is 
                                formally announced to the general public
                                and teams begin to get ready to register
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>2</div>
                        </div>
                        <div>
                            <h3>Teams Registration begins</h3>
                            <p>Interested teams can now show their interest 
                                in the getlinked tech hackathon 1.0 2023 by 
                                proceeding to register
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>3</div>
                        </div>
                        <div>
                            <h3>Teams Registration ends</h3>
                            <p>Interested Participants are no longer Allowed
                            to register
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>4</div>
                        </div>
                        <div>
                            <h3>Announcement of the accepted teams
                                and ideas</h3>
                            <p>All teams whom idea has been accepted into 
                                getlinked tech hackathon 1.0 2023 are formally 
                                announced
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>5</div>
                        </div>
                        <div>
                            <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                            <p>Accepted teams can now proceed to build 
                                their ground breaking skill driven solutions
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                    <div className={style.items}>
                        <div>
                            <div className={style.vLineMobile}></div>
                            <div className={style.circleMobile}>6</div>
                        </div>
                        <div>
                            <h3>Demo Day</h3>
                            <p>Teams get the opportunity to pitch their 
                                projects to judges. The winner of the 
                                hackathon will also be announced on this day
                            </p>
                            <h3>November 18, 2023</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.hr}></div>
        </>
    )
}

export default TimelineSection;