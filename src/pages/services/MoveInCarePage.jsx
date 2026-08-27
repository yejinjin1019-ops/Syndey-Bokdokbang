import { ArrowRight, Home, Truck, Plug, MapPin, KeyRound, Sparkles } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY, FONT_KO_BODY } from "../../lib/theme";
import { PageHero } from "../../components/ui/PageHero";
import { Reveal } from "../../components/ui/Reveal";
import { SectionLabel } from "../../components/ui/SectionLabel";
import { Button } from "../../components/ui/Button";

const JOURNEY_STEPS = [
  {
    icon: KeyRound,
    titleKo: "정착", titleEn: "Settlement",
    descKo: "잔금과 소유권 이전 단계에서 자연스럽게 이어집니다.",
    descEn: "Picking up smoothly from where settlement leaves off.",
  },
  {
    icon: Truck,
    titleKo: "이사", titleEn: "Moving",
    descKo: "신뢰할 수 있는 이사 업체를 연결해드립니다.",
    descEn: "Connecting you with trusted removalists.",
  },
  {
    icon: Plug,
    titleKo: "공과금 설정", titleEn: "Utilities",
    descKo: "전기, 가스, 인터넷 개통을 안내해드립니다.",
    descEn: "Guidance on setting up electricity, gas, and internet.",
  },
  {
    icon: MapPin,
    titleKo: "생활 정보", titleEn: "Local Setup",
    descKo: "학교, 병원, 마트 등 동네 생활 정보를 안내합니다.",
    descEn: "Local schools, healthcare, and everyday essentials, mapped out.",
  },
  {
    icon: Home,
    titleKo: "임대 지원", titleEn: "Leasing Support",
    descKo: "필요하시면 임대 관련 지원으로 자연스럽게 연결됩니다.",
    descEn: "A smooth handover into leasing support, if you need it.",
  },
  {
    icon: Sparkles,
    titleKo: "적응", titleEn: "Settling In",
    descKo: "새로운 동네에 익숙해지는 과정을 계속 함께합니다.",
    descEn: "We stay in touch as you settle into the rhythm of a new neighbourhood.",
  },
];

const KOREAN_FAMILY_ITEMS = [
  { ko: "전 과정 한국어 안내", en: "The whole process explained in Korean" },
  { ko: "자녀 학교 및 교육 시스템 정보 안내", en: "Guidance on schools and the education system for children" },
  { ko: "한인 커뮤니티 및 생활 인프라 연결", en: "Connections to the local Korean community and everyday infrastructure" },
  { ko: "비자·은행 개설 등 필요한 절차에 대한 방향 안내", en: "Pointers toward visa and banking steps you'll need to take" },
];

export function MoveInCarePage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("서비스 · 이사 케어", "Services · Move-In Care")}
        titleKo="집을 찾는 순간부터, 실제로 정착하는 순간까지"
        titleEn="From your first question to your first key."
        descKo="매물을 찾던 순간의 설렘이 새로운 동네에서의 일상으로 자연스럽게 이어지도록, 시드니 복덕방이 함께합니다."
        descEn="From the excitement of the search to everyday life in a new neighbourhood — we stay with you the whole way."
      />

      <section style={{ backgroundColor: COLORS.ivory }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pb-16 md:pb-24">
          <Reveal>
            <div className="overflow-hidden" style={{ aspectRatio: "21/9", backgroundColor: COLORS.stone }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&h=800&fit=crop&auto=format"
                alt={t("따뜻한 햇살이 드는 시드니의 새 집 거실", "A sunlit living room in a new Sydney home")}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="mb-5">
                <SectionLabel font={body}>{t("여정", "The Journey")}</SectionLabel>
              </div>
              <h2
                className="font-medium leading-snug"
                style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.5 }}
              >
                {t("열쇠를 받은 이후에도, 여정은 계속됩니다", "The journey doesn't stop once you have the keys.")}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {JOURNEY_STEPS.map(({ icon: Icon, titleKo, titleEn, descKo, descEn }, i) => (
              <Reveal key={titleEn} delay={i * 60}>
                <div className="flex items-center justify-center w-12 h-12 mb-5" style={{ backgroundColor: COLORS.ivory }}>
                  <Icon size={20} style={{ color: COLORS.green }} />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-medium mb-2" style={{ fontFamily: display, color: COLORS.ink }}>
                  {t(titleKo, titleEn)}
                </h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "300px" }}>
                  {t(descKo, descEn)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=900&fit=crop&auto=format"
                  alt={t("정원이 있는 조용한 시드니 동네", "A quiet, leafy Sydney neighbourhood street")}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p
                className="mb-6"
                style={{
                  fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                  fontStyle: lang === "ko" ? "normal" : "italic",
                  color: COLORS.ink,
                  fontSize: "clamp(19px,2vw,26px)",
                  lineHeight: 1.7,
                }}
              >
                {t(
                  "거래가 끝난다고 관계까지 끝나는 것은 아닙니다",
                  "The relationship doesn't have to end when the transaction does."
                )}
              </p>
              <p className="text-[14px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "440px" }}>
                {t(
                  "계약과 잔금이 마무리된 후에도, 필요하실 때면 언제든 다시 연락하실 수 있습니다. 이사, 정착, 그리고 새로운 동네에 익숙해지는 하루하루까지 — 저희는 계속 곁에 있습니다.",
                  "Even once the contract and settlement are behind you, you're always welcome to reach out again. Moving, settling in, the everyday rhythm of a new neighbourhood — we stay close by."
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.green }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal>
              <div className="mb-5">
                <SectionLabel font={body} dark>{t("특별 지원", "Special Support")}</SectionLabel>
              </div>
              <h2
                className="font-medium mb-6 leading-snug"
                style={{ fontFamily: display, color: COLORS.ivory, fontSize: "clamp(24px,2.8vw,38px)", lineHeight: 1.5 }}
              >
                {t("한인 가족과 해외 구매자를 위해", "For Korean Families & Overseas Buyers")}
              </h2>
              <p className="text-[14px] leading-relaxed mb-8" style={{ color: "rgba(245,241,232,0.72)", fontFamily: body, maxWidth: "460px" }}>
                {t(
                  "시드니로 이주하시는 한인 가족과 해외 구매자를 위해 조금 더 세심하게 준비했습니다.",
                  "A little extra care, prepared for Korean families and overseas buyers relocating to Sydney."
                )}
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {KOREAN_FAMILY_ITEMS.map((item) => (
                  <li key={item.en} className="flex items-start gap-3 text-[14px]" style={{ color: COLORS.ivory, fontFamily: body }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: COLORS.yellow }} />
                    {t(item.ko, item.en)}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(245,241,232,0.5)", fontFamily: body, maxWidth: "460px" }}>
                {t(
                  "비자, 세무, 금융 관련 사항은 해당 분야의 자격을 갖춘 전문가와 상담하시기를 권장드리며, 시드니 복덕방은 방향을 안내해드릴 수 있습니다.",
                  "For visa, tax, and financial matters, we recommend consulting a qualified professional in that field — Sydney Bokdokbang can help point you in the right direction."
                )}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: "rgba(245,241,232,0.1)" }}>
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=900&fit=crop&auto=format"
                  alt={t("새로운 보금자리에서 함께 시간을 보내는 가족", "A family settling into their new Sydney home")}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
          <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h2
              className="font-medium mb-6"
              style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3.2vw,44px)", lineHeight: 1.5 }}
            >
              {t("시드니에서의 새로운 시작을 앞두고 계신가요", "Starting a new chapter in Sydney?")}
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: lang === "ko" ? FONT_KO_BODY : FONT_EN_DISPLAY,
                fontStyle: lang === "ko" ? "normal" : "italic",
                color: COLORS.dim,
                fontSize: "clamp(14.5px,1.2vw,17px)",
                maxWidth: "460px",
              }}
            >
              {t(
                "첫 질문부터 첫 열쇠까지, 그리고 그 이후까지 — 편하게 이야기 나눠요.",
                "From your first question to your first key, and everything after — let's talk."
              )}
            </p>
            <Button variant="fill-green" href="/contact" font={body}>
              {t("시드니 이주 상담하기", "Talk to Us About Moving to Sydney")} <ArrowRight size={14} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
