// RENT property listings for the /rent editorial search page.
// No listings are published yet (the original entries were placeholders).
// Each listing looks like:
//   { id: "rent-chatswood-apt", suburb: "Chatswood", subKo: "채스우드",
//     address: "...", type: "Apartment", typeKo: "아파트", rentValue: 720,
//     availableKo: "즉시 입주 가능", availableEn: "Available now", availableNow: true,
//     inspection: { status: "open" | "appointment", nextKo: "...", nextEn: "..." },
//     beds: 1, baths: 1, parking: 1, img: "/properties/..." }
// Adding one also adds its /property/:id page to the prerender and sitemap.
export const RENT_LISTINGS = [];

export const RENT_PRICE_BUCKETS = [
  { id: "0-600", min: 0, max: 600, label: "$0 – $600/wk" },
  { id: "600-800", min: 600, max: 800, label: "$600 – $800/wk" },
  { id: "800-1000", min: 800, max: 1000, label: "$800 – $1,000/wk" },
  { id: "1000-plus", min: 1000, max: Infinity, label: "$1,000+/wk" },
];
