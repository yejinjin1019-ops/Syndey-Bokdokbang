// BUY property listings for the /buy editorial search page.
// Distinct from src/data/properties.js (Find a Property home-page teaser,
// new-development only) — this dataset covers resale houses/apartments with
// auction and open-for-inspection details.
// No listings are published yet (the original entries were placeholders).
// Each listing looks like:
//   { id: "buy-strathfield-house", suburb: "Strathfield", subKo: "스트라스필드",
//     address: "...", type: "House", typeKo: "주택", priceValue: 2850000,
//     contactAgent: false, auction: false, auctionDateKo: "", auctionDateEn: "",
//     inspection: { status: "open" | "appointment", nextKo: "...", nextEn: "..." },
//     beds: 4, baths: 2, parking: 1, img: "/properties/..." }
// Adding one also adds its /property/:id page to the prerender and sitemap.
export const BUY_LISTINGS = [];

export const BUY_PRICE_BUCKETS = [
  { id: "0-1000", min: 0, max: 1000000, label: "$0 – $1M" },
  { id: "1000-1500", min: 1000000, max: 1500000, label: "$1M – $1.5M" },
  { id: "1500-2500", min: 1500000, max: 2500000, label: "$1.5M – $2.5M" },
  { id: "2500-plus", min: 2500000, max: Infinity, label: "$2.5M+" },
];
