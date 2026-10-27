import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/translations";
import { COLORS, getThemeFonts } from "../../lib/theme";
import { Button } from "./Button";

/** Shown on the Buy / Rent searches when no listings are published at all
 * (as opposed to a filter matching nothing): points people to a consultation
 * and to the new-development projects instead. */
export function NoListings({ kind }) {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);
  const label = kind === "rent" ? t("렌트", "rental") : t("매매", "for-sale");

  return (
    <div className="text-center py-16 md:py-20 max-w-[520px] mx-auto">
      <p className="text-[16px] font-semibold mb-3" style={{ color: COLORS.ink, fontFamily: body }}>
        {t(`현재 공개된 ${label} 매물이 없습니다`, `No ${label} listings are published right now`)}
      </p>
      <p className="text-[14px] leading-relaxed mb-8" style={{ color: COLORS.dim, fontFamily: body }}>
        {t(
          "원하시는 지역과 예산, 조건을 알려주시면 시드니 복덕방이 맞는 매물을 찾아 한국어로 안내해 드립니다.",
          "Tell us the area, budget and features you're after and we'll find matching properties and walk you through them."
        )}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="fill-green" font={body} href="/contact">
          {t("매물 상담 요청", "Request a consultation")} <ArrowRight size={14} />
        </Button>
        <Button variant="outline-dark" font={body} href="/new-developments">
          {t("신규 분양 보기", "View new developments")}
        </Button>
      </div>
    </div>
  );
}
