import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { RevealLines } from "../ui/RevealLines";
import { useReveal } from "../../hooks/useReveal";

export function Hero() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const { ref: photoRef, visible: photoVisible } = useReveal(0);

  const headlineLines = [
    t("집을 찾는 순간부터", "From your first search"),
    t("정착하는 순간까지", "to every next step"),
  ];

  return (
    <section className="grid md:grid-cols-[54fr_46fr]" style={{ minHeight: "100svh", backgroundColor: COLORS.warm }}>

      {/* Text panel — magazine-cover headline */}
      <div className="flex items-center order-2 md:order-1" style={{ minHeight: "clamp(420px, 42vw, 100svh)" }}>
        <div className="px-6 sm:px-9 lg:px-16 xl:px-20 py-16 md:py-20 w-full">

          {/* Brand mark */}
          <Reveal delay={40} className="mb-10 flex items-center gap-3">
            <div className="w-8 h-px" style={{ backgroundColor: COLORS.green }} />
            <div
              className="text-[13px] font-semibold uppercase"
              style={{ fontFamily: body, color: COLORS.green, letterSpacing: "0.14em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
          </Reveal>

          {/* Headline — oversized editorial statement, revealed line by line */}
          <RevealLines
            as="h1"
            lines={headlineLines}
            baseDelay={180}
            delayStep={110}
            className="font-semibold mb-7"
            style={{
              fontFamily: display,
              color: COLORS.ink,
              fontSize: "clamp(32px,4.6vw,66px)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}
          />

          {/* Subtitle — italic only in English; Korean stays upright */}
          <Reveal
            delay={430}
            className="mb-11"
            style={{
              fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
              fontStyle: lang === "ko" ? "normal" : "italic",
              color: COLORS.dim,
              fontSize: "clamp(15px,1.3vw,19px)",
              letterSpacing: "0.01em",
            }}
          >
            {t("하나로 이어지는 부동산 여정", "One connected property journey")}
          </Reveal>

          {/* CTAs */}
          <Reveal delay={520} className="flex flex-col sm:flex-row gap-3">
            <Button variant="fill-green" href="/contact" font={body}>
              {t("상담하기", "Book a Consultation")} <ArrowRight size={14} />
            </Button>
            <Button variant="outline-dark" href="#properties" font={body}>
              {t("매물 둘러보기", "Explore Properties")}
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Photo — revealed by a sliding Bokdokbang Green panel */}
      <div ref={photoRef} className="relative overflow-hidden order-1 md:order-2 bg-stone-300" style={{ minHeight: "clamp(320px, 46vw, 100svh)" }}>
        <img
          src="https://images.unsplash.com/photo-1599352318473-abbc53b44a9a?w=1600&h=1600&fit=crop&auto=format&q=85"
          alt={t("분홍빛 노을 아래 시드니 오페라하우스와 하버 브리지", "Sydney Opera House and Harbour Bridge under a dramatic pink sunset")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "62% 55%" }}
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to left, transparent 78%, rgba(25,26,23,0.1) 100%)" }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-[6px]"
          style={{
            backgroundColor: COLORS.yellow,
            transform: photoVisible ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 700ms var(--ease-editorial) 950ms",
          }}
        />
        {/* Reveal panel — slides upward to uncover the photo, once on load */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: COLORS.green,
            transform: photoVisible ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 900ms var(--ease-editorial) 120ms",
            zIndex: 5,
          }}
        />
      </div>
    </section>
  );
}
