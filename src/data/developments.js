// New Developments / Projects data (PRD §5.5).
// DEVELOPMENTS backs both the /new-developments listing grid and the
// /new-developments/:id project detail page. FEATURED_DEVELOPMENT keeps the
// homepage "New Developments" spotlight section pointed at the lead project.
//
// Sourced from real developer marketing collateral supplied by our agency
// partners Billbergia and Boston Projects (brochures, pricelists, contracts
// and fact sheets) — see internal source folders for the underlying documents.
// Photos are real marketing photography (public/developments/<id>/).
export const DEVELOPMENTS = [
  { id: "chatswood-grand-residences", name: "Chatswood Grand Residences", suburb: "Chatswood", subKo: "채스우드", developer: "Billbergia", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 890000, bedsMin: 1, bedsMax: 4, completionLabel: "2031", completionYear: 2031, lastUpdated: "8 Sep 2026", descKo: "채스우드 상업 중심가 바로 앞에 위치한 대형 복합 개발로, 웨스트필드 채스우드와 채스우드 체이스, 기차역까지 도보로 이동 가능합니다. 수영장과 다이닝 공간 등 리조트급 커뮤니티 시설을 갖췄으며 1침실부터 펜트하우스까지 다양한 평형으로 구성됩니다.", descEn: "A large-scale residential development on the doorstep of the Chatswood retail and transport hub, within walking distance of Westfield Chatswood, Chatswood Chase and the train interchange. Residents get resort-style amenities including a pool and dining spaces, with a mix of apartments from one bedroom through to penthouses.", img: "/developments/chatswood-grand-residences/01-hero.jpg", gallery: [
    "/developments/chatswood-grand-residences/01-hero.jpg",
    "/developments/chatswood-grand-residences/02-aerial.jpg",
    "/developments/chatswood-grand-residences/03-pool.jpg",
    "/developments/chatswood-grand-residences/04-dining.jpg",
    "/developments/chatswood-grand-residences/05-kitchen.jpg",
    "/developments/chatswood-grand-residences/06-bathroom.jpg",
    "/developments/chatswood-grand-residences/07-study.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2031" },
    { labelKo: "시작가", labelEn: "From", value: "$890,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$890,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,350,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,950,000" },
    { typeKo: "4침실/펜트하우스", typeEn: "4 Bedroom / Penthouse", priceFrom: "$3,200,000" },
  ] },
  { id: "concord-central-sky-village", name: "Concord Central – Sky Village", suburb: "Concord", subKo: "콩코드", developer: "Billbergia", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 695000, bedsMin: 1, bedsMax: 4, completionLabel: "2029", completionYear: 2029, lastUpdated: "8 Sep 2026", descKo: "콩코드 중심부에 조성되는 대규모 마스터플랜 타운센터로, 네 곳의 수상 건축사무소가 참여해 8개 동, 1,300세대 이상 규모로 계획되었습니다. 수영장, 스파, 사우나, 체육관과 전용 공원을 갖췄으며 콩코드 웨스트 기차역과 인접해 있습니다.", descEn: "A masterplanned town centre in the heart of Concord, designed by four award-winning architecture firms across eight buildings with more than 1,300 apartments. The precinct includes a pool, spa, sauna, gym and dedicated park, and sits next to Concord West train station.", img: "/developments/concord-central-sky-village/01-hero.jpg", gallery: [
    "/developments/concord-central-sky-village/01-hero.jpg",
    "/developments/concord-central-sky-village/02-aerial.jpg",
    "/developments/concord-central-sky-village/03-pool.jpg",
    "/developments/concord-central-sky-village/04-gym.jpg",
    "/developments/concord-central-sky-village/05-living.jpg",
    "/developments/concord-central-sky-village/06-kitchen.jpg",
    "/developments/concord-central-sky-village/07-bathroom.jpg",
    "/developments/concord-central-sky-village/08-bedroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2029" },
    { labelKo: "시작가", labelEn: "From", value: "$695,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$695,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,260,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,550,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$3,460,000" },
  ] },
  { id: "rhodes-bay", name: "Rhodes Bay", suburb: "Rhodes", subKo: "로즈", developer: "Billbergia", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 750000, bedsMin: 1, bedsMax: 4, completionLabel: "Q4 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "파라마타강 워터프론트에 자리한 로즈 이스트 마스터플랜의 첫 단계 프로젝트로, SJB가 설계했습니다. 스튜디오부터 4침실까지 다양한 세대 구성과 수영장 등 리조트형 편의시설을 제공하며 로즈 기차역 인근에 위치합니다.", descEn: "The first stage of the SJB-designed Rhodes East masterplan, positioned directly on the Parramatta River waterfront. The development offers everything from studios to four-bedroom apartments with resort-style amenities including a pool, close to Rhodes train station.", img: "/developments/rhodes-bay/01-hero.jpg", gallery: [
    "/developments/rhodes-bay/01-hero.jpg",
    "/developments/rhodes-bay/02-aerial.jpg",
    "/developments/rhodes-bay/03-pool.jpg",
    "/developments/rhodes-bay/04-entrance.jpg",
    "/developments/rhodes-bay/05-kitchen.jpg",
    "/developments/rhodes-bay/06-bathroom.jpg",
    "/developments/rhodes-bay/07-living.jpg",
    "/developments/rhodes-bay/08-study.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$750,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$750,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,050,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,500,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$2,200,000" },
  ] },
  { id: "rhodes-central-tower-e", name: "Rhodes Central - Tower E", suburb: "Rhodes", subKo: "로즈", developer: "Billbergia", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 690000, bedsMin: 1, bedsMax: 4, completionLabel: "2025", completionYear: 2025, lastUpdated: "8 Sep 2026", descKo: "로즈 센트럴 3단계에 해당하는 타워 E는 리테일 라운지와 연결된 실내 포디움 위에 조성되며, 동쪽으로는 시드니 하버와 도심 전망을, 서쪽으로는 강변 전망을 즐길 수 있습니다. 최상층에는 하버·쇼어라인·베이·페닌슐라 등 이름이 붙은 프리미엄 펜트하우스 컬렉션이 마련되어 있습니다.", descEn: "Tower E, Stage 3 of the Rhodes Central precinct, rises above an indoor podium with a recreation centre and retail laneway, offering city and harbour views to the east and river views to the west. The top floors house a named penthouse collection — Harbour, Shoreline, Bay and Peninsula residences.", img: "/developments/rhodes-central-tower-e/01-hero.jpg", gallery: [
    "/developments/rhodes-central-tower-e/01-hero.jpg",
    "/developments/rhodes-central-tower-e/02-aerial.jpg",
    "/developments/rhodes-central-tower-e/03-lounge.jpg",
    "/developments/rhodes-central-tower-e/04-living.jpg",
    "/developments/rhodes-central-tower-e/05-kitchen.jpg",
    "/developments/rhodes-central-tower-e/06-bathroom.jpg",
    "/developments/rhodes-central-tower-e/07-balcony.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2025" },
    { labelKo: "시작가", labelEn: "From", value: "$690,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · PH" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$690,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$960,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,310,000" },
    { typeKo: "펜트하우스", typeEn: "Penthouse", priceFrom: "$3,500,000" },
  ] },
  { id: "rhodes-central-oasis", name: "Rhodes Central Oasis", suburb: "Rhodes", subKo: "로즈", developer: "Billbergia", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 649000, bedsMin: 1, bedsMax: 4, completionLabel: "Early 2025", completionYear: 2025, lastUpdated: "8 Sep 2026", descKo: "마르케 스트리트에 위치한 오아시스 타워는 약 40층, 300여 세대 규모로 조성되며, 로즈 센트럴 쇼핑센터와 가까워 생활 편의성이 뛰어납니다. 포디움 수영장과 스파, 시네마룸 등 다양한 커뮤니티 시설을 갖추고 있습니다.", descEn: "Oasis Tower on Marquet Street rises around 40 storeys with roughly 300 apartments, close to Rhodes Central Shopping Centre for everyday convenience. Residents share podium-level amenities including a pool, spa and cinema room.", img: "/developments/rhodes-central-oasis/01-hero.jpg", gallery: [
    "/developments/rhodes-central-oasis/01-hero.jpg",
    "/developments/rhodes-central-oasis/02-aerial.jpg",
    "/developments/rhodes-central-oasis/03-pool.jpg",
    "/developments/rhodes-central-oasis/04-rooftop.jpg",
    "/developments/rhodes-central-oasis/05-living.jpg",
    "/developments/rhodes-central-oasis/06-kitchen.jpg",
    "/developments/rhodes-central-oasis/07-bathroom.jpg",
    "/developments/rhodes-central-oasis/08-cinema.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Early 2025" },
    { labelKo: "시작가", labelEn: "From", value: "$649,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$649,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$820,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,350,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$1,800,000" },
  ] },
  { id: "blossom-carlingford", name: "Blossom", suburb: "Carlingford", subKo: "칼링포드", developer: "Capio Property Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 861000, bedsMin: 2, bedsMax: 4, completionLabel: "Q1 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "칼링포드 도널드 스트리트와 모즐리 스트리트 일대에 들어서는 '블라썸'은 헤롤드 웨스트 리저브 공원을 마주한 남향 부지에 DKO 건축사사무소가 설계하고 카피오 프로퍼티 그룹이 개발하는 프로젝트입니다. 2~4베드룸으로 구성되며 높은 층고와 통유리창, 넉넉한 발코니로 도심 접근성과 공원의 여유를 함께 누릴 수 있도록 계획되었습니다.", descEn: "Blossom rises on Donald and Moseley Streets in Carlingford opposite Harold West Reserve, designed by DKO Architecture for developer Capio Property Group. The collection of 2 to 4 bedroom apartments features high ceilings, floor-to-ceiling glazing and generous balconies that blend city convenience with a leafy, parkside outlook.", img: "/developments/blossom-carlingford/01-hero.jpg", gallery: [
    "/developments/blossom-carlingford/01-hero.jpg",
    "/developments/blossom-carlingford/02-aerial.jpg",
    "/developments/blossom-carlingford/03-communal-space.jpg",
    "/developments/blossom-carlingford/04-sportsfield.jpg",
    "/developments/blossom-carlingford/05-kitchen.jpg",
    "/developments/blossom-carlingford/06-living.jpg",
    "/developments/blossom-carlingford/07-bedroom.jpg",
    "/developments/blossom-carlingford/08-ensuite.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q1 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$861,000" },
    { labelKo: "유형", labelEn: "Type", value: "2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$861,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,270,500" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$1,680,000" },
  ] },
  { id: "chapter-place-edmondson-park", name: "Chapter Place", suburb: "Edmondson Park", subKo: "에드먼슨 파크", developer: "Urban Property Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1245000, bedsMin: 3, bedsMax: 5, completionLabel: "Q2 2026 – Q3 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "에드먼슨 파크역 인근에 위치한 '챕터 플레이스'는 40년 가까운 역사를 지닌 패밀리 개발·시공사 어반 프로퍼티 그룹이 여러 부지에 걸쳐 선보이는 타운하우스 단지입니다. 3~5베드룸의 넉넉한 타운하우스로 구성되어 성장하는 가족에게 적합하며, 단계별로 2026년 중반부터 2027년 후반까지 순차 준공될 예정입니다.", descEn: "Chapter Place is a multi-site townhouse community near Edmondson Park Station delivered by Urban Property Group, a family-owned developer and builder with almost 40 years of experience. The 3 to 5 bedroom townhouses suit growing families, with sub-stages reaching completion progressively from mid-2026 through to late 2027.", img: "/developments/chapter-place-edmondson-park/01-hero.jpg", gallery: [
    "/developments/chapter-place-edmondson-park/01-hero.jpg",
    "/developments/chapter-place-edmondson-park/02-exterior.jpg",
    "/developments/chapter-place-edmondson-park/03-rooftop.jpg",
    "/developments/chapter-place-edmondson-park/04-kitchen.jpg",
    "/developments/chapter-place-edmondson-park/05-bedroom.jpg",
    "/developments/chapter-place-edmondson-park/06-bathroom.jpg",
    "/developments/chapter-place-edmondson-park/07-exterior2.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q2 2026 – Q3 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$1,245,000" },
    { labelKo: "유형", labelEn: "Type", value: "3B · 4B · 5B" },
  ], unitMix: [
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,245,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$1,395,000" },
    { typeKo: "5침실", typeEn: "5 Bedroom", priceFrom: "$1,620,000" },
  ] },
  { id: "cosmopolitan-parramatta", name: "The Cosmopolitan", suburb: "Parramatta", subKo: "파라마타", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 695000, bedsMin: 1, bedsMax: 3, completionLabel: "Q4 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "파라마타 해리스 스트리트에 위치한 '더 코스모폴리탄'은 데이콥(Deicorp)이 개발하는 대규모 복합주거 프로젝트로, 헤리스 타워를 포함한 여러 동으로 구성됩니다. 1~3베드룸 아파트와 함께 체육관, 포디움 가든, 상업·소매시설 등 다양한 편의시설을 갖추고 있습니다.", descEn: "The Cosmopolitan on Harris Street, Parramatta is a large-scale mixed residential development by Deicorp comprising multiple towers, including Harris Tower. It offers 1 to 3 bedroom apartments alongside amenities such as a gymnasium, podium gardens and ground-floor retail.", img: "/developments/cosmopolitan-parramatta/01-hero.jpg", gallery: [
    "/developments/cosmopolitan-parramatta/01-hero.jpg",
    "/developments/cosmopolitan-parramatta/02-aerial.jpg",
    "/developments/cosmopolitan-parramatta/03-gym.jpg",
    "/developments/cosmopolitan-parramatta/04-garden.jpg",
    "/developments/cosmopolitan-parramatta/05-living.jpg",
    "/developments/cosmopolitan-parramatta/06-kitchen.jpg",
    "/developments/cosmopolitan-parramatta/07-bathroom.jpg",
    "/developments/cosmopolitan-parramatta/08-bedroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$695,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$695,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$785,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,235,000" },
  ] },
  { id: "danks-st-district-waterloo", name: "Danks St District", suburb: "Waterloo", subKo: "워터루", developer: "DASCO", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 985000, bedsMin: 1, bedsMax: 3, completionLabel: "2028", completionYear: 2028, lastUpdated: "8 Sep 2026", descKo: "워터루 버크 스트리트 911번지 일대에 조성되는 '댕크스 스트리트 디스트릭트'는 30년 이상의 역사를 지닌 패밀리 개발·시공사 데스코(DASCO)가 선보이는 프로젝트로, 버크 스트리트 레지던스와 디 아티잔 두 개 동으로 구성됩니다. 1~3베드룸 아파트와 그라운드 리테일, 옥상 정원, 야외 체육시설을 갖추고 2028년 완공을 목표로 합니다.", descEn: "Danks St District rises on Bourke Street in Waterloo, delivered by DASCO, a family-owned developer and builder with more than 30 years' experience, across the Bourke St Residences and The Artisan buildings. The precinct offers 1 to 3 bedroom apartments alongside ground-floor retail, a rooftop garden and outdoor gym, targeting completion in 2028.", img: "/developments/danks-st-district-waterloo/01-hero.jpg", gallery: [
    "/developments/danks-st-district-waterloo/01-hero.jpg",
    "/developments/danks-st-district-waterloo/02-aerial.jpg",
    "/developments/danks-st-district-waterloo/03-rooftop.jpg",
    "/developments/danks-st-district-waterloo/04-gym.jpg",
    "/developments/danks-st-district-waterloo/05-kitchen.jpg",
    "/developments/danks-st-district-waterloo/06-living.jpg",
    "/developments/danks-st-district-waterloo/07-bathroom.jpg",
    "/developments/danks-st-district-waterloo/08-dining.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2028" },
    { labelKo: "시작가", labelEn: "From", value: "$985,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$985,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,475,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$2,050,000" },
  ] },
  { id: "este-little-bay", name: "ESTE", suburb: "Little Bay", subKo: "리틀베이", developer: "Urban Property Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1460000, bedsMin: 1, bedsMax: 4, completionLabel: "Aug 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "리틀베이 제니퍼 스트리트 11번지에 위치한 'ESTE'는 어반 프로퍼티 그룹이 개발하고 힐 탈리스 건축사사무소가 설계한 저층 레지던스로, 지상 4개 층과 루프탑 테라스로 이루어져 있습니다. 총 94세대 중 79세대가 1~4베드룸 일반 분양 세대이며, 수영장과 옥상 체육시설 등 편의시설을 갖추고 2026년 8월 완공 예정입니다.", descEn: "ESTE at 11 Jennifer Street, Little Bay is a boutique four-storey residence with a rooftop terrace, designed by Hill Thalis Architects for developer Urban Property Group. 79 of its 94 apartments are 1 to 4 bedroom homes for sale, with a pool, rooftop gym and landscaped gardens, and construction is due to complete in August 2026.", img: "/developments/este-little-bay/01-hero.jpg", gallery: [
    "/developments/este-little-bay/01-hero.jpg",
    "/developments/este-little-bay/02-aerial.jpg",
    "/developments/este-little-bay/03-pool.jpg",
    "/developments/este-little-bay/04-gym.jpg",
    "/developments/este-little-bay/05-kitchen.jpg",
    "/developments/este-little-bay/06-living.jpg",
    "/developments/este-little-bay/07-bedroom.jpg",
    "/developments/este-little-bay/08-ensuite.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Aug 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$1,460,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,460,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,950,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$2,280,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$3,780,000" },
  ] },
  { id: "falcon-alexander-crows-nest", name: "Falcon & Alexander", suburb: "Crows Nest", subKo: "크로우스 네스트", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1350000, bedsMin: 1, bedsMax: 3, completionLabel: "Late 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "크로우스 네스트 중심가, 폴콘 스트리트와 알렉산더 스트리트가 만나는 코너 부지에 들어서는 21층 단일 타워로, 총 212세대와 지상층 식음료 매장, 100실 규모 호텔이 함께 들어섭니다. 입주민 전용 다이닝룸과 루프탑 가든, BBQ 공간 등 커뮤니티 시설을 갖췄으며 노스 시드니 지역에 위치해 있습니다.", descEn: "Falcon & Alexander is a single 21-storey tower on the corner of Falcon and Alexander Streets in Crows Nest, combining 212 residences with ground-floor dining and a 100-room hotel. Residents have access to a private dining room and a rooftop garden with BBQ area, within the North Sydney council area.", img: "/developments/falcon-alexander-crows-nest/01-hero.jpg", gallery: [
    "/developments/falcon-alexander-crows-nest/01-hero.jpg",
    "/developments/falcon-alexander-crows-nest/02-rooftop.jpg",
    "/developments/falcon-alexander-crows-nest/03-retail.jpg",
    "/developments/falcon-alexander-crows-nest/04-kitchen.jpg",
    "/developments/falcon-alexander-crows-nest/05-living.jpg",
    "/developments/falcon-alexander-crows-nest/06-dining.jpg",
    "/developments/falcon-alexander-crows-nest/07-bedroom.jpg",
    "/developments/falcon-alexander-crows-nest/08-ensuite.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Late 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$1,350,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,350,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,700,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$3,375,000" },
  ] },
  { id: "goldmate-box-hill", name: "Albert Park by Goldmate", suburb: "Box Hill", subKo: "박스 힐", developer: "Goldmate Projects", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1207000, bedsMin: 3, bedsMax: 5, completionLabel: "2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "박스 힐(Pridham & Hannaford Ave)에 조성되는 골드메이트 프로젝트의 단독주택형 커뮤니티로, 클래식·보그·트렌드 등 다양한 파사드 디자인의 3~5개 침실 단독주택 필지를 분양합니다. M2 모터웨이 업그레이드, 신설 학교, 시드니 비즈니스 파크 등 노스웨스트 성장축 인프라 개발의 수혜지에 위치합니다.", descEn: "Albert Park is Goldmate Projects' house-and-land community on Pridham & Hannaford Avenue in Box Hill, offering 3 to 5 bedroom homes across a range of facade designs including Classic, Vogue and Trend. The estate sits within Sydney's North West Growth Area, benefiting from the M2 motorway upgrade, new schools and the nearby Sydney Business Park precinct.", img: "/developments/goldmate-box-hill/01-hero.jpg", gallery: [
    "/developments/goldmate-box-hill/01-hero.jpg",
    "/developments/goldmate-box-hill/02-grange-classic.jpg",
    "/developments/goldmate-box-hill/03-facade.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2026" },
    { labelKo: "시작가", labelEn: "From", value: "$1,207,000" },
    { labelKo: "유형", labelEn: "Type", value: "3B · 4B · 5B" },
  ], unitMix: [
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,207,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$1,235,000" },
    { typeKo: "5침실", typeEn: "5 Bedroom", priceFrom: "$1,369,000" },
  ] },
  { id: "harbourside-sydney", name: "Harbourside Residences", suburb: "Sydney", subKo: "시드니", developer: "Mirvac", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1895000, bedsMin: 1, bedsMax: 4, completionLabel: "Nov 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "달링 하버 워터프런트, 다링 드라이브에 위치한 48층 타워로 미르백이 개발하고 스뇌헤타와 하셀이 설계했습니다. 총 260세대의 럭셔리 레지던스와 펜트하우스가 들어서며, 지상부터 4층까지 상업·리테일 공간과 5층 전용 아메니티 층, 3,500㎡ 규모의 워터프런트 정원이 함께 조성됩니다.", descEn: "Harbourside Residences is a 48-level Mirvac tower on Darling Drive overlooking Darling Harbour, designed by Snohetta and Hassell. The development comprises 260 luxury apartments and penthouses above ground-floor retail and commercial space, with a dedicated Level 5 amenity floor and roughly 3,500 sqm of waterfront gardens.", img: "/developments/harbourside-sydney/01-hero.jpg", gallery: [
    "/developments/harbourside-sydney/01-hero.jpg",
    "/developments/harbourside-sydney/02-aerial.jpg",
    "/developments/harbourside-sydney/03-pool.jpg",
    "/developments/harbourside-sydney/04-gym.jpg",
    "/developments/harbourside-sydney/05-kitchen.jpg",
    "/developments/harbourside-sydney/06-living.jpg",
    "/developments/harbourside-sydney/07-bedroom.jpg",
    "/developments/harbourside-sydney/08-bathroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Nov 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$1,895,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,895,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$2,880,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$5,195,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$7,160,000" },
  ] },
  { id: "highforest-west-pennant-hills", name: "Highforest", suburb: "West Pennant Hills", subKo: "웨스트 페넌트 힐스", developer: "Mirvac", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 850000, bedsMin: 1, bedsMax: 4, completionLabel: "Late 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "컴벌랜드 주립 삼림과 인접한 웨스트 페넌트 힐스, 쿠나라 애비뉴에 조성되는 미르백의 대규모 커뮤니티로 아파트 4개 동과 단독주택 165채, 총 약 1,045명을 수용하는 '진정한 숲속 생활'을 콘셉트로 설계되었습니다. 체리브룩 메트로역과 도보 약 800m 거리이며, 부지의 약 10헥타르가 공공 녹지로 환원됩니다.", descEn: "Highforest is a major Mirvac community on Coonara Avenue in West Pennant Hills, next to Cumberland State Forest, comprising four apartment buildings and 165 houses designed around a 'True Forest Living' concept for around 1,045 future residents. It sits roughly 800m from Cherrybrook Metro Station, with about 10 hectares of the site dedicated back to public open space.", img: "/developments/highforest-west-pennant-hills/01-hero.jpg", gallery: [
    "/developments/highforest-west-pennant-hills/01-hero.jpg",
    "/developments/highforest-west-pennant-hills/02-exterior.jpg",
    "/developments/highforest-west-pennant-hills/03-kitchen.jpg",
    "/developments/highforest-west-pennant-hills/04-living.jpg",
    "/developments/highforest-west-pennant-hills/06-bathroom.jpg",
    "/developments/highforest-west-pennant-hills/08-bathroom2.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Late 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$850,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$850,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,255,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,810,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$3,345,000" },
  ] },
  { id: "hyde-metropolitan-tower", name: "Hyde Metropolitan", suburb: "Sydney", subKo: "시드니", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1480000, bedsMin: 1, bedsMax: 3, completionLabel: "2028", completionYear: 2028, lastUpdated: "8 Sep 2026", descKo: "하이드 파크 남쪽 가장자리, 133 리버풀 스트리트에 들어서는 디이코프의 랜드마크 타워로 캔들파파스 어소시에이츠가 설계했습니다. 이그제큐티브·럭셔리 두 등급으로 나뉜 레지던스가 하이드 파크와 시드니 하버, 시티 스카이라인 조망을 제공하며, 스카이바와 커뮤널 풀 등 다양한 입주민 전용 시설을 갖췄습니다.", descEn: "Hyde Metropolitan is a landmark Deicorp tower at 133 Liverpool Street on the southern edge of Hyde Park, designed by Candalepas Associates. Residences are offered across Executive and Luxury tiers with views over Hyde Park, Sydney Harbour and the city skyline, complemented by resident amenities including a sky bar and communal pool.", img: "/developments/hyde-metropolitan-tower/01-hero.jpg", gallery: [
    "/developments/hyde-metropolitan-tower/01-hero.jpg",
    "/developments/hyde-metropolitan-tower/02-aerial.jpg",
    "/developments/hyde-metropolitan-tower/03-pool.jpg",
    "/developments/hyde-metropolitan-tower/04-skybar.jpg",
    "/developments/hyde-metropolitan-tower/05-kitchen.jpg",
    "/developments/hyde-metropolitan-tower/06-living.jpg",
    "/developments/hyde-metropolitan-tower/07-bedroom.jpg",
    "/developments/hyde-metropolitan-tower/08-bathroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2028" },
    { labelKo: "시작가", labelEn: "From", value: "$1,480,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,480,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$2,170,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$5,070,000" },
  ] },
  { id: "keira-place-wollongong", name: "Keira Place", suburb: "Wollongong", subKo: "울런공", developer: "Urban Property Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 675000, bedsMin: 1, bedsMax: 3, completionLabel: "Q3 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "울런공 스미스 스트리트에 자리한 케이라 플레이스는 시내와 노스 울런공 해변, 기차역까지 도보권인 4개동 저층·중층 아파트 단지입니다. 40년 전통의 가족 기업 어반(Urban)이 개발·시공하며, 호주 최초로 10년 하자보험(LDI)과 정부 공인 iCIRT 인증을 제공해 품질을 보증합니다.", descEn: "Keira Place sits on Smith Street in Wollongong, an easy walk to the CBD, North Wollongong Beach and the train station, spread across four low-to-mid-rise residential buildings. It is developed and built by Urban, a family-owned company with nearly 40 years' history, offering 10-year Latent Defects Insurance and a government-backed iCIRT rating as Australia's first developer to do so.", img: "/developments/keira-place-wollongong/01-hero.jpg", gallery: [
    "/developments/keira-place-wollongong/01-hero.jpg",
    "/developments/keira-place-wollongong/02-rooftop.jpg",
    "/developments/keira-place-wollongong/03-communal.jpg",
    "/developments/keira-place-wollongong/04-kitchen.jpg",
    "/developments/keira-place-wollongong/05-bathroom.jpg",
    "/developments/keira-place-wollongong/06-bedroom.jpg",
    "/developments/keira-place-wollongong/07-living.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q3 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$675,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$675,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$870,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,200,000" },
  ] },
  { id: "la-vera-macquarie-park", name: "La Vera", suburb: "Macquarie Park", subKo: "맥쿼리 파크", developer: "Urban Property Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 770000, bedsMin: 1, bedsMax: 4, completionLabel: "Q1 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "맥쿼리 파크 탈라베라 로드 94번지, 레인 코브 국립공원 바로 건너편에 자리한 라베라는 16층 151세대 규모로 맥쿼리대 메트로역까지 도보 10분 거리입니다. 옥상에는 수영장과 바비큐, 휴게 공간을 갖춘 커뮤널 라운지가 마련되어 있으며, 어반(Urban)이 콕스 아키텍처와 협업해 설계·시공했습니다.", descEn: "Set at 94 Talavera Road in Macquarie Park directly opposite Lane Cove National Park, La Vera is a 16-storey, 151-apartment building roughly a 10-minute walk to Macquarie University Metro. A rooftop communal space with pool, BBQ area and lounge zones tops the building, developed by Urban in collaboration with architects Cox.", img: "/developments/la-vera-macquarie-park/01-hero.jpg", gallery: [
    "/developments/la-vera-macquarie-park/01-hero.jpg",
    "/developments/la-vera-macquarie-park/02-rooftop-pool.jpg",
    "/developments/la-vera-macquarie-park/03-foyer.jpg",
    "/developments/la-vera-macquarie-park/04-kitchen-living.jpg",
    "/developments/la-vera-macquarie-park/05-bathroom.jpg",
    "/developments/la-vera-macquarie-park/06-bedroom.jpg",
    "/developments/la-vera-macquarie-park/07-balcony.jpg",
    "/developments/la-vera-macquarie-park/08-rooftop-bbq.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q1 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$770,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$770,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,150,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,390,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$1,950,000" },
  ] },
  { id: "marquet-mary-rhodes", name: "Marquet & Mary", suburb: "Rhodes", subKo: "로즈", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 780000, bedsMin: 1, bedsMax: 4, completionLabel: "2028", completionYear: 2028, lastUpdated: "8 Sep 2026", descKo: "로즈 반도, 마르케 스트리트와 메리 스트리트가 만나는 자리에 들어서는 마르케 앤 메리는 디자인 공모전에서 우승한 펜더 카트살리디스가 설계한 고층 타워로, 로즈 센트럴 상업지구와 기차역까지 라네웨이로 바로 연결됩니다. 1999년 설립된 디코프(Deicorp)가 개발하며, 1~4베드룸 아파트와 4개 층의 상가·상업 포디움, 옥상 커뮤널 공간을 갖추고 있습니다.", descEn: "Rising on the Rhodes peninsula at the corner of Marquet and Mary Streets, Marquet & Mary is a high-rise tower designed by award-winning architects Fender Katsalidis, with direct laneway access to the Rhodes Central retail precinct and train station. Developed by Deicorp (established 1999), it offers one- to four-bedroom apartments above a four-level retail and commercial podium topped with a rooftop communal area.", img: "/developments/marquet-mary-rhodes/00-hero-wide.jpg", gallery: [
    "/developments/marquet-mary-rhodes/00-hero-wide.jpg",
    "/developments/marquet-mary-rhodes/01-hero.jpg",
    "/developments/marquet-mary-rhodes/02-aerial.jpg",
    "/developments/marquet-mary-rhodes/03-lobby.jpg",
    "/developments/marquet-mary-rhodes/04-gardens.jpg",
    "/developments/marquet-mary-rhodes/05-kitchen.jpg",
    "/developments/marquet-mary-rhodes/06-living.jpg",
    "/developments/marquet-mary-rhodes/07-bedroom.jpg",
    "/developments/marquet-mary-rhodes/08-balcony.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "2028" },
    { labelKo: "시작가", labelEn: "From", value: "$780,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B · 4B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$780,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$950,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,800,000" },
    { typeKo: "4침실", typeEn: "4 Bedroom", priceFrom: "$2,675,000" },
  ] },
  { id: "melrose-central-melrose-park", name: "Melrose Central", suburb: "Melrose Park", subKo: "멜로즈 파크", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 725000, bedsMin: 1, bedsMax: 3, completionLabel: "Q4 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "멜로즈 파크 호프 스트리트 33번지에 위치한 멜로즈 센트럴은 6개동, 494세대 규모의 복합 단지로 디코프(Deicorp)가 개발·시공하고 터너(Turner)가 설계했습니다. 대형 슈퍼마켓과 95개 상점이 들어서는 지상 상가와 6,000㎡ 규모의 전용 포디움 공원, 파라마타 경전철 정류장 예정지가 단지 앞에 자리합니다.", descEn: "Located at 33 Hope Street in Melrose Park, Melrose Central is a mixed-use precinct of six residential towers and 494 apartments, developed and built by Deicorp and designed by Turner. It sits above a ground-level retail podium anchored by a full-line supermarket and 95 shops, with a 6,000sqm resident-only Podium Park and a future Parramatta Light Rail stop at its doorstep.", img: "/developments/melrose-central-melrose-park/01-hero.jpg", gallery: [
    "/developments/melrose-central-melrose-park/01-hero.jpg",
    "/developments/melrose-central-melrose-park/02-park-retail.jpg",
    "/developments/melrose-central-melrose-park/03-lobby.jpg",
    "/developments/melrose-central-melrose-park/04-kitchen.jpg",
    "/developments/melrose-central-melrose-park/05-bathroom.jpg",
    "/developments/melrose-central-melrose-park/06-living.jpg",
    "/developments/melrose-central-melrose-park/07-bedroom.jpg",
    "/developments/melrose-central-melrose-park/08-balcony.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$725,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$725,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$940,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,355,000" },
  ] },
  { id: "melrose-park-sekisui", name: "Aeris", suburb: "Melrose Park", subKo: "멜로즈 파크", developer: "Sekisui House", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 730000, bedsMin: 1, bedsMax: 3, completionLabel: "Mid 2028", completionYear: 2028, lastUpdated: "8 Sep 2026", descKo: "에어리스(Aeris)는 세키스이 하우스가 멜로즈 파크 마스터플랜 커뮤니티에서 선보이는 최신 단계로, 3개동 468세대 규모이며 건축은 GroupGSA가 맡았습니다. 시드니 스카이라인과 파라마타 CBD를 향한 조망을 살린 듀얼 어스펙트 설계가 특징이며, 수영장과 헬스장, 야외 시네마 등 입주민 전용 편의시설을 갖추고 있습니다.", descEn: "Aeris is the latest release in Sekisui House's Melrose Park masterplanned community, comprising three buildings and 468 apartments designed by architects GroupGSA. Dual-aspect layouts frame views toward the Sydney skyline and Parramatta CBD, and residents get access to a pool, gym and outdoor cinema among the shared amenities.", img: "/developments/melrose-park-sekisui/01-hero.jpg", gallery: [
    "/developments/melrose-park-sekisui/01-hero.jpg",
    "/developments/melrose-park-sekisui/02-aerial.jpg",
    "/developments/melrose-park-sekisui/03-pool.jpg",
    "/developments/melrose-park-sekisui/04-gym.jpg",
    "/developments/melrose-park-sekisui/05-kitchen.jpg",
    "/developments/melrose-park-sekisui/06-living.jpg",
    "/developments/melrose-park-sekisui/07-bedroom.jpg",
    "/developments/melrose-park-sekisui/08-outdoor-cinema.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Mid 2028" },
    { labelKo: "시작가", labelEn: "From", value: "$730,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$730,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$970,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,380,000" },
  ] },
  { id: "midtown-macpark", name: "Midtown MacPark", suburb: "Macquarie Park", subKo: "맥쿼리 파크", developer: "Frasers Property", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 760000, bedsMin: 1, bedsMax: 3, completionLabel: "Q2 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "프레이저스 프로퍼티가 맥쿼리 파크에 조성 중인 대형 복합단지 미드타운의 '트리하우스' 빌딩으로, 소매 프론티지와 옥상 스카이가든·루프탑 시네마, 아이들을 위한 놀이 공간 등 커뮤니티 시설을 갖춘 가족 친화적인 아파트입니다. 1~3베드룸으로 구성되며 맥쿼리 파크역과 비즈니스 파크 인근에 위치합니다.", descEn: "Treehouse at Midtown is Frasers Property's family-oriented apartment building within the larger Midtown Macquarie Park precinct, offering ground-floor retail frontage, a rooftop sky garden and cinema, and dedicated kids' play areas. It offers 1 to 3 bedroom homes close to Macquarie Park station and the surrounding business park.", img: "/developments/midtown-macpark/01-hero.jpg", gallery: [
    "/developments/midtown-macpark/01-hero.jpg",
    "/developments/midtown-macpark/02-village-park.jpg",
    "/developments/midtown-macpark/03-rooftop.jpg",
    "/developments/midtown-macpark/04-kitchen.jpg",
    "/developments/midtown-macpark/05-living.jpg",
    "/developments/midtown-macpark/06-bathroom.jpg",
    "/developments/midtown-macpark/07-balcony.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q2 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$760,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$760,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,295,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,730,000" },
  ] },
  { id: "narthcote-collective-naremburn", name: "Northcote Collective", suburb: "Naremburn", subKo: "네럼번", developer: "Abadeen", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1160000, bedsMin: 1, bedsMax: 3, completionLabel: "Completed 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "노스 쇼어의 조용한 주택가 네럼번에 위치한 부티크 규모의 1~3베드룸 아파트 컬렉션으로, 고밀도 개발이 제한된 지역 특성 덕분에 여유로운 저층 스카이라인을 유지하고 있습니다. 크로우스 네스트 메트로역까지 도보로 이동할 수 있으며 네럼번 파크와도 가깝습니다.", descEn: "Northcote Collective is a boutique collection of 1 to 3 bedroom residences in the leafy, low-rise Naremburn neighbourhood on Sydney's Lower North Shore, an area shielded from the surrounding high-rise growth corridor. It sits within walking distance of Crows Nest Metro station and Naremburn Park.", img: "/developments/narthcote-collective-naremburn/01-hero.jpg", gallery: [
    "/developments/narthcote-collective-naremburn/01-hero.jpg",
    "/developments/narthcote-collective-naremburn/02-living.jpg",
    "/developments/narthcote-collective-naremburn/03-kitchen.jpg",
    "/developments/narthcote-collective-naremburn/04-balcony.jpg",
    "/developments/narthcote-collective-naremburn/05-bedroom.jpg",
    "/developments/narthcote-collective-naremburn/06-bathroom.jpg",
    "/developments/narthcote-collective-naremburn/07-dining.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Completed 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$1,160,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,160,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,730,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$3,000,000" },
  ] },
  { id: "river-oaks-oakville", name: "River Oaks", suburb: "Oakville", subKo: "오크빌", developer: "Castle Group", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 750000, bedsMin: 3, bedsMax: 5, completionLabel: "Q4 2024", completionYear: 2024, lastUpdated: "8 Sep 2026", descKo: "리버 오크스는 시드니 북서부 오크빌의 빈야드 구역에 조성되는 대지 분양형 커뮤니티로, 평균 450㎡ 이상의 넉넉한 대지와 인근 스케이빌 국립공원, 호크스버리 강을 즐길 수 있는 저밀도 마스터플랜이 특징입니다. 로즈힐 타운센터와 노스웨스트 메트로 접근이 편리하며, 노블 홈빌더스의 3~5베드룸 하우스 앤 랜드 패키지를 선택할 수 있습니다.", descEn: "River Oaks is a land-lot community in the Vineyard precinct of Oakville in Sydney's north-west, offering generous average lot sizes (450m²-plus) under a low-density masterplan bordered by Scheyville National Park and the Hawkesbury River. It is close to Rouse Hill Town Centre and the North West Metro, with 3 to 5 bedroom house-and-land packages available through builder partner Noble Home Builders.", img: "/developments/river-oaks-oakville/01-hero.jpg", gallery: [
    "/developments/river-oaks-oakville/01-hero.jpg",
    "/developments/river-oaks-oakville/02-aerial.jpg",
    "/developments/river-oaks-oakville/03-sienna200.jpg",
    "/developments/river-oaks-oakville/04-newlife246.jpg",
    "/developments/river-oaks-oakville/05-oxley233.jpg",
    "/developments/river-oaks-oakville/06-aurora172.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2024" },
    { labelKo: "시작가", labelEn: "From", value: "$750,000" },
    { labelKo: "유형", labelEn: "Type", value: "3B · 4B · 5B" },
  ], unitMix: [
    { typeKo: "3침실 (하우스+랜드)", typeEn: "3 Bedroom (House & Land)", priceFrom: "$1,047,000" },
    { typeKo: "4침실 (하우스+랜드)", typeEn: "4 Bedroom (House & Land)", priceFrom: "$1,180,000" },
    { typeKo: "5침실 (하우스+랜드)", typeEn: "5 Bedroom (House & Land)", priceFrom: "$1,439,000" },
  ] },
  { id: "showground-castle-hill", name: "Showground", suburb: "Castle Hill", subKo: "캐슬힐", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 820000, bedsMin: 1, bedsMax: 3, completionLabel: "Q4 2026", completionYear: 2026, lastUpdated: "8 Sep 2026", descKo: "쇼그라운드는 캐슬힐 쇼그라운드 메트로역 바로 앞, 2 만달라 퍼레이드에 자리한 데이콥의 대형 복합단지로 A·B·C·D 4개 타워와 리테일 포디움, 옥상 정원으로 구성됩니다. D동은 '더 하비(쇼그라운드 파빌리언스)'라는 별도 릴리스명으로 아파트와 타운홈이 함께 공급되며, 두 릴리스 모두 1~3베드룸 타입을 갖추고 있습니다.", descEn: "Showground is Deicorp's large mixed-use precinct directly beside Showground Metro Station at 2 Mandala Parade, Castle Hill, comprising four towers (A, B, C, D) built around a retail podium and rooftop gardens. Building D was released separately as \"The Harvey\" (marketed as Showground Pavilions), pairing apartments with ground-level townhomes, and both releases span 1 to 3 bedroom homes.", img: "/developments/showground-castle-hill/01-hero.jpg", gallery: [
    "/developments/showground-castle-hill/01-hero.jpg",
    "/developments/showground-castle-hill/02-pavilions-hero.jpg",
    "/developments/showground-castle-hill/03-rooftop.jpg",
    "/developments/showground-castle-hill/04-retail-plaza.jpg",
    "/developments/showground-castle-hill/05-living.jpg",
    "/developments/showground-castle-hill/06-kitchen.jpg",
    "/developments/showground-castle-hill/07-bedroom.jpg",
    "/developments/showground-castle-hill/08-bathroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2026" },
    { labelKo: "시작가", labelEn: "From", value: "$820,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$820,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$920,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,220,000" },
  ] },
  { id: "tallawong-village", name: "Tallawong Village", suburb: "Tallawong", subKo: "탈라웡", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 780000, bedsMin: 2, bedsMax: 3, completionLabel: "Completed 2025", completionYear: 2025, lastUpdated: "8 Sep 2026", descKo: "탈라웡 빌리지는 시드니 노스웨스트 라우스 힐 지역 탈라웡에 위치한 디이코프(Deicorp)의 대규모 복합 주거단지로, 탈라웡 메트로역과 40여 개 상점이 모인 자체 리테일 프리싱트까지 도보로 이동할 수 있습니다. 이미 준공·등록이 완료되어 즉시 입주 가능한 2~3베드룸 세대를 선보이며, 루프탑 커뮤널 가든과 조경 안뜰 등 편의시설을 갖추고 있습니다.", descEn: "Tallawong Village is a large Deicorp masterplanned community in Tallawong, in Sydney's Rouse Hill/north-west corridor, within walking distance of Tallawong Metro Station and its own retail precinct of more than 40 shops and cafes. Now complete and registered, it offers move-in ready 2 and 3 bedroom apartments with a rooftop communal garden and landscaped courtyards.", img: "/developments/tallawong-village/01-hero.jpg", gallery: [
    "/developments/tallawong-village/01-hero.jpg",
    "/developments/tallawong-village/02-courtyard.jpg",
    "/developments/tallawong-village/03-rooftop.jpg",
    "/developments/tallawong-village/04-kitchen-living.jpg",
    "/developments/tallawong-village/05-bedroom.jpg",
    "/developments/tallawong-village/06-kitchen-alt.jpg",
    "/developments/tallawong-village/07-balcony.jpg",
  ], stats: [
    { labelKo: "완공", labelEn: "Completion", value: "Completed 2025" },
    { labelKo: "시작가", labelEn: "From", value: "$780,000" },
    { labelKo: "유형", labelEn: "Type", value: "2B · 3B" },
  ], unitMix: [
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$780,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,120,000" },
  ] },
  { id: "the-avenues-zetland", name: "The Avenues", suburb: "Zetland", subKo: "제틀랜드", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 920000, bedsMin: 1, bedsMax: 3, completionLabel: "Q4 2027", completionYear: 2027, lastUpdated: "8 Sep 2026", descKo: "더 애비뉴스는 디이코프(Deicorp)가 시드니 CBD에서 약 4km 떨어진 이스트 제틀랜드에 조성하는 3개 건물(A·B·C동) 규모의 신규 빌리지로, 펜더 카찰리디스(Fender Katsalidis)가 설계했으며 거니아마 파크와 맞닿은 정원형 저층 프리싱트와 자체 상점가를 갖추고 있습니다. 그린스퀘어역과 워털루 메트로가 가깝고 2027년 하반기 준공을 목표로 현재 활발히 분양 중입니다.", descEn: "The Avenues is a new three-building village (Buildings A, B and C) by Deicorp in East Zetland, about 4km from the Sydney CBD, designed by Fender Katsalidis around garden courtyards, tree-lined internal streets and village-style retail bordering Gunyama Park. It sits close to Green Square Station and Waterloo Metro, with residential completion targeted for Q3/Q4 2027 and apartments currently on sale.", img: "/developments/the-avenues-zetland/01-hero.jpg", gallery: [
    "/developments/the-avenues-zetland/01-hero.jpg",
    "/developments/the-avenues-zetland/02-rooftop.jpg",
    "/developments/the-avenues-zetland/03-social-quarter.jpg",
    "/developments/the-avenues-zetland/04-living.jpg",
    "/developments/the-avenues-zetland/05-kitchen.jpg",
    "/developments/the-avenues-zetland/06-bedroom.jpg",
    "/developments/the-avenues-zetland/07-bathroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Q4 2027" },
    { labelKo: "시작가", labelEn: "From", value: "$920,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$920,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,410,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,845,000" },
  ] },
  { id: "the-kensington", name: "The Kensington", suburb: "Kensington", subKo: "켄싱턴", developer: "TOGA", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 1030000, bedsMin: 1, bedsMax: 3, completionLabel: "Completed 2025", completionYear: 2025, lastUpdated: "8 Sep 2026", descKo: "더 켄싱턴은 1963년 설립된 호주 가족기업 토가(TOGA)가 아자크 퍼레이드 151번지에 조성한 A·B·C 3개동 규모의 프로젝트로, 터너 스튜디오가 건축을, 리처즈 스타니시치가 인테리어를 맡았으며 재택근무에 특화된 소호(SOHO) 세대도 포함되어 있습니다. UNSW와 랜드윅 인근에 위치하고 루프탑 커뮤널 가든을 갖췄으며, 2025년 준공 목표로 진행되어 현재 잔여 세대를 분양 중입니다.", descEn: "The Kensington is a three-building project (A, B and C) at 151 Anzac Parade by TOGA, the family-owned Australian developer founded in 1963, with architecture by Turner Studio and interiors by Richards Stanisich, including dual-purpose SOHO apartments for home and work. Close to UNSW and Randwick with a rooftop communal garden, the project targeted completion in late 2025 and remaining apartments are now on sale.", img: "/developments/the-kensington/01-hero.jpg", gallery: [
    "/developments/the-kensington/01-hero.jpg",
    "/developments/the-kensington/02-rooftop.jpg",
    "/developments/the-kensington/03-lobby.jpg",
    "/developments/the-kensington/04-kitchen-living.jpg",
    "/developments/the-kensington/05-bedroom.jpg",
    "/developments/the-kensington/06-bathroom.jpg",
    "/developments/the-kensington/07-balcony.jpg",
  ], stats: [
    { labelKo: "완공", labelEn: "Completion", value: "Completed 2025" },
    { labelKo: "시작가", labelEn: "From", value: "$1,030,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$1,030,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,600,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,900,000" },
  ] },
  { id: "the-orchards-norwest", name: "The Orchards", suburb: "Norwest", subKo: "노스웨스트", developer: "Sekisui House", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 840000, bedsMin: 1, bedsMax: 3, completionLabel: "Estimated 2029", completionYear: 2029, lastUpdated: "8 Sep 2026", descKo: "더 오차드는 세키스이 하우스(Sekisui House)가 노스웨스트에 조성해 온 대규모 마스터플랜 커뮤니티로, 현재는 로델로우만(Rothelowman)이 설계한 마지막 단계인 제스트(Zeste)의 에센스(Essence)동을 분양 중입니다. 라군 풀과 커뮤니티 센터를 갖춘 전용 공용시설은 물론, 앞선 단계에서 조성된 실내 수영장·체육관·컨시어지 등 마스터플랜 공용시설도 함께 누릴 수 있습니다.", descEn: "The Orchards is Sekisui House's large masterplanned community in Norwest, now selling the Essence building of Zeste, the final stage of the masterplan designed by Rothelowman. Residents get their own lagoon pool and community centre plus shared access to earlier-stage amenities including an indoor heated pool, gymnasium and concierge, with construction still to commence as the builder tender was underway at last update.", img: "/developments/the-orchards-norwest/01-hero.jpg", gallery: [
    "/developments/the-orchards-norwest/01-hero.jpg",
    "/developments/the-orchards-norwest/02-pool-aerial.jpg",
    "/developments/the-orchards-norwest/03-communal.jpg",
    "/developments/the-orchards-norwest/04-kitchen.jpg",
    "/developments/the-orchards-norwest/05-living.jpg",
    "/developments/the-orchards-norwest/06-terrace.jpg",
    "/developments/the-orchards-norwest/07-bathroom.jpg",
  ], stats: [
    { labelKo: "완공 예정", labelEn: "Completion", value: "Estimated 2029" },
    { labelKo: "시작가", labelEn: "From", value: "$840,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B · 2B · 3B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$840,000" },
    { typeKo: "2침실", typeEn: "2 Bedroom", priceFrom: "$1,065,000" },
    { typeKo: "3침실", typeEn: "3 Bedroom", priceFrom: "$1,530,000" },
  ] },
  { id: "the-rothschild-rosebery", name: "The Rothschild", suburb: "Rosebery", subKo: "로즈베리", developer: "Deicorp", statusKo: "분양 중", statusEn: "Selling Now", availabilityId: "selling-now", startingPrice: 835000, bedsMin: 1, bedsMax: 1, completionLabel: "Completed 2025", completionYear: 2025, lastUpdated: "8 Sep 2026", descKo: "더 로스차일드는 시드니 CBD에서 약 6km 거리에 있는 로즈베리 로스차일드 애비뉴에 자리한 디이코프(Deicorp)의 부티크 아파트로, 칸달레파스 앤 어소시에이츠(Candalepas Associates)가 설계한 아치형 파사드가 특징입니다. 이미 준공·등록을 마쳐 즉시 입주가 가능하며, 현재는 마지막 남은 1베드룸 세대만 분양 중입니다.", descEn: "The Rothschild is a boutique Deicorp apartment building on Rothschild Avenue in Rosebery, about 6km from the Sydney CBD, distinguished by its arched facade designed by Candalepas Associates. Construction is complete and titles registered, so the building is move-in ready, with only a handful of final 1-bedroom apartments remaining for sale.", img: "/developments/the-rothschild-rosebery/01-hero.jpg", gallery: [
    "/developments/the-rothschild-rosebery/01-hero.jpg",
    "/developments/the-rothschild-rosebery/02-common-area.jpg",
    "/developments/the-rothschild-rosebery/03-courtyard.jpg",
    "/developments/the-rothschild-rosebery/04-living-kitchen.jpg",
    "/developments/the-rothschild-rosebery/05-bedroom.jpg",
    "/developments/the-rothschild-rosebery/06-bathroom.jpg",
    "/developments/the-rothschild-rosebery/07-retail.jpg",
  ], stats: [
    { labelKo: "완공", labelEn: "Completion", value: "Completed 2025" },
    { labelKo: "시작가", labelEn: "From", value: "$835,000" },
    { labelKo: "유형", labelEn: "Type", value: "1B" },
  ], unitMix: [
    { typeKo: "1침실", typeEn: "1 Bedroom", priceFrom: "$835,000" },
  ] },
];

export const FEATURED_DEVELOPMENT = DEVELOPMENTS.find((d) => d.id === "marquet-mary-rhodes");

export const DEV_PRICE_BUCKETS = [
  { id: "0-800", min: 0, max: 800000, label: "$0 – $800K" },
  { id: "800-1000", min: 800000, max: 1000000, label: "$800K – $1M" },
  { id: "1000-1500", min: 1000000, max: 1500000, label: "$1M – $1.5M" },
  { id: "1500-plus", min: 1500000, max: Infinity, label: "$1.5M+" },
];

export const DEV_COMPLETION_OPTIONS = [
  { id: "2025", year: 2025, label: "2025 or earlier" },
  { id: "2026", year: 2026, label: "2026" },
  { id: "2027", year: 2027, label: "2027" },
  { id: "2028", year: 2028, label: "2028+" },
];

export const DEV_AVAILABILITY_OPTIONS = [
  { id: "selling-now", labelKo: "분양 중", labelEn: "Selling Now" },
  { id: "coming-soon", labelKo: "출시 예정", labelEn: "Coming Soon" },
];
