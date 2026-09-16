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
          src="https://images.unsplash.com/photo-1599352318473-abbc53b44a9a?w=1600&h=1040&fit=crop&auto=format&q=85"
          alt={t("분홍빛 노을 아래 시드니 오페라하우스와 하버 브리지", "Sydney Opera House and Harbour Bridge under a dramatic pink sunset")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "68% 55%" }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 55%, rgba(23,61,50,0.28) 100%)" }}
        />
      </div>

      {/* Green panel */}
      <div className="flex items-center" style={{ backgroundColor: "#F2C7C9", minHeight: "clamp(460px, 42vw, 100svh)" }}>
        <div className="px-9 lg:px-14 xl:px-16 py-16 md:py-20 w-full">

          {/* Brand — single-language full official name only, no eyebrow */}
          <div className="mb-9">
            <div
              className="text-[20px] md:text-[22px] font-semibold"
              style={{ fontFamily: display, color: COLORS.ink, letterSpacing: "0.03em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-medium mb-4"
            style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.6vw,44px)", lineHeight: 1.5, letterSpacing: "-0.01em" }}
          >
            {t("집을 찾는 순간부터", "From your first search")}<br />
            {t("정착하는 순간까지", "to every next step")}
          </h1>

          {/* Subtitle — italic only in English; Korean stays upright */}
          <p
            className="mb-10"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: "rgba(35,37,34,0.68)",
              fontSize: "clamp(14px,1.2vw,17px)",
              letterSpacing: "0.01em",
            }}
          >
            {t("하나로 이어지는 부동산 여정", "One connected property journey")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="fill-green" href="/contact" font={body}>
              {t("상담하기", "Book a Consultation")} <ArrowRight size={14} />
            </Button>
            <Button variant="outline-dark" href="#properties" font={body}>
              {t("매물 둘러보기", "Explore Properties")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
