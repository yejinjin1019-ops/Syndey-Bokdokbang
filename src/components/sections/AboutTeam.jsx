import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_KO_DISPLAY } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { TEAM } from "../../data/team";

export function AboutTeam() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 md:gap-20">

          {/* Editorial intro */}
          <Reveal>
            <div>
              <div className="mb-6">
                <SectionLabel font={body}>{t("저희 팀", "Our Team")}</SectionLabel>
              </div>
              <h2
                className="font-medium mb-6 leading-snug whitespace-pre-line"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.6vw,36px)", lineHeight: 1.58 }}
              >
                {t("사람이 먼저인\n부동산 어드바이저리.", "People-first\nproperty advisory.")}
              </h2>
              <p className="text-[14px] leading-relaxed mb-8" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(
                  "시드니 복덕방은 한국 이민자 커뮤니티의 부동산 경험을 개선하고자 설립되었습니다. 시드니 부동산 전문 지식과 한국적 따뜻함을 갖춘 팀.",
                  "Sydney Bokdokbang was founded to improve the property experience for Sydney's Korean-speaking community. Sydney property expertise with Korean warmth."
                )}
              </p>
              <Button variant="fill-green" href="#" font={body}>
                {t("소개 더 보기", "About us")} <ArrowRight size={13} />
              </Button>
            </div>
          </Reveal>

          {/* Team grid */}
          <div className="grid sm:grid-cols-3 gap-7">
            {TEAM.map((member, i) => (
              <Reveal key={member.nameEn} delay={i * 90}>
                <div>
                  <div className="aspect-square mb-5 flex items-center justify-center" style={{ backgroundColor: COLORS.ivory }}>
                    <span className="text-5xl font-medium" style={{ fontFamily: FONT_KO_DISPLAY, color: COLORS.green }}>
                      {member.initial}
                    </span>
                  </div>
                  <div className="text-[15px] font-medium mb-0.5" style={{ fontFamily: display, color: COLORS.ink }}>
                    {t(member.nameKo, member.nameEn)}
                  </div>
                  <div className="text-[11px] tracking-wide mb-3" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(member.roleKo, member.roleEn)}
                  </div>
                  <p className="text-[13px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(member.bioKo, member.bioEn)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
