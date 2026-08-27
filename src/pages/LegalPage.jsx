import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
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
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("페이지를 찾을 수 없습니다.", "Page not found.")}
          </h1>
          <Link to="/" style={{ color: COLORS.green, fontFamily: body }}>{t("홈으로 돌아가기", "Back to Home")}</Link>
        </div>
      </section>
    );
  }

  const body_ = lang === "ko" ? page.bodyKo : page.bodyEn;

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[900px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <Reveal>
          <h1 className="font-medium mb-10" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,3vw,38px)" }}>
            {t(page.titleKo, page.titleEn)}
          </h1>
          <div className="flex flex-col gap-5">
            {body_.map((para, i) => (
              <p key={i} className="text-[14.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
