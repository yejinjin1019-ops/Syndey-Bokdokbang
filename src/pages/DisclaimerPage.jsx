import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { LegalPageNav } from "../components/ui/LegalPageNav";
import { Reveal } from "../components/ui/Reveal";
import { CONTACT_INFO } from "../data/contactInfo";

const SECTIONS = [
  {
    n: "01",
    titleKo: "매물 정보",
    titleEn: "Property Information",
    paragraphsKo: ["웹사이트에 게재된 매물 정보는 매물 소유자, 매도인, 임대인, 개발사, 판매 대행사 또는 기타 제3자로부터 제공받은 정보를 포함할 수 있습니다."],
    paragraphsEn: ["Property information displayed on this website may include information supplied by property owners, vendors, landlords, developers, selling agents or other third parties."],
    listKo: ["매물 설명", "희망 가격 또는 가격 가이드", "임대료", "매물 특징", "대지 및 건물 면적", "사진", "평면도", "오픈 인스펙션 시간", "재고 현황(이용 가능 여부)"],
    listEn: ["property descriptions", "asking prices or price guides", "rental amounts", "property features", "land and floor areas", "photographs", "floorplans", "inspection times", "availability"],
    paragraphsKo2: [
      "시드니 복덕방은 이러한 정보를 게재할 때 합리적인 주의를 기울이지만, 모든 항목을 개별적으로 검증하지는 않습니다.",
      "거래를 진행하기 전에 본인의 결정에 중요한 정보를 확인해 주시기 바랍니다.",
    ],
    paragraphsEn2: [
      "SBB takes reasonable care when presenting this information but does not independently verify every item.",
      "We encourage users to confirm information that is material to their decision before entering into a transaction.",
    ],
  },
  {
    n: "02",
    titleKo: "가격 및 재고 현황",
    titleEn: "Prices and Availability",
    paragraphsKo: ["다음 사항은 사전 통보 없이 변경될 수 있습니다."],
    paragraphsEn: ["The following may change without notice:"],
    listKo: ["매물 가격 및 가격 가이드", "임대료", "인센티브 — 변경되거나 철회될 수 있음", "재고 현황 — 언제든지 변경 가능"],
    listEn: ["property prices and price guides", "rental amounts", "incentives, which may be amended or withdrawn", "availability, at any time"],
    paragraphsKo2: [
      "웹사이트에 매물이 게재되어 있다고 해서 해당 매물이 계속 이용 가능하다는 것을 의미하지 않습니다.",
      "최신 정보는 시드니 복덕방으로 문의해 주시기 바랍니다.",
    ],
    paragraphsEn2: [
      "A property appearing on the website does not mean it is still available.",
      "Users should contact SBB for the most current information.",
    ],
  },
  {
    n: "03",
    titleKo: "신규 개발 및 분양 매물",
    titleEn: "New Developments and Off-the-Plan Properties",
    paragraphsKo: ["신규 개발 매물에는 다음과 같은 별도의 유의 사항이 적용됩니다."],
    paragraphsEn: ["The following disclaimers apply specifically to new developments:"],
    listKo: [
      "투시도 및 아티스트 이미지는 예시적인 표현입니다",
      "평면도는 실제 축척과 다를 수 있습니다",
      "면적은 근사치일 수 있습니다",
      "마감재, 부착물 및 사양은 변경될 수 있습니다",
      "전망은 위치, 층수 및 주변 개발 상황에 따라 달라질 수 있습니다",
      "제안된 부대시설은 변경될 수 있습니다",
      "예상 완공일은 참고용입니다",
      "가격 및 세대 재고 현황은 변경될 수 있습니다",
    ],
    listEn: [
      "artist impressions and renders are illustrative",
      "floorplans may not be to scale",
      "dimensions may be approximate",
      "finishes, fixtures and specifications may change",
      "views shown may depend on location, level and surrounding development",
      "proposed facilities may change",
      "estimated completion dates are indicative",
      "prices and unit availability are subject to change",
    ],
    paragraphsKo2: ["구매자는 결정을 내리기 전에 시행사가 발행한 매매계약서, 공시 서류 및 기타 자료를 반드시 검토해야 합니다."],
    paragraphsEn2: ["Purchasers should review the contract for sale, disclosure materials and other documents issued by the developer before making a decision."],
  },
  {
    n: "04",
    titleKo: "사진, 투시도 및 시각 자료",
    titleEn: "Photography, Renders and Visual Material",
    paragraphsKo: [
      "사진에는 실제 매물에 포함되지 않는 스타일링, 가구 또는 장식 요소가 사용될 수 있습니다.",
      "컴퓨터로 생성된 이미지, 투시도 및 일러스트레이션은 참고용 표현입니다.",
      "이미지는 매물의 최종 외관, 전망, 면적, 포함 사항 또는 주변 환경을 보장하는 것으로 해석되어서는 안 됩니다.",
    ],
    paragraphsEn: [
      "Photographs may use styling, furniture or decorative elements that are not included in the property.",
      "Computer-generated images, renders and illustrations are indicative representations only.",
      "Images should not be interpreted as a guarantee of the final appearance, view, dimensions, inclusions or surroundings of a property.",
    ],
  },
  {
    n: "05",
    titleKo: "지도, 위치 및 지역 정보",
    titleEn: "Maps, Locations and Local Information",
    paragraphsKo: ["다음과 관련된 정보는 일반적인 참고용으로 제공됩니다."],
    paragraphsEn: ["Information relating to the following is provided as a general guide:"],
    listKo: ["거리", "교통", "학교", "편의시설", "지역 상업 시설", "동네 특징", "이동 시간"],
    listEn: ["distances", "transport", "schools", "amenities", "local businesses", "neighbourhood features", "travel times"],
    paragraphsKo2: ["학군, 교통편, 향후 인프라 등 본인의 상황에 중요한 정보는 반드시 별도로 확인해 주시기 바랍니다."],
    paragraphsEn2: ["Users should independently confirm information that is important to their circumstances, including school catchments, transport services and future infrastructure."],
  },
  {
    n: "06",
    titleKo: "시장 코멘트",
    titleEn: "Market Commentary",
    paragraphsKo: [
      "시장 리포트, 지역 코멘트, 프로퍼티 노트, 지역 가이드 및 기타 편집성 콘텐츠는 발행 시점에 확인 가능한 정보와 견해를 나타냅니다.",
      "부동산 시장은 변동될 수 있습니다.",
      "과거 가격, 임대 수익률, 시장 동향 또는 이전 실적은 향후 결과를 보장하지 않습니다.",
    ],
    paragraphsEn: [
      "Market reports, suburb commentary, Property Notes, area guides and other editorial content represent information and observations available at the time of publication.",
      "Property markets can change.",
      "Historical prices, rental yields, market trends or previous performance do not guarantee future results.",
    ],
  },
  {
    n: "07",
    titleKo: "투자 관련 정보",
    titleEn: "Investment Information",
    paragraphsKo: ["다음 사항에 대한 언급은 제공되는 경우 참고용 또는 정보 제공 목적으로만 제공됩니다."],
    paragraphsEn: ["Any references to the following are indicative or informational only, where provided:"],
    listKo: ["임대 수익률", "예상 임대료", "시세 상승(캐피털 그로스)", "투자 수익", "시장 성과"],
    listEn: ["rental yields", "potential rent", "capital growth", "investment returns", "market performance"],
    paragraphsKo2: [
      "시드니 복덕방은 향후 부동산 가치, 임대 수익, 시세 상승 또는 투자 성과를 보장하지 않습니다.",
      "이용자는 본인의 목표, 재정 상황 및 위험 감수 성향을 고려해야 합니다.",
    ],
    paragraphsEn2: [
      "SBB does not guarantee future property values, rental income, capital growth or investment performance.",
      "Users should consider their own objectives, financial circumstances and risk tolerance.",
    ],
  },
  {
    n: "08",
    titleKo: "법률·금융·세무·대출 자문 아님",
    titleEn: "No Legal, Financial, Tax or Lending Advice",
    paragraphsKo: [
      "웹사이트를 통해 제공되는 일반 정보는 법률, 금융, 세무, 회계, 신용·대출 또는 공식 감정평가 자문에 해당하지 않습니다.",
      "관련 사항이 있는 경우, 이용자는 적절한 자격을 갖춘 독립적인 전문가에게 자문을 구해야 합니다.",
    ],
    paragraphsEn: [
      "General information provided through this website does not constitute legal, financial, taxation, accounting, credit or lending, or formal valuation advice.",
      "Where these matters are relevant, users should consult appropriately qualified independent professionals.",
    ],
  },
  {
    n: "09",
    titleKo: "부동산 감정평가 관련 고지",
    titleEn: "Property Appraisal Disclaimer",
    paragraphsKo: [
      "시드니 복덕방이 제공하는 시장 감정평가, 예상 매매가 범위 또는 임대 예상가는 해당 시점에 이용 가능한 정보와 시장 상황을 바탕으로 한 의견입니다.",
      "별도로 명시되지 않는 한, 감정평가는 등록된 자격을 갖춘 감정평가사가 작성한 공식 감정평가서가 아닙니다.",
      "시장 상황과 실제 거래 결과는 감정평가와 다를 수 있습니다.",
    ],
    paragraphsEn: [
      "Any market appraisal, estimated selling range or rental estimate provided by SBB is an opinion based on available information and market conditions at the relevant time.",
      "Unless expressly stated otherwise, an appraisal is not a formal valuation prepared by a registered or qualified valuer.",
      "Market conditions and actual transaction outcomes may differ from an appraisal.",
    ],
  },
  {
    n: "10",
    titleKo: "제3자 정보",
    titleEn: "Third-Party Information",
    paragraphsKo: [
      "웹사이트에 게재된 일부 정보는 개발사, 매도인, 매물 소유자, 에이전트, 정부 기관, 지도 서비스 또는 기타 제3자로부터 제공된 것일 수 있습니다.",
      "시드니 복덕방은 편의를 위해 이러한 정보를 재게재하거나 요약할 수 있으나, 중요한 정보는 원출처를 통해 확인하시기 바랍니다.",
    ],
    paragraphsEn: [
      "Some information displayed on this website may originate from developers, vendors, property owners, agents, government sources, mapping services or other third parties.",
      "SBB may reproduce or summarise this information for convenience, but users should refer to the original source where information is material to their decision.",
    ],
  },
];

const VERIFICATION_QUOTE_KO = "부동산 관련 결정을 내리시기 전, 본인에게 중요한 정보를 독립적으로 확인하시고 관련 계약 및 공시 서류를 검토해 주시기 바랍니다.";
const VERIFICATION_QUOTE_EN = "Before making a property decision, please independently verify any information that is important to you and review the relevant contractual and disclosure documents.";

const ACL_QUOTE_KO = "본 면책 조항의 어떠한 조항도 호주 소비자법(Australian Consumer Law) 또는 기타 관련 법령에 따라 법적으로 배제할 수 없는 권리, 보증 또는 구제 수단을 배제, 제한 또는 변경하려는 의도가 아닙니다.";
const ACL_QUOTE_EN = "Nothing in this Disclaimer is intended to exclude, restrict or modify any rights, guarantees or remedies that cannot lawfully be excluded under the Australian Consumer Law or other applicable legislation.";

function SectionShell({ n, title, children, first }) {
  return (
    <div className="py-9 md:py-10" style={{ borderTop: first ? "none" : `1px solid ${COLORS.stone}` }}>
      <SectionHeading n={n} title={title} />
      <div className="flex flex-col gap-3 md:pl-9">{children}</div>
    </div>
  );
}

function SectionHeading({ n, title }) {
  const { body } = getThemeFonts(useLanguage().lang);
  return (
    <div className="flex items-baseline gap-4 mb-4">
      <span className="text-[12px] flex-shrink-0" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.tangerine, letterSpacing: "0.04em" }}>
        {n}
      </span>
      <h2 className="font-semibold" style={{ fontFamily: body, color: COLORS.green, fontSize: "clamp(17px,1.8vw,21px)" }}>
        {title}
      </h2>
    </div>
  );
}

function BulletList({ items, body }) {
  return (
    <ul className="flex flex-col gap-2 mt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[15.5px]" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.tangerine }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function DisclaimerPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("법적 고지", "Legal")}
        titleKo="면책 조항"
        titleEn="Disclaimer"
        descKo="시드니 복덕방이 웹사이트에서 제공하는 정보는 고객이 매물, 신규 개발 및 시드니 부동산 시장을 이해하는 데 도움을 드리기 위한 것입니다. 콘텐츠 작성 시 합리적인 주의를 기울이고 있으나, 부동산 관련 결정은 해당 거래와 관련된 정보를 확인한 후, 필요한 경우 독립적인 전문가의 자문을 받아 내리시기 바랍니다."
        descEn="Information provided by SBB on this website is intended to assist clients in understanding properties, developments and the Sydney property market. While reasonable care is taken when preparing content, property decisions should be made after verifying information relevant to the particular transaction and, where appropriate, obtaining independent professional advice."
      />

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[760px] mx-auto px-5 md:px-10 py-16 md:py-24">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i * 20, 200)}>
              <SectionShell n={s.n} title={t(s.titleKo, s.titleEn)} first={i === 0}>
                {(lang === "ko" ? s.paragraphsKo : s.paragraphsEn).map((p, pi) => (
                  <p key={`p1-${pi}`} className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                    {p}
                  </p>
                ))}
                {s.listKo && <BulletList items={lang === "ko" ? s.listKo : s.listEn} body={body} />}
                {s.paragraphsKo2 &&
                  (lang === "ko" ? s.paragraphsKo2 : s.paragraphsEn2).map((p, pi) => (
                    <p key={`p2-${pi}`} className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                      {p}
                    </p>
                  ))}
              </SectionShell>
            </Reveal>
          ))}

          {/* 11 — Independent Verification, highlighted panel */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="11" title={t("독립적인 확인", "Independent Verification")} />
              <div className="md:pl-9">
                <div className="px-6 py-6 md:px-8 md:py-7" style={{ backgroundColor: COLORS.warm, borderLeft: `3px solid ${COLORS.green}` }}>
                  <p className="text-[15px] leading-relaxed font-medium" style={{ color: COLORS.green, fontFamily: display }}>
                    {t(VERIFICATION_QUOTE_KO, VERIFICATION_QUOTE_EN)}
                  </p>
                </div>
                <p className="text-[15.5px] mt-4" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "필요한 확인의 범위는 매물 및 고객님의 상황에 따라 달라질 수 있습니다.",
                    "The extent of verification required will depend on the property and your circumstances."
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 12 — Australian Consumer Law */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="12" title={t("호주 소비자법", "Australian Consumer Law")} />
              <div className="md:pl-9">
                <div className="px-5 py-4" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
                  <p className="text-[15px] italic" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                    {t(ACL_QUOTE_KO, ACL_QUOTE_EN)}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 13 — Information Updates */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="13" title={t("정보 업데이트", "Information Updates")} />
              <div className="flex flex-col gap-3 md:pl-9">
                <p className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t("매물 및 시장 정보는 게시 이후 시점이 지나면 최신 정보가 아닐 수 있습니다.", "Property and market information may become outdated after publication.")}
                </p>
                <p className="text-[13px] mt-1" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t("최종 업데이트: 2026년 9월 16일", "Last Updated: 16 September 2026")}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <h2 className="font-semibold mb-4" style={{ fontFamily: body, color: COLORS.green, fontSize: "clamp(17px,1.8vw,21px)" }}>
                {t("문의처", "Contact")}
              </h2>
              <div className="md:pl-9">
                <p className="text-[16px] mb-5" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "웹사이트에 게재된 정보에 대해 궁금한 점이 있으시면 아래 연락처로 문의해 주시기 바랍니다.",
                    "For clarification about information published on this website, please contact us using the details below."
                  )}
                </p>
                <div className="p-7 md:p-8" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
                  <div className="flex flex-col gap-1.5 text-[14.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
                    <span className="font-medium" style={{ fontFamily: display, color: COLORS.green, fontSize: "15px", marginBottom: "4px" }}>
                      {CONTACT_INFO.tradingName}
                    </span>
                    <span>{CONTACT_INFO.legalName}</span>
                    <span>{CONTACT_INFO.abn}</span>
                    <span>{CONTACT_INFO.licence}</span>
                    <span>{CONTACT_INFO.address}</span>
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LegalPageNav />
    </>
  );
}
