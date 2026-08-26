import { RentHero } from "../components/sections/RentHero";
import { RentListings } from "../components/sections/RentListings";
import { RentProcessGuide } from "../components/sections/RentProcessGuide";
import { RentFinalCTA } from "../components/sections/RentFinalCTA";

export function RentPage() {
  return (
    <>
      <RentHero />
      <RentListings />
      <RentProcessGuide />
      <RentFinalCTA />
    </>
  );
}
