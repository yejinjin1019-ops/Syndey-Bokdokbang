import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Map as MapIcon, List as ListIcon } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { BuyListingCard } from "../ui/BuyListingCard";
import { BUY_LISTINGS, BUY_PRICE_BUCKETS } from "../../data/buyListings";

const SELECT_STYLE = (body) => ({
  backgroundColor: COLORS.warm,
  border: `1px solid ${COLORS.stone}`,
  fontFamily: body,
  color: COLORS.dim,
});

export function BuyListings() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);

  const [suburbQuery, setSuburbQuery] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [priceBucket, setPriceBucket] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const [bathrooms, setBathrooms] = useState("any");
  const [parkingMin, setParkingMin] = useState("any");
  const [view, setView] = useState("list"); // "list" | "map"
  const [sort, setSort] = useState("newest"); // "newest" | "price"

  const filtered = useMemo(() => {
    let results = BUY_LISTINGS.filter((p) => {
      if (suburbQuery.trim()) {
        const q = suburbQuery.trim().toLowerCase();
        const hit = p.suburb.toLowerCase().includes(q) || p.subKo.includes(suburbQuery.trim());
        if (!hit) return false;
      }
      if (propertyType !== "any" && p.type !== propertyType) return false;
      if (bedrooms !== "any" && p.beds < Number(bedrooms)) return false;
      if (bathrooms !== "any" && (p.baths ?? 0) < Number(bathrooms)) return false;
      if (parkingMin !== "any" && p.parking < Number(parkingMin)) return false;
      if (priceBucket !== "any") {
        const bucket = BUY_PRICE_BUCKETS.find((b) => b.id === priceBucket);
        if (bucket && !(p.priceValue >= bucket.min && p.priceValue < bucket.max)) return false;
      }
      return true;
    });

    if (sort === "price") {
      results = [...results].sort((a, b) => a.priceValue - b.priceValue);
    }
    return results;
  }, [suburbQuery, propertyType, priceBucket, bedrooms, bathrooms, parkingMin, sort]);

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      {/* Sticky search / filter bar */}
      <div
        className="sticky top-[62px] md:top-[68px] z-30"
        style={{ backgroundColor: "rgba(250,249,245,0.97)", backdropFilter: "blur(10px)", borderTop: `1px solid ${COLORS.stone}`, borderBottom: `1px solid ${COLORS.stone}` }}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4">
          <div className="flex flex-col lg:flex-row gap-2.5">
            <div className="flex-1 relative min-w-[160px]">
              <MapPin size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: COLORS.stone }} />
              <input
                type="text"
                value={suburbQuery}
                onChange={(e) => setSuburbQuery(e.target.value)}
                placeholder={t("지역 입력", "Suburb")}
                className="w-full pl-9 pr-3 py-2.5 text-[13px] outline-none"
                style={SELECT_STYLE(body)}
              />
            </div>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="px-3 py-2.5 text-[13px] outline-none appearance-none" style={SELECT_STYLE(body)}>
              <option value="any">{t("매물 유형", "Property Type")}</option>
              <option value="House">{t("주택", "House")}</option>
              <option value="Apartment">{t("아파트", "Apartment")}</option>
              <option value="Townhouse">{t("타운하우스", "Townhouse")}</option>
            </select>
            <select value={priceBucket} onChange={(e) => setPriceBucket(e.target.value)} className="px-3 py-2.5 text-[13px] outline-none appearance-none" style={SELECT_STYLE(body)}>
              <option value="any">{t("가격", "Price")}</option>
              {BUY_PRICE_BUCKETS.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="px-3 py-2.5 text-[13px] outline-none appearance-none" style={SELECT_STYLE(body)}>
              <option value="any">{t("침실", "Bedrooms")}</option>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+</option>)}
            </select>
            <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="px-3 py-2.5 text-[13px] outline-none appearance-none" style={SELECT_STYLE(body)}>
              <option value="any">{t("욕실", "Bathrooms")}</option>
              {[1, 2, 3].map((n) => <option key={n} value={n}>{n}+</option>)}
            </select>
            <select value={parkingMin} onChange={(e) => setParkingMin(e.target.value)} className="px-3 py-2.5 text-[13px] outline-none appearance-none" style={SELECT_STYLE(body)}>
              <option value="any">{t("주차", "Parking")}</option>
              {[1, 2, 3].map((n) => <option key={n} value={n}>{n}+</option>)}
            </select>
            <button
              className="flex items-center justify-center gap-2 px-6 py-2.5 text-[13px] font-semibold transition-opacity hover:opacity-85"
              style={{ backgroundColor: COLORS.green, color: COLORS.ivory, fontFamily: body, letterSpacing: "0.03em" }}
            >
              <Search size={13} /> {t("검색", "Search")}
            </button>
          </div>

          <div className="flex items-center justify-between mt-3.5">
            <div className="text-[12px]" style={{ color: COLORS.dim, fontFamily: body }}>
              {t(`${filtered.length}개의 매물`, `${filtered.length} properties`)}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1" style={{ border: `1px solid ${COLORS.stone}` }}>
                <button
                  onClick={() => setView("list")}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] transition-colors"
                  style={{ backgroundColor: view === "list" ? COLORS.green : "transparent", color: view === "list" ? COLORS.ivory : COLORS.dim, fontFamily: body }}
                >
                  <ListIcon size={12} /> {t("목록", "List")}
                </button>
                <button
                  onClick={() => setView("map")}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] transition-colors"
                  style={{ backgroundColor: view === "map" ? COLORS.green : "transparent", color: view === "map" ? COLORS.ivory : COLORS.dim, fontFamily: body }}
                >
                  <MapIcon size={12} /> {t("지도", "Map")}
                </button>
              </div>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-2.5 py-1.5 text-[12px] outline-none appearance-none" style={SELECT_STYLE(body)}>
                <option value="newest">{t("최신순", "Newest")}</option>
                <option value="price">{t("가격순", "Price")}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <div className={view === "map" ? "grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10" : ""}>
          <div>
            {filtered.length === 0 ? (
              <p className="text-center py-16 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
                {t("조건에 맞는 매물이 없습니다. 필터를 조정해보세요.", "No properties match your filters. Try adjusting your search.")}
              </p>
            ) : (
              <div className={`grid grid-cols-1 ${view === "map" ? "sm:grid-cols-1" : "md:grid-cols-2"} gap-x-10 gap-y-16`}>
                {filtered.map((listing, i) => (
                  <Reveal key={listing.id} delay={(i % 4) * 60}>
                    <Link to={`/property/${listing.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                      <BuyListingCard listing={listing} t={t} font={body} />
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {view === "map" && (
            <div className="hidden lg:block sticky top-[168px] h-[520px]" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <MapIcon size={22} style={{ color: COLORS.dim }} />
                <p className="text-[12.5px] text-center px-8" style={{ color: COLORS.dim, fontFamily: body }}>
                  {t("지도 미리보기는 준비 중입니다.", "Map preview coming soon.")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
