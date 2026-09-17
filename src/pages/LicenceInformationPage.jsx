import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { LegalPageNav } from "../components/ui/LegalPageNav";
import { Reveal } from "../components/ui/Reveal";
import { CONTACT_INFO } from "../data/contactInfo";

const ABN_NUMBER = CONTACT_INFO.abn.replace(/^ABN\s*/, "");
const LICENCE_NUMBER = CONTACT_INFO.licence.replace(/^Corporate Licence No\.\s*/, "");

const FIELDS = [
  { labelKo: "상호명", labelEn: "Trading Name", value: CONTACT_INFO.tradingName },
  { labelKo: "법인명", labelEn: "Legal Entity", value: CONTACT_INFO.legalName },
  { labelKo: "사업자등록번호 (ABN)", labelEn: "ABN", value: ABN_NUMBER },
  { labelKo: "법인 라이선스 번호", labelEn: "Corporate Licence Number", value: LICENCE_NUMBER },
  { labelKo: "사업장 주소", labelEn: "Business Address", value: CONTACT_INFO.address },
  { labelKo: "전화번호", labelEn: "Phone", value: CONTACT_INFO.phoneDisplay },
  { labelKo: "이메일", labelEn: "Email", value: CONTACT_INFO.email },
];

const NSW_LAWS = ["Property and Stock Agents Act 2002 (NSW)", "Property and Stock Agents Regulation 2022 (NSW)"];

const LICENCE_VERIFICATION_URL = "https://verify.licence.nsw.gov.au/details/Property%20-%20Corporation/1-4I7GCMU";

function SectionHeading({ n, title, body }) {
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

export function LicenceInformationPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("법적 고지", "Legal")}
        titleKo="라이선스 정보"
        titleEn="Licence Information"
        descKo="시드니 복덕방은 뉴사우스웨일스주에서 사업을 운영하는 호주 법인 Bokdokbang Pty Ltd의 상호명입니다."
        descEn="SBB is the trading name of Bokdokbang Pty Ltd, an Australian company operating in New South Wales."
      />

      <section style={{ backgroundColor: COLORS.ivory, borderTop: `1px solid ${COLORS.stone}` }}>
        <div className="max-w-[760px] mx-auto px-5 md:px-10 py-16 md:py-24">

          {/* Introduction — full field list */}
          <Reveal>
            <div className="pb-9 md:pb-10 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {FIELDS.map((f) => (
                <div key={f.labelEn}>
                  <div className="text-[10.5px] tracking-[0.12em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(f.labelKo, f.labelEn)}
                  </div>
                  <div className="text-[15px]" style={{ color: COLORS.ink, fontFamily: body }}>
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 01 — NSW Real Estate Licensing */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="01" body={body} title={t("뉴사우스웨일스주 부동산 라이선스", "NSW Real Estate Licensing")} />
              <div className="flex flex-col gap-3 md:pl-9">
                <p className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "Bokdokbang Pty Ltd는 뉴사우스웨일스주에서 사업을 운영하며, 회사의 부동산 관련 활동은 관련 뉴사우스웨일스주 부동산 법령 및 규제 요건의 적용을 받습니다.",
                    "Bokdokbang Pty Ltd operates in New South Wales, and its real estate activities are subject to applicable NSW property legislation and regulatory requirements."
                  )}
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {NSW_LAWS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15.5px]" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS.tangerine }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* 02 — Corporate Licence, prominent card */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="02" body={body} title={t("법인 라이선스", "Corporate Licence")} />
              <div className="md:pl-9">
                <div className="px-7 py-8 md:px-9 md:py-9 mb-5 text-center" style={{ backgroundColor: COLORS.green }}>
                  <div className="text-[19px] md:text-[22px] font-medium mb-2" style={{ fontFamily: display, color: COLORS.ivory }}>
                    {CONTACT_INFO.legalName}
                  </div>
                  <div className="text-[14px]" style={{ color: "rgba(245,241,232,0.75)", fontFamily: body, letterSpacing: "0.02em" }}>
                    {CONTACT_INFO.licence}
                  </div>
                </div>
                <p className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "위 정보는 시드니 복덕방을 운영하는 법인에 부여된 법인 라이선스 정보입니다.",
                    "This is the corporate licence information associated with the legal entity operating SBB."
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 03 — Licence Verification */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="03" body={body} title={t("라이선스 확인", "Licence Verification")} />
              <div className="flex flex-col gap-3 md:pl-9">
                <p className="text-[16px]" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "라이선스 정보는 뉴사우스웨일스주 정부(Fair Trading)의 공식 공개 등록부를 통해 별도로 확인하실 수 있습니다.",
                    "Licence details may be independently verified through the official NSW Government / Fair Trading public register."
                  )}
                </p>
                <a
                  href={LICENCE_VERIFICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium mt-1 transition-opacity hover:opacity-70 w-fit"
                  style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
                >
                  {t("라이선스 확인하기", "Verify Licence")} <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* 04 — Our Business Identity */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="04" body={body} title={t("사업체 정보 구조", "Our Business Identity")} />
              <div className="md:pl-9">
                <div className="flex flex-col items-center text-center py-8 px-6" style={{ backgroundColor: COLORS.warm, border: `1px solid ${COLORS.stone}` }}>
                  <div className="text-[20px] md:text-[24px] font-medium mb-1.5" style={{ fontFamily: display, color: COLORS.ink }}>
                    {CONTACT_INFO.tradingName}
                  </div>
                  <div className="text-[10.5px] tracking-[0.14em] uppercase mb-6" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t("상호명", "Trading Name")}
                  </div>

                  <ArrowDown size={16} style={{ color: COLORS.stone }} className="mb-6" />

                  <div className="text-[16px] font-medium mb-1.5" style={{ fontFamily: display, color: COLORS.green }}>
                    {CONTACT_INFO.legalName}
                  </div>
                  <div className="text-[10.5px] tracking-[0.14em] uppercase mb-6" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t("법인명", "Legal Entity")}
                  </div>

                  <div className="text-[12.5px] flex flex-col gap-1" style={{ color: COLORS.dim, fontFamily: body }}>
                    <span>{CONTACT_INFO.abn}</span>
                    <span>{CONTACT_INFO.licence}</span>
                  </div>
                </div>
                <p className="text-[15.5px] mt-5" style={{ color: COLORS.dim, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "시드니 복덕방은 고객을 마주하는 상호명이며, Bokdokbang Pty Ltd는 그 바탕이 되는 법인입니다.",
                    "SBB is the customer-facing trading name, and Bokdokbang Pty Ltd is the underlying legal entity."
                  )}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 05 — Licensing Enquiries */}
          <Reveal>
            <div className="py-9 md:py-10" style={{ borderTop: `1px solid ${COLORS.stone}` }}>
              <SectionHeading n="05" body={body} title={t("라이선스 관련 문의", "Licensing Enquiries")} />
              <div className="md:pl-9">
                <p className="text-[16px] mb-5" style={{ color: COLORS.ink, fontFamily: body, lineHeight: 1.75 }}>
                  {t(
                    "시드니 복덕방의 라이선스 또는 사업자 등록과 관련한 문의는 아래 연락처로 접수해 주시기 바랍니다.",
                    "For enquiries specifically relating to SBB's licence or business registration, please contact us using the details below."
                  )}
                </p>
                <div className="flex flex-col gap-1.5 text-[14.5px]" style={{ color: COLORS.ink, fontFamily: body }}>
                  <span className="font-medium" style={{ fontFamily: display, color: COLORS.green, fontSize: "15px", marginBottom: "4px" }}>
                    {CONTACT_INFO.tradingName}
                  </span>
                  <span>{CONTACT_INFO.address}</span>
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                  <span>{CONTACT_INFO.email}</span>
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
