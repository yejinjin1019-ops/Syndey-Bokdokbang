import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/translations";
import { COLORS } from "./lib/theme";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageMeta } from "./components/PageMeta";
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
import { ContactPage } from "./pages/ContactPage";
import { GuidesPage } from "./pages/GuidesPage";
import { GuideDetailPage } from "./pages/GuideDetailPage";
import { LegalPage } from "./pages/LegalPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { DisclaimerPage } from "./pages/DisclaimerPage";
import { LicenceInformationPage } from "./pages/LicenceInformationPage";
import { NotFoundPage } from "./pages/NotFoundPage";

/** The whole site, minus the router: main.jsx wraps it in BrowserRouter and
 * entry-server.jsx in StaticRouter for build-time prerendering. */
export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <PageMeta />
      <div style={{ backgroundColor: COLORS.warm, color: COLORS.ink, overflowX: "hidden" }}>
        <Header />
        <Routes>
          <Route path="/en?" element={<HomePage />} />

          <Route path="/en?/properties" element={<PropertiesPage />} />
          <Route path="/en?/buy" element={<BuyPage />} />
          <Route path="/en?/rent" element={<RentPage />} />
          <Route path="/en?/property/:id" element={<PropertyDetailPage />} />

          <Route path="/en?/new-developments" element={<NewDevelopmentsPage />} />
          <Route path="/en?/new-developments/:id" element={<ProjectDetailPage />} />

          <Route path="/en?/appraisal" element={<AppraisalPage />} />

          <Route path="/en?/services" element={<ServicesPage />} />
          <Route path="/en?/services/property-advisory" element={<PropertyAdvisoryPage />} />
          <Route path="/en?/services/settlement-care" element={<SettlementCarePage />} />
          <Route path="/en?/services/leasing-care" element={<LeasingCarePage />} />
          <Route path="/en?/services/move-in-care" element={<MoveInCarePage />} />
          <Route path="/en?/services/property-management" element={<PropertyManagementPage />} />
          <Route path="/en?/services/property-management/tenant-application" element={<TenantApplicationPage />} />
          <Route path="/en?/services/property-management/maintenance-request" element={<MaintenanceRequestPage />} />
          <Route path="/en?/services/property-management/landlord-portal" element={<LandlordPortalPage />} />
          <Route path="/en?/services/:slug" element={<ServiceDetailPage />} />

          <Route path="/en?/about" element={<AboutPage />} />

          <Route path="/en?/contact" element={<ContactPage />} />

          <Route path="/en?/guides" element={<GuidesPage />} />
          <Route path="/en?/guides/:slug" element={<GuideDetailPage />} />

          <Route path="/en?/legal/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/en?/legal/terms" element={<TermsPage />} />
          <Route path="/en?/legal/disclaimer" element={<DisclaimerPage />} />
          <Route path="/en?/legal/licence" element={<LicenceInformationPage />} />
          <Route path="/en?/legal/:slug" element={<LegalPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
