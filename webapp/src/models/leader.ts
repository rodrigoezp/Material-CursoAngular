export class Leader {

  constructor(id, name, image, designation, abbr, featured, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.designation = designation;
    this.abbr = abbr;
    this.featured = featured;
  }

  id: number;
  name: string;
  image: string;
  designation: string;
  abbr: string;
  featured: boolean;
  description: string;
}
