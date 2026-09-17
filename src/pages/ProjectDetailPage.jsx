import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button } from "../components/ui/Button";
import { DEVELOPMENTS } from "../data/developments";
import { APPLIANCE_BRANDS } from "../data/applianceBrands";

export function ProjectDetailPage() {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const dev = DEVELOPMENTS.find((d) => d.id === id);
  const appliances = APPLIANCE_BRANDS[id];

  if (!dev) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("프로젝트를 찾을 수 없습니다", "Project not found")}
          </h1>
          <Link to="/new-developments" style={{ color: COLORS.green, fontFamily: body }}>
            {t("신규 개발로 돌아가기", "Back to New Developments")}
          </Link>
        </div>
      </section>
    );
  }

  const gallery = dev.gallery?.length ? dev.gallery : [dev.img];

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <Reveal>
          <Link
            to="/new-developments"
            className="inline-flex items-center gap-1.5 text-[12.5px] mb-8"
            style={{ color: COLORS.dim, fontFamily: body, textDecoration: "none" }}
          >
            <ArrowLeft size={13} /> {t("신규 개발로 돌아가기", "Back to New Developments")}
          </Link>
        </Reveal>

        {/* Hero photo — single large architectural image leads the page */}
        <Reveal delay={40}>
          <div className="overflow-hidden mb-10 md:mb-14" style={{ aspectRatio: "16/9", backgroundColor: COLORS.stone }}>
            <img src={gallery[0]} alt={dev.name} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-3">
            <SectionLabel font={body}>{t(dev.statusKo, dev.statusEn)} · {t(dev.subKo, dev.suburb)}</SectionLabel>
          </div>
          <h1 className="font-medium mb-8 italic" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.ink, fontSize: "clamp(30px,4.2vw,54px)" }}>
            {dev.name}
          </h1>

          {/* Key facts — clean typography strip, not icon badges */}
          <div className="flex flex-wrap gap-x-10 gap-y-6 mb-12 pb-10" style={{ borderBottom: `1px solid ${COLORS.stone}` }}>
            {dev.stats.map((stat) => (
              <div key={stat.labelEn}>
                <div className="text-[10px] tracking-[0.16em] uppercase mb-2 font-semibold" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t(stat.labelKo, stat.labelEn)}
                </div>
                <div className="text-[19px] md:text-[21px] font-medium" style={{ fontFamily: display, color: COLORS.ink }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          <Reveal>
            <p className="text-[15.5px] leading-relaxed mb-10" style={{ color: COLORS.ink, fontFamily: body, maxWidth: "620px" }}>
              {t(dev.descKo, dev.descEn)}
            </p>

            <div className="mb-10">
              <h2 className="text-[13px] tracking-wide uppercase mb-5" style={{ color: COLORS.dim, fontFamily: body }}>
                {t("유닛 구성", "Unit Mix")}
              </h2>
              <div className="divide-y" style={{ borderColor: COLORS.stone }}>
                {dev.unitMix.map((u) => (
                  <div key={u.typeEn} className="flex items-center justify-between py-3.5" style={{ borderColor: COLORS.stone }}>
                    <span className="text-[14px]" style={{ color: COLORS.ink, fontFamily: body }}>{t(u.typeKo, u.typeEn)}</span>
                    <span className="text-[14px] font-medium" style={{ color: COLORS.green, fontFamily: FONT_EN_DISPLAY }}>
                      {t("시작가", "From")} {u.priceFrom}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {appliances?.length > 0 && (
              <div className="mb-12">
                <h2 className="text-[13px] tracking-wide uppercase mb-5" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t("가전 브랜드", "Kitchen Appliances")}
                </h2>
                <div className="divide-y" style={{ borderColor: COLORS.stone }}>
                  {appliances.map((a) => (
                    <div key={a.itemEn} className="flex items-center justify-between py-3.5" style={{ borderColor: COLORS.stone }}>
                      <span className="text-[14px]" style={{ color: COLORS.ink, fontFamily: body }}>{t(a.itemKo, a.itemEn)}</span>
                      <span className="text-[13.5px] text-right" style={{ color: COLORS.dim, fontFamily: body, maxWidth: "260px" }}>
                        {a.brand}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11.5px] mt-3" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t("시행사 자료 기준이며 변경될 수 있습니다.", "Per developer documentation — subject to change.")}
                </p>
              </div>
            )}

            {/* Image gallery — full set of project photography, after the description */}
            {gallery.length > 1 && (
              <div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {gallery.map((src, i) => (
                    <Reveal key={src} delay={i * 70}>
                      <div className="overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                        <img src={src} alt={`${dev.name} ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={100}>
            <div className="lg:sticky lg:top-[100px] p-7 md:p-8" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
              <Button variant="fill-green" href="/contact" font={body} className="w-full mb-3">
                {t("브로셔 요청하기", "Request the Brochure")}
              </Button>
              <Button variant="outline-dark" href="/contact" font={body} className="w-full">
                {t("이 프로젝트 문의하기", "Enquire About This Project")}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
