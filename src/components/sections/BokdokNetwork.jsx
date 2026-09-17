import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { NETWORK_PARTNERS } from "../../data/servicesPage";

export function BokdokNetwork() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.green }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="mb-5">
              <SectionLabel font={body} dark>{t("복덕 네트워크", "Bokdok Network")}</SectionLabel>
            </div>
            <h2
              className="font-medium mb-5 leading-snug"
              style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(26px,3vw,44px)", lineHeight: 1.45 }}
            >
              {t("검증된 파트너들과 함께", "Backed by a network of vetted partners")}
            </h2>
            <p className="text-[14px] leading-relaxed" style={{ color: "rgba(245,241,232,0.68)", fontFamily: body, maxWidth: "520px" }}>
              {t(
                "법무, 대출, 점검, 이사와 같은 부속 서비스는 시드니 복덕방이 검증한 외부 전문 파트너와 함께 제공될 수 있습니다.",
                "Supporting services such as legal, finance, inspection, and moving may involve vetted external partners that Sydney Bokdokbang has carefully selected."
              )}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(245,241,232,0.12)" }}>
          {NETWORK_PARTNERS.map((partner, i) => (
            <Reveal key={partner.titleEn} delay={i * 70} style={{ backgroundColor: COLORS.green }}>
              <div className="p-8 lg:p-9 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="font-semibold uppercase"
                    style={{ fontFamily: body, color: COLORS.yellow, fontSize: "11px", letterSpacing: "0.08em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-5 h-px" style={{ backgroundColor: COLORS.yellow }} />
                </div>
                <h3 className="text-[15.5px] font-medium mb-3" style={{ fontFamily: display, color: COLORS.ivory }}>
                  {t(partner.titleKo, partner.titleEn)}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,241,232,0.6)", fontFamily: body }}>
                  {t(partner.descKo, partner.descEn)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
