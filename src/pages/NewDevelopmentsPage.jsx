import { NewDevelopmentsHero } from "../components/sections/NewDevelopmentsHero";
import { NewDevelopmentsGrid } from "../components/sections/NewDevelopmentsGrid";
import { NewDevelopmentsFinalCTA } from "../components/sections/NewDevelopmentsFinalCTA";

export function NewDevelopmentsPage() {
  return (
    <>
      <NewDevelopmentsHero />
      <NewDevelopmentsGrid />
      <NewDevelopmentsFinalCTA />
    </>
  );
}
