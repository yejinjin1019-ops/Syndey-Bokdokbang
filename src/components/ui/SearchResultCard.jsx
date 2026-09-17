import { ArrowRight, Bed, Bath, Car } from "lucide-react";
import { COLORS } from "../../lib/theme";
import { ViewIndicator } from "./ViewIndicator";

/** Large editorial listing card shared by the /properties Find a Property
 * results — normalises BUY_LISTINGS / RENT_LISTINGS / PROPERTIES into one
 * Photo · Suburb · Address · Price · Beds · Baths · Parking layout. */
export function SearchResultCard({ listing, category, t, font }) {
  const { suburb, subKo, address, beds, baths, parking, img } = listing;
  const isRent = category === "rent";
  const price = isRent ? listing.rentValue : listing.priceValue;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-5" style={{ aspectRatio: "4/5", backgroundColor: COLORS.stone }}>
        <img
          src={img}
          alt={address}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <ViewIndicator font={font} />
      </div>

      <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: font }}>
        {t(subKo, suburb)}
      </div>
      <h3 className="text-[16px] md:text-[18px] mb-3 leading-snug" style={{ fontFamily: font, color: COLORS.ink, fontWeight: 700 }}>
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
        <div className="text-[16px] md:text-[17px] font-bold whitespace-nowrap" style={{ fontFamily: font, color: COLORS.green }}>
          ${price.toLocaleString()}
          {isRent && <span className="text-[11px] font-normal" style={{ color: COLORS.dim }}>/{t("주", "wk")}</span>}
        </div>
      </div>

      <div
        className="flex items-center gap-1.5 text-[12px] font-medium pt-3.5"
        style={{ color: COLORS.green, fontFamily: font, borderTop: `1px solid ${COLORS.stone}` }}
      >
        <span className="border-b border-transparent group-hover:border-current transition-colors">{t("매물 보기", "View Property")}</span> <ArrowRight size={13} />
      </div>
    </div>
  );
}
