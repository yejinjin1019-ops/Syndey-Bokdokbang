import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { Button } from "../ui/Button";
import { DevelopmentCard } from "../ui/DevelopmentCard";
import { DEVELOPMENTS, DEV_PRICE_BUCKETS } from "../../data/developments";

export function FindAProperty() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  const [suburbQuery, setSuburbQuery] = useState("");
  const [priceBucket, setPriceBucket] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const resultsRef = useRef(null);

  const filtered = DEVELOPMENTS.filter((d) => {
    if (suburbQuery.trim()) {
      const q = suburbQuery.trim().toLowerCase();
      const hit = d.suburb.toLowerCase().includes(q) || d.subKo.includes(suburbQuery.trim());
      if (!hit) return false;
    }
    if (bedrooms !== "any" && d.bedsMax < Number(bedrooms)) return false;
    if (priceBucket !== "any") {
      const bucket = DEV_PRICE_BUCKETS.find((b) => b.id === priceBucket);
      if (bucket && !(d.startingPrice >= bucket.min && d.startingPrice < bucket.max)) return false;
    }
    return true;
  });

  const scrollToResults = () => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const visible = filtered.slice(0, 4);

  return (
    <section id="properties" style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}`, borderBottom: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">

        <Reveal>
          <div className="mb-7">
            <SectionLabel font={body}>{t("매물 찾기", "Find a Property")}</SectionLabel>
          </div>
          <h2 className="font-bold mb-10" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.01em" }}>
            {t("당신에게 맞는 집을 찾아드립니다", "Find Your Next Sydney Property")}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-col md:flex-row gap-2.5 mb-14">
            <div className="flex-1 relative">
              <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: COLORS.stone }} />
              <input
                type="text"
                value={suburbQuery}
                onChange={(e) => setSuburbQuery(e.target.value)}
                placeholder={t("지역 입력 (예: 맥쿼리 파크)", "Enter suburb or postcode")}
                className="w-full pl-10 pr-4 py-3.5 text-[13.5px] outline-none"
                style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, borderRadius: "10px", fontFamily: body, color: COLORS.ink }}
              />
            </div>
            <select
              value={priceBucket}
              onChange={(e) => setPriceBucket(e.target.value)}
              className="px-4 py-3.5 text-[13.5px] outline-none appearance-none md:min-w-[150px]"
              style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, borderRadius: "10px", fontFamily: body, color: COLORS.dim }}
            >
              <option value="any">{t("가격", "Price")}</option>
              {DEV_PRICE_BUCKETS.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="px-4 py-3.5 text-[13.5px] outline-none appearance-none md:min-w-[130px]"
              style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, borderRadius: "10px", fontFamily: body, color: COLORS.dim }}
            >
              <option value="any">{t("침실 수", "Bedrooms")}</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <Button variant="fill-green" font={body} onClick={scrollToResults} className="whitespace-nowrap">
              <Search size={14} /> {t("검색", "Search")}
            </Button>
          </div>
        </Reveal>

        <div ref={resultsRef} style={{ scrollMarginTop: "90px" }}>
          {filtered.length === 0 ? (
            <p className="text-center py-16 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
              {t("조건에 맞는 매물이 없습니다. 필터를 조정해보세요.", "No properties match your filters. Try adjusting your search.")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
              {visible.map((dev, i) => (
                <Reveal key={dev.id} delay={(i % 3) * 70} className="h-full">
                  <DevelopmentCard dev={dev} t={t} display={display} body={body} />
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/new-developments"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-opacity hover:opacity-60"
            style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
          >
            {t("전체 매물 보기", "View All Properties")} <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
