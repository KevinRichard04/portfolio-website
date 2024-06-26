import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function home(){
  return(
    <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <ContactMe />
        <Footer />
    </>
  )
}