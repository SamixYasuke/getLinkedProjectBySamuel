import Intro from "./Components/Intro";
import RG from "./Components/RG";
import CriteriaSection from "./Components/CriteriaSection";
import Question from "./Components/Question";
import TimelineSection from "./Components/TimelineSection";
import PrizeSection from "./Components/PrizeSection";
import PartnerAndSponsorSection from "./Components/PartnerAndSponsorSection";
import TermsSection from "./Components/TermsSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";

const Home = ()=>{
    return(
        <>
            <HeroSection />
            <Intro />
            <RG />
            <CriteriaSection />
            <Question />
            <TimelineSection />
            <PrizeSection />
            <PartnerAndSponsorSection />
            <TermsSection />
            <Footer />
        </>
    )
}

export default Home;