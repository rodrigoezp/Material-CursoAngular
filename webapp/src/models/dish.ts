import { Commentary } from "./commentary";

export class Dish {
  id: number;
  name: string;
  image: string;
  category: string;
  featured: boolean;
  label: string;
  price: string;
  description: string;
  comments: Commentary[];
}
