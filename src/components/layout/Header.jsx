import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { useScrollState } from "../../hooks/useScrollState";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Button } from "../ui/Button";

export function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const scrolled = useScrollState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { display, body } = getThemeFonts(lang);

  const NAV_ITEMS = [
    { label: t("매물", "Properties"), sub: [t("매매", "Buy"), t("임대", "Rent"), t("신규개발", "New Developments")] },
    { label: t("부동산 노트", "Property Notes") },
    { label: t("시드니 지역", "Sydney Areas") },
    { label: t("서비스", "Services") },
    { label: t("소개", "About") },
    { label: t("연락처", "Contact") },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(250,249,245,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.stone}` : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-[62px] md:h-[68px]">

          {/* Logo — full official brand name only, no eyebrow label */}
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="text-[14px] font-medium leading-none"
              style={{ fontFamily: display, color: COLORS.ink, letterSpacing: "0.03em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-[13px] py-1 transition-colors duration-150 hover:opacity-60"
                  style={{ color: COLORS.ink, fontFamily: body, letterSpacing: "0.01em" }}
                >
                  {item.label}
                  {item.sub && <ChevronDown size={11} className="opacity-50 mt-px" />}
                </button>
                {item.sub && (
                  <div
                    className="absolute top-full left-0 mt-1.5 py-1.5 min-w-[190px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}`, boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}
                  >
                    {item.sub.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block px-5 py-2.5 text-[12.5px] transition-colors hover:bg-[#F5F1E8]"
                        style={{ color: COLORS.ink, textDecoration: "none", fontFamily: body }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center text-[12px]"
              style={{ fontFamily: body }}
              aria-label="Switch language"
            >
              <span style={{ color: lang === "ko" ? COLORS.green : COLORS.dim, fontWeight: lang === "ko" ? 600 : 400 }}>KR</span>
              <span className="mx-1.5 opacity-40">/</span>
              <span style={{ color: lang === "en" ? COLORS.green : COLORS.dim, fontWeight: lang === "en" ? 600 : 400 }}>EN</span>
            </button>

            <Button variant="fill-green" size="sm" href="#" font={body} className="hidden md:inline-flex">
              {t("상담 예약", "Book a Consultation")}
            </Button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-1"
              style={{ color: COLORS.ink }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden" style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
          <div className="px-5 py-6 space-y-0">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b" style={{ borderColor: COLORS.stone }}>
                <button
                  className="w-full text-left py-3.5 text-[15px] flex items-center justify-between"
                  style={{ color: COLORS.ink, fontFamily: body }}
                >
                  {item.label}
                  {item.sub && <ChevronDown size={14} className="opacity-40" />}
                </button>
              </div>
            ))}
            <div className="pt-5 space-y-3">
              <Button variant="fill-green" href="#" font={body} className="w-full">
                {t("상담 예약", "Book a Consultation")}
              </Button>
              <button
                onClick={toggleLang}
                className="w-full text-center text-[13px] py-2"
                style={{ color: COLORS.dim, fontFamily: body }}
              >
                KR / EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
