import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { LeadForm } from "../components/ui/LeadForm";
import { CONTACT_INFO } from "../data/contactInfo";

const FIELDS = [
  { name: "name", labelKo: "이름", labelEn: "Full name", type: "text", required: true },
  { name: "email", labelKo: "이메일", labelEn: "Email", type: "email", required: true },
  { name: "phone", labelKo: "연락처", labelEn: "Phone", type: "tel", required: false },
  {
    name: "reason", labelKo: "문의 유형", labelEn: "Reason for enquiry", type: "select", required: true,
    options: [
      { value: "consultation", labelKo: "상담 예약", labelEn: "Book a consultation" },
      { value: "buying", labelKo: "매매 문의", labelEn: "Buying enquiry" },
      { value: "renting", labelKo: "임대 문의", labelEn: "Renting enquiry" },
      { value: "appraisal", labelKo: "감정평가 문의", labelEn: "Appraisal enquiry" },
      { value: "property-management", labelKo: "부동산 임대관리 문의", labelEn: "Property management enquiry" },
      { value: "other", labelKo: "기타", labelEn: "Other" },
    ],
  },
  { name: "message", labelKo: "메시지", labelEn: "Message", type: "textarea", required: true },
];

export function ContactPage() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  return (
    <>
      <PageHero
        label={t("연락처", "Contact")}
        titleKo="첫 질문을 시작으로, 여정을 함께해요."
        titleEn="Start with a question, and let's walk the journey together."
        descKo="상담 예약, 매물 문의, 무엇이든 편하게 남겨주세요. 시드니 복덕방이 곧 답변드립니다."
        descEn="Book a consultation, ask about a property, or anything else — leave us a message and we'll respond soon."
      />

      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 md:gap-20">
            <Reveal>
              <div className="flex flex-col gap-8 mb-10">
                <div>
                  <div className="text-[17px] font-medium mb-2" style={{ fontFamily: display, color: COLORS.ink }}>
                    {CONTACT_INFO.tradingName}
                  </div>
                  <p className="text-[14px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(CONTACT_INFO.addressKo, CONTACT_INFO.addressEn)}
                  </p>
                </div>
                <div>
                  <div className="text-[12px] tracking-wide uppercase mb-2" style={{ color: COLORS.dim, fontFamily: body }}>{t("전화", "Phone")}</div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-[15px]" style={{ color: COLORS.ink, fontFamily: body, textDecoration: "none" }}>
                    <Phone size={16} style={{ color: COLORS.green }} /> {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
                <div>
                  <div className="text-[12px] tracking-wide uppercase mb-2" style={{ color: COLORS.dim, fontFamily: body }}>{t("이메일", "Email")}</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2.5 text-[15px]" style={{ color: COLORS.ink, fontFamily: body, textDecoration: "none" }}>
                    <Mail size={16} style={{ color: COLORS.green }} /> {CONTACT_INFO.email}
                  </a>
                </div>
                <div>
                  <div className="text-[12px] tracking-wide uppercase mb-2" style={{ color: COLORS.dim, fontFamily: body }}>{t("카카오톡", "KakaoTalk")}</div>
                  <a href={CONTACT_INFO.kakaoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[15px]" style={{ color: COLORS.ink, fontFamily: body, textDecoration: "none" }}>
                    <MessageCircle size={16} style={{ color: COLORS.green }} /> @{CONTACT_INFO.kakaoId}
                  </a>
                </div>
                <div>
                  <div className="text-[12px] tracking-wide uppercase mb-2 flex items-center gap-2" style={{ color: COLORS.dim, fontFamily: body }}>
                    <Clock size={13} /> {t("운영 시간", "Hours")}
                  </div>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t(CONTACT_INFO.hoursKo, CONTACT_INFO.hoursEn)}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden" style={{ border: `1px solid ${COLORS.stone}`, aspectRatio: "4/3" }}>
                <iframe
                  title={t("시드니 복덕방 오피스 위치", "Sydney Bokdokbang office location")}
                  src={CONTACT_INFO.mapEmbedSrc}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={CONTACT_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[12.5px] font-medium"
                style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
              >
                {t("구글 지도에서 길찾기", "Get directions on Google Maps")}
              </a>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-[22px] md:text-[26px] font-medium mb-8" style={{ fontFamily: display, color: COLORS.ink }}>
                {t("문의하기", "Send an Enquiry")}
              </h2>
              <LeadForm
                fields={FIELDS}
                submitLabelKo="문의 보내기"
                submitLabelEn="Send Enquiry"
                successTitleKo="문의가 접수되었습니다."
                successTitleEn="Your enquiry has been received."
                successBodyKo="시드니 복덕방 팀이 빠른 시일 내에 연락드리겠습니다."
                successBodyEn="The Sydney Bokdokbang team will be in touch soon."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
