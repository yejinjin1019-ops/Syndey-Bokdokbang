import { ArrowRight, Bed, Bath, Car } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";

const CATEGORY_LABEL = {
  buy: { ko: "매매", en: "Buy" },
  rent: { ko: "임대", en: "Rent" },
  new: { ko: "신규개발", en: "New Development" },
};

/** Large editorial listing card shared by the /properties Find a Property
 * results — normalises BUY_LISTINGS / RENT_LISTINGS / PROPERTIES into one
 * Photo · Suburb · Address · Price · Beds · Baths · Parking layout. */
export function SearchResultCard({ listing, category, t, font }) {
  const { suburb, subKo, address, beds, baths, parking, img } = listing;
  const isRent = category === "rent";
  const price = isRent ? listing.rentValue : listing.priceValue;
  const label = CATEGORY_LABEL[category];

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
        <img
          src={img}
          alt={address}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
            style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: font }}
          >
            {t(label.ko, label.en)}
          </span>
        </div>
      </div>

      <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: font }}>
        {t(subKo, suburb)}
      </div>
      <h3 className="text-[16px] md:text-[18px] mb-3 leading-snug" style={{ fontFamily: font, color: COLORS.ink, fontWeight: 500 }}>
        {address}
      </h3>

      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-4">
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
        <div className="text-[16px] md:text-[17px] font-medium whitespace-nowrap" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green }}>
          ${price.toLocaleString()}
          {isRent && <span className="text-[11px] font-normal" style={{ color: COLORS.dim }}>/{t("주", "wk")}</span>}
        </div>
      </div>

      <div
        className="flex items-center gap-1.5 text-[12px] font-medium pt-3.5"
        style={{ color: COLORS.green, fontFamily: font, borderTop: `1px solid ${COLORS.stone}` }}
      >
        {t("매물 보기", "View Property")} <ArrowRight size={13} />
      </div>
    </div>
  );
}
