import { Hero } from "../components/sections/Hero";
import { FindAProperty } from "../components/sections/FindAProperty";
import { NewDevelopments } from "../components/sections/NewDevelopments";
import { WhyUs } from "../components/sections/WhyUs";
import { Services } from "../components/sections/Services";
import { AboutFinalCTA } from "../components/sections/AboutFinalCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <FindAProperty />
      <NewDevelopments />
      <WhyUs />
      <Services />
      <AboutFinalCTA />
    </>
  );
}
