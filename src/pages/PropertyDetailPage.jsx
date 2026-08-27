import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bed, Bath, Car } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { COLORS, getThemeFonts, FONT_EN_DISPLAY } from "../lib/theme";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button } from "../components/ui/Button";
import { BUY_LISTINGS } from "../data/buyListings";
import { RENT_LISTINGS } from "../data/rentListings";
import { GUIDES } from "../data/guides";

function findListing(id) {
  const buy = BUY_LISTINGS.find((p) => p.id === id);
  if (buy) return { listing: buy, kind: "buy" };
  const rent = RENT_LISTINGS.find((p) => p.id === id);
  if (rent) return { listing: rent, kind: "rent" };
  return null;
}

function describeListing(listing, kind, t) {
  const typeLabel = t(listing.typeKo, listing.type);
  const suburbLabel = t(listing.subKo, listing.suburb);
  if (kind === "buy") {
    return t(
      `${suburbKoPhrase(listing, t)} 위치한 ${listing.beds}침실 ${typeLabel}. 침실 ${listing.beds}개, 욕실 ${listing.baths ?? "-"}개, 주차 ${listing.parking}대 규모로, 시드니 복덕방이 직접 확인한 매물입니다.`,
      `A ${listing.beds}-bedroom ${typeLabel.toLowerCase()} in ${suburbLabel}, with ${listing.beds} bedrooms, ${listing.baths ?? "-"} bathrooms, and ${listing.parking} parking spaces — inspected and vetted by Sydney Bokdokbang.`
    );
  }
  return t(
    `${suburbKoPhrase(listing, t)} 위치한 ${listing.beds}침실 ${typeLabel} 임대 매물. 침실 ${listing.beds}개, 욕실 ${listing.baths ?? "-"}개, 주차 ${listing.parking}대 규모입니다.`,
    `A ${listing.beds}-bedroom ${typeLabel.toLowerCase()} for rent in ${suburbLabel}, with ${listing.beds} bedrooms, ${listing.baths ?? "-"} bathrooms, and ${listing.parking} parking spaces.`
  );
}

function suburbKoPhrase(listing) {
  return `${listing.subKo}에`;
}

export function PropertyDetailPage() {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const { display, body } = getThemeFonts(lang);
  const found = findListing(id);

  if (!found) {
    return (
      <section style={{ backgroundColor: COLORS.warm }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-40 pb-24 text-center">
          <h1 className="text-[22px] mb-4" style={{ fontFamily: display, color: COLORS.ink }}>
            {t("매물을 찾을 수 없습니다.", "Property not found.")}
          </h1>
          <Link to="/buy" style={{ color: COLORS.green, fontFamily: body }}>
            {t("매매 매물로 돌아가기", "Back to Buy listings")}
          </Link>
        </div>
      </section>
    );
  }

  const { listing, kind } = found;
  const backTo = kind === "buy" ? "/buy" : "/rent";
  const guideSlug = kind === "buy" ? "buying-process-guide" : "renting-process-guide";
  const guide = GUIDES.find((g) => g.slug === guideSlug);
  const priceDisplay = kind === "buy"
    ? (listing.auction ? t("경매", "Auction") : `$${listing.priceValue.toLocaleString()}`)
    : `$${listing.rentValue}${t("/주", "/wk")}`;

  return (
    <section style={{ backgroundColor: COLORS.warm }}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <Reveal>
          <Link
            to={backTo}
            className="inline-flex items-center gap-1.5 text-[12.5px] mb-8"
            style={{ color: COLORS.dim, fontFamily: body, textDecoration: "none" }}
          >
            <ArrowLeft size={13} /> {t(kind === "buy" ? "매매 매물로 돌아가기" : "임대 매물로 돌아가기", kind === "buy" ? "Back to Buy listings" : "Back to Rent listings")}
          </Link>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          <div>
            <Reveal>
              <div className="overflow-hidden mb-8" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
                <img src={listing.img} alt={listing.address} className="w-full h-full object-cover" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mb-2">
                <SectionLabel font={body}>{t(listing.subKo, listing.suburb)}</SectionLabel>
              </div>
              <h1 className="font-medium mb-5 mt-4" style={{ fontFamily: display, color: COLORS.ink, fontSize: "clamp(24px,3vw,38px)", lineHeight: 1.35 }}>
                {listing.address}
              </h1>
              <div className="flex items-center gap-6 mb-8 pb-8" style={{ borderBottom: `1px solid ${COLORS.stone}` }}>
                <span className="flex items-center gap-2 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
                  <Bed size={16} /> {listing.beds} {t("침실", "Beds")}
                </span>
                <span className="flex items-center gap-2 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
                  <Bath size={16} /> {listing.baths ?? "-"} {t("욕실", "Baths")}
                </span>
                <span className="flex items-center gap-2 text-[14px]" style={{ color: COLORS.dim, fontFamily: body }}>
                  <Car size={16} /> {listing.parking} {t("주차", "Parking")}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed mb-10" style={{ color: COLORS.ink, fontFamily: body, maxWidth: "560px" }}>
                {describeListing(listing, kind, t)}
              </p>

              {guide && (
                <div className="p-6 mb-10" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
                  <div className="text-[11px] tracking-wide uppercase mb-2" style={{ color: COLORS.dim, fontFamily: body }}>
                    {t("관련 가이드", "Related Guide")}
                  </div>
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium"
                    style={{ color: COLORS.green, fontFamily: body, textDecoration: "none" }}
                  >
                    {t(guide.titleKo, guide.titleEn)} <ArrowRight size={13} />
                  </Link>
                </div>
              )}
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="lg:sticky lg:top-[100px] p-7 md:p-8" style={{ backgroundColor: COLORS.ivory, border: `1px solid ${COLORS.stone}` }}>
              <div className="text-[22px] font-medium mb-1" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green }}>
                {priceDisplay}
              </div>
              <div className="text-[12.5px] mb-7" style={{ color: COLORS.dim, fontFamily: body }}>
                {kind === "buy"
                  ? (listing.auction
                    ? t(`경매 ${listing.auctionDateKo}`, `Auction ${listing.auctionDateEn}`)
                    : listing.inspection?.status === "open"
                      ? t(`다음 오픈: ${listing.inspection.nextKo}`, `Next inspection: ${listing.inspection.nextEn}`)
                      : t("예약 방문 가능", "Inspection by appointment"))
                  : t(listing.availableKo, listing.availableEn)}
              </div>
              <Button variant="fill-green" href="/contact" font={body} className="w-full mb-3">
                {t("이 매물 문의하기", "Enquire About This Property")}
              </Button>
              <Button variant="outline-dark" href="/appraisal" font={body} className="w-full">
                {t("무료 감정평가 받기", "Get a Free Appraisal")}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
