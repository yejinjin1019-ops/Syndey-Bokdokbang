import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Button } from "../ui/Button";

export function Hero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section className="grid md:grid-cols-[58fr_42fr]" style={{ minHeight: "100svh" }}>

      {/* Photo */}
      <div className="relative overflow-hidden bg-stone-300" style={{ minHeight: "clamp(260px, 58vw, 100svh)" }}>
        <img
          src="https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=1600&h=1040&fit=crop&auto=format&q=85"
          alt={t("황금빛 노을의 시드니 하버와 오페라하우스", "Sydney harbour with Opera House at golden hour")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 55%" }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 55%, rgba(23,61,50,0.28) 100%)" }}
        />
      </div>

      {/* Green panel */}
      <div className="flex items-center" style={{ backgroundColor: COLORS.green, minHeight: "clamp(460px, 42vw, 100svh)" }}>
        <div className="px-9 lg:px-14 xl:px-16 py-16 md:py-20 w-full">

          {/* Brand — single-language full official name only, no eyebrow */}
          <div className="mb-9">
            <div
              className="text-[20px] md:text-[22px] font-semibold"
              style={{ fontFamily: display, color: COLORS.ivory, letterSpacing: "0.03em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-medium mb-4"
            style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(26px,3.6vw,44px)", lineHeight: 1.5, letterSpacing: "-0.01em" }}
          >
            {t("집을 찾는 순간부터,", "Your Sydney property journey,")}<br />
            {t("정착하는 순간까지.", "thoughtfully guided.")}
          </h1>

          {/* Subtitle — italic only in English; Korean stays upright */}
          <p
            className="mb-10"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: "rgba(245,241,232,0.68)",
              fontSize: "clamp(14px,1.2vw,17px)",
              letterSpacing: "0.01em",
            }}
          >
            {t("한국의 따뜻함으로, 시드니 부동산 전문성으로.", "Korean warmth. Sydney property expertise.")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="fill-ivory" href="#" font={body}>
              {t("상담하기", "Book a Consultation")} <ArrowRight size={14} />
            </Button>
            <Button variant="outline" href="#properties" font={body}>
              {t("매물 둘러보기", "Browse Properties")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
