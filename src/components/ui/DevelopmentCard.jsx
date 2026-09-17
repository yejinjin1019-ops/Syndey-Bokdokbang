import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";
import { ViewIndicator } from "./ViewIndicator";

function Stat({ label, value, body }) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.14em] uppercase mb-1.5 font-semibold" style={{ color: COLORS.dim, fontFamily: body }}>
        {label}
      </div>
      <div className="text-[14px] font-bold" style={{ fontFamily: body, color: COLORS.ink }}>
        {value}
      </div>
    </div>
  );
}

/** Project-led card for the New Developments grid — deliberately distinct
 * from BuyListingCard / RentListingCard (no bed/bath/car row, no single
 * address) so new-development projects never read as ordinary resale
 * listings. Developer attribution stays visible on the image and in the
 * stat grid. */
export function DevelopmentCard({ dev, t, body }) {
  const bedroomRange = dev.bedsMin === dev.bedsMax ? `${dev.bedsMin}` : `${dev.bedsMin}–${dev.bedsMax}`;
  const completionStat = dev.stats.find((s) => s.labelEn === "Completion");

  return (
    <Link to={`/new-developments/${dev.id}`} className="group block" style={{ textDecoration: "none" }}>
      <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "16/11", backgroundColor: COLORS.stone }}>
        <img
          src={dev.img}
          alt={dev.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute bottom-4 right-4">
          <span
            className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1 font-semibold"
            style={{ backgroundColor: "rgba(35,108,27,0.9)", color: COLORS.warm, fontFamily: body }}
          >
            {dev.developer}
          </span>
        </div>
        <ViewIndicator font={body} />
      </div>

      <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5 font-semibold" style={{ color: COLORS.dim, fontFamily: body }}>
        {t(dev.subKo, dev.suburb)}
      </div>
      <h3 className="text-[23px] md:text-[26px] mb-5 italic font-semibold" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.ink }}>
        {dev.name}
      </h3>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5 pb-5" style={{ borderBottom: `1px solid ${COLORS.stone}` }}>
        <Stat label={t("시작가", "Starting Price")} value={`$${dev.startingPrice.toLocaleString()}`} body={body} />
        <Stat label={t("침실 구성", "Bedroom Range")} value={bedroomRange} body={body} />
        <Stat label={t(completionStat.labelKo, completionStat.labelEn)} value={completionStat.value} body={body} />
        <Stat label={t("분양 현황", "Availability")} value={t(dev.statusKo, dev.statusEn)} body={body} />
      </div>

      <div className="flex items-center justify-between text-[11.5px]" style={{ color: COLORS.dim, fontFamily: body }}>
        <span>{t("업데이트", "Updated")} {dev.lastUpdated}</span>
        <span className="flex items-center gap-1.5 font-semibold whitespace-nowrap" style={{ color: COLORS.green }}>
          <span className="border-b border-transparent group-hover:border-current transition-colors">{t("프로젝트 보기", "View Project")}</span> <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
