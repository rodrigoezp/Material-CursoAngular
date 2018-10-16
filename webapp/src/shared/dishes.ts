import { Dish } from "../models/dish";
import { Commentary } from "../models/commentary";

let commentOne = new Commentary(), commentTwo = new Commentary(), commentThree = new Commentary(), commentFour = new Commentary(), commentFive = new Commentary();

commentOne.rating = 5;
commentOne.comment = 'Imagine all the eatables, living in conFusion!';
commentOne.author = 'John Lemon';
commentOne.date = '2012-10-16T17:57:28.556094Z';

commentTwo.rating = 4;
commentTwo.comment = 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!';
commentTwo.author = 'Paul McVites';
commentTwo.date = '2014-09-05T17:57:28.556094Z';

commentThree.rating = 3;
commentThree.comment = 'Eat it, just eat it!';
commentThree.author = 'Michael Jaikishan';
commentThree.date = '2015-02-13T17:57:28.556094Z';

commentFour.rating = 4;
commentFour.comment = 'Ultimate, Reaching for the stars!';
commentFour.author = 'Ringo Starry';
commentFour.date = '2013-12-02T17:57:28.556094Z';

commentFive.rating = 2;
commentFive.comment = 'It\'s your birthday, we\'re gonna party!';
commentFive.author = '25 Cent';
commentFive.date = '2011-12-02T17:57:28.556094Z';

let comments = [commentOne, commentTwo, commentThree, commentFour, commentFive];

let dishPizza = new Dish(), dishZucchi = new Dish(), dishVadonut = new Dish(), dishChesecacke = new Dish();

dishPizza.id = '0';
dishPizza.name = 'UthaPizza';
dishPizza.image = '/assets/images/uthappizza.png';
dishPizza.category = 'mains';
dishPizza.featured = true;
dishPizza.label = 'Hot';
dishPizza.price = '4.99';
dishPizza.description = 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.';
dishPizza.comments = comments;

dishZucchi.id = '1';
dishZucchi.name = 'Zucchipakoda';
dishZucchi.image = '/assets/images/zucchipakoda.png';
dishZucchi.category = 'appetizer';
dishZucchi.featured = false;
dishZucchi.label = '';
dishZucchi.price = '1.99';
dishZucchi.description = 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce';
dishZucchi.comments = comments;

dishVadonut.id = '2';
dishVadonut.name = 'Vadonut';
dishVadonut.image = '/assets/images/vadonut.png';
dishVadonut.category = 'appetizer';
dishVadonut.featured = false;
dishVadonut.label = 'New';
dishVadonut.price = '1.99';
dishVadonut.description = 'A quintessential ConFusion experience, is it a vada or is it a donut?';
dishVadonut.comments = comments;

dishChesecacke.id = '3';
dishChesecacke.name = 'ElaiCheese Cake';
dishChesecacke.image = '/assets/images/elaicheesecake.png';
dishChesecacke.category = 'dessert';
dishChesecacke.featured = false;
dishChesecacke.label = '';
dishChesecacke.price = '2.99';
dishChesecacke.description = 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms';
dishChesecacke.comments = comments;

export const DISHES: Dish[] = [dishPizza, dishZucchi, dishVadonut, dishChesecacke];
