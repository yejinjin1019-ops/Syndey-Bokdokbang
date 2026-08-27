import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

// Large-photography journey tiles — deliberately not small generic cards.
const JOURNEYS = [
  {
    id: "buy",
    to: "/buy",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=1500&fit=crop&auto=format",
    labelKo: "매매", labelEn: "Buy",
    titleKo: "자리 잡은 시드니의 집들", titleEn: "Established Sydney Homes",
    descKo: "시드니 전역의 매매 주택과 아파트를 위한 여정입니다.",
    descEn: "For established Sydney homes and apartments.",
  },
  {
    id: "rent",
    to: "/rent",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=1500&fit=crop&auto=format",
    labelKo: "임대", labelEn: "Rent",
    titleKo: "지금 입주 가능한 임대 매물", titleEn: "Available Rental Properties",
    descKo: "지금 임대 가능한 매물들을 위한 여정입니다.",
    descEn: "For available rental properties.",
  },
  {
    id: "new",
    to: "/new-developments",
    img: "/properties/iconica.jpg",
    labelKo: "신규개발", labelEn: "New Developments",
    titleKo: "새로운 아파트와 오프더플랜", titleEn: "New Apartments & Off-the-Plan",
    descKo: "엄선된 신규 아파트와 오프더플랜 프로젝트를 위한 여정입니다.",
    descEn: "For curated new apartments and off-the-plan projects.",
  },
];

export function PropertyJourneys() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="max-w-xl mb-14 md:mb-16">
            <div className="mb-5">
              <SectionLabel font={body}>{t("세 가지 여정", "Three Journeys")}</SectionLabel>
            </div>
            <h2
              className="font-medium"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.4, letterSpacing: "-0.01em" }}
            >
              {t("어디서 시작하든, 함께 갑니다.", "Wherever you start, we walk it with you.")}
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {JOURNEYS.map((j, i) => (
            <Reveal key={j.id} delay={i * 90}>
              <Link to={j.to} className="group block" style={{ textDecoration: "none" }}>
                <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "3/4", backgroundColor: COLORS.stone }}>
                  <img
                    src={j.img}
                    alt={t(j.titleKo, j.titleEn)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(23,61,50,0.9) 0%, rgba(23,61,50,0.25) 48%, rgba(23,61,50,0) 68%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="text-[9.5px] tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(245,241,232,0.6)", fontFamily: body }}>
                      {t(j.labelKo, j.labelEn)}
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-medium mb-2.5 leading-snug" style={{ fontFamily: display, color: COLORS.ivory }}>
                      {t(j.titleKo, j.titleEn)}
                    </h3>
                    <p className="text-[13px] leading-relaxed mb-4" style={{ color: "rgba(245,241,232,0.75)", fontFamily: body, maxWidth: "260px" }}>
                      {t(j.descKo, j.descEn)}
                    </p>
                    <div className="flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: COLORS.ivory, fontFamily: body }}>
                      {t("살펴보기", "Explore")} <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
