import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Reveal } from "../components/ui/Reveal";
import { LEGAL_PAGES } from "../data/legalContent";

export function LegalPage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const page = LEGAL_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[760px] mx-auto px-5 md:px-10 pt-40 md:pt-52 pb-28 text-center">
          <Reveal>
            <div className="flex justify-center mb-8">
              <SectionLabel font={body}>{t("법적 고지", "Legal")}</SectionLabel>
            </div>
            <h1
              className="font-semibold mb-9"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,3vw,34px)" }}
            >
              {t("페이지를 찾을 수 없습니다", "Page not found")}
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[13.5px] font-medium transition-opacity hover:opacity-70"
              style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
            >
              <ArrowLeft size={14} /> {t("홈으로 돌아가기", "Back to Home")}
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  const body_ = lang === "ko" ? page.bodyKo : page.bodyEn;

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[760px] mx-auto px-5 md:px-10 pt-32 md:pt-44 pb-24">
        <Reveal>
          <h1
            className="font-semibold mb-10"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.15 }}
          >
            {t(page.titleKo, page.titleEn)}
          </h1>
          <div className="flex flex-col gap-5">
            {body_.map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.75]" style={{ color: COLORS.ink, fontFamily: body }}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
