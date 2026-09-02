// Shared contact/office details — used by the Contact page and the Footer.
// "Sydney Bokdokbang" is the public-facing trading name and is what customers
// see throughout the site. The legal entity name, ABN, and licence number are
// business/registration details and are only ever shown in the small legal
// line at the very bottom of the Footer — never in the Hero or nav.
export const CONTACT_INFO = {
  tradingName: "Sydney Bokdokbang",
  legalName: "Bokdokbang Pty Ltd",
  phone: "+61 492 058 159",
  phoneDisplay: "0492 058 159",
  email: "info.sydneybokdokbang@gmail.com",
  kakaoId: "sydneybokdokbang",
  kakaoUrl: "https://open.kakao.com/o/sydneybokdokbang",
  // Kept English-only everywhere (Footer, Contact page) — not translated to Korean.
  address: "Suite 101A, 27 Lyons Street, Strathfield NSW 2135, Australia",
  hoursKo: "월–금 오전 9:30–오후 5:30 (주말 휴무)",
  hoursEn: "Mon–Fri 9:30am–5:30pm (Closed weekends)",
  // cid identifies Sydney Bokdokbang's actual Google Maps business profile
  // (Ste 101A/27 Lyons St, Strathfield NSW 2135) rather than just a raw address pin.
  mapEmbedSrc: "https://www.google.com/maps?cid=6161591704060864020&output=embed",
  mapDirectionsUrl: "https://www.google.com/maps?cid=6161591704060864020",
  abn: "ABN 51 651 205 159",
  licence: "Corporate Licence No. 10157652",
};
