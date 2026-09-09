import { Hero } from "../components/sections/Hero";
import { BrandPromise } from "../components/sections/BrandPromise";
import { FindAProperty } from "../components/sections/FindAProperty";
import { NewDevelopments } from "../components/sections/NewDevelopments";
import { WhyUs } from "../components/sections/WhyUs";
import { Services } from "../components/sections/Services";
import { GuidesPreview } from "../components/sections/GuidesPreview";

export function HomePage() {
  return (
    <>
      <Hero />
      <BrandPromise />
      <FindAProperty />
      <NewDevelopments />
      <WhyUs />
      <Services />
      <GuidesPreview />
      {/* Remaining PRD §4 sections (Sydney Areas, Property Notes,
          Testimonials) are implemented incrementally. */}
    </>
  );
}
