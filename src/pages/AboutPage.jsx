import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_KO_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { TEAM } from "../data/team";

export function AboutPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("소개", "About")}
        titleKo="사람이 먼저인 부동산 어드바이저리."
        titleEn="People-first property advisory."
        descKo="시드니 복덕방은 한국 이민자 커뮤니티의 부동산 경험을 개선하고자 설립되었습니다."
        descEn="Sydney Bokdokbang was founded to improve the property experience for Sydney's Korean-speaking community."
      />

      {/* Our Story */}
      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 md:gap-20">
            <Reveal>
              <SectionLabel font={body}>{t("우리의 이야기", "Our Story")}</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex flex-col gap-5 max-w-[640px]">
                <p className="text-[15px] leading-relaxed" style={{ color: COLORS.ink, fontFamily: body }}>
                  {t(
                    "\"저희는 매물을 많이 보여드리는 곳이 아니라, 제대로 봐드리는 곳입니다.\" 시드니 복덕방은 이 한 문장에서 출발했습니다. 시드니에서 집을 구하는 한국어 사용 고객들이 언어와 정보의 장벽 없이, 온전히 신뢰할 수 있는 어드바이저와 함께 여정을 걸을 수 있도록 만들어졌습니다.",
                    "\"We're not the agency that shows you the most listings — we're the one that actually sees the right one for you.\" Sydney Bokdokbang started from that single idea: helping Korean-speaking clients in Sydney navigate property without language or information barriers, alongside an advisor they can fully trust."
                  )}
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t(
                    "매물 탐색부터 계약, 정착, 그리고 그 이후까지 — 저희는 거래 한 건이 아니라 관계를 만든다고 믿습니다. 그것이 시드니 복덕방이 존재하는 이유입니다.",
                    "From the property search through to contract, settlement, and beyond — we believe we're building relationships, not closing single transactions. That's why Sydney Bokdokbang exists."
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team / Advisors */}
      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <Reveal>
            <div className="mb-4">
              <SectionLabel font={body}>{t("팀 / 어드바이저", "Team / Advisors")}</SectionLabel>
            </div>
            <h2 className="font-medium mb-12 md:mb-16" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(22px,2.6vw,34px)" }}>
              {t("시드니 복덕방을 이끄는 사람들.", "The people behind Sydney Bokdokbang.")}
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <Reveal key={member.slug} delay={i * 90}>
                <Link to={`/about/agents/${member.slug}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className="aspect-square mb-5 flex items-center justify-center" style={{ backgroundColor: COLORS.warm }}>
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
                  <div className="flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: COLORS.green, fontFamily: body }}>
                    {t("프로필 보기", "View Profile")} <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
