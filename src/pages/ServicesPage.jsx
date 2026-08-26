import { ServicesHero } from "../components/sections/ServicesHero";
import { ServicesJourney } from "../components/sections/ServicesJourney";
import { FlagshipServices } from "../components/sections/FlagshipServices";
import { BokdokNetwork } from "../components/sections/BokdokNetwork";
import { ServicesFinalCTA } from "../components/sections/ServicesFinalCTA";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesJourney />
      <FlagshipServices />
      <BokdokNetwork />
      <ServicesFinalCTA />
    </>
  );
}
