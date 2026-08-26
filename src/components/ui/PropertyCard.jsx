import { ArrowRight, Bed, Bath, Car } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";

/** Editorial listing card for Find a Property results (PRD §5.4). */
export function PropertyCard({ property, t, font }) {
  const {
    project, suburb, subKo, address, priceValue, beds, baths, parking, img,
  } = property;

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-stone-300 mb-4" style={{ aspectRatio: "4/3" }}>
        <img
          src={img}
          alt={`${project} — ${address}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
            style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: font }}
          >
            {t("신규개발", "New Development")}
          </span>
        </div>
      </div>

      <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: font }}>
        {t(subKo, suburb)}
      </div>
      <h3 className="text-[15px] mb-3 leading-snug" style={{ fontFamily: font, color: COLORS.ink, fontWeight: 500 }}>
        {address}
      </h3>

      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[12px]" style={{ color: COLORS.dim, fontFamily: font }}>
            <Bed size={13} /> {beds}
          </span>
          <span className="flex items-center gap-1.5 text-[12px]" style={{ color: COLORS.dim, fontFamily: font }}>
            <Bath size={13} /> {baths ?? "-"}
          </span>
          <span className="flex items-center gap-1.5 text-[12px]" style={{ color: COLORS.dim, fontFamily: font }}>
            <Car size={13} /> {parking}
          </span>
        </div>
        <div className="text-[16px] font-medium" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.green }}>
          ${priceValue.toLocaleString()}
        </div>
      </div>

      <div
        className="flex items-center gap-1.5 text-[12.5px] font-medium pt-3.5"
        style={{ color: COLORS.green, fontFamily: font, borderTop: `1px solid ${COLORS.stone}` }}
      >
        {t("매물 보기", "View Property")} <ArrowRight size={13} />
      </div>
    </div>
  );
}
