import { Bed, Bath, Car } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";

/** Compact, fast-to-scan listing card for the RENT page — practical over
 * ornamental, but keeps the same editorial photography and quiet labels as BUY. */
export function RentListingCard({ listing, t, font }) {
  const { suburb, subKo, address, rentValue, availableKo, availableEn, inspection, beds, baths, parking, img } = listing;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden mb-4" style={{ aspectRatio: "4/3", backgroundColor: COLORS.stone }}>
        <img
          src={img}
          alt={address}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {inspection?.status === "open" && (
          <div className="absolute top-4 left-4">
            <span
              className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
              style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: font }}
            >
              {t("공개 오픈 하우스", "Open for Inspection")}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: font }}>
            {t(subKo, suburb)}
          </div>
          <h3 className="text-[16px] md:text-[18px] leading-snug" style={{ fontFamily: font, color: COLORS.ink, fontWeight: 500 }}>
            {address}
          </h3>
        </div>
        <div className="text-[16px] md:text-[18px] font-medium whitespace-nowrap" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green }}>
          ${rentValue}<span className="text-[12px] font-normal" style={{ color: COLORS.dim }}>/{t("주", "wk")}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-3">
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

      <div className="pt-3 flex items-center justify-between text-[11.5px]" style={{ borderTop: `1px solid ${COLORS.stone}`, color: COLORS.dim, fontFamily: font }}>
        <span>{t(availableKo, availableEn)}</span>
        {inspection?.status === "open" ? (
          <span>{t(inspection.nextKo, inspection.nextEn)}</span>
        ) : (
          <span>{t("예약 방문 가능", "By appointment")}</span>
        )}
      </div>
    </div>
  );
}
