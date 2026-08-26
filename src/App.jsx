import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/translations";
import { COLORS } from "./lib/theme";
import { Header } from "./components/layout/Header";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div style={{ backgroundColor: COLORS.warm, color: COLORS.ink, overflowX: "hidden" }}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
