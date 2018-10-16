import { Leader } from "../models/leader";

let leaderOne = new Leader(0,
  'Peter Pan',
  '/assets/images/alberto.jpg',
  'Chief Epicurious Officer',
  'CEO',
  false,
  "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.");

let leaderTwo = new Leader(1,
  'Dhanasekaran Witherspoon',
  '/assets/images/alberto.jpg',
  'Chief Food Officer',
  'CFO',
  false,
  'Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!');

let leaderThree = new Leader(2,
  'Agumbe Tang',
  '/assets/images/alberto.jpg',
  'Chief Taste Officer',
  'CTO',
  false,
  'Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.');

let leaderFour = new Leader(3,
  'Alberto Somayya',
  '/assets/images/alberto.jpg',
  'Executive Chef',
  'EC',
  true,
  'Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!');

export const LEADERS: Leader[] = [leaderOne, leaderTwo, leaderThree, leaderFour];
