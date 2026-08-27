import { useMemo, useState } from "react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { DevelopmentCard } from "../ui/DevelopmentCard";
import { DEVELOPMENTS, DEV_PRICE_BUCKETS, DEV_COMPLETION_OPTIONS, DEV_AVAILABILITY_OPTIONS } from "../../data/developments";

const SELECT_STYLE = (body) => ({
  backgroundColor: COLORS.warm,
  border: `1px solid ${COLORS.stone}`,
  fontFamily: body,
  color: COLORS.dim,
});

export function NewDevelopmentsGrid() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  const [area, setArea] = useState("any");
  const [developer, setDeveloper] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const [priceBucket, setPriceBucket] = useState("any");
  const [completion, setCompletion] = useState("any");
  const [availability, setAvailability] = useState("any");

  const areas = useMemo(() => [...new Set(DEVELOPMENTS.map((d) => d.suburb))], []);
  const developers = useMemo(() => [...new Set(DEVELOPMENTS.map((d) => d.developer))], []);

  const filtered = useMemo(() => {
    return DEVELOPMENTS.filter((d) => {
      if (area !== "any" && d.suburb !== area) return false;
      if (developer !== "any" && d.developer !== developer) return false;
      if (bedrooms !== "any" && d.bedsMax < Number(bedrooms)) return false;
      if (priceBucket !== "any") {
        const bucket = DEV_PRICE_BUCKETS.find((b) => b.id === priceBucket);
        if (bucket && !(d.startingPrice >= bucket.min && d.startingPrice < bucket.max)) return false;
      }
      if (completion !== "any") {
        const opt = DEV_COMPLETION_OPTIONS.find((o) => o.id === completion);
        if (opt) {
          const matches = completion === "2028" ? d.completionYear >= opt.year : d.completionYear === opt.year;
          if (!matches) return false;
        }
      }
      if (availability !== "any" && d.availabilityId !== availability) return false;
      return true;
    });
  }, [area, developer, bedrooms, priceBucket, completion, availability]);

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-24">

        <Reveal>
          <div className="flex flex-wrap gap-2.5 mb-3.5">
            <select value={area} onChange={(e) => setArea(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[140px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("지역", "Area")}</option>
              {areas.map((a) => {
                const d = DEVELOPMENTS.find((dev) => dev.suburb === a);
                return <option key={a} value={a}>{t(d.subKo, a)}</option>;
              })}
            </select>
            <select value={developer} onChange={(e) => setDeveloper(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[160px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("디벨로퍼", "Developer")}</option>
              {developers.map((dv) => <option key={dv} value={dv}>{dv}</option>)}
            </select>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[130px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("침실", "Bedrooms")}</option>
              {[1, 2, 3].map((n) => <option key={n} value={n}>{n}+</option>)}
            </select>
            <select value={priceBucket} onChange={(e) => setPriceBucket(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[150px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("가격", "Price")}</option>
              {DEV_PRICE_BUCKETS.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
            <select value={completion} onChange={(e) => setCompletion(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[140px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("완공 예정", "Completion")}</option>
              {DEV_COMPLETION_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="px-4 py-3 text-[13px] outline-none appearance-none min-w-[150px]" style={SELECT_STYLE(body)}>
              <option value="any">{t("분양 현황", "Availability")}</option>
              {DEV_AVAILABILITY_OPTIONS.map((o) => <option key={o.id} value={o.id}>{t(o.labelKo, o.labelEn)}</option>)}
            </select>
          </div>
          <div className="text-[12px] mb-12" style={{ color: COLORS.dim, fontFamily: body }}>
            {t(`${filtered.length}개의 프로젝트`, `${filtered.length} projects`)}
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="text-center py-16 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
            {t("조건에 맞는 프로젝트가 없습니다. 필터를 조정해보세요.", "No projects match your filters. Try adjusting your search.")}
          </p>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
            {filtered.map((dev, i) => (
              <Reveal key={dev.id} delay={(i % 3) * 70}>
                <DevelopmentCard dev={dev} t={t} display={display} body={body} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
