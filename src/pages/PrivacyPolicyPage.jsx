import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { LegalPageNav } from "../components/ui/LegalPageNav";
import { Reveal } from "../components/ui/Reveal";
import { CONTACT_INFO } from "../data/contactInfo";

const LAWS = [
  "Privacy Act 1988 (Cth)",
  "Australian Privacy Principles",
  "Property and Stock Agents Act 2002 (NSW)",
  "Property and Stock Agents Regulation 2022 (NSW)",
  "Residential Tenancies Act 2010 (NSW)",
];

const SECTIONS = [
  {
    n: "01",
    titleKo: "수집하는 개인정보",
    titleEn: "Personal Information We Collect",
    paragraphsKo: [
      "상담 신청, 매물 문의, 감정평가 요청 등을 통해 이름, 전화번호, 이메일 주소, 매물 주소, 문의 및 상담 내용, 매매·임대 관련 선호 조건 등의 개인정보를 수집할 수 있습니다.",
      "임대차 신청이나 부동산 관리와 관련된 경우, 세입자 정보 등 추가적인 개인정보가 필요할 수 있습니다.",
    ],
    paragraphsEn: [
      "We may collect information such as your name, phone number, email address, property address, enquiry and consultation details, and your buying, selling or rental preferences.",
      "Where relevant to a tenancy application or property management, we may also collect related tenancy information.",
    ],
  },
  {
    n: "02",
    titleKo: "개인정보 수집 방법",
    titleEn: "How We Collect Information",
    paragraphsKo: [
      "개인정보는 웹사이트 문의 양식, 매물 문의, 상담 예약, 감정평가 요청, 전화, 이메일, 카카오톡, 매물 방문(인스펙션) 및 담당자와의 직접적인 소통을 통해 수집됩니다.",
    ],
    paragraphsEn: [
      "We collect information through website enquiry forms, property enquiries, consultation bookings, appraisal requests, phone calls, email, KakaoTalk, property inspections, and direct communication with our team.",
    ],
  },
  {
    n: "03",
    titleKo: "개인정보 이용 목적",
    titleEn: "How We Use Information",
    paragraphsKo: [
      "수집된 정보는 문의에 응답하고, 부동산 관련 서비스를 제공하며, 상담 및 인스펙션 일정을 조율하고, 매매·임대·임차 및 부동산 관리를 지원하며, 관련 신청서를 처리하고, 법적 의무를 이행하기 위한 목적으로 사용됩니다.",
    ],
    paragraphsEn: [
      "We use your information to respond to enquiries, provide property services, arrange consultations and inspections, assist with buying, selling, renting, leasing and property management, process relevant applications, and meet our legal obligations.",
    ],
  },
  {
    n: "04",
    titleKo: "제3자 제공",
    titleEn: "Disclosure to Third Parties",
    paragraphsKo: [
      "필요한 경우, 정보는 임대인, 매도인, 개발사, 변호사, 컨베이언서, 모기지 브로커, 건물 점검 업체, 부동산 관리 담당자, 유지보수 업체 및 저희 업무를 지원하는 기술·서비스 제공업체와 공유될 수 있습니다.",
      "시드니 복덕방은 어떠한 경우에도 개인정보를 판매하지 않습니다.",
    ],
    paragraphsEn: [
      "Where necessary, information may be shared with landlords, property owners, developers, solicitors, conveyancers, mortgage brokers, building inspectors, property managers, maintenance providers, and technology or service providers who support our operations.",
      "SBB does not sell personal information.",
    ],
  },
  {
    n: "05",
    titleKo: "임대차 및 부동산 관리",
    titleEn: "Tenancy and Property Management",
    paragraphsKo: [
      "임대차 신청 및 부동산 관리 서비스와 관련하여 추가적인 개인정보가 필요할 수 있습니다. 이 경우에도 해당 서비스 제공에 합리적으로 필요한 범위 내에서만 정보를 수집합니다.",
    ],
    paragraphsEn: [
      "Tenancy applications and property management may require additional personal information. We only collect what is reasonably necessary to provide the relevant service.",
    ],
  },
  {
    n: "06",
    titleKo: "데이터 보안 및 보관",
    titleEn: "Data Security and Retention",
    paragraphsKo: [
      "시드니 복덕방은 개인정보를 오·남용, 분실 및 무단 접근으로부터 보호하기 위해 합리적인 조치를 취하고 있습니다. 기록은 사업상, 법적, 규제상 필요한 기간 동안만 보관됩니다.",
    ],
    paragraphsEn: [
      "We take reasonable steps to protect personal information from misuse, loss and unauthorised access. Records are retained only for as long as required for business, legal and regulatory purposes.",
    ],
  },
  {
    n: "07",
    titleKo: "열람 및 정정",
    titleEn: "Access and Correction",
    paragraphsKo: [
      "이용자는 언제든지 본인의 개인정보에 대한 열람 또는 정정을 요청할 수 있으며, 아래 연락처를 통해 문의해 주시기 바랍니다.",
    ],
    paragraphsEn: [
      "You may request access to, or correction of, your personal information at any time by contacting SBB using the details below.",
    ],
  },
  {
    n: "08",
    titleKo: "쿠키 및 웹사이트 서비스",
    titleEn: "Cookies and Website Services",
    paragraphsKo: [
      "본 웹사이트는 쿠키, 분석 도구, 지도 서비스 및 스팸 방지 도구를 사용할 수 있으며, 이 과정에서 IP 주소, 브라우저 정보 등 제한적인 기술 정보가 수집될 수 있습니다.",
    ],
    paragraphsEn: [
      "Our website may use cookies, analytics, map services and spam-protection tools, which can collect limited technical information such as IP address and browser type.",
    ],
  },
  {
    n: "09",
    titleKo: "마케팅 커뮤니케이션",
    titleEn: "Marketing Communications",
    paragraphsKo: ["이용자는 언제든지 저희로부터의 마케팅 커뮤니케이션 수신을 거부할 수 있습니다."],
    paragraphsEn: ["You may opt out of marketing communications from us at any time."],
  },
  {
    n: "10",
    titleKo: "개인정보 관련 문의",
    titleEn: "Privacy Complaints",
    paragraphsKo: [
      `개인정보와 관련된 문의나 불만 사항은 ${CONTACT_INFO.email}으로 제출해 주시기 바랍니다. 접수된 사항은 검토 후 적절하게 답변드립니다.`,
    ],
    paragraphsEn: [
      `Privacy concerns or complaints can be submitted to ${CONTACT_INFO.email}. We will review all complaints and respond appropriately.`,
    ],
  },
  {
    n: "11",
    titleKo: "관련 법령",
    titleEn: "Applicable Framework",
    paragraphsKo: ["관련이 있는 경우, 본 방침은 다음의 법령을 참고하여 운영됩니다."],
    paragraphsEn: ["Where applicable, this policy has regard to the following legislative framework."],
    list: LAWS,
  },
  {
    n: "12",
    titleKo: "업데이트",
    titleEn: "Updates",
    paragraphsKo: [
      "본 개인정보처리방침은 사업 운영 방식 또는 관련 법령이 변경되는 경우 업데이트될 수 있습니다.",
    ],
    paragraphsEn: [
      "This Privacy Policy may be updated from time to time to reflect changes in our business practices or legal requirements.",
    ],
    metaKo: "최종 업데이트: 2026년 9월 16일",
    metaEn: "Last Updated: 16 September 2026",
  },
];

export function PrivacyPolicyPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("법적 고지", "Legal")}
        titleKo="개인정보처리방침"
        titleEn="Privacy Policy"
        descKo={`${CONTACT_INFO.legalName}(상호명: ${CONTACT_INFO.tradingName})는 고객과 웹사이트 방문자의 개인정보를 소중히 여깁니다. 저희는 호주 및 뉴사우스웨일스주의 관련 개인정보·부동산 법령에 따라 개인정보를 책임감 있게 관리합니다.`}
        descEn={`${CONTACT_INFO.legalName}, trading as ${CONTACT_INFO.tradingName}, respects the privacy of clients, customers and website visitors. We are committed to handling personal information responsibly and in accordance with applicable Australian and NSW privacy and property laws.`}
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
            <Reveal key={s.n} delay={Math.min(i * 25, 200)}>
              <div className="py-9 md:py-10" style={{ borderTop: i === 0 ? "none" : `1px solid ${COLORS.stone}` }}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[12px] flex-shrink-0" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.tangerine, letterSpacing: "0.04em" }}>
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
                  {s.list && (
                    <ul className="flex flex-col gap-2 mt-1">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[15.5px]" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                          <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.tangerine }} />
                          {item}
                        </li>
                      ))}
                    </ul>
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
