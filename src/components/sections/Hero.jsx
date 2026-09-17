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
    <section className="grid md:grid-cols-[56fr_44fr] relative" style={{ minHeight: "100svh", backgroundColor: COLORS.lime }}>

      {/* Text panel — Lime field, tone-on-tone Green typography */}
      <div className="flex items-center order-2 md:order-1 relative" style={{ minHeight: "clamp(420px, 42vw, 100svh)" }}>
        <div className="px-6 sm:px-9 lg:px-16 xl:px-20 py-16 md:py-20 w-full">

          {/* Brand mark — small Orange label, thin Green rule, small Blue tick */}
          <Reveal delay={40} className="mb-10 flex items-center gap-3">
            <div className="w-8 h-px" style={{ backgroundColor: COLORS.green }} />
            <div
              className="text-[13px] font-semibold uppercase"
              style={{ fontFamily: body, color: COLORS.tangerine, letterSpacing: "0.14em" }}
            >
              {t("시드니 복덕방", "Sydney Bokdokbang")}
            </div>
            <div className="w-3 h-3" style={{ backgroundColor: COLORS.blue }} />
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
              color: COLORS.green,
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
              color: "rgba(25,26,23,0.72)",
              fontSize: "clamp(15px,1.3vw,19px)",
              letterSpacing: "0.01em",
            }}
          >
            {t("하나로 이어지는 부동산 여정", "One connected property journey")}
          </Reveal>

          {/* CTAs */}
          <Reveal delay={520} className="flex flex-col sm:flex-row gap-3">
            <Button variant="fill-ivory" href="/contact" font={body}>
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
        <video
          src="/brand/hero-loop.mp4"
          poster="/brand/cta-apartment-facade.png"
          aria-label={t("아침 햇살 속 시드니 아파트 발코니", "Morning light on a Sydney apartment balcony")}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 40%" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to left, transparent 78%, rgba(25,26,23,0.1) 100%)" }}
        />
        <div
          className="absolute left-0 top-0 bottom-0 w-[6px]"
          style={{
            backgroundColor: COLORS.blue,
            transform: photoVisible ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            transition: "transform 700ms var(--ease-editorial) 950ms",
          }}
        />
        {/* Reveal panel — slides upward to uncover the video, once on load */}
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

      {/* Small Cream tag — deliberately overlaps the Lime / video boundary */}
      <Reveal
        delay={640}
        className="hidden md:block absolute z-10"
        style={{ left: "56%", top: "10%", transform: "translateX(-50%)" }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2"
          style={{ backgroundColor: COLORS.warm, color: COLORS.green, fontFamily: body }}
        >
          <span className="text-[12px] font-bold" style={{ fontFamily: display }}>01</span>
          <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.1em" }}>
            {t("시드니 라이프", "Sydney Living")}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
