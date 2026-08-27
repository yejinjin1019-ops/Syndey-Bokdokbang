import { PropertiesHero } from "../components/sections/PropertiesHero";
import { PropertyJourneys } from "../components/sections/PropertyJourneys";
import { PropertiesFinder } from "../components/sections/PropertiesFinder";
import { PropertyAppraisalCTA } from "../components/sections/PropertyAppraisalCTA";

export function PropertiesPage() {
  return (
    <>
      <PropertiesHero />
      <PropertyJourneys />
      <PropertiesFinder />
      <PropertyAppraisalCTA />
    </>
  );
}
