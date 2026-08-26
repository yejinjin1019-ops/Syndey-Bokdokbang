import { LanguageProvider } from "./i18n/translations";
import { COLORS } from "./lib/theme";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { BrandPromise } from "./components/sections/BrandPromise";
import { FindAProperty } from "./components/sections/FindAProperty";
import { NewDevelopments } from "./components/sections/NewDevelopments";
import { WhyUs } from "./components/sections/WhyUs";
import { Services } from "./components/sections/Services";
import { AboutTeam } from "./components/sections/AboutTeam";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: COLORS.warm, color: COLORS.ink, overflowX: "hidden" }}>
        <Header />
        <Hero />
        <BrandPromise />
        <FindAProperty />
        <NewDevelopments />
        <WhyUs />
        <Services />
        <AboutTeam />
        {/* Remaining PRD §4 sections (Sydney Areas, Property Notes, Journey,
            Testimonials, Final CTA, Footer) are implemented incrementally. */}
      </div>
    </LanguageProvider>
  );
}
