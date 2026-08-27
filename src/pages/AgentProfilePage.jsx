import { Link, useParams } from "react-router-dom";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_KO_DISPLAY } from "../lib/theme";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { TEAM } from "../data/team";

export function AgentProfilePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const member = TEAM.find((m) => m.slug === slug);

  if (!member) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("어드바이저를 찾을 수 없습니다.", "Advisor not found.")}
          </h1>
          <Link to="/about" style={{ color: COLORS.green, fontFamily: body }}>{t("소개로 돌아가기", "Back to About")}</Link>
        </div>
      </section>
    );
  }

  const specialties = lang === "ko" ? member.specialtiesKo : member.specialtiesEn;

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <Reveal>
          <Link to="/about" className="inline-flex items-center gap-1.5 text-[12.5px] mb-8" style={{ color: COLORS.dim, fontFamily: body, textDecoration: "none" }}>
            <ArrowLeft size={13} /> {t("소개로 돌아가기", "Back to About")}
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-16">
          <Reveal>
            <div className="aspect-square mb-6 flex items-center justify-center" style={{ backgroundColor: COLORS.ivory }}>
              <span className="text-7xl font-medium" style={{ fontFamily: FONT_KO_DISPLAY, color: COLORS.green }}>
                {member.initial}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-[13.5px]" style={{ color: COLORS.ink, fontFamily: body, textDecoration: "none" }}>
                <Mail size={15} style={{ color: COLORS.green }} /> {member.email}
              </a>
              <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-[13.5px]" style={{ color: COLORS.ink, fontFamily: body, textDecoration: "none" }}>
                <Phone size={15} style={{ color: COLORS.green }} /> {member.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-medium mb-1" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,3vw,38px)" }}>
              {t(member.nameKo, member.nameEn)}
            </h1>
            <div className="text-[13px] tracking-wide mb-8" style={{ color: COLORS.dim, fontFamily: body }}>
              {t(member.roleKo, member.roleEn)}
            </div>

            <p className="text-[15px] leading-relaxed mb-8" style={{ color: COLORS.ink, fontFamily: body, maxWidth: "600px" }}>
              {t(member.longBioKo, member.longBioEn)}
            </p>

            <h2 className="text-[12px] tracking-wide uppercase mb-4" style={{ color: COLORS.dim, fontFamily: body }}>
              {t("전문 분야", "Specialties")}
            </h2>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="text-[12px] px-3.5 py-1.5"
                  style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, color: COLORS.ink, fontFamily: body }}
                >
                  {s}
                </span>
              ))}
            </div>

            <Button variant="fill-green" href="/contact" font={body}>
              {t("이 어드바이저에게 문의하기", "Contact This Advisor")}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
