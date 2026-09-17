import { useEffect, useRef, useState } from "react";
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

  // On load the hero looks like the usual split layout (text left, video in
  // a 46% panel on the right). After a beat, the cream "curtain" over the
  // left column retracts so the video fills the whole hero width, and the
  // copy becomes a translucent-scrim overlay sitting on top of it.
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  // Some browsers pause background video (tab switch, low-power mode, etc.)
  // even with autoPlay+loop set. Resume it whenever that happens so the
  // hero loop never visibly stalls.
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const resume = () => {
      if (video.paused) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", resume);
    video.addEventListener("pause", resume);
    return () => {
      document.removeEventListener("visibilitychange", resume);
      video.removeEventListener("pause", resume);
    };
  }, []);

  const headlineLines = [
    t("집을 찾는 순간부터", "From your first search"),
    t("정착하는 순간까지", "to every next step"),
  ];

  return (
    <section
      className={"hero-cinematic relative overflow-hidden" + (expanded ? " is-expanded" : "")}
      style={{ minHeight: "100svh", backgroundColor: COLORS.warm }}
    >
      <style>{`
        .hero-cinematic { --hero-fg: ${COLORS.warm}; --hero-fg-dim: rgba(255,246,229,0.82); }
        .hero-scrim { opacity: 1; transition: opacity 900ms var(--ease-editorial) 300ms; }
        .hero-text { width: 100%; }
        .hero-text-inner { max-width: 640px; transition: max-width 1100ms var(--ease-editorial); }
        .hero-outline-btn { border-color: rgba(255,246,229,0.55) !important; color: ${COLORS.warm} !important; background-color: transparent !important; }
        @media (min-width: 768px) {
          .hero-cinematic:not(.is-expanded) { --hero-fg: ${COLORS.ink}; --hero-fg-dim: ${COLORS.dim}; }
          .hero-cinematic:not(.is-expanded) .hero-outline-btn { border-color: ${COLORS.green} !important; color: ${COLORS.green} !important; }
          .hero-scrim { opacity: 0; }
          .hero-cinematic.is-expanded .hero-scrim { opacity: 1; }
          .hero-curtain { width: 54%; transition: width 1100ms var(--ease-editorial) 150ms; }
          .hero-cinematic.is-expanded .hero-curtain { width: 0%; }
          .hero-curtain-edge { left: 54%; opacity: 1; transition: left 1100ms var(--ease-editorial) 150ms, opacity 300ms var(--ease-editorial) 850ms, transform 700ms var(--ease-editorial) 950ms; }
          .hero-cinematic.is-expanded .hero-curtain-edge { left: 0%; opacity: 0; }
          .hero-text { width: 54%; transition: width 1100ms var(--ease-editorial); }
          .hero-cinematic.is-expanded .hero-text { width: 100%; justify-content: center; }
          .hero-text-inner { max-width: 100%; }
          .hero-cinematic.is-expanded .hero-text-inner { max-width: 640px; }
        }
      `}</style>

      {/* Video — always full-bleed behind everything, landscape crop */}
      <video
        ref={videoRef}
        src="/brand/hero-loop.mp4"
        poster="/brand/cta-apartment-facade.png"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "50% 40%", zIndex: 0 }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Scrim — darkens the video so the overlaid copy stays legible */}
      <div
        className="hero-scrim absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(25,26,23,0.62) 0%, rgba(25,26,23,0.4) 45%, rgba(25,26,23,0.14) 78%, rgba(25,26,23,0.04) 100%)",
          zIndex: 1,
        }}
      />

      {/* Cream curtain — hides the left column pre-expand; retracts on desktop only */}
      <div className="hero-curtain hidden md:block absolute inset-y-0 left-0" style={{ backgroundColor: COLORS.warm, zIndex: 2 }} />
      <div
        className="hero-curtain-edge hidden md:block absolute inset-y-0 w-[6px]"
        style={{
          backgroundColor: COLORS.pinkLight,
          transformOrigin: "top",
          transform: photoVisible ? "scaleY(1)" : "scaleY(0)",
          zIndex: 3,
        }}
      />

      {/* First-load reveal — slides up over the initially visible video sliver */}
      <div
        ref={photoRef}
        className="absolute inset-y-0 right-0 w-full md:w-[46%]"
        style={{
          backgroundColor: COLORS.green,
          transform: photoVisible ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 900ms var(--ease-editorial) 120ms",
          zIndex: 4,
        }}
      />

      {/* Text — magazine-cover headline, overlaid on the video */}
      <div className="hero-text relative flex items-center" style={{ minHeight: "100svh", zIndex: 5 }}>
        <div className="hero-text-inner px-6 sm:px-9 lg:px-16 xl:px-20 py-16 md:py-20 w-full">

          {/* Brand mark */}
          <Reveal delay={40} className="mb-10 flex items-center gap-3">
            <div className="w-8 h-px" style={{ backgroundColor: COLORS.lime }} />
            <div
              className="text-[13px] font-semibold uppercase"
              style={{ fontFamily: body, color: "var(--hero-fg-dim)", letterSpacing: "0.14em" }}
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
              color: "var(--hero-fg)",
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
              color: "var(--hero-fg-dim)",
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
            <Button variant="outline-dark" href="#properties" font={body} className="hero-outline-btn">
              {t("매물 둘러보기", "Explore Properties")}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
