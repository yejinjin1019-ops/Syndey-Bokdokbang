// Individual service detail pages (/services/:slug), for the 4 services that
// don't need a bespoke layout — Property Management has its own hub page
// (src/pages/services/PropertyManagementPage.jsx) since it fans out into
// Tenant Application / Maintenance Request / Landlord Portal.
export const SERVICE_DETAILS = [
  {
    slug: "property-advisory",
    labelKo: "복덕 부동산 어드바이저리", labelEn: "Bokdok Property Advisory",
    titleKo: "숫자가 아닌, 상황에 맞는 조언.", titleEn: "Advice fit to your situation, not just the numbers.",
    descKo: "매물 수보다 적합도를 우선합니다. 목표, 예산, 라이프스타일을 함께 검토하며 시드니 시장을 있는 그대로 설명해드립니다.",
    descEn: "We prioritise fit over volume. We review your goals, budget, and lifestyle together, and explain the Sydney market exactly as it is.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=1000&fit=crop&auto=format",
    whatsIncludedKo: ["목표·예산 상담", "시장 분석 및 지역 비교", "매물 큐레이션", "협상 및 계약 지원"],
    whatsIncludedEn: ["Goals & budget consultation", "Market analysis and suburb comparison", "Curated property shortlisting", "Negotiation and contract support"],
  },
  {
    slug: "settlement-care",
    labelKo: "복덕 정착 케어", labelEn: "Bokdok Settlement Care",
    titleKo: "계약 이후에도 끝나지 않는 지원.", titleEn: "Support that doesn't end at the contract.",
    descKo: "잔금 처리, 법무 서류, 등기 이전까지 — 복잡한 정착 과정의 매 단계를 대신 챙기고 명확하게 설명해드립니다.",
    descEn: "Settlement funds, legal paperwork, title transfer — we manage every stage of the process and explain it clearly along the way.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=1000&fit=crop&auto=format",
    whatsIncludedKo: ["잔금 및 법무 서류 조율", "등기 이전 관리", "정산 일정 안내", "정착 체크리스트 제공"],
    whatsIncludedEn: ["Settlement funds & legal paperwork coordination", "Title transfer management", "Settlement timeline guidance", "A personal settlement checklist"],
  },
  {
    slug: "leasing-care",
    labelKo: "복덕 임대 케어", labelEn: "Bokdok Leasing Care",
    titleKo: "임대인과 세입자, 모두를 위한 관리.", titleEn: "Management built for landlords and tenants alike.",
    descKo: "세입자 심사부터 정기 점검, 임대료 관리까지. 투자 부동산이 안정적으로 운영되도록 지속적으로 관리합니다.",
    descEn: "Tenant screening, routine inspections, rent management. We keep your investment property running smoothly, month after month.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&h=1000&fit=crop&auto=format",
    whatsIncludedKo: ["세입자 심사 및 매칭", "정기 점검 및 보고", "임대료 관리", "임대차 계약 갱신 지원"],
    whatsIncludedEn: ["Tenant screening & matching", "Routine inspections & reporting", "Rent collection management", "Lease renewal support"],
  },
  {
    slug: "move-in-care",
    labelKo: "복덕 이사 케어", labelEn: "Bokdok Move-In Care",
    titleKo: "새 집에서의 첫 발걸음, 함께합니다.", titleEn: "Your first steps in your new home, supported.",
    descKo: "인터넷 연결, 유틸리티 설정, 지역 안내까지 — 이사 후 정착의 모든 순간에 함께합니다.",
    descEn: "Internet, utilities, local orientation — we're with you through every moment of settling into a new home.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=1000&fit=crop&auto=format",
    whatsIncludedKo: ["인터넷·유틸리티 설정 지원", "동네 오리엔테이션", "학교·병원 등 생활 정보 안내", "이사 업체 연결"],
    whatsIncludedEn: ["Internet & utilities setup support", "Neighbourhood orientation", "Local schools, healthcare & essentials guidance", "Removalist referral"],
  },
];
