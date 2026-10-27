// Per-page <title>/description for search engines, plus the list of URLs to
// prerender and put in the sitemap. Shared by the browser (PageMeta), the
// build-time prerender script and the sitemap script, so it must stay plain
// JS with no JSX or browser globals.
import { BUY_LISTINGS } from "../data/buyListings.js";
import { RENT_LISTINGS } from "../data/rentListings.js";
import { DEVELOPMENTS } from "../data/developments.js";
import { GUIDES } from "../data/guides.js";

export const SITE_URL = "https://www.sydneybokdokbang.com";
const BRAND = "시드니 복덕방";

const HOME = {
  title: "시드니 복덕방 | 시드니 한인 부동산 Sydney Bokdokbang",
  description:
    "시드니 복덕방(Sydney Bokdokbang)은 스트라스필드에 위치한 시드니 한인 부동산입니다. 매매·렌트·신규 분양·부동산 관리까지 한국어로 상담해 드립니다. Korean-speaking property advisory in Sydney.",
};

const STATIC_PAGES = {
  "/": HOME,
  "/properties": {
    title: "시드니 매물 찾기 – 매매·렌트·신규 분양",
    description: "시드니 매매, 렌트, 신규 분양 매물을 한곳에서 찾아보세요. 시드니 복덕방이 한인 고객의 조건에 맞는 매물을 한국어로 안내해 드립니다.",
  },
  "/buy": {
    title: "시드니 집 매매 – 주택·아파트 매물",
    description: "시드니에서 주택·아파트 구매를 계획 중이라면 시드니 복덕방에 한국어로 상담하세요. 스트라스필드 한인 부동산이 매물 탐색부터 협상, 계약, 세틀먼트까지 함께합니다.",
  },
  "/rent": {
    title: "시드니 렌트 – 아파트·주택 임대 매물",
    description: "시드니에서 렌트 집을 찾고 있다면 시드니 복덕방에 한국어로 상담하세요. 원하는 지역과 예산에 맞는 아파트·주택을 찾고 신청 절차까지 도와드립니다.",
  },
  "/new-developments": {
    title: "시드니 신규 분양 아파트 – 오프더플랜",
    description: `로즈, 채스우드, 콩코드 등 시드니 신규 분양(오프더플랜) 아파트 ${DEVELOPMENTS.length}곳의 시작가, 완공 예정, 분양 현황을 한국어로 비교해 보세요.`,
  },
  "/appraisal": {
    title: "무료 부동산 가격 감정",
    description: "보유한 시드니 부동산의 현재 시장 가치를 무료로 감정해 드립니다. 매각, 임대, 재융자를 계획하기 전에 시드니 복덕방에 문의하세요.",
  },
  "/services": {
    title: "부동산 서비스 – 자문·임대관리·정착 케어",
    description: "부동산 자문, 임대관리, 정착 케어, 임대 케어, 이사 케어까지. 시드니 복덕방은 상담부터 이사 후 정착까지 전 과정을 한국어로 지원합니다.",
  },
  "/services/property-advisory": {
    title: "시드니 부동산 자문",
    description: "매물 수보다 적합도를 우선합니다. 목표, 예산, 라이프스타일을 함께 검토하며 시드니 부동산 시장을 한국어로 있는 그대로 설명해 드립니다.",
  },
  "/services/property-management": {
    title: "시드니 부동산 임대관리 (Property Management)",
    description: "세입자 신청, 유지보수 요청, 임대인 리포트까지 시드니 부동산 임대관리의 모든 절차를 한국어로 체계적으로 지원합니다.",
  },
  "/services/property-management/tenant-application": {
    title: "세입자 임대 신청",
    description: "시드니 복덕방이 관리하는 임대 매물에 대한 세입자 신청 안내입니다.",
  },
  "/services/property-management/maintenance-request": {
    title: "유지보수 요청",
    description: "시드니 복덕방 관리 매물의 세입자를 위한 유지보수 요청 안내입니다.",
  },
  "/services/property-management/landlord-portal": {
    title: "임대인 포털",
    description: "시드니 복덕방에 관리를 맡긴 임대인을 위한 리포트와 안내입니다.",
  },
  "/services/settlement-care": {
    title: "정착 케어 – 세틀먼트·잔금·등기 지원",
    description: "잔금 처리, 법무 서류, 등기 이전까지 시드니 부동산 세틀먼트 과정의 매 단계를 한국어로 챙기고 명확하게 설명해 드립니다.",
  },
  "/services/leasing-care": {
    title: "임대 케어 – 투자 부동산 관리",
    description: "세입자 심사부터 정기 점검, 임대료 관리까지 시드니 투자 부동산이 안정적으로 운영되도록 지속적으로 관리합니다.",
  },
  "/services/move-in-care": {
    title: "이사 케어 – 이사 후 정착 지원",
    description: "인터넷 연결, 유틸리티 설정, 지역 안내까지 시드니에서 새 집으로 이사한 후 정착의 모든 순간에 함께합니다.",
  },
  "/about": {
    title: "회사 소개 – 스트라스필드 한인 부동산",
    description: "2021년부터 스트라스필드에서 시드니 한인 고객과 함께해 온 시드니 복덕방을 소개합니다. 팀, 사무실, 일하는 방식을 확인하세요.",
  },
  "/contact": {
    title: "상담 문의 – 연락처·오시는 길",
    description: "시드니 복덕방 상담 문의: 0492 058 159, Suite 101A, 27 Lyons Street, Strathfield NSW 2135. 월–금 오전 9:30–오후 5:30.",
  },
  "/guides": {
    title: "시드니 부동산 가이드 – 지역·정착·매매·렌트",
    description: "시드니 한인 밀집 지역 가이드, 정착 체크리스트, 매매·렌트 절차, 시장 리포트까지. 시드니 생활과 부동산에 필요한 정보를 한국어로 정리했습니다.",
  },
  "/legal/privacy-policy": { title: "개인정보처리방침", description: "시드니 복덕방 웹사이트의 개인정보처리방침입니다." },
  "/legal/terms": { title: "이용약관", description: "시드니 복덕방 웹사이트 이용약관입니다." },
  "/legal/disclaimer": { title: "면책 조항", description: "시드니 복덕방 웹사이트 면책 조항입니다." },
  "/legal/licence": { title: "라이선스 정보", description: "Bokdokbang Pty Ltd의 부동산 라이선스 및 사업자 정보입니다." },
};

// Pages that are utility forms rather than search landing pages: prerendered
// so direct links work, but left out of the sitemap.
const UNLISTED_PATHS = [
  "/services/property-management/tenant-application",
  "/services/property-management/maintenance-request",
  "/services/property-management/landlord-portal",
];

const aud = (n) => `$${n.toLocaleString("en-AU")}`;
const clip = (text, max = 155) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);

function dynamicMeta(path) {
  const [, section, id] = path.split("/");

  if (section === "property") {
    const buy = BUY_LISTINGS.find((p) => p.id === id);
    if (buy) {
      return {
        title: `${buy.subKo} ${buy.typeKo} 매매 – ${buy.address}`,
        description: `${buy.address}, ${buy.beds}침실 ${buy.baths}욕실 ${buy.typeKo} 매매 매물입니다. 인스펙션 일정과 상세 정보를 확인하고 시드니 복덕방에 한국어로 문의하세요.`,
      };
    }
    const rent = RENT_LISTINGS.find((p) => p.id === id);
    if (rent) {
      return {
        title: `${rent.subKo} ${rent.typeKo} 렌트 – 주 ${aud(rent.rentValue)}`,
        description: `${rent.address}, ${rent.beds}침실 ${rent.baths}욕실 ${rent.typeKo} 렌트 매물 (주 ${aud(rent.rentValue)}). ${rent.availableKo}. 시드니 복덕방에 한국어로 문의하세요.`,
      };
    }
  }

  if (section === "new-developments" && id) {
    const dev = DEVELOPMENTS.find((d) => d.id === id);
    if (dev) {
      return {
        title: `${dev.name} – ${dev.subKo} 신규 분양 (${aud(dev.startingPrice)}부터)`,
        description: clip(dev.descKo),
      };
    }
  }

  if (section === "guides" && id) {
    const guide = GUIDES.find((g) => g.slug === id);
    if (guide) return { title: guide.titleKo, description: clip(guide.excerptKo) };
  }

  return null;
}

export const NOT_FOUND_META = {
  title: `페이지를 찾을 수 없습니다 | ${BRAND}`,
  description: HOME.description,
};

/** Title + description for a pathname; `found` is false for paths with no
 * page (the 404). */
export function getPageMeta(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  const page = STATIC_PAGES[path] || dynamicMeta(path);
  if (!page) return { ...NOT_FOUND_META, path, found: false };
  const title = path === "/" ? page.title : `${page.title} | ${BRAND}`;
  return { title, description: page.description, path, found: true };
}

/** Every URL that should be prerendered at build time. */
export const PRERENDER_PATHS = [
  ...Object.keys(STATIC_PAGES),
  ...[...BUY_LISTINGS, ...RENT_LISTINGS].map((p) => `/property/${p.id}`),
  ...DEVELOPMENTS.map((d) => `/new-developments/${d.id}`),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
];

/** URLs listed in sitemap.xml. */
export const SITEMAP_PATHS = PRERENDER_PATHS.filter((p) => !UNLISTED_PATHS.includes(p));
