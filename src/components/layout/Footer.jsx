import { Link } from "react-router-dom";
import { Phone, MessageSquare, Mail } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { CONTACT_INFO } from "../../data/contactInfo";

const DIM_TEXT = "rgba(245,241,232,0.68)";
const FAINT_TEXT = "rgba(245,241,232,0.45)";
const HAIRLINE = "rgba(245,241,232,0.14)";

const EXPLORE_LINKS = [
  { ko: "홈", en: "Home", to: "/" },
  { ko: "매매", en: "Buy", to: "/buy" },
  { ko: "임대", en: "Rent", to: "/rent" },
  { ko: "신규개발", en: "New Developments", to: "/new-developments" },
  { ko: "무료 감정평가", en: "Property Appraisal", to: "/appraisal" },
  { ko: "가이드 & 리소스", en: "Guides & Resources", to: "/guides" },
  { ko: "소개", en: "About", to: "/about" },
  { ko: "연락처", en: "Contact", to: "/contact" },
];

const SERVICE_LINKS = [
  { ko: "부동산 자문", en: "Property Advisory", to: "/services/property-advisory" },
  { ko: "부동산 임대관리", en: "Property Management", to: "/services/property-management" },
  { ko: "정착 케어", en: "Settlement Care", to: "/services/settlement-care" },
  { ko: "임대 케어", en: "Leasing Care", to: "/services/leasing-care" },
  { ko: "이사 케어", en: "Move-In Care", to: "/services/move-in-care" },
];

const LEGAL_LINKS = [
  { ko: "개인정보처리방침", en: "Privacy Policy", to: "/legal/privacy-policy" },
  { ko: "이용약관", en: "Terms & Conditions", to: "/legal/terms" },
  { ko: "면책 조항", en: "Disclaimer", to: "/legal/disclaimer" },
  { ko: "라이선스 정보", en: "Licence Information", to: "/legal/licence" },
];

function FooterColumn({ title, links, body }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: FAINT_TEXT, fontFamily: body }}>{title}</div>
      <div className="flex flex-col gap-3">
        {links.map((l, i) => (
          <Link
            key={`${l.to}-${i}`}
            to={l.to}
            className="text-[13px] transition-opacity hover:opacity-70"
            style={{ color: COLORS.ivory, fontFamily: body, textDecoration: "none" }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const year = new Date().getFullYear();

  const explore = EXPLORE_LINKS.map((l) => ({ to: l.to, label: t(l.ko, l.en) }));
  const services = SERVICE_LINKS.map((l) => ({ to: l.to, label: t(l.ko, l.en) }));
  const legal = LEGAL_LINKS.map((l) => ({ to: l.to, label: t(l.ko, l.en) }));

  return (
    <footer style={{ backgroundColor: COLORS.green }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          <div>
            <div className="text-[15px] font-medium mb-4" style={{ fontFamily: display, color: COLORS.ivory }}>
              {CONTACT_INFO.tradingName}
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: DIM_TEXT, fontFamily: body, maxWidth: "260px" }}>
              {t(
                "매물을 많이 보여드리는 곳이 아니라, 제대로 봐드리는 곳입니다.",
                "Not the agency that shows you the most listings — the one that shows you the right one."
              )}
            </p>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.14em] uppercase mb-5" style={{ color: FAINT_TEXT, fontFamily: body }}>
              {t("문의하기", "Get in Touch")}
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[13px]" style={{ color: COLORS.ivory, fontFamily: body }}>
                {CONTACT_INFO.tradingName}
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: DIM_TEXT, fontFamily: body, maxWidth: "240px" }}>
                {CONTACT_INFO.addressEn}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-[13px] transition-opacity hover:opacity-70"
                  style={{ color: COLORS.ivory, fontFamily: body, textDecoration: "none" }}
                >
                  <Phone size={13} style={{ color: COLORS.yellow }} /> {CONTACT_INFO.phoneDisplay}
                </a>
                <a
                  href={`sms:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  aria-label={t("문자 메시지 보내기", "Send a text message")}
                  className="flex items-center transition-opacity hover:opacity-70"
                  style={{ color: DIM_TEXT }}
                >
                  <MessageSquare size={13} />
                </a>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-[13px] transition-opacity hover:opacity-70"
                style={{ color: COLORS.ivory, fontFamily: body, textDecoration: "none" }}
              >
                <Mail size={13} style={{ color: COLORS.yellow }} /> {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <FooterColumn title={t("둘러보기", "Explore")} links={explore} body={body} />
          <FooterColumn title={t("서비스", "Services")} links={services} body={body} />
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 pb-5 text-[11.5px]"
          style={{ borderTop: `1px solid ${HAIRLINE}`, color: DIM_TEXT, fontFamily: body }}
        >
          <span>© {year} {CONTACT_INFO.tradingName}</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {legal.map((l) => (
              <Link key={l.to} to={l.to} className="hover:opacity-70 transition-opacity" style={{ color: DIM_TEXT, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-[10.5px] tracking-wide" style={{ color: FAINT_TEXT, fontFamily: body }}>
          {CONTACT_INFO.legalName} · {CONTACT_INFO.abn} · {CONTACT_INFO.licence}
        </div>
      </div>
    </footer>
  );
}
