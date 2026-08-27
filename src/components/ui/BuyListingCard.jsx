import { ArrowRight, Bed, Bath, Car } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";

/** Large editorial listing card for the BUY page — architectural photography,
 * generous whitespace, restrained Auction / Open for Inspection labels. */
export function BuyListingCard({ listing, t, font }) {
  const { suburb, subKo, address, priceValue, contactAgent, auction, auctionDateKo, auctionDateEn, inspection, beds, baths, parking, img } = listing;

  const priceDisplay = auction
    ? t("경매", "Auction")
    : contactAgent
    ? t("가격 문의", "Contact Agent")
    : `$${priceValue.toLocaleString()}`;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
        <img
          src={img}
          alt={address}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {auction && (
            <span
              className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
              style={{ backgroundColor: COLORS.green, color: COLORS.ivory, fontFamily: font }}
            >
              {t("경매", "Auction")}
            </span>
          )}
          {inspection?.status === "open" && (
            <span
              className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
              style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: font }}
            >
              {t("공개 오픈 하우스", "Open for Inspection")}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: font }}>
            {t(subKo, suburb)}
          </div>
          <h3 className="text-[17px] md:text-[19px] leading-snug" style={{ fontFamily: font, color: COLORS.ink, fontWeight: 500 }}>
            {address}
          </h3>
        </div>
        <div className="text-[17px] md:text-[19px] font-medium whitespace-nowrap" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green }}>
          {priceDisplay}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-3.5">
        <span className="flex items-center gap-1.5 text-[12.5px]" style={{ color: COLORS.dim, fontFamily: font }}>
          <Bed size={14} /> {beds}
        </span>
        <span className="flex items-center gap-1.5 text-[12.5px]" style={{ color: COLORS.dim, fontFamily: font }}>
          <Bath size={14} /> {baths ?? "-"}
        </span>
        <span className="flex items-center gap-1.5 text-[12.5px]" style={{ color: COLORS.dim, fontFamily: font }}>
          <Car size={14} /> {parking}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 pt-3.5 text-[12px]" style={{ borderTop: `1px solid ${COLORS.stone}`, color: COLORS.dim, fontFamily: font }}>
        <span>
          {auction
            ? t(`경매 ${auctionDateKo}`, `Auction ${auctionDateEn}`)
            : inspection?.status === "open"
            ? t(`다음 오픈: ${inspection.nextKo}`, `Next inspection: ${inspection.nextEn}`)
            : t("예약 방문 가능", "Inspection by appointment")}
        </span>
        <span className="flex items-center gap-1.5 font-medium whitespace-nowrap" style={{ color: COLORS.green }}>
          {t("매물 보기", "View Property")} <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
}
