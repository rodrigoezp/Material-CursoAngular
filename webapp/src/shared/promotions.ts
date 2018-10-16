import { Promotion } from "../models/promotion";

let promoOne = new Promotion();

promoOne.id = '0';
promoOne.name = 'Weekend Grand Buffet';
promoOne.image = '/assets/images/buffet.png';
promoOne.price = '19.99';
promoOne.label = 'New';
promoOne.featured = true;
promoOne.description = 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person';

export const PROMOTIONS: Promotion[] = [promoOne];
