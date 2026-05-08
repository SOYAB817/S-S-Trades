export const SITE = {
  name: "S.S TRADES",
  tagline: "Premium Iron Fabrication",
  owners: ["Yusuf Saifi", "Juber Saifi"],
  phones: ["8650985573", "7037175331"],
  whatsapp: "918650985573",
  address: "Chhapurli Biral Road, Mukandpur (Baghpat), India",
  mapsQuery: "Mukandpur+Baghpat+India",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};
export const telHref = (n: string) => `tel:+91${n}`;
export const waHref = (msg = "Hi S.S TRADES, I'd like a quote for fabrication work.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
