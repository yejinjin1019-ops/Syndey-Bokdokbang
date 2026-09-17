import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";

export function AboutFinalCTA() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      {/* Short brand story */}
      <section id="about" style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-center">
            <Reveal>
              <div className="mb-8">
                <SectionLabel font={body}>{t("시드니 복덕방 소개", "About Sydney Bokdokbang")}</SectionLabel>
              </div>
              <h2
                className="font-medium mb-6 leading-snug whitespace-pre-line"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("시드니에서 다시 시작하는,\n복덕방의 역할", "A neighbourhood role,\nredefined for Sydney")}
              </h2>
              <p
                className="text-[14.5px] leading-relaxed mb-9"
                style={{ color: COLORS.dim, fontFamily: body }}
              >
                {t(
                  "복덕방은 원래 동네에서 집과 사람을 가장 잘 아는 곳이었습니다. 저희는 그 역할을 지금의 시드니에서, 첫 상담부터 정착까지 함께 이어갑니다.",
                  "“Bokdokbang” once meant a place trusted because it understood both homes and people. We bring that role to today's Sydney — staying with you from the first conversation through settlement."
                )}
              </p>
              <Button variant="outline-dark" href="/about" font={body}>
                {t("소개 더보기", "More about us")} <ArrowRight size={13} />
              </Button>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-stone-200" style={{ border: `1px solid ${COLORS.stone}` }}>
                  <img
                    src="/brand/about-shopfront-corner.png"
                    alt={t("따뜻한 아침 햇살이 비치는 시드니 동네 상점 모퉁이", "A local Sydney shopfront corner in warm morning light")}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 w-20 h-1" style={{ backgroundColor: COLORS.yellow }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: COLORS.green, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("더 나은 선택은 좋은 대화에서 시작됩니다", "A better choice starts with a good conversation")}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: "rgba(245,241,232,0.7)",
                fontSize: "clamp(14.5px,1.2vw,17px)",
                maxWidth: "460px",
              }}
            >
              {t("편하신 시간에 상담을 예약해 보세요.", "Book a consultation at a time that suits you.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" href="/contact" font={body}>
                {t("상담하기", "Book a Consultation")} <ArrowRight size={14} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
