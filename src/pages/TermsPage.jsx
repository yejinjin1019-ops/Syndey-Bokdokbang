import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { LegalPageNav } from "../components/ui/LegalPageNav";
import { Reveal } from "../components/ui/Reveal";
import { CONTACT_INFO } from "../data/contactInfo";

const APPLICABLE_LAWS = [
  "Property and Stock Agents Act 2002 (NSW)",
  "Property and Stock Agents Regulation 2022 (NSW)",
  "Residential Tenancies Act 2010 (NSW)",
  "Australian Consumer Law",
  "Privacy Act 1988 (Cth)",
];

const SECTIONS = [
  {
    n: "01",
    titleKo: "약관 동의",
    titleEn: "Acceptance of These Terms",
    paragraphsKo: [
      "본 웹사이트에 접속하거나 이용함으로써 이용자는 본 이용약관에 동의하는 것으로 간주됩니다. 본 약관에 동의하지 않으시는 경우, 웹사이트를 이용하지 마시기 바랍니다.",
    ],
    paragraphsEn: [
      "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use this website.",
    ],
  },
  {
    n: "02",
    titleKo: "웹사이트 소개",
    titleEn: "About Our Website",
    paragraphsKo: [
      "본 웹사이트는 시드니 복덕방에 대한 정보, 매물, 신규 개발, 부동산 서비스, 시장 정보 및 문의 방법을 제공합니다.",
      "웹사이트에 게재된 정보는 일반적인 정보 제공을 목적으로 하며, 사전 통보 없이 변경될 수 있습니다.",
    ],
    paragraphsEn: [
      "This website provides information about Sydney Bokdokbang, available properties, new developments, property services, market information, and ways to contact us or make an enquiry.",
      "Information on this website is provided for general informational purposes and may change without notice.",
    ],
  },
  {
    n: "03",
    titleKo: "매물 정보",
    titleEn: "Property Information",
    paragraphsKo: [
      "매물 목록, 가격, 재고 현황, 면적, 평면도, 사진, 설명, 포함 사항, 완공 예정일 등의 정보는 매물 소유자, 개발사, 에이전트 또는 기타 제3자로부터 제공받은 것일 수 있습니다.",
      "시드니 복덕방은 매물 정보를 게재할 때 합리적인 주의를 기울이지만, 이용자는 거래를 진행하기 전에 본인의 결정에 중요한 정보를 스스로 확인해야 합니다.",
      "당사는 웹사이트에 게재된 정보가 완전하거나, 최신이거나, 오류가 없다는 것을 보장하지 않습니다.",
    ],
    paragraphsEn: [
      "Property listings, prices, availability, dimensions, floorplans, photographs, descriptions, inclusions, completion dates and other property information may be supplied by property owners, developers, agents or other third parties.",
      "Sydney Bokdokbang takes reasonable care when presenting property information, but users should independently verify information that is important to their decision before entering into any transaction.",
      "We do not guarantee that information on this website is complete, current or error-free.",
    ],
  },
  {
    n: "04",
    titleKo: "가격 및 재고 현황",
    titleEn: "Price and Availability",
    paragraphsKo: [
      "매물 가격, 가격 가이드, 임대료, 인센티브 및 재고 현황은 사전 통보 없이 변경될 수 있습니다.",
      "웹사이트에 매물이 게재되어 있다고 해서 해당 매물이 계속 이용 가능하다는 것을 의미하지 않습니다.",
      "이용자는 최신 정보를 확인하기 위해 시드니 복덕방에 문의해 주시기 바랍니다.",
    ],
    paragraphsEn: [
      "Property prices, price guides, rental amounts, incentives and availability may change without notice.",
      "A property appearing on the website does not guarantee that it remains available.",
      "Users should contact Sydney Bokdokbang to confirm current information.",
    ],
  },
  {
    n: "05",
    titleKo: "신규 개발 및 분양 매물",
    titleEn: "New Developments and Off-the-Plan Property",
    paragraphsKo: [
      "투시도, 도면, 배치도, 마감재, 면적, 전망, 완공 예정일 등 신규 개발 관련 정보는 예시적인 성격을 가지며, 개발 진행 과정에서 변경될 수 있습니다.",
      "이용자는 결정을 내리기 전에 관련 계약서, 공시 서류, 도면 및 시행사 정보를 검토해야 합니다.",
    ],
    paragraphsEn: [
      "Renders, plans, layouts, finishes, dimensions, views, completion dates and other development information may be indicative and may change during development.",
      "Users should review the relevant contract, disclosure documents, plans and developer information before making a decision.",
    ],
  },
  {
    n: "06",
    titleKo: "법률·금융·세무 자문 아님",
    titleEn: "No Financial, Legal or Tax Advice",
    paragraphsKo: [
      "본 웹사이트의 정보는 법률, 금융, 세무, 회계 또는 대출 자문에 해당하지 않습니다.",
      "이용자는 필요한 경우 부동산 거래를 진행하기 전에 적절한 자격을 갖춘 전문가로부터 자문을 받아야 합니다.",
      "부동산 관련 코멘트나 시장 정보는 향후 시세 상승이나 임대 수익을 보장하는 것으로 신뢰되어서는 안 됩니다.",
    ],
    paragraphsEn: [
      "Information on this website does not constitute legal, financial, taxation, accounting or lending advice.",
      "Users should obtain advice from appropriately qualified professionals where required before entering into a property transaction.",
      "Property commentary or market information should not be relied on as a guarantee of future performance, capital growth or rental returns.",
    ],
  },
  {
    n: "07",
    titleKo: "부동산 자문 및 문의",
    titleEn: "Property Advisory and Enquiries",
    paragraphsKo: [
      "문의를 제출하거나, 감정평가를 요청하거나, 상담을 예약하는 행위 자체는 구속력 있는 중개 계약, 부동산 거래 또는 계약 관계를 발생시키지 않습니다.",
      "정식 서비스 계약은 관련 서면 계약 및 적용 가능한 뉴사우스웨일스주 부동산 법령에 따라 별도로 체결됩니다.",
    ],
    paragraphsEn: [
      "Submitting an enquiry, requesting an appraisal or booking a consultation does not itself create a binding agency agreement, property transaction or contractual relationship.",
      "Any formal service arrangement will be subject to the relevant written agreement and applicable NSW property laws.",
    ],
  },
  {
    n: "08",
    titleKo: "부동산 감정평가",
    titleEn: "Property Appraisals",
    paragraphsKo: [
      "웹사이트 문의를 통해 또는 그 이후에 제공되는 감정평가나 가격 의견은 별도로 명시되지 않는 한 참고용입니다.",
      "이는 등록된 감정평가사가 작성한 독립적인 공식 감정평가서로 간주되어서는 안 됩니다.",
    ],
    paragraphsEn: [
      "Any appraisal or price opinion provided through or following a website enquiry is indicative unless otherwise expressly stated.",
      "It should not be treated as an independent formal valuation prepared by a registered valuer.",
    ],
  },
  {
    n: "09",
    titleKo: "제3의 전문가 및 소개",
    titleEn: "Third-Party Professionals and Referrals",
    paragraphsKo: [
      "시드니 복덕방은 변호사, 컨베이언서, 모기지 브로커, 건물 점검 업체, 부동산 관리 담당자, 유지보수 업체 또는 이사 업체 등 독립적인 제3의 전문가를 소개하거나 연결해 드릴 수 있습니다.",
      "별도로 명시되지 않는 한, 이러한 업체들은 독립된 사업체입니다.",
      "이용자는 해당 서비스를 이용하기 전에 각 제공업체의 자체 약관을 검토하고 동의해야 합니다.",
    ],
    paragraphsEn: [
      "Sydney Bokdokbang may introduce or refer clients to independent third-party professionals such as solicitors, conveyancers, mortgage brokers, inspectors, property managers, maintenance providers or moving services.",
      "Unless expressly stated otherwise, these providers are independent businesses.",
      "Users should review and agree to each provider's own terms before engaging their services.",
    ],
  },
  {
    n: "10",
    titleKo: "외부 웹사이트 및 링크",
    titleEn: "External Websites and Links",
    paragraphsKo: [
      "본 웹사이트에는 제3자 웹사이트, 부동산 플랫폼, 지도, 시행사 웹사이트 또는 외부 서비스로 연결되는 링크가 포함될 수 있습니다.",
      "시드니 복덕방은 독립적인 제3자 웹사이트의 콘텐츠, 이용 가능 여부, 개인정보 처리방침 또는 이용약관에 대해 책임을 지지 않습니다.",
    ],
    paragraphsEn: [
      "This website may contain links to third-party websites, property platforms, maps, developer websites or external services.",
      "Sydney Bokdokbang is not responsible for the content, availability, privacy practices or terms of independent third-party websites.",
    ],
  },
  {
    n: "11",
    titleKo: "지식재산권",
    titleEn: "Intellectual Property",
    paragraphsKo: [
      "웹사이트 콘텐츠, 브랜딩, 문구, 그래픽, 레이아웃 및 시드니 복덕방이 보유한 오리지널 자료는 법령에서 허용하는 경우를 제외하고, 허가 없이 복제, 재제작, 수정 또는 상업적으로 이용할 수 없습니다.",
      "제3자의 매물 사진, 평면도, 투시도 및 기타 자료는 각 권리자의 권리에 따릅니다.",
    ],
    paragraphsEn: [
      "Website content, branding, copy, graphics, layouts and original materials belonging to Sydney Bokdokbang must not be copied, reproduced, modified or commercially used without permission, except where permitted by law.",
      "Third-party property photography, floorplans, renders and other materials remain subject to the rights of their respective owners.",
    ],
  },
  {
    n: "12",
    titleKo: "웹사이트 이용 수칙",
    titleEn: "Acceptable Website Use",
    paragraphsKo: ["이용자는 다음 행위를 해서는 안 됩니다."],
    paragraphsEn: ["Users must not:"],
    listKo: [
      "웹사이트를 부적절하게 이용하는 행위",
      "무단으로 접근을 시도하는 행위",
      "웹사이트 운영을 방해하는 행위",
      "허위 또는 오해의 소지가 있는 정보를 제출하는 행위",
      "웹사이트 콘텐츠를 불법적으로 사용하는 행위",
      "허가 없이 콘텐츠를 상업적으로 복제하는 행위",
    ],
    listEn: [
      "misuse the website",
      "attempt unauthorised access",
      "interfere with website operation",
      "submit false or misleading information",
      "use website content unlawfully",
      "reproduce content commercially without permission",
    ],
  },
  {
    n: "13",
    titleKo: "웹사이트 이용 가능성",
    titleEn: "Website Availability",
    paragraphsKo: [
      "시드니 복덕방은 사전 통보 없이 웹사이트의 일부를 업데이트, 중단 또는 변경할 수 있습니다.",
      "당사는 웹사이트가 중단 없이 또는 오류 없이 운영된다는 것을 보장하지 않습니다.",
    ],
    paragraphsEn: [
      "Sydney Bokdokbang may update, suspend or change parts of the website without notice.",
      "We do not guarantee uninterrupted or error-free website operation.",
    ],
  },
  {
    n: "14",
    titleKo: "책임의 제한",
    titleEn: "Limitation of Liability",
    paragraphsKo: [
      "관련 법령이 허용하는 범위 내에서, 시드니 복덕방은 이용자가 부동산 관련 결정에 중요한 정보를 스스로 확인하지 않은 채 웹사이트의 일반 정보에만 의존하여 발생한 손실에 대해 책임을 지지 않습니다.",
    ],
    paragraphsEn: [
      "To the extent permitted by law, Sydney Bokdokbang is not responsible for loss resulting solely from reliance on general website information where users have not independently verified information relevant to a property decision.",
    ],
    quoteKo: "본 이용약관의 어떠한 조항도 호주 소비자법(Australian Consumer Law) 또는 기타 관련 법령에 따라 법적으로 배제할 수 없는 권리나 구제 수단을 배제, 제한 또는 변경하지 않습니다.",
    quoteEn: "Nothing in these Terms & Conditions excludes, restricts or modifies any right or remedy that cannot lawfully be excluded under the Australian Consumer Law or other applicable legislation.",
  },
  {
    n: "15",
    titleKo: "개인정보",
    titleEn: "Privacy",
    paragraphsKo: ["웹사이트를 통해 제출된 개인정보는 시드니 복덕방의 개인정보처리방침에 따라 처리됩니다."],
    paragraphsEn: ["Personal information submitted through this website is handled in accordance with the Sydney Bokdokbang Privacy Policy."],
    linkTo: "/legal/privacy-policy",
    linkKo: "개인정보처리방침 보기",
    linkEn: "View Privacy Policy",
  },
  {
    n: "16",
    titleKo: "관련 법령",
    titleEn: "Applicable Laws",
    paragraphsKo: [
      "본 웹사이트 및 본 이용약관은 호주 뉴사우스웨일스주에서 적용되는 법률의 적용을 받습니다.",
      "관련이 있는 경우, 서비스는 다음을 포함한 호주 및 뉴사우스웨일스주 법령의 적용을 받을 수 있습니다.",
    ],
    paragraphsEn: [
      "This website and these Terms & Conditions are governed by the laws applicable in New South Wales, Australia.",
      "Where relevant, services may also be subject to Australian and NSW legislation including:",
    ],
    list: APPLICABLE_LAWS,
  },
  {
    n: "17",
    titleKo: "약관 변경",
    titleEn: "Changes to These Terms",
    paragraphsKo: ["시드니 복덕방은 웹사이트, 서비스 또는 관련 법적 요건이 변경되는 경우 본 이용약관을 업데이트할 수 있습니다."],
    paragraphsEn: ["Sydney Bokdokbang may update these Terms & Conditions when the website, services or applicable requirements change."],
    metaKo: "최종 업데이트: 2026년 9월 16일",
    metaEn: "Last Updated: 16 September 2026",
  },
  {
    n: "18",
    titleKo: "문의처",
    titleEn: "Contact",
    paragraphsKo: ["본 이용약관에 대한 문의 사항은 아래 연락처로 접수해 주시기 바랍니다."],
    paragraphsEn: ["For questions about these Terms & Conditions, please contact us using the details below."],
    contact: true,
  },
];

export function TermsPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("법적 고지", "Legal")}
        titleKo="이용약관"
        titleEn="Terms & Conditions"
        descKo="본 이용약관은 시드니 복덕방 웹사이트와 웹사이트를 통해 제공되는 정보, 매물, 문의 및 서비스의 이용을 규율합니다. 시드니 복덕방은 Bokdokbang Pty Ltd가 운영합니다."
        descEn="These Terms & Conditions govern the use of the Sydney Bokdokbang website and the information, property listings, enquiries and services made available through it. Sydney Bokdokbang is operated by Bokdokbang Pty Ltd."
      />

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[760px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <Reveal>
            <div className="mb-16 md:mb-20 p-7 md:p-9" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
              <div className="text-[16px] font-medium mb-1" style={{ fontFamily: display, color: COLORS.green }}>
                {CONTACT_INFO.legalName}
              </div>
              <div className="text-[13px] mb-5" style={{ color: COLORS.dim, fontFamily: body }}>
                {t(`상호명: ${CONTACT_INFO.tradingName}`, `Trading as ${CONTACT_INFO.tradingName}`)}
              </div>
              <div className="flex flex-col gap-1.5 text-[14.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
                <span>{CONTACT_INFO.abn}</span>
                <span>{CONTACT_INFO.licence}</span>
                <span>{CONTACT_INFO.address}</span>
                <span>{CONTACT_INFO.phoneDisplay}</span>
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </Reveal>

          {SECTIONS.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i * 20, 200)}>
              <div className="py-9 md:py-10" style={{ borderTop: i === 0 ? "none" : `1px solid ${COLORS.stone}` }}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[12px] flex-shrink-0" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.yellow, letterSpacing: "0.04em" }}>
                    {s.n}
                  </span>
                  <h2 className="font-semibold" style={{ fontFamily: body, color: COLORS.green, fontSize: "clamp(17px,1.8vw,21px)" }}>
                    {t(s.titleKo, s.titleEn)}
                  </h2>
                </div>
                <div className="flex flex-col gap-3 md:pl-9">
                  {(lang === "ko" ? s.paragraphsKo : s.paragraphsEn).map((p, pi) => (
                    <p key={pi} className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                      {p}
                    </p>
                  ))}

                  {(s.listKo || s.list) && (
                    <ul className="flex flex-col gap-2 mt-1">
                      {(s.list ?? (lang === "ko" ? s.listKo : s.listEn)).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[15.5px]" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.yellow }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(s.quoteKo || s.quoteEn) && (
                    <div className="mt-1 px-5 py-4" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
                      <p className="text-[15px] italic" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                        {t(s.quoteKo, s.quoteEn)}
                      </p>
                    </div>
                  )}

                  {s.linkTo && (
                    <Link
                      to={s.linkTo}
                      className="inline-flex items-center gap-1.5 text-[13.5px] mt-1 transition-opacity hover:opacity-70 w-fit"
                      style={{ color: COLORS.green, fontFamily: body, fontWeight: 500, textDecoration: "none" }}
                    >
                      {t(s.linkKo, s.linkEn)} <ArrowRight size={13} />
                    </Link>
                  )}

                  {s.contact && (
                    <div className="flex flex-col gap-1.5 text-[14.5px] mt-1" style={{ color: COLORS.ink, fontFamily: body }}>
                      <span>{CONTACT_INFO.tradingName}</span>
                      <span>{CONTACT_INFO.legalName}</span>
                      <span>{CONTACT_INFO.address}</span>
                      <span>{CONTACT_INFO.phoneDisplay}</span>
                      <span>{CONTACT_INFO.email}</span>
                    </div>
                  )}

                  {(s.metaKo || s.metaEn) && (
                    <p className="text-[13px] mt-1" style={{ color: COLORS.dim, fontFamily: body }}>
                      {t(s.metaKo, s.metaEn)}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <LegalPageNav />
    </>
  );
}
