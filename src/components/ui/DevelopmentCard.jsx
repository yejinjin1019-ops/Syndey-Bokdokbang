import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COLORS, FONT_EN_DISPLAY } from "../../lib/theme";

function Stat({ label, value, display, body }) {
  return (
    <div>
      <div className="text-[9px] tracking-[0.14em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: body }}>
        {label}
      </div>
      <div className="text-[14px] font-medium" style={{ fontFamily: display, color: COLORS.ink }}>
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
export function DevelopmentCard({ dev, t, display, body }) {
  const bedroomRange = dev.bedsMin === dev.bedsMax ? `${dev.bedsMin}` : `${dev.bedsMin}–${dev.bedsMax}`;

  return (
    <Link to={`/new-developments/${dev.id}`} className="group block" style={{ textDecoration: "none" }}>
      <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "16/11", backgroundColor: COLORS.stone }}>
        <img
          src={dev.img}
          alt={dev.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
            style={{ backgroundColor: COLORS.yellow, color: COLORS.ink, fontFamily: body }}
          >
            {t(dev.statusKo, dev.statusEn)}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span
            className="text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1"
            style={{ backgroundColor: "rgba(23,61,50,0.82)", color: COLORS.ivory, fontFamily: body }}
          >
            {dev.developer}
          </span>
        </div>
      </div>

      <div className="text-[9.5px] tracking-[0.16em] uppercase mb-1.5" style={{ color: COLORS.dim, fontFamily: body }}>
        {t(dev.subKo, dev.suburb)}
      </div>
      <h3 className="text-[21px] md:text-[23px] mb-5 italic" style={{ fontFamily: FONT_EN_DISPLAY, color: COLORS.ink }}>
        {dev.name}
      </h3>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5 pb-5" style={{ borderBottom: `1px solid ${COLORS.stone}` }}>
        <Stat label={t("시작가", "Starting Price")} value={`$${dev.startingPrice.toLocaleString()}`} display={display} body={body} />
        <Stat label={t("침실 구성", "Bedroom Range")} value={bedroomRange} display={display} body={body} />
        <Stat label={t("완공 예정", "Est. Completion")} value={dev.completionLabel} display={display} body={body} />
        <Stat label={t("분양 현황", "Availability")} value={t(dev.statusKo, dev.statusEn)} display={display} body={body} />
      </div>

      <div className="flex items-center justify-between text-[11.5px]" style={{ color: COLORS.dim, fontFamily: body }}>
        <span>{t("업데이트", "Updated")} {dev.lastUpdated}</span>
        <span className="flex items-center gap-1.5 font-medium whitespace-nowrap" style={{ color: COLORS.green }}>
          {t("프로젝트 보기", "View Project")} <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
