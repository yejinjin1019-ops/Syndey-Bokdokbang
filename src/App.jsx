import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/translations";
import { COLORS } from "./lib/theme";
import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { BuyPage } from "./pages/BuyPage";
import { RentPage } from "./pages/RentPage";
import { PropertyDetailPage } from "./pages/PropertyDetailPage";
import { NewDevelopmentsPage } from "./pages/NewDevelopmentsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AppraisalPage } from "./pages/AppraisalPage";
import { PropertyManagementPage } from "./pages/services/PropertyManagementPage";
import { PropertyAdvisoryPage } from "./pages/services/PropertyAdvisoryPage";
import { SettlementCarePage } from "./pages/services/SettlementCarePage";
import { LeasingCarePage } from "./pages/services/LeasingCarePage";
import { MoveInCarePage } from "./pages/services/MoveInCarePage";
import { TenantApplicationPage } from "./pages/services/TenantApplicationPage";
import { MaintenanceRequestPage } from "./pages/services/MaintenanceRequestPage";
import { LandlordPortalPage } from "./pages/services/LandlordPortalPage";
import { ServiceDetailPage } from "./pages/services/ServiceDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { AgentProfilePage } from "./pages/AgentProfilePage";
import { ContactPage } from "./pages/ContactPage";
import { GuidesPage } from "./pages/GuidesPage";
import { GuideDetailPage } from "./pages/GuideDetailPage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ backgroundColor: COLORS.warm, color: COLORS.ink, overflowX: "hidden" }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/rent" element={<RentPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />

            <Route path="/new-developments" element={<NewDevelopmentsPage />} />
            <Route path="/new-developments/:id" element={<ProjectDetailPage />} />

            <Route path="/appraisal" element={<AppraisalPage />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/property-advisory" element={<PropertyAdvisoryPage />} />
            <Route path="/services/settlement-care" element={<SettlementCarePage />} />
            <Route path="/services/leasing-care" element={<LeasingCarePage />} />
            <Route path="/services/move-in-care" element={<MoveInCarePage />} />
            <Route path="/services/property-management" element={<PropertyManagementPage />} />
            <Route path="/services/property-management/tenant-application" element={<TenantApplicationPage />} />
            <Route path="/services/property-management/maintenance-request" element={<MaintenanceRequestPage />} />
            <Route path="/services/property-management/landlord-portal" element={<LandlordPortalPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/agents/:slug" element={<AgentProfilePage />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/:slug" element={<GuideDetailPage />} />

            <Route path="/legal/:slug" element={<LegalPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
