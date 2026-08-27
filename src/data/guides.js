// Secondary content: Area Guides, Korean Settlement Guides, Buying/Renting
// Guides, Market Reports. Kept out of the main header nav — surfaced via the
// homepage GuidesPreview section, the footer, and cross-links from relevant
// property/rent pages. Backs /guides (hub) and /guides/:slug (article).
export const GUIDE_CATEGORIES = [
  {
    id: "area-guides",
    labelKo: "지역 가이드", labelEn: "Area Guides",
    descKo: "한인 밀집 지역과 주요 스쿨존을 중심으로 시드니 지역을 소개합니다.",
    descEn: "An introduction to Sydney's suburbs, focused on Korean community hubs and school catchments.",
  },
  {
    id: "settlement-guides",
    labelKo: "한인 정착 가이드", labelEn: "Korean Settlement Guides",
    descKo: "비자, 은행 계좌, 학교 등록 등 시드니 정착에 필요한 실질적인 정보.",
    descEn: "Practical guidance on visas, bank accounts, school enrolment, and settling into Sydney.",
  },
  {
    id: "buying-renting-guides",
    labelKo: "매매/임대 가이드", labelEn: "Buying & Renting Guides",
    descKo: "매매와 임대 과정을 단계별로 안내하는 실용 가이드.",
    descEn: "Step-by-step practical guides to the buying and renting process.",
  },
  {
    id: "market-reports",
    labelKo: "시장 리포트", labelEn: "Market Reports",
    descKo: "시드니 부동산 시장 동향을 정기적으로 정리한 리포트.",
    descEn: "Regular reports on Sydney property market trends.",
  },
];

export const GUIDES = [
  {
    slug: "eastwood-area-guide",
    category: "area-guides",
    titleKo: "이스트우드 지역 가이드", titleEn: "Eastwood Area Guide",
    excerptKo: "시드니 최대 한인 밀집 지역 중 하나인 이스트우드를 소개합니다.",
    excerptEn: "An introduction to Eastwood, one of Sydney's largest Korean community hubs.",
    bodyKo: "이스트우드는 시드니 노스웨스트에 위치한 대표적인 한인 밀집 지역으로, 한식당과 한인 마트, 우수한 스쿨존이 밀집해 있습니다. 기차역을 중심으로 도보 생활권이 잘 형성되어 있어 실거주와 투자 모두에서 꾸준한 수요를 보이는 지역입니다.",
    bodyEn: "Eastwood, in Sydney's north-west, is one of the city's most established Korean community hubs — home to Korean restaurants, grocers, and well-regarded school catchments. Its train-station-centred, walkable layout keeps demand steady for both owner-occupiers and investors.",
  },
  {
    slug: "chatswood-area-guide",
    category: "area-guides",
    titleKo: "채스우드 지역 가이드", titleEn: "Chatswood Area Guide",
    excerptKo: "노스쇼어의 중심 상권, 채스우드를 소개합니다.",
    excerptEn: "A look at Chatswood, the commercial heart of the North Shore.",
    bodyKo: "채스우드는 노스쇼어의 상업 중심지로, 쇼핑센터와 다국적 식당가, 우수한 공립·사립 학교가 밀집해 있습니다. 시티까지 기차로 약 20분 거리이며, 아파트 위주의 매매·임대 매물이 활발히 거래됩니다.",
    bodyEn: "Chatswood is the North Shore's commercial hub, dense with shopping centres, multicultural dining, and highly regarded public and private schools. It's around 20 minutes from the CBD by train, with an active apartment-led sale and rental market.",
  },
  {
    slug: "visa-and-banking-checklist",
    category: "settlement-guides",
    titleKo: "정착 전 체크리스트: 비자·은행", titleEn: "Pre-Settlement Checklist: Visa & Banking",
    excerptKo: "시드니 정착 전 비자 서류와 은행 계좌 개설 시 준비할 사항.",
    excerptEn: "What to prepare on visas and bank accounts before you settle in Sydney.",
    bodyKo: "정착 전 준비해야 할 핵심 서류는 여권, 비자 확인서, 거주 예정 주소 증빙입니다. 은행 계좌는 대부분 은행에서 입국 전 온라인으로 사전 개설이 가능하며, 초기 정착금 이체 시 환율과 송금 수수료를 미리 비교해두는 것을 권장합니다.",
    bodyEn: "The key documents to prepare before settling are your passport, visa confirmation, and proof of your intended address. Most banks allow online pre-arrival account setup, and it's worth comparing exchange rates and transfer fees before moving initial settlement funds.",
  },
  {
    slug: "school-enrolment-guide",
    category: "settlement-guides",
    titleKo: "자녀 학교 등록 가이드", titleEn: "School Enrolment Guide",
    excerptKo: "공립학교 스쿨존 확인부터 등록 절차까지 안내합니다.",
    excerptEn: "From checking public school catchments to the enrolment process.",
    bodyKo: "NSW 공립학교는 거주지 기준 스쿨존이 정해져 있어, 주택 계약 전 스쿨존 확인이 중요합니다. 등록 시 거주 증빙(임대차 계약서 또는 매매 계약서), 여권, 예방접종 기록이 필요합니다.",
    bodyEn: "NSW public schools use residential catchments, so it's worth confirming the catchment before signing a lease or contract. Enrolment typically requires proof of residence (a lease or sale contract), a passport, and immunisation records.",
  },
  {
    slug: "buying-process-guide",
    category: "buying-renting-guides",
    titleKo: "시드니 매매 절차 가이드", titleEn: "The Sydney Buying Process, Step by Step",
    excerptKo: "매물 탐색부터 등기 이전까지, 매매 절차를 정리했습니다.",
    excerptEn: "A clear walkthrough of the buying process, from search to title transfer.",
    bodyKo: "시드니 주택 매매는 크게 매물 탐색 → 건물/해충 점검 → 계약 체결(사모임 또는 경매) → 계약금 납부 → 잔금 및 등기 이전 순으로 진행됩니다. 경매 매물의 경우 낙찰 즉시 구속력 있는 계약이 성립되므로 사전 금융 승인이 특히 중요합니다.",
    bodyEn: "Buying in Sydney generally follows: property search → building & pest inspection → exchange of contracts (private treaty or auction) → deposit → settlement and title transfer. For auction properties, the winning bid forms a binding contract immediately, so pre-approved finance matters especially.",
  },
  {
    slug: "renting-process-guide",
    category: "buying-renting-guides",
    titleKo: "한국어 임대 가이드", titleEn: "The Korean Rental Guide",
    excerptKo: "임대 지원부터 입주까지, 렌트 절차를 한국어로 안내합니다.",
    excerptEn: "A rental process walkthrough, from application to move-in.",
    bodyKo: "시드니에서 임대 매물을 지원할 때는 신분증, 소득 증빙, 이전 임대 이력을 준비해두면 심사가 빨라집니다. 승인 후 본드(보증금)는 통상 4주치 임대료이며, NSW 정부의 본드 관리 기관(Rental Bond Board)에 예치됩니다.",
    bodyEn: "When applying to rent in Sydney, having ID, proof of income, and rental history ready speeds up approval. Once approved, the bond is typically 4 weeks' rent, lodged with the NSW Rental Bond Board.",
  },
  {
    slug: "2026-q1-market-report",
    category: "market-reports",
    titleKo: "2026년 1분기 시드니 시장 리포트", titleEn: "Sydney Market Report — Q1 2026",
    excerptKo: "노스쇼어 및 이너웨스트 중심의 2026년 1분기 시장 동향.",
    excerptEn: "Q1 2026 market trends, with a focus on the North Shore and Inner West.",
    bodyKo: "2026년 1분기 시드니 주택 시장은 노스쇼어와 이너웨스트를 중심으로 완만한 가격 상승세를 보였습니다. 신규 분양 물량은 맥쿼리 파크와 로즈 지역에 집중되었으며, 임대 시장은 여전히 낮은 공실률을 유지하고 있습니다.",
    bodyEn: "In Q1 2026, Sydney's housing market saw modest price growth concentrated in the North Shore and Inner West. New development supply was concentrated around Macquarie Park and Rhodes, while the rental market continued to run on low vacancy.",
  },
];
