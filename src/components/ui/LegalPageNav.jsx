import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";

const NAV_ITEMS = [
  { to: "/legal/privacy-policy", ko: "개인정보처리방침", en: "Privacy Policy" },
  { to: "/legal/terms", ko: "이용약관", en: "Terms & Conditions" },
  { to: "/legal/disclaimer", ko: "면책 조항", en: "Disclaimer" },
  { to: "/legal/licence", ko: "라이선스 정보", en: "Licence Information" },
];

/** Discreet nav bar shared across dedicated legal pages — quiet, pill-less
 * tabs with a thin underline marking the active page. */
export function LegalPageNav() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);
  const { pathname } = useLocation();

  return (
    <div style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[760px] mx-auto px-5 md:px-10">
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-1 py-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="text-[12.5px] pb-1.5 transition-colors duration-150"
                style={{
                  fontFamily: body,
                  color: active ? COLORS.green : COLORS.dim,
                  fontWeight: active ? 600 : 400,
                  textDecoration: "none",
                  borderBottom: `2px solid ${active ? COLORS.green : "transparent"}`,
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = COLORS.ink; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = COLORS.dim; }}
              >
                {t(item.ko, item.en)}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
