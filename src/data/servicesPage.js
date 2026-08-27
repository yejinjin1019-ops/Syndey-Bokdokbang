// Services overview page data — journey steps, flagship services, network partners.

export const JOURNEY_STEPS = [
  { n: "01", titleKo: "상담", titleEn: "Consult", descKo: "첫 질문을 시작으로 상황과 목표를 함께 정리합니다.", descEn: "Your first questions, and a shared read on your goals." },
  { n: "02", titleKo: "매물", titleEn: "Property", descKo: "기준에 맞는 매물만 선별해 안내합니다.", descEn: "Only the properties that actually fit, curated and explained." },
  { n: "03", titleKo: "계약", titleEn: "Purchase", descKo: "협상부터 계약까지 전 과정을 함께합니다.", descEn: "Negotiation through to contract, every step accompanied." },
  { n: "04", titleKo: "정착", titleEn: "Settlement", descKo: "잔금부터 등기까지, 마무리를 꼼꼼히 챙깁니다.", descEn: "Settlement to title transfer, handled with care." },
  { n: "05", titleKo: "임대", titleEn: "Leasing", descKo: "임대 관리와 세입자 응대까지 이어집니다.", descEn: "Ongoing leasing management and tenant care." },
  { n: "06", titleKo: "이사", titleEn: "Moving", descKo: "새 집에서의 첫 걸음까지 함께 걷습니다.", descEn: "Your first steps in the new home, supported." },
];

export const FLAGSHIP_SERVICES = [
  {
    key: "advisory",
    labelKo: "복덕 부동산 어드바이저리", labelEn: "Bokdok Property Advisory",
    titleKo: "숫자가 아닌, 상황에 맞는 조언.", titleEn: "Advice fit to your situation, not just the numbers.",
    descKo: "매물 수보다 적합도를 우선합니다. 목표, 예산, 라이프스타일을 함께 검토하며 시드니 시장을 있는 그대로 설명해드립니다.",
    descEn: "We prioritise fit over volume. We review your goals, budget, and lifestyle together, and explain the Sydney market exactly as it is.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=700&fit=crop&auto=format",
    to: "/services/property-advisory",
  },
  {
    key: "property-management",
    labelKo: "복덕 부동산 임대관리", labelEn: "Bokdok Property Management",
    titleKo: "임차부터 유지보수까지, 한눈에.", titleEn: "Tenancy to maintenance, all in clear view.",
    descKo: "세입자 신청, 유지보수 요청, 임대인 리포트까지 — 부동산 임대관리의 모든 절차를 체계적으로 지원합니다.",
    descEn: "Tenant applications, maintenance requests, landlord reporting — the full property management workflow, organised and supported.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&h=700&fit=crop&auto=format",
    to: "/services/property-management",
  },
  {
    key: "settlement",
    labelKo: "복덕 정착 케어", labelEn: "Bokdok Settlement Care",
    titleKo: "계약 이후에도 끝나지 않는 지원.", titleEn: "Support that doesn't end at the contract.",
    descKo: "잔금 처리, 법무 서류, 등기 이전까지 — 복잡한 정착 과정의 매 단계를 대신 챙기고 명확하게 설명해드립니다.",
    descEn: "Settlement funds, legal paperwork, title transfer — we manage every stage of the process and explain it clearly along the way.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=700&fit=crop&auto=format",
    to: "/services/settlement-care",
  },
  {
    key: "leasing",
    labelKo: "복덕 임대 케어", labelEn: "Bokdok Leasing Care",
    titleKo: "임대인과 세입자, 모두를 위한 관리.", titleEn: "Management built for landlords and tenants alike.",
    descKo: "세입자 심사부터 정기 점검, 임대료 관리까지. 투자 부동산이 안정적으로 운영되도록 지속적으로 관리합니다.",
    descEn: "Tenant screening, routine inspections, rent management. We keep your investment property running smoothly, month after month.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&h=700&fit=crop&auto=format",
    to: "/services/leasing-care",
  },
  {
    key: "movein",
    labelKo: "복덕 이사 케어", labelEn: "Bokdok Move-In Care",
    titleKo: "새 집에서의 첫 발걸음, 함께합니다.", titleEn: "Your first steps in your new home, supported.",
    descKo: "인터넷 연결, 유틸리티 설정, 지역 안내까지 — 이사 후 정착의 모든 순간에 함께합니다.",
    descEn: "Internet, utilities, local orientation — we're with you through every moment of settling into a new home.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop&auto=format",
    to: "/services/move-in-care",
  },
];

export const NETWORK_PARTNERS = [
  { titleKo: "법무 / 컨베이언싱", titleEn: "Legal / Conveyancing", descKo: "계약 검토와 소유권 이전을 담당하는 신뢰할 수 있는 법무 파트너.", descEn: "Trusted partners handling contract review and title transfer." },
  { titleKo: "모기지", titleEn: "Mortgage", descKo: "상황에 맞는 대출 상품을 안내하는 모기지 브로커 네트워크.", descEn: "A mortgage broker network matched to your situation." },
  { titleKo: "건물 점검", titleEn: "Inspection", descKo: "건물 및 해충 점검을 수행하는 공인 점검 전문가.", descEn: "Licensed specialists for building and pest inspections." },
  { titleKo: "이사", titleEn: "Moving", descKo: "정착 시점에 맞춰 조율되는 이사 전문 업체.", descEn: "Removalists coordinated around your settlement date." },
];
