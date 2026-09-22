import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/translations";
import { getThemeFonts } from "../lib/theme";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  const { lang, t } = useLanguage();
  const { body } = getThemeFonts(lang);

  return (
    <PageHero
      label="404"
      titleKo={"찾으시는 페이지가 없습니다"}
      titleEn={"This page doesn't exist"}
      descKo={"링크가 잘못되었거나 페이지가 이동되었을 수 있어요. 아래에서 원하시는 곳으로 이동해보세요."}
      descEn={"The link may be broken or the page may have moved. Try one of the links below instead."}
    >
      <div className="flex flex-col sm:flex-row gap-3 mt-9">
        <Button variant="fill-green" href="/" font={body}>
          {t("홈으로 돌아가기", "Back to Home")} <ArrowRight size={14} />
        </Button>
        <Button variant="outline-dark" href="/contact" font={body}>
          {t("문의하기", "Contact Us")}
        </Button>
      </div>
    </PageHero>
  );
}
