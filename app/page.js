import FifthSection from "./(SECTIONS)/FifthSection";
import FirstSection from "./(SECTIONS)/firstSection";
import FourthSection from "./(SECTIONS)/FourthSection";
import SecondSection from "./(SECTIONS)/SecondSection";
import SeventhSection from "./(SECTIONS)/SeventhSection";
import SixthSection from "./(SECTIONS)/SixthSection";
import ThirdSection from "./(SECTIONS)/ThirdSection";
import VJI from "./(SECTIONS)/VJI";
import WhyYesca from "./(SECTIONS)/WhyYesca";
import Yesca from "./(SECTIONS)/Yesca";
import HomePage from "./Components/HomePage/page";
import { UI } from "./Components/UI";
import HomeMain from "./Home/page";

export default function Home() {
  return (
    <>
      <HomeMain />
      <WhyYesca />
      <Yesca />
      <SecondSection />
      <FirstSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <VJI/>
    </>
  );
}
