import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";

const NAV_ITEMS = [
  { to: "/legal/privacy-policy", ko: "개인정보처리방침", en: "Privacy Policy" },
  { to: "/legal/terms", ko: "이용약관", en: "Terms & Conditions" },
  { to: "/legal/disclaimer", ko: "면책 조항", en: "Disclaimer" },
  { to: "/legal/licence", ko: "라이선스 정보", en: "Licence Information" },
];

/** Discreet nav bar shared across dedicated legal pages. */
export function LegalPageNav() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);
  const { pathname } = useLocation();

  return (
    <div style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[760px] mx-auto px-5 md:px-10">
        <nav className="flex flex-wrap items-center gap-3 py-6">
          {NAV_ITEMS.map((item, i) => {
            const active = pathname === item.to;
            return (
              <Fragment key={item.to}>
                {i > 0 && <span style={{ color: COLORS.stone }}>|</span>}
                <Link
                  to={item.to}
                  className="text-[12.5px] transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: body,
                    color: active ? COLORS.green : COLORS.dim,
                    fontWeight: active ? 600 : 400,
                    textDecoration: "none",
                  }}
                >
                  {t(item.ko, item.en)}
                </Link>
              </Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
