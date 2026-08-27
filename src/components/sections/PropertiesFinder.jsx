import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Reveal } from "../ui/Reveal";
import { SectionLabel } from "../ui/SectionLabel";
import { SearchResultCard } from "../ui/SearchResultCard";
import { BUY_LISTINGS, BUY_PRICE_BUCKETS } from "../../data/buyListings";
import { RENT_LISTINGS, RENT_PRICE_BUCKETS } from "../../data/rentListings";
import { PROPERTIES, SALE_PRICE_BUCKETS } from "../../data/properties";

const TABS = [
  { id: "buy", ko: "매매", en: "Buy" },
  { id: "rent", ko: "임대", en: "Rent" },
  { id: "new", ko: "신규개발", en: "New Developments" },
];

// Each tab pulls from its own real dataset (resale, rental, new-development)
// and is normalised by SearchResultCard into one consistent listing layout.
const SOURCES = {
  buy: { listings: BUY_LISTINGS, buckets: BUY_PRICE_BUCKETS, priceKey: "priceValue", to: (l) => `/property/${l.id}` },
  rent: { listings: RENT_LISTINGS, buckets: RENT_PRICE_BUCKETS, priceKey: "rentValue", to: (l) => `/property/${l.id}` },
  new: { listings: PROPERTIES, buckets: SALE_PRICE_BUCKETS, priceKey: "priceValue", to: () => "/new-developments" },
};

export function PropertiesFinder() {
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);

  const [tab, setTab] = useState("buy");
  const [suburbQuery, setSuburbQuery] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [priceBucket, setPriceBucket] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const [searched, setSearched] = useState(false);
  const resultsRef = useRef(null);

  const source = SOURCES[tab];

  const filtered = useMemo(() => {
    return source.listings.filter((p) => {
      if (suburbQuery.trim()) {
        const q = suburbQuery.trim().toLowerCase();
        const hit = p.suburb.toLowerCase().includes(q) || p.subKo.includes(suburbQuery.trim());
        if (!hit) return false;
      }
      if (propertyType !== "any" && p.type !== propertyType) return false;
      if (bedrooms !== "any" && p.beds < Number(bedrooms)) return false;
      if (priceBucket !== "any") {
        const bucket = source.buckets.find((b) => b.id === priceBucket);
        const val = p[source.priceKey];
        if (bucket && !(val >= bucket.min && val < bucket.max)) return false;
      }
      return true;
    });
  }, [source, suburbQuery, propertyType, bedrooms, priceBucket]);

  const handleTab = (id) => {
    setTab(id);
    setPriceBucket("any");
    setSearched(false);
  };

  const handleSearch = () => {
    setSearched(true);
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section id="find-a-property" style={{ backgroundColor: COLORS.warm, borderTop: `1px solid ${COLORS.stone}`, borderBottom: `1px solid ${COLORS.stone}` }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">

        <Reveal>
          <div className="mb-7">
            <SectionLabel font={body}>{t("매물 찾기", "Find a Property")}</SectionLabel>
          </div>
          <h2 className="font-medium mb-10" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.01em" }}>
            {t("당신에게 맞는 집을 찾아드립니다", "Find Your Next Sydney Property")}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex gap-0 mb-5 border-b" style={{ borderColor: COLORS.stone }}>
            {TABS.map(({ id, ko, en }) => (
              <button
                key={id}
                onClick={() => handleTab(id)}
                className="px-5 py-3 text-[13px] transition-all duration-200 -mb-px"
                style={{
                  fontFamily: body,
                  color: tab === id ? COLORS.green : COLORS.dim,
                  borderBottom: tab === id ? `2px solid ${COLORS.green}` : "2px solid transparent",
                  fontWeight: tab === id ? 600 : 400,
                  letterSpacing: "0.015em",
                }}
              >
                {t(ko, en)}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="flex flex-col md:flex-row gap-2.5 mb-14">
            <div className="flex-1 relative">
              <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: COLORS.stone }} />
              <input
                type="text"
                value={suburbQuery}
                onChange={(e) => setSuburbQuery(e.target.value)}
                placeholder={t("지역 입력 (예: 채스우드)", "Enter suburb or postcode")}
                className="w-full pl-10 pr-4 py-3.5 text-[13.5px] outline-none"
                style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, fontFamily: body, color: COLORS.ink }}
              />
            </div>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-4 py-3.5 text-[13.5px] outline-none appearance-none md:min-w-[150px]"
              style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, fontFamily: body, color: COLORS.dim }}
            >
              <option value="any">{t("매물 유형", "Property type")}</option>
              <option value="Apartment">{t("아파트", "Apartment")}</option>
              <option value="House">{t("주택", "House")}</option>
              <option value="Townhouse">{t("타운하우스", "Townhouse")}</option>
            </select>
            <select
              value={priceBucket}
              onChange={(e) => setPriceBucket(e.target.value)}
              className="px-4 py-3.5 text-[13.5px] outline-none appearance-none md:min-w-[160px]"
              style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, fontFamily: body, color: COLORS.dim }}
            >
              <option value="any">{t("가격", "Price")}</option>
              {source.buckets.map((b) => (
                <option key={b.id} value={b.id}>{b.label}</option>
              ))}
            </select>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="px-4 py-3.5 text-[13.5px] outline-none appearance-none md:min-w-[130px]"
              style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}`, fontFamily: body, color: COLORS.dim }}
            >
              <option value="any">{t("침실 수", "Bedrooms")}</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 text-[13.5px] font-semibold transition-opacity hover:opacity-85"
              style={{ backgroundColor: COLORS.green, color: COLORS.ivory, fontFamily: body, letterSpacing: "0.04em" }}
            >
              <Search size={14} /> {t("검색", "Search")}
            </button>
          </div>
        </Reveal>

        <div ref={resultsRef} style={{ scrollMarginTop: "90px" }}>
          {!searched ? (
            <p className="text-center py-16 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
              {t("조건을 선택하고 검색을 눌러 매물을 확인하세요.", "Set your filters and press Search to see matching properties.")}
            </p>
          ) : filtered.length === 0 ? (
            <p className="text-center py-16 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
              {t("조건에 맞는 매물이 없습니다. 필터를 조정해보세요.", "No properties match your filters. Try adjusting your search.")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((listing, i) => (
                <Reveal key={listing.id} delay={(i % 3) * 70}>
                  <Link to={source.to(listing)} style={{ textDecoration: "none", color: "inherit" }}>
                    <SearchResultCard listing={listing} category={tab} t={t} font={body} />
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
