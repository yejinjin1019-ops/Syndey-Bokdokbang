import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { useReveal } from "../../hooks/useReveal";

export function BrandPromise() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const { ref: highlightRef, visible: highlightVisible } = useReveal();

  return (
    <section id="brand-promise" style={{ backgroundColor: COLORS.ivory }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.15fr] gap-16 md:gap-24 items-center">

          <Reveal>
            <div className="mb-8">
              <SectionLabel font={body}>{t("시드니 복덕방이 드리는 약속", "Our Promise")}</SectionLabel>
            </div>
            <div className="pl-6 md:pl-8" style={{ borderLeft: `2px solid ${COLORS.green}` }}>
              <blockquote
                className="font-medium mb-5"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,3.1vw,46px)", lineHeight: 1.32, letterSpacing: "-0.005em" }}
              >
                {t("중요한 과정이 빠지지 않도록", "We stay across what matters,")}<br />
                {t("다음 단계까지 살펴봅니다", "through every next step")}
              </blockquote>
              <p
                style={{
                  fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                  fontStyle: lang === "ko" ? "normal" : "italic",
                  fontSize: "17px",
                  letterSpacing: "0.01em",
                }}
              >
                {/* Signature moment — a yellow highlighter sweep behind the brand's short promise statement, once on scroll into view. */}
                <span
                  ref={highlightRef}
                  style={{
                    color: COLORS.ink,
                    backgroundImage: `linear-gradient(${COLORS.yellow}, ${COLORS.yellow})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 0",
                    backgroundSize: highlightVisible ? "100% 100%" : "0% 100%",
                    transition: "background-size 550ms var(--ease-editorial) 250ms",
                    padding: "2px 6px",
                    marginLeft: "-6px",
                    boxDecorationBreak: "clone",
                    WebkitBoxDecorationBreak: "clone",
                  }}
                >
                  {t("세심하게 살피고 끊김 없이 이어갑니다", "Care · Continuity · Attentiveness")}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden bg-stone-200" style={{ border: `1px solid ${COLORS.stone}` }}>
                <img
                  src="https://images.unsplash.com/photo-1662038271111-5b1c0b4157e8?w=960&h=720&fit=crop&auto=format&q=85"
                  alt={t("창가의 나무 테이블 위 따뜻한 커피 한 잔", "A warm cup of coffee on a wooden table by a sunlit window")}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-1" style={{ backgroundColor: COLORS.lime }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
