// New Developments / Projects data (PRD §5.5).
// DEVELOPMENTS backs both the /new-developments listing grid and the
// /new-developments/:id project detail page. FEATURED_DEVELOPMENT keeps the
// homepage "New Developments" spotlight section pointed at the lead project.
export const DEVELOPMENTS = [
  {
    id: "the-marigold",
    name: "The Marigold",
    suburb: "Macquarie Park", subKo: "맥쿼리 파크",
    developer: "Meriton",
    statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now",
    startingPrice: 795000,
    bedsMin: 1, bedsMax: 3,
    completionLabel: "Q3 2026", completionYear: 2026,
    lastUpdated: "22 Aug 2026",
    descKo: "맥쿼리 파크 코리더 중심부의 현대적 고층 아파트. 대학교, 지하철역, 의료 단지와 인접. 1침실 – 3침실 구성.",
    descEn: "Contemporary high-rise at the heart of the Macquarie Park corridor. Adjacent to university, metro station, and medical precinct. 1–3 bedrooms.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=960&h=720&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1400&h=1000&fit=crop&auto=format",
    ],
    stats: [
      { labelKo: "완공 예정", labelEn: "Completion", value: "Q3 2026" },
      { labelKo: "시작가", labelEn: "From", value: "$795,000" },
      { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
    ],
    unitMix: [
      { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$795,000" },
      { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,050,000" },
      { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,480,000" },
    ],
  },
  {
    id: "harbour-collective",
    name: "Harbour Collective",
    suburb: "Rhodes", subKo: "로즈",
    developer: "Boston Projects",
    statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now",
    startingPrice: 1020000,
    bedsMin: 1, bedsMax: 2,
    completionLabel: "Q1 2027", completionYear: 2027,
    lastUpdated: "25 Aug 2026",
    descKo: "파라마타강을 마주한 부티크 규모의 워터프론트 개발. 산책로, 카페, 페리 선착장까지 도보 거리.",
    descEn: "A boutique-scale waterfront development facing the Parramatta River. Walking distance to the promenade, cafes, and the ferry wharf.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=960&h=720&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=1000&fit=crop&auto=format",
    ],
    stats: [
      { labelKo: "완공 예정", labelEn: "Completion", value: "Q1 2027" },
      { labelKo: "시작가", labelEn: "From", value: "$1,020,000" },
      { labelKo: "유형", labelEn: "Type", value: "1B · 2B" },
    ],
    unitMix: [
      { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,020,000" },
      { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,390,000" },
    ],
  },
  {
    id: "castle-hill-green",
    name: "Castle Hill Green",
    suburb: "Castle Hill", subKo: "캐슬 힐",
    developer: "Urban Property Group",
    statusKo: "출시 예정", statusEn: "Coming Soon", availabilityId: "coming-soon",
    startingPrice: 920000,
    bedsMin: 2, bedsMax: 3,
    completionLabel: "Q4 2027", completionYear: 2027,
    lastUpdated: "14 Aug 2026",
    descKo: "메트로 노스웨스트 라인 초역세권에 위치한 저층 레지던스. 공원과 스쿨존에 인접해 가족 단위 실거주자에게 적합.",
    descEn: "A low-rise residence steps from the Metro North West Line. Close to parks and school catchments — well suited to owner-occupier families.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=960&h=720&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=1000&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&h=1000&fit=crop&auto=format",
    ],
    stats: [
      { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2027" },
      { labelKo: "시작가", labelEn: "From", value: "$920,000" },
      { labelKo: "유형", labelEn: "Type", value: "2B · 3B" },
    ],
    unitMix: [
      { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$920,000" },
      { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,180,000" },
    ],
  },
];

export const FEATURED_DEVELOPMENT = DEVELOPMENTS[0];

export const DEV_PRICE_BUCKETS = [
  { id: "0-800", min: 0, max: 800000, label: "$0 – $800K" },
  { id: "800-1000", min: 800000, max: 1000000, label: "$800K – $1M" },
  { id: "1000-1500", min: 1000000, max: 1500000, label: "$1M – $1.5M" },
  { id: "1500-plus", min: 1500000, max: Infinity, label: "$1.5M+" },
];

export const DEV_COMPLETION_OPTIONS = [
  { id: "2026", year: 2026, label: "2026" },
  { id: "2027", year: 2027, label: "2027" },
  { id: "2028", year: 2028, label: "2028+" },
];

export const DEV_AVAILABILITY_OPTIONS = [
  { id: "selling-now", labelKo: "분양 중", labelEn: "Selling Now" },
  { id: "coming-soon", labelKo: "출시 예정", labelEn: "Coming Soon" },
];
