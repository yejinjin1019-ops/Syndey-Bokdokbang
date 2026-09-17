import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { useScrollState } from "../../hooks/useScrollState";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Button } from "../ui/Button";
import { CONTACT_INFO } from "../../data/contactInfo";

function NavLink({ to, onClick, children, hasSub, font }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group/nav flex items-center gap-1 text-[14px] font-medium py-1 relative"
      style={{ color: COLORS.ink, fontFamily: font, letterSpacing: "0.01em", textDecoration: "none" }}
    >
      {children}
      {hasSub && <ChevronDown size={13} className="opacity-50 mt-px" />}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 group-hover/nav:scale-x-100"
        style={{ backgroundColor: COLORS.green, transitionTimingFunction: "var(--ease-editorial)" }}
      />
    </Link>
  );
}

export function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const scrolled = useScrollState();
  const direction = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState(null);
  const [openDesktopSub, setOpenDesktopSub] = useState(null);
  const { display, body } = getThemeFonts(lang);

  const hideHeader = !mobileOpen && scrolled && direction === "down";

  const NAV_ITEMS = [
    {
      label: t("매물", "Properties"),
      to: "/properties",
      sub: [
        { label: t("매매", "Buy"), to: "/buy" },
        { label: t("임대", "Rent"), to: "/rent" },
        { label: t("신규개발", "New Developments"), to: "/new-developments" },
        { label: t("무료 감정평가", "Property Appraisal"), to: "/appraisal" },
      ],
    },
    {
      label: t("서비스", "Services"),
      sub: [
        { label: t("부동산 자문", "Property Advisory"), to: "/services/property-advisory" },
        { label: t("부동산 임대관리", "Property Management"), to: "/services/property-management" },
        { label: t("정착 케어", "Settlement Care"), to: "/services/settlement-care" },
        { label: t("임대 케어", "Leasing Care"), to: "/services/leasing-care" },
        { label: t("입주 케어", "Move-In Care"), to: "/services/move-in-care" },
      ],
    },
    { label: t("소개", "About"), to: "/about" },
    { label: t("연락처", "Contact"), to: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Transform lives on this inner bar (not <header> itself) — a
          transformed ancestor becomes the containing block for its
          position:fixed descendants, which would break the fixed mobile
          menu below if applied directly to <header>. */}
      <div
        className="transition-all"
        style={{
          backgroundColor: COLORS.warm,
          borderBottom: `1px solid ${scrolled ? COLORS.stone : "rgba(25,26,23,0.12)"}`,
          boxShadow: scrolled ? "0 2px 0 rgba(25,26,23,0.03)" : "none",
          transform: hideHeader ? "translateY(-100%)" : "translateY(0)",
          transitionDuration: "300ms",
          transitionTimingFunction: "var(--ease-editorial)",
        }}
      >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-[72px] md:h-[84px]">

          {/* Logo — mark + full official brand name */}
          <Link to="/" className="header-logo-enter flex items-center gap-3 shrink-0" style={{ textDecoration: "none" }}>
            <img src="/logo.svg" alt="Sydney Bokdokbang" className="h-10 w-10 md:h-12 md:w-12" />
            <div
              className="text-[16px] md:text-[18px] font-semibold leading-none"
              style={{ fontFamily: display, color: COLORS.ink, letterSpacing: "0.01em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub && setOpenDesktopSub(item.label)}
                onMouseLeave={() => item.sub && setOpenDesktopSub(null)}
              >
                {item.to ? (
                  <NavLink to={item.to} hasSub={!!item.sub} font={body}>{item.label}</NavLink>
                ) : (
                  <button
                    className="flex items-center gap-1 text-[14px] font-medium py-1 transition-colors duration-150"
                    style={{ color: COLORS.ink, fontFamily: body, letterSpacing: "0.01em" }}
                  >
                    {item.label}
                    {item.sub && <ChevronDown size={13} className="opacity-50 mt-px" />}
                  </button>
                )}
                {item.sub && (
                  <div className="absolute top-full left-0 pt-2 min-w-[210px]">
                    <div
                      className={
                        "py-2 transition-all duration-200 ease-out " +
                        (openDesktopSub === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-1 pointer-events-none")
                      }
                      style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}`, borderRadius: "10px", boxShadow: "3px 3px 0 rgba(25,26,23,0.08)" }}
                    >
                      {item.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          className="block px-5 py-2.5 text-[13px] transition-colors"
                          style={{ color: COLORS.ink, textDecoration: "none", fontFamily: body }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.green)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ink)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="hidden md:flex items-center text-[12.5px]"
              style={{ fontFamily: body }}
              aria-label="Switch language"
            >
              <span style={{ color: lang === "ko" ? COLORS.green : COLORS.dim, fontWeight: lang === "ko" ? 600 : 400, transition: "color 200ms var(--ease-editorial)" }}>한국어</span>
              <span className="mx-1.5 opacity-40">·</span>
              <span style={{ color: lang === "en" ? COLORS.green : COLORS.dim, fontWeight: lang === "en" ? 600 : 400, transition: "color 200ms var(--ease-editorial)" }}>EN</span>
            </button>

            <Button variant="fill-green" size="sm" href="/contact" font={body} className="hidden md:inline-flex">
              {t("상담하기", "Book a Consultation")}
            </Button>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="hidden lg:flex items-center gap-1.5 text-[13px]"
              style={{ color: COLORS.dim, fontFamily: body, textDecoration: "none" }}
            >
              <Phone size={12} style={{ color: COLORS.green }} /> {CONTACT_INFO.phoneDisplay}
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-1"
              style={{ color: COLORS.ink }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="relative block" style={{ width: 24, height: 24 }}>
                <Menu size={24} className="absolute inset-0 transition-all duration-200" style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "rotate(-90deg)" : "rotate(0)" }} />
                <X size={24} className="absolute inset-0 transition-all duration-200" style={{ opacity: mobileOpen ? 1 : 0, transform: mobileOpen ? "rotate(0)" : "rotate(90deg)" }} />
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Menu — bold full-screen editorial takeover, always mounted so it can animate both in and out */}
      <div
        className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto"
        style={{
          backgroundColor: COLORS.green,
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(-14px)",
          visibility: mobileOpen ? "visible" : "hidden",
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 380ms var(--ease-editorial), transform 380ms var(--ease-editorial), visibility 0s linear " + (mobileOpen ? "0s" : "380ms"),
        }}
      >
        <div className="px-6 py-8 space-y-0">
          {NAV_ITEMS.map((item, idx) => {
            const isSubOpen = openMobileSub === item.label;
            const itemDelay = mobileOpen ? 90 + idx * 45 : 0;
            return (
              <div
                key={item.label}
                className="border-b"
                style={{
                  borderColor: "rgba(255,246,229,0.18)",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 350ms var(--ease-editorial) ${itemDelay}ms, transform 350ms var(--ease-editorial) ${itemDelay}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 text-left py-4 text-[24px] font-semibold"
                      style={{ fontFamily: display, color: COLORS.warm, textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => item.sub && setOpenMobileSub(isSubOpen ? null : item.label)}
                      className="flex-1 text-left py-4 text-[24px] font-semibold"
                      style={{ fontFamily: display, color: COLORS.warm }}
                    >
                      {item.label}
                    </button>
                  )}
                  {item.sub && (
                    <button
                      onClick={() => setOpenMobileSub(isSubOpen ? null : item.label)}
                      className="p-4"
                      aria-label="Toggle submenu"
                      aria-expanded={isSubOpen}
                    >
                      <ChevronDown
                        size={18}
                        className="transition-transform duration-200"
                        style={{ color: COLORS.yellow, transform: isSubOpen ? "rotate(180deg)" : "none", transitionTimingFunction: "var(--ease-editorial)" }}
                      />
                    </button>
                  )}
                </div>
                {item.sub && (
                  <div
                    className="pl-1 overflow-hidden"
                    style={{
                      maxHeight: isSubOpen ? 320 : 0,
                      transition: "max-height 320ms var(--ease-editorial)",
                    }}
                  >
                    <div className="pb-4 space-y-1">
                      {item.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-[16px]"
                          style={{ color: COLORS.yellow, fontFamily: body, textDecoration: "none" }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div
            className="pt-7 space-y-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 350ms var(--ease-editorial) ${mobileOpen ? 90 + NAV_ITEMS.length * 45 : 0}ms, transform 350ms var(--ease-editorial) ${mobileOpen ? 90 + NAV_ITEMS.length * 45 : 0}ms`,
            }}
          >
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-[15px]"
              style={{ color: COLORS.warm, fontFamily: body, textDecoration: "none" }}
            >
              <Phone size={15} style={{ color: COLORS.yellow }} /> {CONTACT_INFO.phoneDisplay}
            </a>
            <Button variant="fill-ivory" href="/contact" font={body} className="w-full" onClick={() => setMobileOpen(false)}>
              {t("상담하기", "Book a Consultation")}
            </Button>
            <button
              onClick={toggleLang}
              className="w-full text-center text-[14px] py-2"
              style={{ color: "rgba(255,246,229,0.7)", fontFamily: body }}
            >
              한국어 · EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
