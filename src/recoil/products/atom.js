import { atom } from "recoil";
// Ändra priserna

export const products = [
  {
    id: 1,
    title: "Kattgodis",
    price: 35,
    description:
      "Drömlikt smaskiga godbitar för din kisse, med en krispigt utsida och krämig fyllning, särskilt stora förpackningar med 350 g innehåll - skäm bort din favorit med kattgodis!",
    img: "https://shop-cdn-m.mediazs.com/bilder/dreamies/megatub/0/400/78998_pla_dreamies_megatub_kaese_350g_0.jpg",
  },
  {
    id: 2,
    title: "Kattsand",
    price: 120,
    description:
      "Extra starkt klumpande kattsand. En till 100% naturlig produkt tillverkad av hela majskorn, är biologiskt nedbrytningsbart, av naturligt förnybart material, ekonomiskt alternativ, dammfritt.",
    img: "https://shop-cdn-m.mediazs.com/bilder/worlds/best/cat/litter/extra/strength/kattsand/8/400/26644_pla_world_s_best_extr_8.jpg",
  },
  {
    id: 3,
    title: "Blötmat",
    price: 50,
    description:
      "Smakrikt helfoder för katter över 1 år, med högkvalitativa ingredienser, rikt på viktiga näringsämnen, mineraler och vitaminer, främjar hälsan, veterinärmedicinskt utvecklat.",
    img: "https://shop-cdn-m.mediazs.com/bilder/blandpack/perfect/fit/mix/vtfoder/2/400/75250_pla_perfectfit_multipack_12x85g_2.jpg",
  },
  {
    id: 4,
    title: "Kattleksak",
    price: 10,
    description:
      "Utmana din kisse med denna påfyllningsbara plastboll med två svårighetsgrader! Genom att rulla bollen ramlar godbitar ut ur öppningen, passar även kattungar, diameter ca 5,5 cm.",
    img: "https://shop-cdn-m.mediazs.com/bilder/snackboll/kattleksak/4/400/_dsc0735_bearbeitet_4.jpg",
  },
  {
    id: 5,
    title: "Torrfoder",
    price: 80,
    description:
      "High-Premium torrfoder, speciellt för vuxna katter över 1 års ålder med normal vikt, lättsmälta proteiner, hög tolerabilitet och acceptans, förebygger urinsten och hårbollar.",
    img: "https://shop-cdn-m.mediazs.com/bilder/concept/for/life/all/cats/6/400/66603_pla_concept_for_life_all_fit_3_kg_6.jpg",
  },
  {
    id: 6,
    title: "Pälsborste",
    price: 25,
    description:
      "Pälsborste av trä med en mjuk och naturlig borst. Motverkar att pälsen blir statisk. Perfekt för att borsta bort lösa hår och för att vänja unga djur vid den dagliga pälsvården.",
    img: "https://shop-cdn-m.mediazs.com/bilder/naturhrborste/5/400/51321_PLA_Kerbl_BASIC_CARE_Naturhaarbuerste_17cm_5.jpg",
  },
  {
    id: 7,
    title: "Klosax",
    price: 30,
    description:
      "Klipp ditt husdjurs klor säkert med Trixie klosax, lämplig för små husdjur, färg kan variera från bilden och kan inte väljas fritt.",
    img: "https://shop-cdn-m.mediazs.com/bilder/trixie/klosax/3/400/2820_pla_trixie_krallenschere_hs03_3.jpg",
  },
  {
    id: 8,
    title: "Tandborste",
    price: 10,
    description:
      "Tandborste för små och stora hundar och katter, med tandborstar i båda ändarna. Den speciella borstformen passar djurens tänder optimalt och ger en effektiv rengöring.",
    img: "https://shop-cdn-m.mediazs.com/bilder/beaphar/tandborste/3/400/15311_pla_zahnbuerste_hs_09_3.jpg",
  },
];

export const productsState = atom({
  key: "productsState",
  default: products,
});
