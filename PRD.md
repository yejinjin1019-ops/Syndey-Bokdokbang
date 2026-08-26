# PRD — Sydney Bokdokbang | 시드니 복덕방

> 본 PRD는 Figma Make (`Responsive Homepage Design`, https://www.figma.com/make/Kw7OCc47zvwBKTzwJBRKJR/) 에서 확정된 디자인 브리프와 AI 빌드 결과물을 기준으로 작성되었다. 코드는 아직 반영하지 않았으며, 본 문서는 구현 전 합의를 위한 기준 문서다.

## 1. Project Overview

- **프로젝트명**: Sydney Bokdokbang | 시드니 복덕방
- **형태**: 반응형 원페이지형 홈페이지 (React + Vite, JavaScript)
- **한 줄 정의**: 시드니에서 활동하는 한국어 기반 부동산 어드바이저리 브랜드의 공식 홈페이지
- **브랜드 슬로건**: "Korean Warmth. Sydney Property Expertise."
- **태그라인**:
  - EN: "Your Sydney property journey, thoughtfully guided."
  - KO: "집을 찾는 순간부터, 정착하는 순간까지."
- **브랜드 프라미스 (카피)**: "저희는 매물을 많이 보여드리는 곳이 아니라, 제대로 봐드리는 곳입니다."
- **디자인 방향성**: 컨템포러리 서울 라이프스타일 × 시드니 건축 매거진 × 부티크 부동산 어드바이저리. 따뜻하고, 절제되어 있으며, 차분하고, 에디토리얼한 톤. 일반적인 부동산 사이트의 클리셰(과도한 세일즈 문구, 블랙/골드 배색, 그라데이션, 글래스모피즘)는 명시적으로 지양한다.

## 2. Business Purpose

- 시드니 거주(예정) 한인 및 한국어 사용 고객을 대상으로 부동산 매매·임대·신규분양 자문 서비스를 제공하는 것이 핵심 비즈니스다.
- 홈페이지의 비즈니스 목표:
  1. **리드 생성** — "상담하기(Book a Consultation)" CTA를 통한 잠재 고객 문의 유도
  2. **신뢰 구축** — "매물을 많이 보여주는 곳이 아니라 제대로 봐주는 곳"이라는 포지셔닝으로 큐레이션/전문성 기반 신뢰를 형성
  3. **매물·분양 홍보** — Featured Properties 및 New Developments(예: The Marigold, Macquarie Park) 노출을 통한 영업 지원
  4. **정착 지원 서비스 홍보** — 단순 중개가 아닌 Move-In Care, 감정평가(Appraisal) 등 정착 전 과정 지원 서비스를 통해 타 부동산 중개업체 대비 차별화
  5. **콘텐츠 마케팅** — Property Notes(에디토리얼 블로그)를 통한 SEO 및 전문성 어필
- 수익 구조상 매매/임대 중개 수수료, 신규 분양 파트너십(디벨로퍼 제휴)이 핵심으로 추정되며, 홈페이지는 이 두 채널의 상단 퍼널(top-of-funnel) 역할을 한다.

## 3. Target Audience

- **1차 타겟**: 시드니 이주·정착 예정 또는 거주 중인 한국어 사용자(유학생 학부모, 주재원, 이민자, 투자자)로, 매매/임대 매물을 찾고 있으며 언어 장벽 없이 상담받고 싶어하는 고객
- **2차 타겟**: 시드니 내 신규 분양 프로젝트에 관심 있는 한인 투자자
- **3차 타겟**: 이미 정착했지만 이사, 재계약, 추가 투자, 감정평가 등 후속 서비스가 필요한 기존 고객
- **공통 니즈**: (1) 한국어로 편하게 소통 가능한 전문가, (2) 시드니 지역(특히 한인 밀집/선호 지역)에 대한 실질적 인사이트, (3) 매물 탐색부터 이사 후 정착까지 이어지는 원스톱 지원
- 사이트는 한국어/영어 완전 이중언어(한국어·EN 토글)를 지원하여, 영어권 파트너(에이전트, 디벨로퍼, 배우자 등)와도 공유 가능해야 한다.

## 4. Page Structure

홈페이지는 아래 순서의 **단일 스크롤 14개 섹션**으로 구성된다 (원페이지 구조, 별도 섹션 앵커/딥링크는 내비게이션에서 활용 가능). 최초 PRD 초안의 "Property Search"와 "Featured Properties"는 실시간 필터링 결과를 보여주는 하나의 "Find a Property" 섹션으로 통합되었다.

| # | 섹션 | 목적 |
|---|------|------|
| 1 | Header (Nav) | 브랜드 노출, 내비게이션, 언어 전환, 상담 CTA |
| 2 | Hero | 브랜드 첫인상, 핵심 태그라인, 1차 CTA |
| 3 | Brand Promise | 포지셔닝/신뢰 메시지 |
| 4 | Find a Property | 매물 탐색 + 실시간 필터링 결과 노출 |
| 5 | New Developments | 신규 분양 홍보 |
| 6 | Why Us | 차별화 포인트 |
| 7 | Sydney Areas | 지역 전문성 어필 |
| 8 | Property Notes | 콘텐츠/블로그, SEO |
| 9 | Journey | 서비스 프로세스 설명 |
| 10 | Move-In Care + Appraisal | 부가 서비스 홍보 |
| 11 | About / Team | 팀 소개, 신뢰 구축 |
| 12 | Testimonials | 사회적 증거 |
| 13 | Final CTA | 최종 전환 유도 |
| 14 | Footer | 연락처, 법적 고지, 사이트맵 |

내비게이션 메뉴 항목: `로고 | 매물(매매/임대/신규개발 드롭다운) | 부동산 노트 | 시드니 지역 | 서비스 | 소개 | 연락처 | 상담하기(버튼) | 한국어·EN`

## 5. Section-by-Section Requirements

### 5.1 Header
- 스티키(sticky) 헤더. 초기 상태는 투명, 스크롤 시 프로스티드(반투명 블러) 배경으로 전환.
- 로고 영역에는 상단 eyebrow 라벨("부동산 어드바이저리"/"Property Advisory") 없이, 브랜드 전체 명칭만 표시한다.
- 브랜드명은 **항상 축약 없이 전체 공식명**으로 노출되어야 한다("복덕방"/"Bokdokbang" 단독 축약 금지) — 단, 한/영 동시 병기("Sydney Bokdokbang | 시드니 복덕방")가 아니라 **현재 선택된 언어의 전체명 한 줄만** 표시한다: 한국어 사이트는 "시드니 복덕방", 영어 사이트는 "Sydney Bokdokbang".
- 데스크톱: 중앙 정렬 내비게이션 + 우측 언어 토글("KR / EN") + "상담하기" 버튼.
- 모바일: 햄버거 메뉴, 언어 토글은 메뉴 내부에 노출.
- "매물" 메뉴에는 매매 / 임대 / 신규개발 드롭다운 서브메뉴 포함.

### 5.2 Hero
- 비대칭 스플릿 그리드: 좌측 ~58% 시드니 하버/오페라하우스 사진, 우측 ~42% 딥그린(#173D32) 패널.
- 우측 패널 콘텐츠: 상단 eyebrow 라벨 없음(제거됨, 더 프리미엄하고 깔끔한 톤 유지) → 브랜드명(현재 언어에 맞는 전체 공식명 한 줄만 — "Sydney Bokdokbang" 또는 "시드니 복덕방", 두 언어를 동시에 병기하지 않음) → 대형 타이틀(현재 언어 버전만 표시) → 서브타이틀(현재 언어 버전만 표시; 영문일 때만 이탤릭 처리, 한글은 이탤릭 미적용) → CTA 버튼 2개("상담하기 →" / "Book a Consultation →", "매물 둘러보기" / "Browse Properties").
- 1차 CTA는 채워진 스타일(warm white 배경), 2차 CTA는 아웃라인 스타일.
- 모바일: 사진과 그린 패널이 세로로 스택(사진 상단, 패널 하단).
- **언어 규칙**: 한국어 버전과 영어 버전은 항상 완전히 분리되어 렌더링되며, 같은 화면에 두 언어가 동시에 노출되지 않는다(번역 병기 금지).

### 5.3 Brand Promise
- 아이보리 배경의 에디토리얼 섹션. 좌측 대형 블록쿼트(따옴표 강조), 우측 또는 하단에 오프셋된 인테리어 사진.
- 카피: "저희는 매물을 많이 보여드리는 곳이 아니라, 제대로 봐드리는 곳입니다." + 영문 번역.
- 얇은 옐로우(#E4B834) 액센트 바 사용.

### 5.4 Find a Property (Property Search + Featured Properties 통합)
- 원래 별도였던 "Property Search"와 "Featured Properties"는 하나의 인터랙티브 섹션으로 통합되었다.
- 탭 스위처: 매매(Buy) / 임대(Rent) / 신규개발(New Developments).
- 검색 필드: 지역(Suburb) 텍스트 입력, 매물 유형(Property Type) select, 가격(Price) select, 침실 수(Bedrooms) select, 검색(Search) 버튼.
- 필터/탭 변경 시 검색 영역 바로 아래에 매물 결과 카드 그리드가 실시간으로 갱신되어 노출된다.
- 각 결과 카드: 대형 매물 사진, 지역명, 주소, 가격(또는 경매/가격 문의), 침실·욕실·주차 수, "매물 보기 →" 링크. 카드 스타일은 미니멀(과도한 그림자/보더 없음), 사진 비중이 큰 에디토리얼 톤 유지.
- 데스크톱 3열 / 모바일 1열 그리드.
- 결과 없음 상태 메시지 제공.
- 그리드 하단에 "전체 매물 보기 →" 링크 노출(데스크톱/모바일 공통).

### 5.5 New Developments
- 딥그린(#173D32) 배경 풀블리드 섹션.
- 대표 프로젝트(예: "The Marigold", Macquarie Park) — Playfair Display 이탤릭 프로젝트명.
- 스탯 그리드: 완공 예정일 / 분양 시작가 / 유닛 타입.
- CTA 버튼 포함.

### 5.6 Why Us
- 4열 에디토리얼 그리드, `border-l border-t` 헤어라인 룰 패턴(그리드 컨테이너 좌/상단, 각 아이템 우/하단 보더로 라인이 맞물리는 구조).
- 각 카드: 작은 옐로우 액센트 라인 + 이중언어 헤드라인 + 설명 텍스트.
- 예시 차별화 포인트: 한국어 우선 상담, 맞춤 전략, 정착 지원, 지역 전문성 등.

### 5.7 Sydney Areas
- 워엄톤 배경 섹션. 헤더 우측에 "전체 지역 보기" 링크.
- 6개 지역 카드: Macquarie Park, Rhodes, Epping, Melrose Park, Strathfield, Chatswood.
- 각 카드: 호버 줌 사진 + 오버레이 + 옐로우 호버 화살표 아이콘.
- 모바일: 가로 스크롤(horizontal scroll) 카드 리스트.

### 5.8 Property Notes
- "부동산 노트" 라벨 + "Sydney Property Insights" 타이틀 + 링크.
- 3열 에디토리얼 카드 그리드, 얇은 디바이더로 구분.
- 각 카드: 타이틀, 발췌문(excerpt), "더 읽기" 링크.

### 5.9 Journey
- 이중언어 섹션 타이틀.
- 6단계 넘버링 타임라인: **상담(Consult) → 매물 탐색(Property) → 계약(Purchase) → 정산/입주(Settlement) → 임대(Leasing) → 이사(Moving)**.
- 스텝 넘버는 Playfair Display 서체, 스톤(#DDD8CE) 컬러로 표기(01–06).
- 스크롤 시 순차 reveal 애니메이션.

### 5.10 Move-In Care + Appraisal
- 2단 분할(split two-panel) 레이아웃, 각 패널은 이미지 + 텍스트 구성.
- 좌: Move-In Care(입주 후 정착 지원), 우: Appraisal(부동산 감정평가) — 또는 그 반대.

### 5.11 About / Team
- 좌측: 에디토리얼 소개 텍스트 + "회사 소개" CTA.
- 우측/하단: 팀원 3인 그리드, 각 팀원은 한글 이니셜 아바타 사용(실사진 없이도 브랜드 톤 유지 가능하도록 폴백).

### 5.12 Testimonials
- 대형 이탤릭 오프닝 따옴표 기호.
- Noto Serif KR 블록쿼트 스타일 고객 후기.
- 후기 제공자 이름/지역 등 어트리뷰션 텍스트.

### 5.13 Final CTA
- 딥그린 풀와이드 배경.
- 상담 유도 카피 + 전화 상담 버튼(연락처 직접 연결).

### 5.14 Footer
- 4열 그리드: 브랜드/설명, 연락처, 사이트맵 링크, 서비스 링크 등.
- 하단 바: 저작권 표기, 사업자 등록 정보, 개인정보처리방침/이용약관 링크, 부동산 관련 법적 고지(디스클레이머).

## 6. Design System

- **레이아웃 원칙**: 비대칭(asymmetrical) 에디토리얼 그리드, 대형 사진, 얇은 디바이더(hairline divider), 미니멀한 카드, 은은한 모션(subtle motion). 카드에 과도한 그림자나 큰 border-radius를 지양.
- **비주얼 크래프트**:
  - `IntersectionObserver` 기반 Reveal(스크롤 진입 시 fade-up) 애니메이션을 전 섹션에 일관 적용.
  - 옐로우(#E4B834)는 **아주 작은 액센트**(얇은 라인, 태그 배지, 호버 화살표)에만 한정 사용 — 절대 배경색이나 큰 면적에 사용하지 않는다.
  - 그라데이션, 글래스모피즘(blur/frosted glass 카드) 금지. 헤더의 스크롤 시 프로스티드 배경만 유일한 예외.
  - 스톤(#DDD8CE) 헤어라인 디바이더를 그리드/섹션 경계에 일관되게 사용.
- **아이콘**: 라인 스타일 아이콘(예: lucide 계열), 장식적 용도로만 절제되게 사용.
- **버튼**: 채워진(filled) 1차 버튼(웜화이트 배경 + 잉크 텍스트 또는 딥그린 배경 + 웜화이트 텍스트), 아웃라인 2차 버튼. 큰 radius나 그림자 없이 절제된 형태.

## 7. Typography

| 용도 | 폰트 | 굵기 |
|------|------|------|
| 한글 디스플레이(헤드라인) | Noto Serif KR | Medium / SemiBold |
| 한글 본문/UI/내비게이션 | Pretendard | Regular / Medium |
| 영문 디스플레이(헤드라인) | Playfair Display | Regular / Italic |
| 영문 본문/내비게이션/UI | Neue Haas Grotesk Text (상용 폰트, 폴백: Helvetica Neue) | Regular |
| 숫자/프로젝트명 등 언어 무관 액센트(가격, 스텝 넘버, "The Marigold" 등 고유명사) | Playfair Display | Regular / Italic |

- 히어로 한글 타이틀 기준 크기: 데스크톱 약 48–56px, 모바일은 비율 축소.
- 영문 서브타이틀/태그라인은 이탤릭으로 처리해 에디토리얼한 톤 강조(단, 한글 서브타이틀은 이탤릭 미적용). 영문 헤드라인은 장식적이지 않고 절제되고 건축적인 느낌을 유지한다.
- Journey 섹션의 숫자(01–06)와 매물 가격 등 숫자 액센트는 언어와 무관하게 Playfair Display로 스톤/그린 컬러 사용.
- 한글 폰트(Noto Serif KR/Pretendard)와 영문 폰트(Playfair Display/Neue Haas Grotesk Text)는 언어 토글 상태에 따라 자동으로 전환되어야 하며, 한 화면에 두 언어 세트의 폰트가 혼재하지 않는다.
- Neue Haas Grotesk Text는 상용 라이선스 폰트로 CDN 배포가 불가하므로, 폰트 미설치 환경에서는 Helvetica Neue/Arial로 자연스럽게 폴백된다.

## 8. Colour Direction

| 이름 | 헥스 | 용도 |
|------|------|------|
| Deep Green | `#173D32` | 프라이머리 브랜드 컬러 — 히어로 패널, 다크 섹션(New Developments, Final CTA), 주요 버튼 |
| Rice Ivory | `#F5F1E8` | 기본 배경 |
| Warm White | `#FAF9F5` | 보조 배경, 카드/버튼 배경 |
| Ink | `#232522` | 기본 텍스트 컬러 |
| Stone | `#DDD8CE` | 보더/디바이더, 보조 텍스트(넘버링 등) |
| Yellow | `#E4B834` | 초소형 액센트 전용 (라인, 배지, 호버 상태) — **절대 메인 컬러로 사용 금지** |

- 블랙/골드 조합, 강한 그림자, 네온/비비드 컬러는 사용하지 않는다.
- 다크 섹션(딥그린)과 라이트 섹션(라이스 아이보리/웜화이트)을 교차 배치해 리듬감을 형성한다.

## 9. Responsive Behaviour

- **브레이크포인트 전략**: 모바일 우선이 아닌 데스크톱 비대칭 레이아웃을 기준으로 설계하되, `md` 브레이크포인트 기준으로 모바일 레이아웃으로 전환(Tailwind 기준 `flex-col` → `md:flex-row` 패턴).
- **Hero**: 데스크톱은 사진/그린패널 좌우 분할(58/42), 모바일은 세로 스택(사진 상단 → 패널 하단), 사진 높이는 `clamp()` 기반으로 유동적으로 조정.
- **Header**: 데스크톱 풀 내비게이션, 모바일 햄버거 메뉴 + 오버레이/드로어.
- **Sydney Areas**: 데스크톱 그리드, 모바일 가로 스크롤 카드.
- **Featured Properties**: 데스크톱 비대칭 그리드(1.75:1), 모바일은 단일 컬럼 스택 + "전체 매물 보기" 링크.
- **Why Us / Property Notes**: 데스크톱 4열/3열 그리드 → 모바일 1~2열로 축소, 보더 패턴 유지.
- 전 구간에서 한글 타이포그래피 라인 길이와 자간이 모바일에서도 가독성을 유지하도록 폰트 크기/줄간격 조정 필요.
- 터치 디바이스에서 호버 전용 인터랙션(호버 화살표, 줌 이미지 등)은 탭 시에도 동일 정보가 노출되도록 대체 처리 필요.

## 10. React Component Structure

> 현재 리포지토리는 **JavaScript 기반 Vite + React**(TSX 아님)로 세팅되어 있으므로, Figma Make의 `App.tsx` 단일 파일 구조를 그대로 가져오지 않고 아래와 같이 컴포넌트 단위로 분리하는 것을 권장한다.

```
src/
  main.jsx
  App.jsx
  i18n/
    translations.js          # 한/영 텍스트 딕셔너리, useLanguage 훅
  data/
    properties.js            # Featured Properties 목데이터
    developments.js           # New Developments 목데이터
    areas.js                  # Sydney Areas 목데이터
    notes.js                  # Property Notes 목데이터
    journey.js                 # Journey 6단계 데이터
    team.js                    # About/Team 데이터
    testimonials.js             # Testimonials 데이터
  hooks/
    useScrollState.js          # 헤더 sticky/frosted 전환용 스크롤 감지
    useReveal.js                # IntersectionObserver 기반 fade-up 훅
  components/
    layout/
      Header.jsx               # 로고, 내비게이션, 언어 토글, 모바일 메뉴
      Footer.jsx
    sections/
      Hero.jsx
      BrandPromise.jsx
      PropertySearch.jsx
      FeaturedProperties.jsx
      NewDevelopments.jsx
      WhyUs.jsx
      SydneyAreas.jsx
      PropertyNotes.jsx
      Journey.jsx
      MoveInCareAppraisal.jsx
      AboutTeam.jsx
      Testimonials.jsx
      FinalCTA.jsx
    ui/
      Reveal.jsx                # fade-up 애니메이션 래퍼 컴포넌트
      Button.jsx                # Primary/Outline 버튼
      SectionLabel.jsx          # "PROPERTY ADVISORY" 류 라벨 + 옐로우 액센트 라인
      PropertyCard.jsx
      AreaCard.jsx
      NoteCard.jsx
  styles/
    theme.css                   # CSS 변수(컬러 토큰)
    fonts.css                   # 폰트 @import/@font-face
```

- **State 관리**: 언어 토글(`ko`/`en`) 은 최상위 `App.jsx` 또는 Context(`LanguageContext`)에서 관리해 모든 섹션이 참조. 별도 상태 라이브러리(Redux 등)는 이 규모에서는 불필요.
- **데이터-뷰 분리**: 매물/지역/후기 등 목데이터는 `data/` 폴더의 JS 모듈로 분리해, 추후 CMS/API 연동 시 데이터 소스만 교체 가능하도록 한다.
- **Reveal 패턴**: Figma Make 구현체와 동일하게 공용 `Reveal` 컴포넌트(children, delay, className, style prop)로 각 섹션 내 요소들을 감싸 순차 등장 애니메이션을 구현한다.

## 11. Image Requirements

- **톤**: 실제 시드니 건축/라이프스타일 사진 — 따뜻한 자연광, 샌드스톤(사암) 외장, 목재 마감, 뉴트럴 톤 인테리어, 조경/그리너리, 하버(항구) 풍경.
- **금지**: HDR 과보정 이미지, 클리셰한 스톡 사진(악수하는 손, 열쇠 클로즈업 등 진부한 부동산 이미지), 인위적인 필터.
- **섹션별 이미지 니즈**:
  - Hero: 시드니 하버/오페라하우스 풍경 사진 1장 (풀블리드, 최소 1920px 폭 권장)
  - Brand Promise: 웜톤 인테리어 사진 1장
  - Featured Properties: 매물별 대표 사진 (최소 3~5장, 정방형/가로형 혼용 가능)
  - New Developments: 프로젝트 렌더링/외관 사진 1~2장
  - Sydney Areas: 지역별 대표 사진 6장(Macquarie Park, Rhodes, Epping, Melrose Park, Strathfield, Chatswood)
  - Move-In Care/Appraisal: 인테리어/이사 관련 사진 각 1장
  - About/Team: 팀원 실사진 또는 한글 이니셜 아바타(플레이스홀더) — 실사진 확보 전까지는 이니셜 아바타로 대체
- **최적화**: WebP/AVIF 포맷 + 반응형 `srcset` 적용, lazy loading(뷰포트 진입 전 로드 지연) 적용 필수. 이미지 CDN 또는 Vite 빌드 시 이미지 최적화 파이프라인 고려.
- **저작권**: 실제 서비스 배포 전, 스톡 이미지(Unsplash 등)는 라이선스 조건 확인 후 자체 촬영 사진으로 교체하는 것을 권장(부동산 매물 사진은 실제 매물이어야 신뢰도 확보 가능).

## 12. SEO Requirements

- **메타 태그**: 페이지별 고유 `<title>`, `<meta name="description">` (한/영 버전 대응 — 언어 토글이 클라이언트 사이드라면 `hreflang` 또는 서버사이드 언어 라우팅 검토 필요).
- **다국어 SEO**: 한국어/영어 콘텐츠가 하나의 페이지에서 토글되는 구조이므로, 검색엔진 색인을 위해 향후 `/ko`, `/en` 같은 별도 URL 경로 분리 또는 `hreflang` 태그 도입을 중장기 과제로 고려.
- **구조화 데이터**: `RealEstateAgent` 및 `LocalBusiness` Schema.org JSON-LD 마크업 적용(주소, 전화번호, 영업시간, 서비스 지역 포함). 매물 카드에는 가능하면 `Product`/`Residence` 관련 구조화 데이터 검토.
- **시맨틱 마크업**: `header`, `nav`, `main`, `section`, `footer` 등 시맨틱 HTML 태그 사용, 이미지 `alt` 텍스트에 지역명/매물 정보 포함(한/영 모두).
- **Core Web Vitals**: LCP 대상인 히어로 이미지는 `fetchpriority="high"` 및 사전 로드(preload) 처리, 폰트는 `font-display: swap` 적용해 CLS 방지.
- **로컬 SEO**: 시드니 내 특정 지역(Macquarie Park, Rhodes 등) 키워드가 자연스럽게 노출되는 구조(Sydney Areas, Property Notes 섹션)를 활용해 지역 검색 노출 강화.
- **사이트맵/robots**: `sitemap.xml`, `robots.txt` 기본 제공.

## 13. Technical Requirements

- **스택**: React 19 + Vite (JavaScript, 현재 리포지토리 세팅 유지 — TypeScript 미사용).
- **스타일링**: Figma Make 구현체는 Tailwind 기반 유틸리티 클래스 + CSS 변수(theme.css) 조합을 사용함. 본 프로젝트에서도 Tailwind CSS 도입을 권장(현재 미설치 상태이므로 별도 설치/설정 필요) — 컬러 토큰은 `theme.css`의 CSS 커스텀 프로퍼티로 정의해 Tailwind와 함께 사용.
- **폰트 로딩**: Noto Serif KR, Playfair Display는 Google Fonts, Pretendard는 CDN(jsDelivr 등). Neue Haas Grotesk Text는 상용 폰트로 CDN 배포 불가 — 폰트 스택 첫 항목으로만 선언하고 Helvetica Neue/Arial로 자연 폴백. 폰트 서브셋팅으로 초기 로드 최적화 고려.
- **애니메이션**: 순수 `IntersectionObserver` API 기반 커스텀 훅으로 구현(외부 애니메이션 라이브러리 의존 최소화), `prefers-reduced-motion` 사용자 설정 존중.
- **이중언어 처리**: 클라이언트 사이드 상태(Context) 기반 토글로 시작하되, 콘텐츠량이 늘어날 경우 별도 i18n 라이브러리(`react-i18next` 등) 도입 검토.
- **접근성(a11y)**: 색상 대비(딥그린/웜화이트 조합은 대비 양호, 옐로우 액센트는 텍스트 컬러로 사용 지양), 키보드 내비게이션, 드롭다운/모바일 메뉴의 `aria-*` 속성 적용.
- **폼**: Property Search 및 상담 신청 폼은 최소한 클라이언트 유효성 검사를 포함하며, 실제 제출 엔드포인트(이메일/CRM 연동)는 별도 백엔드 또는 서드파티 폼 서비스(예: Formspree) 연동이 필요 — 본 PRD 범위에서는 UI/UX만 정의하고 연동 방식은 별도 논의.
- **성능**: 이미지 lazy loading, 코드 스플리팅(섹션 단위 동적 import는 선택사항, 초기 버전은 단일 번들도 허용), Lighthouse 성능 90+ 목표.
- **브라우저 지원**: 최신 Chrome/Edge/Safari/Firefox 및 iOS/Android 모바일 브라우저.
- **배포**: 정적 사이트 호스팅(Vercel/Netlify 등) 전제, 빌드 결과물은 `dist/` (현재 `.gitignore`에 이미 제외 설정됨).

## 14. Out of Scope (본 PRD 기준)

- 실제 매물 데이터베이스/CRM 연동, 로그인/회원 시스템, 다국어 URL 라우팅(`/ko`, `/en`)의 구체적 구현, 결제/예약 시스템은 본 PRD의 범위에 포함되지 않으며 홈페이지 UI/UX 및 정적 콘텐츠 구조만을 대상으로 한다.

---

*본 문서는 Figma Make 프로토타입(Version 1)의 브리프와 AI 빌드 요약을 기준으로 작성되었으며, 실제 구현 착수 전 이해관계자 리뷰 및 확정이 필요하다.*
